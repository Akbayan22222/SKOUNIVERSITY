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

const PUBLIC_SITE_URL =
  process.env.PUBLIC_SITE_URL ||
  process.env.RENDER_EXTERNAL_URL ||
  `http://localhost:${PORT}`;

const AI_MODEL = process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini";

app.use(cors());
app.use(express.json({ limit: "2mb" }));
app.use(express.static(__dirname));

app.get("/health", (req, res) => {
  res.json({ ok: true, service: "SmartLearn AI", model: AI_MODEL });
});

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": PUBLIC_SITE_URL,
    "X-Title": "SmartLearn AI"
  }
});

function fallbackAnswer(message) {
  return `Сейчас внешний AI временно недоступен, но я понял вопрос: "${message}". Попробуйте ещё раз через минуту.`;
}

app.post("/ask-ai", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.json({
        answer: "Напишите вопрос."
      });
    }

    if (!process.env.OPENROUTER_API_KEY) {
      return res.json({ answer: "OPENROUTER_API_KEY не настроен на сервере Render. Добавьте ключ в Environment." });
    }

    const completion = await client.chat.completions.create({
      model: AI_MODEL,
      messages: [
        {
          role: "system",
          content: `
Ты SmartLearn AI — образовательный AI-помощник.
Отвечай на русском языке.
Объясняй понятно, простым языком.
Не используй HTML-теги. Не используй LaTeX. Не вставляй картинки.
Markdown можно использовать минимально: короткие списки без сложного форматирования.
Если вопрос учебный — объясняй с примером и коротким заданием.
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

    if (!process.env.OPENROUTER_API_KEY) {
      return res.json({
        score: 0,
        whatIsGood: "Сервер запущен, но AI API key не настроен.",
        whatIsMissing: "Добавьте OPENROUTER_API_KEY в Render → Environment.",
        kidReply: "Я не могу проверить ответ, потому что у меня не подключен AI ключ.",
        nextQuestion: "Можешь попросить подключить AI ключ?"
      });
    }

    const completion = await client.chat.completions.create({
      model: AI_MODEL,
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
app.post("/tts", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({ error: "Text is required" });
    }

    const response = await fetch("http://127.0.0.1:5001/tts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: text
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("LOCAL TTS ERROR:", errorText);
      return res.status(500).json({ error: "Local TTS failed" });
    }

    const audioBuffer = Buffer.from(await response.arrayBuffer());

    res.set({
      "Content-Type": "audio/wav",
      "Cache-Control": "no-store"
    });

    res.send(audioBuffer);

  } catch (error) {
    console.error("TTS PROXY ERROR:", error);
    res.status(500).json({ error: "TTS proxy error" });
  }
});
const platformCourseMap = [
  {
    title: "Python с нуля",
    skills: ["Python", "основы программирования", "алгоритмы", "автоматизация"]
  },
  {
    title: "Web-разработка",
    skills: ["HTML", "CSS", "JavaScript", "адаптивная верстка", "frontend"]
  },
  {
    title: "UX/UI дизайн",
    skills: ["UX", "UI", "Figma", "прототипирование", "интерфейсы"]
  },
  {
    title: "Графический дизайн",
    skills: ["дизайн", "визуальная коммуникация", "брендинг", "композиция"]
  },
  {
    title: "Основы бизнеса",
    skills: ["бизнес", "стартап", "стратегия", "продукт", "клиенты"]
  },
  {
    title: "Маркетинг",
    skills: ["маркетинг", "SMM", "реклама", "контент", "продвижение"]
  },
  {
    title: "Английский язык",
    skills: ["английский", "коммуникация", "чтение", "разговорная речь"]
  },
  {
    title: "Искусственный интеллект",
    skills: ["AI", "нейросети", "ChatGPT", "prompt engineering", "AI-инструменты"]
  },
  {
    title: "Machine Learning",
    skills: ["Machine Learning", "модели", "данные", "Python", "аналитика"]
  },
  {
    title: "Python: видео-старт",
    skills: ["Python", "переменные", "условия", "циклы", "основы программирования"]
  },
  {
    title: "Python-конспект для новичков",
    skills: ["Python", "типы данных", "if else", "циклы", "функции"]
  },
  {
    title: "JavaScript-практикум",
    skills: ["JavaScript", "DOM", "события", "localStorage", "frontend"]
  },
  {
    title: "Сайт-портфолио с нуля",
    skills: ["HTML", "CSS", "портфолио", "адаптивная верстка", "pet project"]
  },
  {
    title: "Английский через видео",
    skills: ["английский", "аудирование", "произношение", "разговорные фразы"]
  },
  {
    title: "Маркетинг: теория и разборы",
    skills: ["маркетинг", "целевая аудитория", "позиционирование", "контент"]
  },
  {
    title: "Figma-практикум",
    skills: ["Figma", "UI", "компоненты", "прототипирование", "мобильный дизайн"]
  },
  {
    title: "Создание AI-помощника",
    skills: ["AI", "чат-бот", "prompt", "интерфейс чата", "AI-проект"]
  }
];

function cleanVacancyHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function isProbablyUrl(text) {
  return text.startsWith("http://") || text.startsWith("https://");
}

async function getVacancyText(input) {
  if (!isProbablyUrl(input)) {
    return {
      sourceType: "text",
      text: input
    };
  }

  try {
    const response = await fetch(input, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "ru-RU,ru;q=0.9,en;q=0.8"
      }
    });

    if (!response.ok) {
      throw new Error("Не удалось загрузить страницу вакансии");
    }

    const html = await response.text();
    const text = cleanVacancyHtml(html);

    return {
      sourceType: "url",
      text: text.slice(0, 12000)
    };
  } catch (error) {
    return {
      sourceType: "url_failed",
      text: "",
      error: "Не удалось автоматически прочитать ссылку. Скопируйте текст вакансии вручную и вставьте его в поле анализа."
    };
  }
}

function extractJsonFromAI(content) {
  const start = content.indexOf("{");
  const end = content.lastIndexOf("}");

  if (start === -1 || end === -1 || end <= start) {
    throw new Error("AI не вернул JSON");
  }

  const jsonText = content.slice(start, end + 1);
  return JSON.parse(jsonText);
}

app.post("/analyze-vacancy", async (req, res) => {
  try {
    const vacancyInput = req.body.vacancyInput;

    if (!vacancyInput || vacancyInput.trim().length < 10) {
      return res.status(400).json({
        error: "Вставьте ссылку или полный текст вакансии."
      });
    }

    const vacancyData = await getVacancyText(vacancyInput.trim());

    if (vacancyData.sourceType === "url_failed") {
      return res.json({
        success: false,
        mode: "url_failed",
        message: vacancyData.error
      });
    }

    const vacancyText = vacancyData.text;

    if (!vacancyText || vacancyText.length < 100) {
      return res.json({
        success: false,
        mode: "not_enough_text",
        message: "Текста вакансии слишком мало для анализа. Скопируйте полное описание вакансии и вставьте его вручную."
      });
    }

    const platformCoursesText = platformCourseMap.map(course => {
      return `${course.title}: ${course.skills.join(", ")}`;
    }).join("\n");

    const prompt = `
Ты — карьерный аналитик образовательной платформы SmartLearn AI.

Твоя задача: выполнить научно-структурированный анализ вакансии и определить skill gap.

Платформа содержит такие курсы:
${platformCoursesText}

Текст вакансии:
"""
${vacancyText.slice(0, 10000)}
"""

Верни строго JSON без markdown и без пояснений вне JSON.

Структура JSON:
{
  "vacancyTitle": "название вакансии",
  "profession": "профессия или направление",
  "level": "Junior / Middle / Senior / Intern / Не указано",
  "experience": "требуемый опыт",
  "summary": "краткое описание вакансии простыми словами",
  "hardSkills": ["навык 1", "навык 2"],
  "softSkills": ["навык 1", "навык 2"],
  "tools": ["инструмент 1", "инструмент 2"],
  "languages": ["язык 1"],
  "responsibilities": ["обязанность 1", "обязанность 2"],
  "matchedPlatformCourses": [
    {
      "courseTitle": "точное название курса из списка платформы",
      "matchedSkills": ["какие навыки закрывает"],
      "matchPercent": 70
    }
  ],
  "missingSkills": ["навык, которого нет в курсах платформы"],
  "coursesToAdd": [
    {
      "title": "название нового курса, которого не хватает",
      "reason": "почему этот курс нужен"
    }
  ],
  "careerReadinessPercent": 65,
  "courseCoveragePercent": 58,
  "learningGapPercent": 42,
  "priorityLearningPath": [
    "1. сначала изучить ...",
    "2. потом изучить ..."
  ],
  "finalAdvice": "короткий совет студенту"
}

Правила:
- matchedPlatformCourses должен использовать только реальные названия курсов из списка платформы.
- Если нужного курса нет на платформе, добавь его в coursesToAdd.
- careerReadinessPercent оценивает готовность студента при прохождении подходящих курсов платформы.
- courseCoveragePercent показывает, насколько платформа закрывает требования вакансии.
- learningGapPercent показывает, сколько важных требований не закрыто.
- Не придумывай лишнего. Если информация не указана, пиши "Не указано".
`;

    if (!process.env.OPENROUTER_API_KEY) {
      return res.status(500).json({
        success: false,
        message: "OPENROUTER_API_KEY не настроен на сервере Render. Добавьте ключ в Environment."
      });
    }

    const completion = await client.chat.completions.create({
      model: AI_MODEL,
      messages: [
        {
          role: "system",
          content: "Ты возвращаешь только валидный JSON. Без markdown, без ```."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.2
    });

    const aiText = completion.choices[0].message.content;
    const analysis = extractJsonFromAI(aiText);

    res.json({
      success: true,
      mode: vacancyData.sourceType,
      analysis: analysis
    });
  } catch (error) {
    console.error("Vacancy analysis error:", error);

    res.status(500).json({
      success: false,
      message: "Ошибка анализа вакансии. Попробуйте вставить текст вакансии вручную или повторите позже."
    });
  }
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`SmartLearn AI server работает на порту ${PORT}`);
  console.log(`Public URL: ${PUBLIC_SITE_URL}`);
});