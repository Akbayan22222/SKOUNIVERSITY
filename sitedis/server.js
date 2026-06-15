import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use(express.static(__dirname));

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": process.env.PUBLIC_SITE_URL || "http://localhost:3000",
    "X-Title": "SmartLearn AI"
  }
});

function fallbackAnswer(message) {
  return `Сейчас внешний AI временно недоступен, но я понял вопрос: "${message}". Попробуйте ещё раз через минуту.`;
}


app.get("/health", (req, res) => {
  res.json({ ok: true, service: "SmartLearn AI" });
});

app.post("/ask-ai", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.json({
        answer: "Напишите вопрос."
      });
    }

    const completion = await client.chat.completions.create({
      model: "openrouter/free",
      messages: [
        {
          role: "system",
          content: `
Ты SmartLearn AI — образовательный AI-помощник.
Отвечай на русском языке.
Объясняй понятно, простым языком.
Если вопрос учебный — объясняй с примером.
Если пользователь просит код — дай короткий понятный код.
`
        },
        {
          role: "user",
          content: message
        }
      ]
    });

    const answer =
      completion.choices?.[0]?.message?.content ||
      "AI не вернул текст ответа.";

    res.json({ answer });

  } catch (error) {
    console.error("OPENROUTER ERROR:", error.status, error.message);

    res.json({
      answer: fallbackAnswer(req.body.message)
    });
  }
});

app.post("/feynman-check", async (req, res) => {
  try {
    const { courseTitle, lessonTitle, explanation } = req.body;

    if (!explanation || explanation.trim().length < 5) {
      return res.json({
        score: 0,
        whatIsGood: "Пока объяснение слишком короткое.",
        whatIsMissing: "Нужно объяснить тему своими словами.",
        kidReply: "Я пока ничего не понял. Объясни мне тему простыми словами.",
        nextQuestion: "Что это такое и зачем это нужно?"
      });
    }

    const completion = await client.chat.completions.create({
      model: "openrouter/free",
      temperature: 0.2,
      messages: [
        {
          role: "system",
          content: `
Ты строгий, но добрый AI-проверяющий по методу Фейнмана.

Ты НЕ должен хвалить неправильный ответ.
Ты НЕ должен выдумывать странные слова.
Ты НЕ должен ставить высокий балл, если объяснение не соответствует теме.

Твоя роль:
1. Проверить, понял ли студент тему.
2. Если студент написал ерунду или не по теме — поставить низкий балл.
3. Если есть фактическая ошибка — прямо сказать об этом.
4. Объяснить как маленький ученик, что именно непонятно.
5. Задать один простой уточняющий вопрос.

Правила оценки:
- 0–20: объяснение совсем не по теме или бессмысленное.
- 21–40: есть слабая попытка, но тема почти не раскрыта.
- 41–60: частично понятно, но много пропущено.
- 61–80: в целом понятно, но есть пробелы.
- 81–100: очень понятное, простое и правильное объяснение.

Очень важное правило:
Если тема "Python", правильная суть: Python — это язык программирования.
Если студент пишет, что Python — это кот, животное, человек, игра или что-то не связанное с программированием, это грубая ошибка. Балл должен быть не выше 20.

Отвечай строго в JSON.
Без markdown.
Без лишнего текста.
Только такая структура:

{
  "score": 15,
  "whatIsGood": "что получилось хорошо",
  "whatIsMissing": "что неправильно или чего не хватает",
  "kidReply": "ответ маленького ученика простыми словами",
  "nextQuestion": "один короткий вопрос от ребёнка"
}
`
        },
        {
          role: "user",
          content: `
Курс: ${courseTitle}
Тема урока: ${lessonTitle}

Объяснение студента:
${explanation}

Проверь объяснение строго.
Если объяснение неправильное или не по теме — поставь низкий балл.
`
        }
      ]
    });

    const rawAnswer = completion.choices[0].message.content;

    let parsed;

    try {
      const cleanJson = rawAnswer
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      parsed = JSON.parse(cleanJson);
    } catch (jsonError) {
      parsed = {
        score: 40,
        whatIsGood: "Студент попытался объяснить тему.",
        whatIsMissing: "AI не смог корректно разобрать ответ. Нужно объяснить тему точнее и проще.",
        kidReply: "Я немного понял, но мне всё ещё непонятно. Объясни проще.",
        nextQuestion: "Можешь привести пример из жизни?"
      };
    }

    parsed.score = Number(parsed.score);

    if (isNaN(parsed.score)) {
      parsed.score = 40;
    }

    if (parsed.score < 0) parsed.score = 0;
    if (parsed.score > 100) parsed.score = 100;

    res.json(parsed);

  } catch (error) {
    console.error("FEYNMAN ERROR:", error);

    res.json({
      score: 40,
      whatIsGood: "Студент попытался объяснить тему.",
      whatIsMissing: "AI-проверка временно сработала нестабильно. Нужно попробовать ещё раз.",
      kidReply: "Я не совсем понял. Объясни ещё проще.",
      nextQuestion: "Что это такое простыми словами?"
    });
  }
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`SmartLearn AI server работает: http://localhost:${PORT}`);
});