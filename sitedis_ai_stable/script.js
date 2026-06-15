const courses = [
  {
    title: "Python с нуля",
    area: "programming",
    level: "Новичок",
    lessons: 18,
    duration: "6 недель",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Web-разработка",
    area: "programming",
    level: "Средний",
    lessons: 24,
    duration: "8 недель",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "UX/UI дизайн",
    area: "design",
    level: "Новичок",
    lessons: 16,
    duration: "5 недель",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Графический дизайн",
    area: "design",
    level: "Средний",
    lessons: 20,
    duration: "7 недель",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Основы бизнеса",
    area: "business",
    level: "Новичок",
    lessons: 14,
    duration: "4 недели",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Маркетинг",
    area: "business",
    level: "Средний",
    lessons: 19,
    duration: "6 недель",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Английский язык",
    area: "language",
    level: "Новичок",
    lessons: 22,
    duration: "8 недель",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Искусственный интеллект",
    area: "ai",
    level: "Новичок",
    lessons: 21,
    duration: "7 недель",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Machine Learning",
    area: "ai",
    level: "Продвинутый",
    lessons: 28,
    duration: "10 недель",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Python: видео-старт",
    area: "programming",
    level: "Новичок",
    format: "video",
    lessons: 8,
    duration: "2 недели",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Python-конспект для новичков",
    area: "programming",
    level: "Новичок",
    format: "text",
    lessons: 7,
    duration: "2 недели",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "JavaScript-практикум",
    area: "programming",
    level: "Средний",
    format: "practice",
    lessons: 12,
    duration: "4 недели",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Сайт-портфолио с нуля",
    area: "programming",
    level: "Новичок",
    format: "project",
    lessons: 9,
    duration: "3 недели",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Английский через видео",
    area: "language",
    level: "Новичок",
    format: "video",
    lessons: 10,
    duration: "3 недели",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Маркетинг: теория и разборы",
    area: "business",
    level: "Новичок",
    format: "text",
    lessons: 9,
    duration: "3 недели",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Figma-практикум",
    area: "design",
    level: "Новичок",
    format: "practice",
    lessons: 10,
    duration: "3 недели",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Создание AI-помощника",
    area: "ai",
    level: "Средний",
    format: "project",
    lessons: 11,
    duration: "4 недели",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5?auto=format&fit=crop&w=800&q=80"
  }
];
const careerBarometerData = {
  "Python с нуля": {
    skill: "Основы программирования",
    careerValue: 82,
    difficulty: 45,
    timeInvestment: 60,
    roi: "Высокий",
    bestFor: ["работа", "учёба", "новая профессия"],
    reason: "Python подходит для старта в IT, автоматизации, анализа данных и дальнейшего изучения AI."
  },

  "Web-разработка": {
    skill: "Создание сайтов",
    careerValue: 88,
    difficulty: 60,
    timeInvestment: 75,
    roi: "Высокий",
    bestFor: ["работа", "проекты", "портфолио"],
    reason: "Web-разработка быстро даёт видимый результат и помогает собрать проекты для портфолио."
  },

  "UX/UI дизайн": {
    skill: "Проектирование интерфейсов",
    careerValue: 80,
    difficulty: 50,
    timeInvestment: 55,
    roi: "Средне-высокий",
    bestFor: ["работа", "дизайн", "проекты"],
    reason: "UX/UI помогает создавать удобные интерфейсы и подходит для старта в digital-профессиях."
  },

  "Графический дизайн": {
    skill: "Визуальная коммуникация",
    careerValue: 72,
    difficulty: 48,
    timeInvestment: 50,
    roi: "Средний",
    bestFor: ["дизайн", "проекты", "контент"],
    reason: "Графический дизайн полезен для визуального контента, брендинга и оформления проектов."
  },

  "Основы бизнеса": {
    skill: "Предпринимательское мышление",
    careerValue: 76,
    difficulty: 42,
    timeInvestment: 45,
    roi: "Средне-высокий",
    bestFor: ["бизнес", "проекты", "стартап"],
    reason: "Курс помогает понять, как запускать идеи, считать ценность продукта и планировать проект."
  },

  "Маркетинг": {
    skill: "Продвижение продукта",
    careerValue: 84,
    difficulty: 52,
    timeInvestment: 58,
    roi: "Высокий",
    bestFor: ["работа", "бизнес", "продвижение"],
    reason: "Маркетинг востребован в бизнесе, SMM, рекламе и продвижении личных проектов."
  },

  "Английский язык": {
    skill: "Коммуникация на английском",
    careerValue: 78,
    difficulty: 45,
    timeInvestment: 70,
    roi: "Средне-высокий",
    bestFor: ["учёба", "работа", "международные возможности"],
    reason: "Английский повышает доступ к зарубежным материалам, вакансиям и обучению."
  },

  "Искусственный интеллект": {
    skill: "Понимание AI-инструментов",
    careerValue: 90,
    difficulty: 65,
    timeInvestment: 72,
    roi: "Высокий",
    bestFor: ["работа", "AI", "проекты"],
    reason: "AI-навыки становятся важными почти во всех digital-направлениях."
  },

  "Machine Learning": {
    skill: "Машинное обучение",
    careerValue: 94,
    difficulty: 88,
    timeInvestment: 90,
    roi: "Высокий, но сложный",
    bestFor: ["AI", "аналитика", "продвинутая профессия"],
    reason: "Machine Learning даёт сильную карьерную ценность, но требует математики и программирования."
  },

  "Python: видео-старт": {
    skill: "Быстрый старт в Python",
    careerValue: 74,
    difficulty: 30,
    timeInvestment: 25,
    roi: "Высокий для новичка",
    bestFor: ["новичок", "быстрый старт", "видео"],
    reason: "Короткий видео-курс помогает быстро понять основы Python без перегруза."
  },

  "Python-конспект для новичков": {
    skill: "Python через текстовые объяснения",
    careerValue: 70,
    difficulty: 28,
    timeInvestment: 22,
    roi: "Высокий для новичка",
    bestFor: ["новичок", "текст", "самостоятельное обучение"],
    reason: "Подходит тем, кто лучше понимает через чтение, конспекты и спокойное повторение."
  },

  "JavaScript-практикум": {
    skill: "Практический JavaScript",
    careerValue: 86,
    difficulty: 62,
    timeInvestment: 55,
    roi: "Высокий",
    bestFor: ["практика", "работа", "frontend"],
    reason: "JavaScript нужен для интерактивных сайтов и является важным навыком frontend-разработчика."
  },

  "Сайт-портфолио с нуля": {
    skill: "Готовый проект для портфолио",
    careerValue: 92,
    difficulty: 40,
    timeInvestment: 35,
    roi: "Очень высокий",
    bestFor: ["портфолио", "работа", "проекты"],
    reason: "Курс даёт конкретный результат — сайт, который можно показать работодателю или преподавателю."
  },

  "Английский через видео": {
    skill: "Аудирование и разговорные фразы",
    careerValue: 72,
    difficulty: 32,
    timeInvestment: 30,
    roi: "Средне-высокий",
    bestFor: ["видео", "языки", "коммуникация"],
    reason: "Видео помогает тренировать слух, произношение и реальные фразы."
  },

  "Маркетинг: теория и разборы": {
    skill: "Понимание маркетинговых стратегий",
    careerValue: 78,
    difficulty: 35,
    timeInvestment: 32,
    roi: "Высокий",
    bestFor: ["текст", "бизнес", "маркетинг"],
    reason: "Курс помогает понять аудиторию, позиционирование и продвижение продукта."
  },

  "Figma-практикум": {
    skill: "Практический дизайн интерфейсов",
    careerValue: 82,
    difficulty: 38,
    timeInvestment: 34,
    roi: "Высокий",
    bestFor: ["практика", "дизайн", "портфолио"],
    reason: "Figma-практика помогает быстро собрать первые интерфейсы для портфолио."
  },

  "Создание AI-помощника": {
    skill: "AI-проектирование",
    careerValue: 91,
    difficulty: 58,
    timeInvestment: 48,
    roi: "Очень высокий",
    bestFor: ["AI", "проекты", "портфолио"],
    reason: "Курс даёт современный AI-проект, который можно использовать как сильный пример в портфолио."
  }
};
const vacancySkillDictionary = [
  {
    skill: "HTML",
    keywords: ["html", "верстка", "разметка"],
    courses: ["Web-разработка", "Сайт-портфолио с нуля"]
  },
  {
    skill: "CSS",
    keywords: ["css", "адаптивная верстка", "responsive", "стилизация"],
    courses: ["Web-разработка", "Сайт-портфолио с нуля"]
  },
  {
    skill: "JavaScript",
    keywords: ["javascript", "js", "dom", "frontend", "фронтенд"],
    courses: ["Web-разработка", "JavaScript-практикум"]
  },
  {
    skill: "Python",
    keywords: ["python", "питон", "backend", "автоматизация"],
    courses: ["Python с нуля", "Python: видео-старт", "Python-конспект для новичков"]
  },
  {
    skill: "UI/UX",
    keywords: ["ui", "ux", "figma", "интерфейс", "прототип", "дизайн интерфейсов"],
    courses: ["UX/UI дизайн", "Figma-практикум"]
  },
  {
    skill: "Figma",
    keywords: ["figma", "макет", "прототипирование", "компоненты"],
    courses: ["Figma-практикум", "UX/UI дизайн"]
  },
  {
    skill: "Маркетинг",
    keywords: ["маркетинг", "smm", "таргет", "реклама", "продвижение", "контент"],
    courses: ["Маркетинг", "Маркетинг: теория и разборы"]
  },
  {
    skill: "Бизнес-анализ",
    keywords: ["бизнес", "стартап", "продукт", "клиенты", "стратегия"],
    courses: ["Основы бизнеса"]
  },
  {
    skill: "Английский язык",
    keywords: ["english", "английский", "intermediate", "communication", "reading"],
    courses: ["Английский язык", "Английский через видео"]
  },
  {
    skill: "AI",
    keywords: ["ai", "искусственный интеллект", "chatgpt", "нейросеть", "prompt", "промпт"],
    courses: ["Искусственный интеллект", "Создание AI-помощника"]
  },
  {
    skill: "Machine Learning",
    keywords: ["machine learning", "ml", "машинное обучение", "модель", "данные"],
    courses: ["Machine Learning"]
  },
  {
    skill: "Портфолио",
    keywords: ["портфолио", "pet project", "проект", "github", "кейсы"],
    courses: ["Сайт-портфолио с нуля", "Создание AI-помощника", "Figma-практикум"]
  }
];
async function analyzeVacancy() {
  const textarea = document.getElementById("vacancyText");
  const resultBox = document.getElementById("vacancyAnalysisResult");

  if (!textarea || !resultBox) {
    return;
  }

  const vacancyInput = textarea.value.trim();

  if (!vacancyInput) {
    alert("Вставьте ссылку или текст вакансии.");
    return;
  }

  resultBox.innerHTML = `
    <div class="vacancy-result-card">
      <h3>Анализируем вакансию...</h3>
      <p>SmartLearn AI выделяет навыки, требования, пробелы и подходящие курсы.</p>
    </div>
  `;

  try {
    const response = await fetch("/analyze-vacancy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        vacancyInput: vacancyInput
      })
    });

    const data = await response.json();

    if (!data.success) {
      resultBox.innerHTML = `
        <div class="vacancy-result-card">
          <h3>Не удалось автоматически проанализировать</h3>
          <p>${data.message || "Попробуйте вставить полный текст вакансии вручную."}</p>
        </div>
      `;
      return;
    }

    renderAdvancedVacancyResult(data.analysis);
  } catch (error) {
    console.error(error);

    resultBox.innerHTML = `
      <div class="vacancy-result-card">
        <h3>Ошибка соединения</h3>
        <p>
          Проверьте, что backend запущен через <b>node server.js</b>.
          После этого попробуйте снова.
        </p>
      </div>
    `;
  }
}
function renderAdvancedVacancyResult(analysis) {
  const resultBox = document.getElementById("vacancyAnalysisResult");

  if (!resultBox) {
    return;
  }

  const hardSkills = Array.isArray(analysis.hardSkills) ? analysis.hardSkills : [];
  const softSkills = Array.isArray(analysis.softSkills) ? analysis.softSkills : [];
  const tools = Array.isArray(analysis.tools) ? analysis.tools : [];
  const languages = Array.isArray(analysis.languages) ? analysis.languages : [];
  const responsibilities = Array.isArray(analysis.responsibilities) ? analysis.responsibilities : [];
  const matchedCourses = Array.isArray(analysis.matchedPlatformCourses) ? analysis.matchedPlatformCourses : [];
  const missingSkills = Array.isArray(analysis.missingSkills) ? analysis.missingSkills : [];
  const coursesToAdd = Array.isArray(analysis.coursesToAdd) ? analysis.coursesToAdd : [];
  const learningPath = Array.isArray(analysis.priorityLearningPath) ? analysis.priorityLearningPath : [];

  const skillTagsHTML = hardSkills.map(skill => {
    return `<span class="vacancy-skill">${skill}</span>`;
  }).join("");

  const softSkillsHTML = softSkills.map(skill => {
    return `<span class="vacancy-skill soft">${skill}</span>`;
  }).join("");

  const toolsHTML = tools.map(tool => {
    return `<span class="vacancy-skill tool">${tool}</span>`;
  }).join("");

  const languagesHTML = languages.map(lang => {
    return `<span class="vacancy-skill language">${lang}</span>`;
  }).join("");

  const responsibilitiesHTML = responsibilities.map(item => {
    return `<li>${item}</li>`;
  }).join("");

  const matchedCoursesHTML = matchedCourses.map(item => {
    const course = courses.find(courseItem => courseItem.title === item.courseTitle);
    const matchedSkills = Array.isArray(item.matchedSkills) ? item.matchedSkills.join(", ") : "";

    return `
      <div class="vacancy-course-card">
        <div>
          <span class="career-tag">${course ? getCourseFormatLabel(course.format) : "Курс платформы"}</span>
          <h3>${item.courseTitle}</h3>

          <p><b>Совпадение:</b> ${item.matchPercent || 0}%</p>
          <p><b>Закрывает навыки:</b> ${matchedSkills}</p>

          ${course ? `<p><b>Уровень:</b> ${course.level}</p>` : ""}
        </div>

        <div class="vacancy-match-circle">
          ${item.matchPercent || 0}%
        </div>

        ${
          course
            ? `<div class="career-actions">
                 <button onclick='openCoursePage(${JSON.stringify(item.courseTitle)})'>
                   Открыть курс
                 </button>

                 <button onclick='addCourseToProfile(${JSON.stringify(item.courseTitle)})'>
                   Добавить в личный кабинет
                 </button>
               </div>`
            : ""
        }
      </div>
    `;
  }).join("");

  const missingSkillsHTML = missingSkills.map(skill => {
    return `<span class="vacancy-skill missing">${skill}</span>`;
  }).join("");

  const coursesToAddHTML = coursesToAdd.map(item => {
    return `
      <div class="course-to-add-card">
        <h4>${item.title}</h4>
        <p>${item.reason}</p>
      </div>
    `;
  }).join("");

  const learningPathHTML = learningPath.map(item => {
    return `<li>${item}</li>`;
  }).join("");

  resultBox.innerHTML = `
    <div class="vacancy-ai-summary">
      <div>
        <span class="career-best-label">AI-анализ вакансии</span>
        <h3>${analysis.vacancyTitle || "Вакансия"}</h3>
        <p><b>Профессия:</b> ${analysis.profession || "Не указано"}</p>
        <p><b>Уровень:</b> ${analysis.level || "Не указано"}</p>
        <p><b>Опыт:</b> ${analysis.experience || "Не указано"}</p>
        <p>${analysis.summary || ""}</p>
      </div>

      <div class="vacancy-index-grid">
        <div>
          <b>${analysis.careerReadinessPercent || 0}%</b>
          <span>Career Readiness Index</span>
        </div>
        <div>
          <b>${analysis.courseCoveragePercent || 0}%</b>
          <span>Course Coverage Score</span>
        </div>
        <div>
          <b>${analysis.learningGapPercent || 0}%</b>
          <span>Learning Gap Score</span>
        </div>
      </div>
    </div>

    <div class="vacancy-result-card">
      <h3>Hard skills</h3>
      <div class="vacancy-skills-list">
        ${skillTagsHTML || "<p>Не указано</p>"}
      </div>
    </div>

    <div class="vacancy-result-card">
      <h3>Soft skills</h3>
      <div class="vacancy-skills-list">
        ${softSkillsHTML || "<p>Не указано</p>"}
      </div>
    </div>

    <div class="vacancy-result-card">
      <h3>Инструменты и технологии</h3>
      <div class="vacancy-skills-list">
        ${toolsHTML || "<p>Не указано</p>"}
      </div>
    </div>

    <div class="vacancy-result-card">
      <h3>Языки</h3>
      <div class="vacancy-skills-list">
        ${languagesHTML || "<p>Не указано</p>"}
      </div>
    </div>

    <div class="vacancy-result-card">
      <h3>Основные обязанности</h3>
      <ul class="vacancy-list">
        ${responsibilitiesHTML || "<li>Не указано</li>"}
      </ul>
    </div>

    <div class="vacancy-result-card">
      <h3>Какие курсы платформы подходят</h3>
      <p>Эти курсы закрывают часть требований вакансии.</p>

      <div class="vacancy-course-list">
        ${matchedCoursesHTML || "<p>Подходящих курсов на платформе пока не найдено.</p>"}
      </div>
    </div>

    <div class="vacancy-result-card">
      <h3>Каких навыков не хватает</h3>
      <div class="vacancy-skills-list">
        ${missingSkillsHTML || "<p>Критические пробелы не найдены.</p>"}
      </div>
    </div>

    <div class="vacancy-result-card">
      <h3>Какие курсы стоит добавить на платформу</h3>
      <div class="courses-to-add-list">
        ${coursesToAddHTML || "<p>Новых курсов добавлять не требуется.</p>"}
      </div>
    </div>

    <div class="vacancy-result-card">
      <h3>Рекомендуемый учебный путь</h3>
      <ol class="vacancy-list">
        ${learningPathHTML || "<li>Пройдите подходящие курсы из списка выше.</li>"}
      </ol>
    </div>

    <div class="vacancy-result-card">
      <h3>Итоговый совет</h3>
      <p>${analysis.finalAdvice || "Начните с курса, который закрывает больше всего требований вакансии."}</p>
    </div>
  `;
}
function getCourseFormatLabel(format) {
  const labels = {
    video: "Видео-курс",
    text: "Текстовый курс",
    practice: "Практикум",
    project: "Проектный курс"
  };

  return labels[format] || "Смешанный формат";
}



function normalizeDiagnosticFormat(style) {
  if (!style) return "";

  const value = style.toLowerCase();

  if (value.includes("видео")) return "video";
  if (value.includes("текст")) return "text";
  if (value.includes("практи")) return "practice";
  if (value.includes("проект")) return "project";

  return "";
}


const courseLessons = {
  "Python с нуля": [
    "Что такое Python и где он используется",
    "Переменные и типы данных",
    "Условия if / else",
    "Циклы for и while",
    "Функции и мини-проект"
  ],

  "Web-разработка": [
    "Как работает сайт",
    "HTML структура страницы",
    "CSS стили и адаптивность",
    "JavaScript для интерактива",
    "Создание первого сайта"
  ],

  "UX/UI дизайн": [
    "Что такое UX и UI",
    "Цвета, шрифты и композиция",
    "Работа в Figma",
    "Прототипирование интерфейса",
    "Дизайн мобильного приложения"
  ],

  "Графический дизайн": [
    "Основы визуального дизайна",
    "Композиция и сетки",
    "Цветовые палитры",
    "Типографика",
    "Создание постера"
  ],

  "Основы бизнеса": [
    "Что такое бизнес-модель",
    "Клиент и проблема",
    "Продукт и ценность",
    "Доходы и расходы",
    "Мини-бизнес-план"
  ],

  "Маркетинг": [
    "Что такое маркетинг",
    "Целевая аудитория",
    "Продвижение в соцсетях",
    "Реклама и контент",
    "Маркетинговая стратегия"
  ],

  "Английский язык": [
    "Базовая грамматика",
    "Самые нужные слова",
    "Простые предложения",
    "Аудирование",
    "Разговорная практика"
  ],

  "Искусственный интеллект": [
    "Что такое искусственный интеллект",
    "Как работают нейросети",
    "AI в жизни и бизнесе",
    "Промпты для AI",
    "Создание AI-проекта"
  ],

  "Python: видео-старт": [
    "Python простыми словами",
    "Как установить Python",
    "Первая программа на Python",
    "Переменные через примеры",
    "Условия в Python",
    "Циклы без сложных терминов",
    "Мини-задачи для закрепления",
    "Итоговый видео-разбор",
    "Демо-тест: Python видео-старт"
  ],

  "JavaScript-практикум": [
    "Повторение основ JavaScript",
    "Работа с кнопками",
    "Работа с формами",
    "События пользователя",
    "Изменение страницы через JS",
    "Мини-калькулятор",
    "Фильтр карточек",
    "LocalStorage",
    "Практика с модальным окном",
    "Мини-проект",
    "Проверка ошибок",
    "Итоговая практика"
  ],

  "JavaScript-практикум": [
    "Повторение основ JavaScript",
    "Работа с кнопками",
    "Работа с формами",
    "События пользователя",
    "Изменение страницы через JS",
    "Мини-калькулятор",
    "Фильтр карточек",
    "LocalStorage",
    "Практика с модальным окном",
    "Мини-проект",
    "Проверка ошибок",
    "Итоговая практика",
    "Демо-тест: JavaScript-практикум"
  ],

  "Сайт-портфолио с нуля": [
    "Идея сайта-портфолио",
    "Структура HTML",
    "Стилизация через CSS",
    "Блок обо мне",
    "Блок навыков",
    "Блок проектов",
    "Адаптация под телефон",
    "Добавление интерактива",
    "Финальная сборка сайта",
    "Демо-тест: Сайт-портфолио"
  ],

  "Английский через видео": [
    "Английский алфавит и произношение",
    "Самые частые слова",
    "Фразы для знакомства",
    "Видео-диалоги на каждый день",
    "Как понимать речь на слух",
    "Простые предложения",
    "Разбор короткого видео",
    "Повторение и практика",
    "Мини-тест по словам",
    "Демо-тест: Английский через видео"
  ],

  "Маркетинг: теория и разборы": [
    "Что такое маркетинг",
    "Целевая аудитория",
    "Позиционирование",
    "Контент и смыслы",
    "Реклама простыми словами",
    "Разбор успешных брендов",
    "Ошибки в продвижении",
    "Маркетинговая стратегия",
    "Демо-тест: Маркетинг"
  ],

  "Figma-практикум": [
    "Рабочее пространство Figma",
    "Создание первого экрана",
    "Цвета и шрифты",
    "Компоненты",
    "Кнопки и карточки",
    "Прототипирование",
    "Дизайн мобильного экрана",
    "Практика: экран приложения",
    "Проверка интерфейса",
    "Демо-тест: Figma"
  ],

  "Создание AI-помощника": [
    "Что такое AI-помощник",
    "Идея и сценарий помощника",
    "Интерфейс чата",
    "Поле ввода и кнопка",
    "Подключение логики",
    "Ответы помощника",
    "Промпты и роли",
    "Проверка ошибок",
    "Улучшение интерфейса",
    "Мини-проект AI-помощника",
    "Демо-тест: Создание AI-помощника"
  ]
};
const courseTests = {
  "Python: видео-старт": [
    {
      question: "Что такое Python?",
      options: [
        "Язык программирования",
        "Графический редактор",
        "Музыкальная программа",
        "Браузер"
      ],
      correct: 0
    },
    {
      question: "Для чего нужна переменная?",
      options: [
        "Чтобы хранить данные",
        "Чтобы менять цвет сайта",
        "Чтобы открыть видео",
        "Чтобы удалить файл"
      ],
      correct: 0
    },
    {
      question: "Какой код выводит текст на экран в Python?",
      options: [
        "print('Hello')",
        "show('Hello')",
        "text('Hello')",
        "displayText('Hello')"
      ],
      correct: 0
    },
    {
      question: "Что делает условие if?",
      options: [
        "Проверяет условие и выполняет код",
        "Создаёт картинку",
        "Запускает браузер",
        "Удаляет программу"
      ],
      correct: 0
    },
    {
      question: "Для чего нужен цикл?",
      options: [
        "Чтобы повторять действия",
        "Чтобы загрузить фото",
        "Чтобы открыть сайт",
        "Чтобы создать пароль"
      ],
      correct: 0
    }
  ],

  "Python-конспект для новичков": [
    {
      question: "Что такое Python?",
      options: [
        "Язык программирования",
        "Программа для рисования",
        "Операционная система",
        "Видеоредактор"
      ],
      correct: 0
    },
    {
      question: "Что такое переменная?",
      options: [
        "Место для хранения значения",
        "Картинка на сайте",
        "Музыкальный файл",
        "Кнопка в браузере"
      ],
      correct: 0
    },
    {
      question: "Какой тип данных используется для текста?",
      options: [
        "string",
        "number",
        "button",
        "image"
      ],
      correct: 0
    },
    {
      question: "Что делает конструкция if / else?",
      options: [
        "Выполняет разный код при разных условиях",
        "Создаёт новую папку",
        "Открывает YouTube",
        "Удаляет переменную"
      ],
      correct: 0
    },
    {
      question: "Для чего нужны функции?",
      options: [
        "Чтобы объединять код в отдельные блоки",
        "Чтобы менять язык браузера",
        "Чтобы загружать картинки",
        "Чтобы включать музыку"
      ],
      correct: 0
    }
  ],

  "JavaScript-практикум": [
    {
      question: "Для чего используется JavaScript на сайте?",
      options: [
        "Для интерактива и логики страницы",
        "Только для картинок",
        "Только для шрифтов",
        "Для покупки домена"
      ],
      correct: 0
    },
    {
      question: "Что такое событие click?",
      options: [
        "Действие при нажатии пользователя",
        "Ошибка в коде",
        "Название картинки",
        "Тип базы данных"
      ],
      correct: 0
    },
    {
      question: "Для чего нужен localStorage?",
      options: [
        "Чтобы сохранять данные в браузере",
        "Чтобы включать звук",
        "Чтобы открывать Excel",
        "Чтобы удалять HTML"
      ],
      correct: 0
    },
    {
      question: "Что делает document.querySelector?",
      options: [
        "Находит элемент на странице",
        "Создаёт сервер",
        "Рисует картинку",
        "Открывает файл Word"
      ],
      correct: 0
    },
    {
      question: "Что такое DOM?",
      options: [
        "Структура HTML-страницы, с которой работает JavaScript",
        "Программа для дизайна",
        "Тип видео",
        "Название браузера"
      ],
      correct: 0
    }
  ],

  "Сайт-портфолио с нуля": [
    {
      question: "Для чего нужен сайт-портфолио?",
      options: [
        "Чтобы показать свои навыки и проекты",
        "Чтобы хранить пароли",
        "Чтобы смотреть фильмы",
        "Чтобы удалять файлы"
      ],
      correct: 0
    },
    {
      question: "Что отвечает за структуру страницы?",
      options: [
        "HTML",
        "CSS",
        "PNG",
        "MP3"
      ],
      correct: 0
    },
    {
      question: "Что отвечает за внешний вид сайта?",
      options: [
        "CSS",
        "HTML",
        "Python",
        "Excel"
      ],
      correct: 0
    },
    {
      question: "Что важно добавить в портфолио?",
      options: [
        "Блок обо мне, навыки и проекты",
        "Только случайные картинки",
        "Только музыку",
        "Только пустую страницу"
      ],
      correct: 0
    },
    {
      question: "Что значит адаптивный сайт?",
      options: [
        "Сайт хорошо выглядит на компьютере и телефоне",
        "Сайт работает только ночью",
        "Сайт без текста",
        "Сайт без кнопок"
      ],
      correct: 0
    }
  ],

  "Английский через видео": [
    {
      question: "Зачем смотреть видео при изучении английского?",
      options: [
        "Чтобы тренировать слух и произношение",
        "Чтобы забыть слова",
        "Чтобы не учить фразы",
        "Чтобы отключить практику"
      ],
      correct: 0
    },
    {
      question: "Что помогает лучше понимать речь на слух?",
      options: [
        "Регулярное прослушивание коротких диалогов",
        "Только чтение без звука",
        "Пропуск уроков",
        "Запоминание случайных букв"
      ],
      correct: 0
    },
    {
      question: "Какая фраза подходит для знакомства?",
      options: [
        "My name is...",
        "Blue table fast",
        "Open window five",
        "Computer milk"
      ],
      correct: 0
    },
    {
      question: "Что лучше делать после видеоурока?",
      options: [
        "Повторить фразы вслух",
        "Сразу закрыть курс",
        "Удалить конспект",
        "Не выполнять задания"
      ],
      correct: 0
    },
    {
      question: "Что важно для разговорного английского?",
      options: [
        "Практика фраз и произношения",
        "Только теория",
        "Только переводчик",
        "Только грамматика без речи"
      ],
      correct: 0
    }
  ],

  "Маркетинг: теория и разборы": [
    {
      question: "Что такое целевая аудитория?",
      options: [
        "Люди, которым нужен продукт или услуга",
        "Случайные прохожие",
        "Только друзья автора",
        "Только конкуренты"
      ],
      correct: 0
    },
    {
      question: "Для чего нужно позиционирование?",
      options: [
        "Чтобы показать, чем продукт отличается от других",
        "Чтобы скрыть продукт",
        "Чтобы убрать рекламу",
        "Чтобы не понимать клиента"
      ],
      correct: 0
    },
    {
      question: "Что такое контент в маркетинге?",
      options: [
        "Тексты, фото, видео и материалы для аудитории",
        "Только пароль",
        "Только код сайта",
        "Только банковская карта"
      ],
      correct: 0
    },
    {
      question: "Что важно перед запуском рекламы?",
      options: [
        "Понять аудиторию и цель рекламы",
        "Не знать продукт",
        "Не понимать клиента",
        "Запустить всё случайно"
      ],
      correct: 0
    },
    {
      question: "Что показывает хороший маркетинговый разбор?",
      options: [
        "Почему стратегия сработала или не сработала",
        "Только цвет картинки",
        "Только количество букв",
        "Только название бренда"
      ],
      correct: 0
    }
  ],

  "Figma-практикум": [
    {
      question: "Для чего используется Figma?",
      options: [
        "Для дизайна интерфейсов и прототипов",
        "Для написания серверного кода",
        "Для монтажа фильмов",
        "Для настройки принтера"
      ],
      correct: 0
    },
    {
      question: "Что такое компонент в Figma?",
      options: [
        "Повторяемый элемент интерфейса",
        "Случайная картинка",
        "Музыкальный файл",
        "Ошибка браузера"
      ],
      correct: 0
    },
    {
      question: "Для чего нужно прототипирование?",
      options: [
        "Чтобы показать переходы между экранами",
        "Чтобы удалить дизайн",
        "Чтобы выключить интернет",
        "Чтобы открыть Excel"
      ],
      correct: 0
    },
    {
      question: "Что важно в дизайне кнопки?",
      options: [
        "Понятный текст, размер и состояние",
        "Случайный цвет без смысла",
        "Невидимый текст",
        "Отсутствие формы"
      ],
      correct: 0
    },
    {
      question: "Что такое UI?",
      options: [
        "Визуальная часть интерфейса",
        "Серверная база данных",
        "Тип аудио",
        "Название клавиатуры"
      ],
      correct: 0
    }
  ],

  "Создание AI-помощника": [
    {
      question: "Что такое AI-помощник?",
      options: [
        "Система, которая отвечает пользователю и помогает с задачами",
        "Обычная картинка",
        "Только кнопка без логики",
        "Музыкальный плеер"
      ],
      correct: 0
    },
    {
      question: "Для чего нужен сценарий помощника?",
      options: [
        "Чтобы понять, как он должен отвечать пользователю",
        "Чтобы удалить интерфейс",
        "Чтобы выключить сайт",
        "Чтобы скрыть вопросы"
      ],
      correct: 0
    },
    {
      question: "Что такое промпт?",
      options: [
        "Инструкция для AI",
        "Картинка курса",
        "Название шрифта",
        "Тип кнопки"
      ],
      correct: 0
    },
    {
      question: "Что важно в интерфейсе AI-чата?",
      options: [
        "Поле ввода, кнопка и область ответов",
        "Только пустой экран",
        "Только картинка без текста",
        "Только музыка"
      ],
      correct: 0
    },
    {
      question: "Что нужно делать после создания AI-помощника?",
      options: [
        "Проверить ответы и исправить ошибки",
        "Сразу удалить проект",
        "Не тестировать",
        "Отключить все функции"
      ],
      correct: 0
    }
  ]
};
function renderCourseTest(courseTitle) {
  const test = courseTests[courseTitle];

  if (!test) {
    return "";
  }

  let savedResults = JSON.parse(localStorage.getItem("courseTestResults")) || {};
  let savedResult = savedResults[courseTitle];

  let questionsHTML = test.map((item, index) => {
    let optionsHTML = item.options.map((option, optionIndex) => {
      return `
        <label class="course-test-option">
          <input type="radio" name="courseTest-${index}" value="${optionIndex}">
          <span>${option}</span>
        </label>
      `;
    }).join("");

    return `
      <div class="course-test-question">
        <h4>${index + 1}. ${item.question}</h4>
        <div class="course-test-options">
          ${optionsHTML}
        </div>
      </div>
    `;
  }).join("");

  let savedHTML = "";

  if (savedResult) {
    savedHTML = `
      <div class="course-test-saved-result">
        Последний результат: <b>${savedResult.score}/${savedResult.total}</b> — ${savedResult.percent}%
      </div>
    `;
  }

  return `
    <div class="course-test-card">
      <h3>Итоговый тест</h3>
      <p>
        Ответьте на вопросы по курсу. После завершения сайт покажет результат.
      </p>

      ${savedHTML}

      ${questionsHTML}

      <button class="primary-btn" onclick="submitCourseTest('${courseTitle}')">
        Завершить тест
      </button>

      <div id="courseTestResult" class="course-test-result"></div>
    </div>
  `;
}

function submitCourseTest(courseTitle) {
  const test = courseTests[courseTitle];

  if (!test) {
    return;
  }

  let score = 0;

  for (let i = 0; i < test.length; i++) {
    const selected = document.querySelector(`input[name="courseTest-${i}"]:checked`);

    if (!selected) {
      alert("Ответьте на все вопросы теста.");
      return;
    }

    if (Number(selected.value) === test[i].correct) {
      score++;
    }
  }

  const total = test.length;
  const percent = Math.round((score / total) * 100);

  let message = "";

  if (percent >= 80) {
    message = "Отлично! Вы хорошо поняли курс.";
  } else if (percent >= 60) {
    message = "Неплохо, но лучше повторить сложные темы.";
  } else {
    message = "Пока рано завершать курс. Повторите уроки и попробуйте снова.";
  }

  let savedResults = JSON.parse(localStorage.getItem("courseTestResults")) || {};

  savedResults[courseTitle] = {
    score: score,
    total: total,
    percent: percent,
    date: new Date().toLocaleDateString()
  };

  localStorage.setItem("courseTestResults", JSON.stringify(savedResults));

  const resultBox = document.getElementById("courseTestResult");

  if (resultBox) {
    resultBox.innerHTML = `
      <div class="test-result-box">
        <h4>Результат теста</h4>
        <p><b>${score}/${total}</b> правильных ответов</p>
        <p><b>${percent}%</b></p>
        <p>${message}</p>
      </div>
    `;
  }
}




const lessonDetails = {
  "Что такое Python и где он используется": {
    videoTitle: "Python Full Course for Beginners",
    videoUrl: "https://www.youtube.com/embed/_uQrJ0TkZlc",
    audioTitle: "Аудио-конспект: Python",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    text: "Python — это язык программирования, который часто выбирают новички. Его используют для сайтов, чат-ботов, анализа данных, автоматизации и искусственного интеллекта.",
    task: "Откройте Python или онлайн-редактор. Напишите команду print('Hello, SmartLearn AI') и запустите её.",
    tags: ["Python", "новичок", "программирование"]
  },

  "Переменные и типы данных": {
    videoTitle: "Learn Python - Full Course for Beginners",
    videoUrl: "https://www.youtube.com/embed/rfscVS0vtbw",
    audioTitle: "Аудио-конспект: переменные",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    text: "Переменная — это название для хранения информации. Например, name хранит имя, age хранит возраст, city хранит город.",
    task: "Создайте переменные name, age и city. Выведите их через print().",
    tags: ["переменные", "типы данных", "Python"]
  },

  "Как работает сайт": {
    videoTitle: "HTML/CSS/JS Crash Course",
    videoUrl: "https://www.youtube.com/embed/O9Uauq-Gd0c",
    audioTitle: "Аудио-конспект: как работает сайт",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    text: "Сайт состоит из HTML, CSS и JavaScript. HTML создаёт структуру, CSS отвечает за внешний вид, а JavaScript делает сайт интерактивным.",
    task: "Откройте любой сайт и через F12 посмотрите HTML-разметку страницы.",
    tags: ["web", "браузер", "сайт"]
  },

  "HTML структура страницы": {
    videoTitle: "HTML & CSS Crash Course Tutorial",
    videoUrl: "https://www.youtube.com/embed/hu-q2zYwEYs",
    audioTitle: "Аудио-конспект: HTML",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    text: "HTML — это язык разметки. Он создаёт элементы страницы: заголовки, абзацы, кнопки, картинки и ссылки.",
    task: "Создайте страницу с заголовком, текстом, кнопкой и картинкой.",
    tags: ["HTML", "теги", "структура"]
  },

  "Что такое UX и UI": {
    videoTitle: "UI / UX Design Tutorial",
    videoUrl: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
    audioTitle: "Аудио-конспект: UX и UI",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    text: "UX — это удобство использования продукта. UI — это внешний вид интерфейса: кнопки, цвета, иконки, шрифты и расположение элементов.",
    task: "Выберите любое мобильное приложение и запишите, что в нём удобно и что можно улучшить.",
    tags: ["UX", "UI", "дизайн", "интерфейс"]
  },

  "Цвета, шрифты и композиция": {
    videoTitle: "Visual Design Basics",
    videoUrl: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
    audioTitle: "Аудио-конспект: визуальный стиль",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    text: "Цвета помогают передавать настроение, шрифты влияют на читаемость, а композиция помогает правильно расположить элементы на экране.",
    task: "Создайте простую карточку курса: выберите два цвета, шрифт и расположите текст с кнопкой.",
    tags: ["цвет", "шрифт", "композиция", "UI"]
  },

  "Работа в Figma": {
    videoTitle: "Figma UI Design Tutorial",
    videoUrl: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
    audioTitle: "Аудио-конспект: Figma",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    text: "Figma — это онлайн-инструмент для создания интерфейсов сайтов и мобильных приложений. В ней можно делать макеты, кнопки, карточки и прототипы.",
    task: "Создайте в Figma экран входа: логотип, поле email, поле password и кнопку Login.",
    tags: ["Figma", "макет", "прототип"]
  },

  "Что такое искусственный интеллект": {
    videoTitle: "AI Course for Beginners",
    videoUrl: "https://www.youtube.com/embed/Yq0QkCxoTHM",
    audioTitle: "Аудио-конспект: искусственный интеллект",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    text: "Искусственный интеллект — это технология, которая позволяет компьютерным системам анализировать данные, понимать текст, распознавать изображения и помогать человеку принимать решения.",
    task: "Напишите 5 примеров, где искусственный интеллект используется в повседневной жизни.",
    tags: ["AI", "искусственный интеллект", "технологии"]
  },

  "Как работают нейросети": {
    videoTitle: "Artificial Intelligence for Beginners",
    videoUrl: "https://www.youtube.com/embed/Yq0QkCxoTHM",
    audioTitle: "Аудио-конспект: нейросети",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    text: "Нейросеть — это модель, которая учится на примерах. Она получает данные, ищет закономерности и использует их для предсказаний или генерации ответа.",
    task: "Объясните нейросеть простыми словами так, как будто рассказываете младшему школьнику.",
    tags: ["нейросеть", "AI", "машинное обучение"]
  },

  "Промпты для AI": {
    videoTitle: "Prompt Engineering Basics",
    videoUrl: "https://www.youtube.com/embed/Yq0QkCxoTHM",
    audioTitle: "Аудио-конспект: промпты",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    text: "Промпт — это запрос, который пользователь пишет искусственному интеллекту. Хороший промпт содержит задачу, контекст, формат ответа и ограничения.",
    task: "Напишите промпт, где просите AI объяснить тему, дать пример и придумать маленькое задание.",
    tags: ["prompt", "AI", "запрос"]
  },

 "Промпты для AI": {
  videoTitle: "Prompt Engineering Basics",
  videoUrl: "https://www.youtube.com/embed/Yq0QkCxoTHM",
  audioTitle: "Аудио-конспект: промпты",
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
  text: "Промпт — это запрос, который пользователь пишет искусственному интеллекту. Хороший промпт содержит задачу, контекст, формат ответа и ограничения.",
  task: "Напишите промпт, где просите AI объяснить тему, дать пример и придумать маленькое задание.",
  tags: ["prompt", "AI", "запрос"]
},

"Базовая грамматика": {
 videoUrl: "https://www.youtube.com/embed/AVYfyTvc9KY",
videoPageUrl: "https://www.youtube.com/watch?v=AVYfyTvc9KY",
audioTitle: "Аудио-конспект: базовая грамматика",
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
  text: "Базовая грамматика английского языка помогает правильно строить предложения. Важно понимать порядок слов: подлежащее, сказуемое и дополнение. Например: I learn English — Я учу английский.",
  task: "Составьте 5 простых предложений на английском языке: I am..., I like..., I learn..., I have..., I want...",
  tags: ["English", "grammar", "beginner"]
},

"Самые нужные слова": {
  videoTitle: "English Vocabulary for Beginners",
  videoUrl: "https://www.youtube.com/embed/7HUW_aukApo",
  audioTitle: "Аудио-конспект: базовые слова",
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
  text: "Для начала английского языка важно учить самые частые слова: greetings, family, numbers, food, school, work. Лучше учить слова не отдельно, а в коротких предложениях.",
  task: "Выучите 10 слов и составьте с ними 5 простых предложений.",
  tags: ["English", "vocabulary", "words"]
},

"Простые предложения": {
  videoTitle: "Basic English Sentences",
  videoUrl: "https://www.youtube.com/embed/AVYfyTvc9KY",
  audioTitle: "Аудио-конспект: простые предложения",
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
  text: "Простое предложение в английском обычно строится по схеме: кто + действие + что. Например: I read a book. She likes music. We study English.",
  task: "Напишите 7 простых предложений о себе на английском языке.",
  tags: ["English", "sentences", "grammar"]
},

"Аудирование": {
  videoTitle: "English Listening Practice for Beginners",
  videoUrl: "https://www.youtube.com/embed/6xWqDmcXuQY",
  audioTitle: "Аудио-конспект: аудирование",
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
  text: "Аудирование — это тренировка понимания английской речи на слух. Сначала лучше слушать медленную и простую речь, затем повторять фразы вслух и записывать незнакомые слова.",
  task: "Послушайте короткий английский диалог 2 раза. Выпишите 5 знакомых слов и 3 новые фразы.",
  tags: ["English", "listening", "аудирование"]
},

"Разговорная практика": {
  videoTitle: "English Speaking Practice for Beginners",
  videoUrl: "https://www.youtube.com/embed/CAU2zx2Ri_M",
  audioTitle: "Аудио-конспект: разговорная практика",
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
  text: "Разговорная практика помогает научиться быстро строить фразы. Главное — говорить простыми предложениями и не бояться ошибок. Начните с тем: имя, возраст, город, хобби, учёба и планы.",
  task: "Запишите короткий рассказ о себе на английском: имя, город, интересы и почему вы учите английский.",
  tags: ["English", "speaking", "practice"]
}
,

"Что такое бизнес-модель": {
  videoTitle: "Business Model Canvas Explained",
  videoUrl: "https://www.youtube.com/embed/QoAOzMTLP5s",
  audioTitle: "Аудио-конспект: бизнес-модель",
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
  text: "Бизнес-модель показывает, как проект создаёт ценность для клиента и за счёт чего зарабатывает. Важно понять клиента, его проблему, продукт, каналы продвижения и источники дохода.",
  task: "Опишите бизнес-модель SmartLearn AI: кто клиент, какую проблему решает сайт, какую ценность даёт и за счёт чего может развиваться.",
  tags: ["business", "model", "startup"]
},

"Клиент и проблема": {
  videoTitle: "How to Identify Customer Problems",
  videoUrl: "https://www.youtube.com/embed/2rU0kSXJmRQ",
  audioTitle: "Аудио-конспект: клиент и проблема",
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3",
  text: "Любой бизнес начинается не с продукта, а с проблемы клиента. Если проблема важная, человек будет искать решение. Поэтому сначала нужно понять, кто пользователь и что ему мешает.",
  task: "Выберите одну аудиторию для SmartLearn AI и напишите 3 проблемы, которые у неё есть в обучении.",
  tags: ["client", "problem", "research"]
},

"Продукт и ценность": {
  videoTitle: "Value Proposition Explained",
  videoUrl: "https://www.youtube.com/embed/ReM1uqmVfP0",
  audioTitle: "Аудио-конспект: ценность продукта",
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3",
  text: "Ценность продукта — это польза, которую получает клиент. Хороший продукт не просто существует, а помогает человеку быстрее, удобнее или дешевле решить задачу.",
  task: "Напишите ценностное предложение SmartLearn AI в одном предложении: 'Мы помогаем ... получить ... с помощью ...'.",
  tags: ["product", "value", "business"]
},

"Доходы и расходы": {
  videoTitle: "Revenue and Costs in Business",
  videoUrl: "https://www.youtube.com/embed/6d4G75wzE7M",
  audioTitle: "Аудио-конспект: доходы и расходы",
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-19.mp3",
  text: "Доходы — это деньги, которые получает проект. Расходы — это затраты на разработку, рекламу, серверы, дизайн, поддержку и развитие. Даже бесплатный проект должен понимать свои расходы.",
  task: "Составьте список из 3 возможных расходов SmartLearn AI и 3 способов монетизации в будущем.",
  tags: ["finance", "revenue", "costs"]
},

"Мини-бизнес-план": {
  videoTitle: "How to Write a Simple Business Plan",
  videoUrl: "https://www.youtube.com/embed/Fqch5OrUPvA",
  audioTitle: "Аудио-конспект: мини-бизнес-план",
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-20.mp3",
  text: "Мини-бизнес-план кратко описывает идею, целевую аудиторию, проблему, решение, преимущества, ресурсы и план развития. Он нужен, чтобы понятно представить проект другим людям.",
  task: "Составьте мини-бизнес-план SmartLearn AI на 6 пунктов: идея, аудитория, проблема, решение, функции, развитие.",
  tags: ["business plan", "startup", "strategy"]
},
"Что такое маркетинг": {
  videoTitle: "Marketing Basics for Beginners",
  videoUrl: "https://www.youtube.com/embed/Urny4oFBbto",
  audioTitle: "Аудио-конспект: основы маркетинга",
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  text: "Маркетинг — это система действий, которая помогает людям узнать о продукте, понять его пользу и принять решение о покупке или использовании. Важно не просто рекламировать продукт, а понимать аудиторию и её потребности.",
  task: "Опишите, кому может быть полезен SmartLearn AI и почему этот человек захочет пользоваться платформой.",
  tags: ["marketing", "basics", "audience"]
},

"Целевая аудитория": {
  videoTitle: "How To Find Your Target Audience",
  videoUrl: "https://www.youtube.com/embed/kKcHf3VpH8c",
  audioTitle: "Аудио-конспект: целевая аудитория",
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  text: "Целевая аудитория — это группа людей, для которых создаётся продукт. Нужно понимать их возраст, интересы, проблемы, цели и привычки. Чем точнее описана аудитория, тем легче создать полезное предложение.",
  task: "Опишите целевую аудиторию SmartLearn AI: возраст, цель обучения, главная проблема и ожидаемый результат.",
  tags: ["target audience", "research", "marketing"]
},

"Продвижение в соцсетях": {
  videoTitle: "Social Media Marketing Tutorial",
  videoUrl: "https://www.youtube.com/embed/I2pwcAVonKI",
  audioTitle: "Аудио-конспект: продвижение в соцсетях",
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  text: "Социальные сети помогают рассказать о продукте, показать его пользу и общаться с аудиторией. Для продвижения важны регулярность, понятный контент, визуальный стиль и обратная связь.",
  task: "Придумайте 3 идеи постов для продвижения SmartLearn AI в Instagram или TikTok.",
  tags: ["SMM", "social media", "content"]
},

"Реклама и контент": {
  videoTitle: "Content Marketing Strategy",
  videoUrl: "https://www.youtube.com/embed/0R_3iarc8IA",
  audioTitle: "Аудио-конспект: реклама и контент",
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  text: "Реклама быстро привлекает внимание, а контент помогает удерживать интерес. Хороший контент объясняет пользу продукта, показывает примеры и отвечает на вопросы аудитории.",
  task: "Напишите короткий рекламный текст для SmartLearn AI: заголовок, польза и призыв к действию.",
  tags: ["ads", "content", "promotion"]
},

"Маркетинговая стратегия": {
  videoTitle: "Marketing Strategy Explained",
  videoUrl: "https://www.youtube.com/embed/9_7f3o6R8nU",
  audioTitle: "Аудио-конспект: маркетинговая стратегия",
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  text: "Маркетинговая стратегия — это план продвижения продукта. Она включает анализ аудитории, позиционирование, каналы продвижения, контент, рекламу и оценку результата.",
  task: "Составьте мини-стратегию продвижения SmartLearn AI: аудитория, канал, формат контента и цель.",
  tags: ["strategy", "marketing", "growth"]
}

};




function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");

  if (pageId === "profile") {
    showSavedCourses();
    showSavedDiagnostic();
    renderProfileDashboard();
  }
}

function getSavedCourses() {
  return JSON.parse(localStorage.getItem("myCourses")) || [];
}

function saveCourse(courseTitle) {
  let savedCourses = getSavedCourses();

  if (!savedCourses.includes(courseTitle)) {
    savedCourses.push(courseTitle);
    localStorage.setItem("myCourses", JSON.stringify(savedCourses));
  }
}

function getProgressData() {
  return JSON.parse(localStorage.getItem("courseProgress")) || {};
}

function saveProgressData(progress) {
  localStorage.setItem("courseProgress", JSON.stringify(progress));
}

function getCourseProgressPercent(courseTitle) {
  const lessons = courseLessons[courseTitle] || [];
  const progress = getProgressData();
  const doneLessons = progress[courseTitle] || [];

  if (lessons.length === 0) return 0;

  return Math.round((doneLessons.length / lessons.length) * 100);
}

function renderCourses() {
  const list = document.getElementById("courseList");
  list.innerHTML = "";

  courses.forEach(course => {
    const percent = getCourseProgressPercent(course.title);

    list.innerHTML += `
      <div class="course-card">
        <img src="${course.image}" alt="${course.title}" class="course-image">

        <div class="course-content">
          <span class="course-category">${trCourseArea(course.area)}</span>
<h3>${trCourseTitle(course.title)}</h3>

          <div class="course-rating">
            ⭐ ${course.rating} · ${course.lessons} ${dt("lessonsWord")} · ${course.duration}
          </div>

         <p class="course-level">${dt("level")}: ${course.level}</p>
<p class="course-level">Формат: ${getCourseFormatLabel(course.format)}</p>

          <div class="profile-progress">
           <b>${dt("progress")}: ${percent}%</b>
            <div class="small-progress">
              <div class="small-progress-fill" style="width:${percent}%"></div>
            </div>
          </div>

          <button onclick='openCoursePage(${JSON.stringify(course.title)})'>
            ${dt("more")}
          </button>

          <button onclick='startCourse(${JSON.stringify(course.title)})'>
           ${dt("startLearning")}
          </button>
        </div>
      </div>
    `;
  });
}



function addCourseToProfile(courseTitle) {
  saveCourse(courseTitle);
  alert("Курс добавлен в личный кабинет");
  showSavedCourses();
}

function startCourse(courseTitle) {
  saveCourse(courseTitle);
  openCoursePage(courseTitle);
}

function openCoursePage(courseTitle) {
  saveCourse(courseTitle);
  showPage("courseDetail");
  renderCourseDetail(courseTitle);
}

function renderCourseDetail(courseTitle) {
  const box = document.getElementById("courseDetailBox");
  const course = courses.find(item => item.title === courseTitle);
  const lessons = courseLessons[courseTitle] || [];

  if (!course) {
    box.innerHTML = "<p>Курс не найден</p>";
    return;
  }

  const progress = getProgressData();
  const doneLessons = progress[courseTitle] || [];
  const percent = getCourseProgressPercent(courseTitle);

  box.innerHTML = `
    <div class="course-detail-card">
      <div class="course-detail-header">
        <img src="${course.image}" alt="${course.title}">

        <div>
          <span class="course-category">${trCourseArea(course.area)}</span>
          <h1>${trCourseTitle(course.title)}</h1>
          <p><b>${dt("level")}:</b> ${course.level}</p>
          <p><b>Формат:</b> ${getCourseFormatLabel(course.format)}</p>
          <p><b>${dt("duration")}:</b> ${course.duration}</p>
          <p><b>${dt("lessonsCount")}:</b> ${lessons.length}</p>
          <p><b>${dt("rating")}:</b> ⭐ ${course.rating}</p>
        </div>
      </div>

      <div class="progress-big">
        <h2>${dt("courseProgress")}: ${percent}%</h2>
        <div class="progress-track">
          <div class="progress-fill" style="width:${percent}%"></div>
        </div>
      </div>

      <h2>${dt("courseProgram")}</h2>

      <div class="lesson-list">
        ${lessons.map((lesson, index) => {
          const isDone = doneLessons.includes(index);
          const detail = lessonDetails[lesson] || getAutoLessonDetail(courseTitle, lesson);
          const tags = Array.isArray(detail.tags) ? detail.tags : ["урок"];
          const videoPageUrl = detail.videoPageUrl || detail.videoUrl.replace("https://www.youtube.com/embed/", "https://www.youtube.com/watch?v=");

          return `
            <div class="lesson-item ${isDone ? "done" : ""}">
              <h3>${index + 1}. ${trLessonTitle(lesson)}</h3>
              <p>${isDone ? "✅ " + dt("lessonDone") : "⏳ " + dt("lessonNotDone")}</p>

              <div class="lesson-content-box">
                <div class="lesson-media-grid">
                  <div class="lesson-video">
                    <iframe
                      class="real-video-frame"
                      src="${detail.videoUrl}"
                      title="${detail.videoTitle}"
                      allowfullscreen>
                    </iframe>

                    <h4>${detail.videoTitle}</h4>
                    <p>Формат: видео-урок</p>

                    <a class="lesson-resource-link" href="${videoPageUrl}" target="_blank">
                      Открыть видео на YouTube
                    </a>
                  </div>

                  <div class="lesson-audio">
                    <h4>${detail.audioTitle}</h4>
                    <p>Формат: аудио-конспект</p>

                    <audio controls class="real-audio-player">
                      <source src="${detail.audioUrl}" type="audio/mpeg">
                      Ваш браузер не поддерживает аудио.
                    </audio>
                  </div>
                </div>

                <div class="lesson-text">
                  <h4>Текст урока</h4>
                  <p>${detail.text}</p>
                </div>

                <div class="lesson-task">
                  <h4>Практическое задание</h4>
                  <p>${detail.task}</p>
                </div>

                <div class="lesson-tags">
                  ${tags.map(tag => `<span class="lesson-tag">${tag}</span>`).join("")}
                </div>
              </div>

              <div class="lesson-actions">
                <button onclick='markLessonDone(${JSON.stringify(courseTitle)}, ${index})'>
                  ${dt("lessonDone")}
                </button>

                <button onclick='askAIAboutLesson(${JSON.stringify(courseTitle)}, ${JSON.stringify(lesson)})'>
                  ${dt("askAI")}
                </button>

                <button onclick='openFeynmanMode(${JSON.stringify(courseTitle)}, ${JSON.stringify(lesson)})'>
                  👧 Объяснить малышу
                </button>
              </div>
            </div>
          `;
        }).join("")}
      </div>

           ${renderCourseTest(courseTitle)}
      ${
        percent === 100
          ? `<div class="result-card">
               <h2>🎉 ${dt("courseCompleted")}</h2>
               <p>${dt("completedText")}</p>

               <button onclick='openCertificate(${JSON.stringify(courseTitle)})'>
                 ${dt("getCertificate")}
               </button>
             </div>`
          : ""
      }

      <button onclick='resetCourseProgress(${JSON.stringify(courseTitle)})'>
        ${dt("resetProgress")}
      </button>
    </div>
  `;
}



function markLessonDone(courseTitle, lessonIndex) {
  saveCourse(courseTitle);

  const progress = getProgressData();

  if (!progress[courseTitle]) {
    progress[courseTitle] = [];
  }

  if (!progress[courseTitle].includes(lessonIndex)) {
    progress[courseTitle].push(lessonIndex);
  }

  saveProgressData(progress);

  renderCourseDetail(courseTitle);
  renderCourses();
  showSavedCourses();
}

function resetCourseProgress(courseTitle) {
  const confirmReset = confirm("Сбросить прогресс этого курса?");

  if (!confirmReset) return;

  const progress = getProgressData();
  progress[courseTitle] = [];
  saveProgressData(progress);

  renderCourseDetail(courseTitle);
  renderCourses();
  showSavedCourses();
}

function askAIAboutLesson(courseTitle, lessonTitle) {
  showPage("assistant");

  const input = document.getElementById("userMessage");

  input.value = `Объясни урок "${lessonTitle}" из курса "${courseTitle}" простым языком. Дай пример и короткое задание.`;

  sendMessage();
}

function showSavedCourses() {
  const box = document.getElementById("myCourses");
  if (!box) return;

  const savedCourses = profileGetSavedCourses();

  if (savedCourses.length === 0) {
    box.innerHTML = `
      <div class="empty-profile-message">
        Пока курсы не выбраны. Перейдите в раздел «Обучение» и начните первый курс.
      </div>
    `;
    return;
  }

  box.innerHTML = savedCourses.map(courseTitle => {
    const percent = profileGetCoursePercent(courseTitle);
    const status = percent === 100 ? "Завершён" : "В процессе";

    return `
      <div class="profile-course-card">
        <div class="profile-course-top">
          <h3>${courseTitle}</h3>
          <span class="profile-badge ${percent === 100 ? "done" : ""}">
            ${status}
          </span>
        </div>

        <div class="profile-progress">
          <b>Прогресс: ${percent}%</b>
          <div class="small-progress">
            <div class="small-progress-fill" style="width:${percent}%"></div>
          </div>
        </div>

        <button onclick='openCoursePage(${JSON.stringify(courseTitle)})'>
          Продолжить обучение
        </button>

        ${
          percent === 100
            ? `<button onclick='openCertificate(${JSON.stringify(courseTitle)})'>
                 Сертификат
               </button>`
            : ""
        }
      </div>
    `;
  }).join("");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderSafeText(value) {
  return escapeHtml(value).replace(/\n/g, "<br>");
}

function speakKidWithBrowserVoice(text) {
  if (!window.speechSynthesis || !text) {
    return false;
  }

  try {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ru-RU";
    utterance.rate = 0.92;
    utterance.pitch = 1.15;
    utterance.volume = 1;
    speechSynthesis.speak(utterance);
    return true;
  } catch (error) {
    console.error("Browser voice fallback error:", error);
    return false;
  }
}

async function sendMessage() {

  const input = document.getElementById("userMessage");
  const chatBox = document.getElementById("chatBox");

  const text = input.value.trim();

  if (!text) return;

  const messageId = "msg_" + Date.now();

  chatBox.innerHTML += `
    <div class="message user">
      <b>Ты:</b> ${text}
    </div>
  `;

  chatBox.innerHTML += `
    <div class="message bot" id="${messageId}">
      <b>AI:</b> Думаю...
    </div>
  `;

  input.value = "";

  try {

    const response = await fetch(
      "/ask-ai",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: text
        })
      }
    );

    const data = await response.json();

    const aiMessage =
      document.getElementById(messageId);

    if (aiMessage) {

      aiMessage.innerHTML =
        `<b>AI:</b> ${renderSafeText(data.answer)}`;

    }

  } catch (error) {

    console.error(error);

    const aiMessage =
      document.getElementById(messageId);

    if (aiMessage) {

      aiMessage.innerHTML =
        `<b>AI:</b> Ошибка соединения с сервером`;

    }

  }

  chatBox.scrollTop =
    chatBox.scrollHeight;
}

function generateDemoAIAnswer(text) {
  const lower = text.toLowerCase();

  if (lower.includes("python")) {
    return "Python — хороший язык для начала. Начни с переменных, условий, циклов и функций.";
  }

  if (lower.includes("дизайн")) {
    return "Для дизайна начни с цветов, композиции, шрифтов и Figma.";
  }

  if (lower.includes("англий")) {
    return "Для английского начни со слов, простых предложений, аудирования и ежедневной практики.";
  }

  if (lower.includes("курс")) {
    return "Сначала пройди диагностику. Потом система подберёт курс по твоему интересу и уровню.";
  }

  return "Сейчас это демо-ответ. На следующем шаге сюда можно подключить настоящий AI через API.";
}

function openModal() {
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

function toggleLang() {
  alert("Переключение RU/KZ добавим следующим шагом полностью.");
}

const diagnosticQuestions = [
  {
    question: "Какая сфера тебе больше всего интересна?",
    key: "interest",
    answers: ["Программирование", "Дизайн", "Бизнес", "Языки", "Наука", "Искусственный интеллект", "Психология", "Маркетинг"]
  },
  {
    question: "Зачем ты хочешь учиться?",
    key: "goal",
    answers: ["Для профессии", "Для учёбы", "Для себя", "Чтобы найти работу", "Чтобы начать проект"]
  },
  {
    question: "Какой у тебя уровень?",
    key: "level",
    answers: ["Новичок", "Немного знаю", "Средний", "Продвинутый"]
  },
  {
    question: "Как тебе удобнее учиться?",
    key: "style",
    answers: ["Видео", "Текст", "Практика", "Тесты", "Проекты"]
  },
  {
    question: "Сколько времени ты готов учиться в день?",
    key: "time",
    answers: ["10–15 минут", "30 минут", "1 час", "2 часа и больше"]
  },
  {
    question: "Что тебе сложнее всего?",
    key: "problem",
    answers: ["Понять теорию", "Запомнить материал", "Сделать практику", "Найти мотивацию", "Выбрать направление"]
  },
  {
    question: "Какой результат ты хочешь получить?",
    key: "result",
    answers: ["Найти подходящий курс", "Получить новую профессию", "Улучшить оценки", "Сделать проект", "Получить сертификат"]
  }
];

let currentQuestion = 0;
let diagnosticAnswers = {};

function startDiagnosticWizard() {
  currentQuestion = 0;
  diagnosticAnswers = {};

  document.getElementById("diagnosticResult").classList.add("hidden");
  document.getElementById("diagnosticLoading").classList.add("hidden");
  document.getElementById("questionBox").classList.remove("hidden");

  showDiagnosticQuestion();
}

function showDiagnosticQuestion() {
  const q = diagnosticQuestions[currentQuestion];

  document.getElementById("questionTitle").textContent =
    `Вопрос ${currentQuestion + 1} из ${diagnosticQuestions.length}: ${q.question}`;

  const answersBox = document.getElementById("answersBox");
  answersBox.innerHTML = "";

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = answer;
    btn.onclick = () => chooseDiagnosticAnswer(q.key, answer);
    answersBox.appendChild(btn);
  });

  const progress = (currentQuestion / diagnosticQuestions.length) * 100;
  document.getElementById("progressBar").style.width = progress + "%";
}

function chooseDiagnosticAnswer(key, answer) {
  diagnosticAnswers[key] = answer;
  currentQuestion++;

  if (currentQuestion < diagnosticQuestions.length) {
    showDiagnosticQuestion();
  } else {
    finishDiagnostic();
  }
}

function finishDiagnostic() {
  document.getElementById("questionBox").classList.add("hidden");
  document.getElementById("progressBar").style.width = "100%";
  document.getElementById("diagnosticLoading").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("diagnosticLoading").classList.add("hidden");
    showDiagnosticResult();
  }, 2500);
}

function showDiagnosticResult() {
  const interest = diagnosticAnswers.interest;
  const goal = diagnosticAnswers.goal;
  const level = diagnosticAnswers.level;
  const style = diagnosticAnswers.style;
  const problem = diagnosticAnswers.problem;
  const result = diagnosticAnswers.result;
  const selectedFormat = normalizeDiagnosticFormat(style);

  let profile = "Универсальный ученик";

  if (interest === "Программирование") {
    profile = "Будущий разработчик";
  } else if (interest === "Дизайн") {
    profile = "Креативный дизайнер";
  } else if (interest === "Бизнес") {
    profile = "Будущий предприниматель";
  } else if (interest === "Языки") {
    profile = "Коммуникативный ученик";
  } else if (interest === "Наука") {
    profile = "Исследователь";
  } else if (interest === "Искусственный интеллект") {
    profile = "AI-исследователь";
  } else if (interest === "Психология") {
    profile = "Ученик, который любит понимать людей";
  } else if (interest === "Маркетинг") {
    profile = "Будущий маркетолог";
  }

  const courseScores = courses.map(course => {
    let score = 45;

    if (interest === "Программирование" && course.area === "programming") score += 35;
    if (interest === "Дизайн" && course.area === "design") score += 35;
    if (interest === "Бизнес" && course.area === "business") score += 35;
    if (interest === "Языки" && course.area === "language") score += 35;
    if (interest === "Искусственный интеллект" && course.area === "ai") score += 35;

    if (interest === "Маркетинг" && course.title === "Маркетинг") score += 42;
    if (interest === "Маркетинг" && course.title === "Основы бизнеса") score += 20;
    if (interest === "Маркетинг" && course.title === "UX/UI дизайн") score += 14;

    if (interest === "Наука") {
      if (course.title === "Machine Learning") score += 35;
      if (course.title === "Искусственный интеллект") score += 30;
      if (course.title === "Python с нуля") score += 22;
    }

    if (interest === "Психология") {
      if (course.title === "UX/UI дизайн") score += 30;
      if (course.title === "Маркетинг") score += 25;
      if (course.title === "Английский язык") score += 20;
    }

    if (goal === "Для профессии" || goal === "Чтобы найти работу") {
      if (course.title === "Python с нуля") score += 10;
      if (course.title === "Web-разработка") score += 10;
      if (course.title === "UX/UI дизайн") score += 9;
      if (course.title === "Маркетинг") score += 8;
      if (course.title === "Machine Learning") score += 7;
    }

    if (goal === "Для учёбы") {
      if (course.title === "Английский язык") score += 10;
      if (course.title === "Python с нуля") score += 8;
      if (course.title === "Искусственный интеллект") score += 7;
    }

    if (goal === "Чтобы начать проект") {
      if (course.title === "Основы бизнеса") score += 12;
      if (course.title === "Web-разработка") score += 10;
      if (course.title === "Искусственный интеллект") score += 8;
      if (course.title === "Маркетинг") score += 8;
    }

    if (result === "Сделать проект") {
      if (course.title === "Web-разработка") score += 12;
      if (course.title === "Python с нуля") score += 10;
      if (course.title === "Искусственный интеллект") score += 8;
      if (course.title === "Основы бизнеса") score += 6;
    }

    if (result === "Получить новую профессию") {
      if (course.title === "Python с нуля") score += 9;
      if (course.title === "Web-разработка") score += 9;
      if (course.title === "UX/UI дизайн") score += 9;
      if (course.title === "Маркетинг") score += 9;
    }

    if (result === "Улучшить оценки") {
      if (course.title === "Английский язык") score += 10;
      if (course.title === "Python с нуля") score += 8;
      if (course.title === "Искусственный интеллект") score += 6;
    }

    if (level === "Новичок") {
      if (course.level === "Новичок") score += 12;
      if (course.level === "Продвинутый") score -= 20;
    }

    if (level === "Немного знаю") {
      if (course.level === "Новичок") score += 8;
      if (course.level === "Средний") score += 7;
    }

    if (level === "Средний") {
      if (course.level === "Средний") score += 12;
      if (course.level === "Новичок") score -= 3;
    }

    if (level === "Продвинутый") {
      if (course.level === "Продвинутый") score += 15;
      if (course.title === "Machine Learning") score += 12;
    }

    if (style === "Практика" || style === "Проекты") {
      if (course.title === "Python с нуля") score += 6;
      if (course.title === "Web-разработка") score += 6;
      if (course.title === "UX/UI дизайн") score += 5;
      if (course.title === "Основы бизнеса") score += 5;
    }

    if (problem === "Сделать практику") {
      if (course.title === "Web-разработка") score += 8;
      if (course.title === "Python с нуля") score += 8;
      if (course.title === "UX/UI дизайн") score += 6;
    }

    if (problem === "Выбрать направление") {
      if (course.level === "Новичок") score += 8;
    }

    if (score > 98) score = 98;
    if (score < 45) score = 45;

    return {
      title: course.title,
      score: score
    };
  });

  const recommendations = courseScores
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  localStorage.setItem("diagnosticResult", JSON.stringify({
    profile,
    answers: diagnosticAnswers,
    recommendations: recommendations.map(item => [item.title, item.score])
  }));

  const resultBox = document.getElementById("diagnosticResult");
  resultBox.classList.remove("hidden");

  resultBox.innerHTML = `
    <h2>Ваш учебный профиль: ${profile}</h2>

    <div class="result-card">
      <p><b>Интерес:</b> ${diagnosticAnswers.interest}</p>
      <p><b>Цель:</b> ${diagnosticAnswers.goal}</p>
      <p><b>Уровень:</b> ${diagnosticAnswers.level}</p>
      <p><b>Формат обучения:</b> ${diagnosticAnswers.style}</p>
      <p><b>Время в день:</b> ${diagnosticAnswers.time}</p>
      <p><b>Главная трудность:</b> ${diagnosticAnswers.problem}</p>
      <p><b>Желаемый результат:</b> ${diagnosticAnswers.result}</p>
    </div>

    <h2>Подходящие курсы</h2>

    <div class="diagnostic-course-grid">
      ${recommendations.map(item => {
        const course = courses.find(c => c.title === item.title);
        const percent = getCourseProgressPercent(course.title);

        return `
          <div class="diagnostic-course-card">
            <img src="${course.image}" alt="${course.title}">

            <div class="diagnostic-course-content">
              <span class="course-category">${trCourseArea(course.area)}</span>

              <h3>${trCourseTitle(course.title)}</h3>

              <p class="diagnostic-match">
                Совпадение: <b>${item.score}%</b>
              </p>

              <div class="match-bar">
                <div class="match-fill" style="width:${item.score}%"></div>
              </div>

              <p><b>Уровень:</b> ${course.level}</p>
              <p><b>Длительность:</b> ${course.duration}</p>
              <p><b>Уроков:</b> ${course.lessons}</p>
              <p><b>Рейтинг:</b> ⭐ ${course.rating}</p>

              <div class="profile-progress">
                <b>Ваш прогресс: ${percent}%</b>
                <div class="small-progress">
                  <div class="small-progress-fill" style="width:${percent}%"></div>
                </div>
              </div>

              <div class="diagnostic-course-actions">
                <button onclick='addCourseToProfile(${JSON.stringify(course.title)})'>
                  Добавить в личный кабинет
                </button>

                <button onclick='openCoursePage(${JSON.stringify(course.title)})'>
                  Открыть курс
                </button>
              </div>
            </div>
          </div>
        `;
      }).join("")}
    </div>

    <div class="result-card">
      <h3>AI-рекомендация</h3>
      <p>
        Эти курсы подобраны по вашим ответам: интересу, цели, уровню,
        формату обучения, сложности и желаемому результату.
        Начните с курса с самым высоким процентом совпадения.
      </p>
    </div>

    <button onclick="startDiagnosticWizard()">Пройти заново</button>
    <button onclick="showPage('courses')">Все курсы</button>
  `;

  showSavedDiagnostic();
}

function showSavedDiagnostic() {
  const box = document.getElementById("myDiagnostic");
  if (!box) return;

  const saved = localStorage.getItem("diagnosticResult");

  if (!saved) {
    box.innerHTML = "Пока диагностика не пройдена";
    return;
  }

  const data = JSON.parse(saved);

  box.innerHTML = `
    <p><b>Профиль:</b> ${data.profile}</p>
    <p><b>Интерес:</b> ${data.answers.interest}</p>
    <p><b>Уровень:</b> ${data.answers.level}</p>
    <h3>Рекомендуемые курсы:</h3>
    ${data.recommendations.map(item => `<p>${item[0]} — ${item[1]}%</p>`).join("")}
  `;
}



function getStudentName() {
  const savedName = localStorage.getItem("studentName");

  if (savedName) {
    return savedName;
  }

  return "Студент SmartLearn AI";
}

function saveStudentName() {
  const input = document.getElementById("certificateNameInput");

  if (!input) return;

  const name = input.value.trim();

  if (!name) {
    alert("Введите имя для сертификата");
    return;
  }

  localStorage.setItem("studentName", name);

  const courseTitle = input.dataset.course;
  renderCertificate(courseTitle);
}

function openCertificate(courseTitle) {
  const percent = getCourseProgressPercent(courseTitle);

  if (percent < 100) {
    alert("Сертификат доступен только после прохождения 100% курса.");
    return;
  }

  showPage("certificatePage");
  renderCertificate(courseTitle);
}

function renderCertificate(courseTitle) {
  const box = document.getElementById("certificateBox");
  const studentName = getStudentName();

  const today = new Date();
  const date = today.toLocaleDateString("ru-RU");

  box.innerHTML = `
    <div class="certificate-wrapper">
      <div class="certificate">
        <h1>Сертификат</h1>

        <p class="certificate-subtitle">
          Настоящий сертификат подтверждает, что
        </p>

        <div class="certificate-name">
          ${studentName}
        </div>

        <p class="certificate-subtitle">
          успешно завершил(а) курс
        </p>

        <div class="certificate-course">
          «${courseTitle}»
        </div>

        <p>
          на образовательной платформе SmartLearn AI
        </p>

        <div class="certificate-date">
          Дата выдачи: ${date}
        </div>

        <div class="certificate-footer">
          <div class="certificate-sign">
            SmartLearn AI
          </div>

          <div class="certificate-sign">
            AI Education Platform
          </div>
        </div>
      </div>

      <div class="certificate-actions">
        <input
          id="certificateNameInput"
          class="certificate-input"
          data-course="${courseTitle}"
          placeholder="Введите имя для сертификата"
          value="${studentName === "Студент SmartLearn AI" ? "" : studentName}"
        >

        <button onclick="saveStudentName()">
          Сохранить имя
        </button>

        <button onclick="printCertificate()">
          Скачать / распечатать
        </button>

        <button onclick='showPage("courseDetail"); renderCourseDetail(${JSON.stringify(courseTitle)})'>
          Вернуться к курсу
        </button>
      </div>
    </div>
  `;
}

function printCertificate() {
  window.print();
}
function profileGetSavedCourses() {
  return JSON.parse(localStorage.getItem("myCourses")) || [];
}

function profileGetProgressData() {
  return JSON.parse(localStorage.getItem("courseProgress")) || {};
}

function profileGetCoursePercent(courseTitle) {
  if (typeof getCourseProgressPercent === "function") {
    return getCourseProgressPercent(courseTitle);
  }

  const lessons = courseLessons[courseTitle] || [];
  const progress = profileGetProgressData();
  const doneLessons = progress[courseTitle] || [];

  if (lessons.length === 0) return 0;

  return Math.round((doneLessons.length / lessons.length) * 100);
}

function renderProfileDashboard() {
  renderProfileStats();
  renderProfileLearningPath();
  renderProfileCertificates();
}

function renderProfileStats() {
  const box = document.getElementById("profileStats");
  if (!box) return;

  const savedCourses = profileGetSavedCourses();
  const completedCourses = savedCourses.filter(courseTitle => profileGetCoursePercent(courseTitle) === 100);
  const certificates = completedCourses.length;

  const allProgress = savedCourses.map(courseTitle => profileGetCoursePercent(courseTitle));
  const averageProgress = allProgress.length
    ? Math.round(allProgress.reduce((sum, item) => sum + item, 0) / allProgress.length)
    : 0;

  box.innerHTML = `
    <div class="profile-stat-card">
      <h3>${savedCourses.length}</h3>
      <p>выбранных курсов</p>
    </div>

    <div class="profile-stat-card">
      <h3>${completedCourses.length}</h3>
      <p>завершённых курсов</p>
    </div>

    <div class="profile-stat-card">
      <h3>${averageProgress}%</h3>
      <p>средний прогресс</p>
    </div>

    <div class="profile-stat-card">
      <h3>${certificates}</h3>
      <p>сертификатов</p>
    </div>
  `;
}

function renderProfileLearningPath() {
  const box = document.getElementById("profileLearningPath");
  if (!box) return;

  const savedDiagnostic = localStorage.getItem("diagnosticResult");
  const savedCourses = profileGetSavedCourses();

  if (!savedDiagnostic && savedCourses.length === 0) {
    box.innerHTML = `
      <div class="empty-profile-message">
        Пройдите диагностику или начните курс, чтобы увидеть персональный учебный путь.
      </div>
    `;
    return;
  }

  let profileName = "Персональный путь обучения";
  let recommendations = [];

  if (savedDiagnostic) {
    const diagnostic = JSON.parse(savedDiagnostic);
    profileName = diagnostic.profile;
    recommendations = diagnostic.recommendations || [];
  }

  box.innerHTML = `
    <h3>${profileName}</h3>

    <div class="profile-path-list">
      <div class="profile-path-item">
        <div class="profile-path-number">1</div>
        <div>
          <b>Пройти диагностику</b>
          <p>Система определяет интересы, уровень и цель обучения.</p>
        </div>
      </div>

      <div class="profile-path-item">
        <div class="profile-path-number">2</div>
        <div>
          <b>Выбрать подходящий курс</b>
          <p>
            ${
              recommendations.length
                ? `Лучший старт: ${recommendations[0][0]} — ${recommendations[0][1]}% совпадения.`
                : "Выберите курс из каталога SmartLearn AI."
            }
          </p>
        </div>
      </div>

      <div class="profile-path-item">
        <div class="profile-path-number">3</div>
        <div>
          <b>Проходить уроки и задавать вопросы AI</b>
          <p>После каждого урока можно использовать AI-помощника для объяснений и заданий.</p>
        </div>
      </div>

      <div class="profile-path-item">
        <div class="profile-path-number">4</div>
        <div>
          <b>Получить сертификат</b>
          <p>Сертификат открывается после 100% прохождения курса.</p>
        </div>
      </div>
    </div>
  `;
}

function renderProfileCertificates() {
  const box = document.getElementById("profileCertificates");
  if (!box) return;

  const savedCourses = profileGetSavedCourses();
  const completedCourses = savedCourses.filter(courseTitle => profileGetCoursePercent(courseTitle) === 100);

  if (completedCourses.length === 0) {
    box.innerHTML = `
      <div class="empty-profile-message">
        Сертификаты появятся здесь после завершения курса на 100%.
      </div>
    `;
    return;
  }

  box.innerHTML = completedCourses.map(courseTitle => `
    <div class="certificate-mini">
      <h3>Сертификат</h3>
      <p>Курс: <b>${courseTitle}</b></p>
      <p>Платформа: SmartLearn AI</p>

      <button onclick='openCertificate(${JSON.stringify(courseTitle)})'>
        Открыть сертификат
      </button>
    </div>
  `).join("");
}
const translations = {
  ru: {
    homeTitle: "SmartLearn AI — платформа для персонального онлайн-обучения",
    homeText: "Проходите диагностику, выбирайте курсы, обучайтесь по урокам, отслеживайте прогресс и получайте помощь от искусственного интеллекта.",
    diagnosticBtn: "Пройти диагностику",
    coursesBtn: "Смотреть курсы",
    aiHelper: "AI помощник",
    aiHelperText: "Объясняет темы, помогает с уроками и отвечает на вопросы.",
    progressTitle: "Прогресс обучения",

    howWorks: "Как это работает",
    userPath: "Путь пользователя в SmartLearn AI",
    advantages: "Преимущества",
    whyComfortable: "Почему платформа удобна для обучения",

    coursesTitle: "Обучение",
    profileTitle: "Личный кабинет",
    diagnosticTitle: "Диагностика",
    assistantTitle: "AI-помощник",

    myCourses: "Мои курсы",
    myDiagnostic: "Моя диагностика",
    learningPath: "Мой учебный путь",
    certificates: "Мои сертификаты",

    startLearning: "Начать обучение",
    more: "Подробнее",
    continueLearning: "Продолжить обучение",
    lessonDone: "Урок пройден",
    askAI: "Спросить AI",
    getCertificate: "Получить сертификат",

    statCourses: "учебных курса",
    statAssistant: "персональный помощник",
    statFree: "бесплатный доступ",
    statCertificates: "сертификаты",

    finalTitle: "Начните обучение уже сейчас",
    finalText: "Пройдите диагностику, выберите направление и начните свой персональный учебный путь.",
    startDiagnostic: "Начать диагностику",
    askAIButton: "Спросить AI",

    stepDiagnostic: "Диагностика",
    stepRecommendations: "Рекомендации",
    stepLearning: "Обучение",
    stepCertificate: "Сертификат",

    personalApproach: "Персональный подход",
    personalApproachText: "Диагностика помогает подобрать курс под цель, интересы и уровень пользователя.",
    realAI: "Настоящий AI-помощник",
    realAIText: "AI отвечает на вопросы, объясняет сложные темы и помогает внутри уроков.",
    featureProgressTitle: "Прогресс обучения",
    featureProgressText: "Пользователь видит процент прохождения каждого курса в личном кабинете.",
    featureCertificatesTitle: "Сертификаты",
    featureCertificatesText: "После завершения курса можно открыть и сохранить сертификат в PDF.",
    featureFreeTitle: "Бесплатный доступ",
    featureFreeText: "Платформа создана как доступный образовательный сервис для всех пользователей.",
    modernFormat: "Современный формат",
    modernFormatText: "Сайт объединяет курсы, AI, диагностику, личный кабинет и учебную аналитику."
  },

  kz: {
    homeTitle: "SmartLearn AI — жеке онлайн оқыту платформасы",
    homeText: "Диагностикадан өтіп, курстарды таңдаңыз, сабақ оқыңыз, прогресті бақылаңыз және жасанды интеллект көмегін алыңыз.",
    diagnosticBtn: "Диагностикадан өту",
    coursesBtn: "Курстарды көру",
    aiHelper: "AI көмекші",
    aiHelperText: "Тақырыптарды түсіндіреді, сабақтарға көмектеседі және сұрақтарға жауап береді.",
    progressTitle: "Оқу прогресі",

    howWorks: "Бұл қалай жұмыс істейді",
    userPath: "SmartLearn AI платформасындағы пайдаланушы жолы",
    advantages: "Артықшылықтар",
    whyComfortable: "Платформа неге оқуға ыңғайлы",

    coursesTitle: "Оқу",
    profileTitle: "Жеке кабинет",
    diagnosticTitle: "Диагностика",
    assistantTitle: "AI көмекші",

    myCourses: "Менің курстарым",
    myDiagnostic: "Менің диагностикам",
    learningPath: "Менің оқу жолым",
    certificates: "Менің сертификаттарым",

    startLearning: "Оқуды бастау",
    more: "Толығырақ",
    continueLearning: "Оқуды жалғастыру",
    lessonDone: "Сабақ өтті",
    askAI: "AI-дан сұрау",
    getCertificate: "Сертификат алу",

    statCourses: "оқу курсы",
    statAssistant: "жеке көмекші",
    statFree: "тегін қолжетімділік",
    statCertificates: "сертификаттар",

    finalTitle: "Оқуды қазір бастаңыз",
    finalText: "Диагностикадан өтіп, бағытты таңдаңыз және жеке оқу жолыңызды бастаңыз.",
    startDiagnostic: "Диагностиканы бастау",
    askAIButton: "AI-дан сұрау",

    stepDiagnostic: "Диагностика",
    stepRecommendations: "Ұсынымдар",
    stepLearning: "Оқу",
    stepCertificate: "Сертификат",

    personalApproach: "Жеке тәсіл",
    personalApproachText: "Диагностика пайдаланушының мақсатына, қызығушылығына және деңгейіне сай курс таңдауға көмектеседі.",
    realAI: "Нағыз AI-көмекші",
    realAIText: "AI сұрақтарға жауап береді, күрделі тақырыптарды түсіндіреді және сабақ ішінде көмектеседі.",
    featureProgressTitle: "Оқу прогресі",
    featureProgressText: "Пайдаланушы жеке кабинетте әр курстың өту пайызын көреді.",
    featureCertificatesTitle: "Сертификаттар",
    featureCertificatesText: "Курс аяқталғаннан кейін сертификатты ашып, PDF ретінде сақтауға болады.",
    featureFreeTitle: "Тегін қолжетімділік",
    featureFreeText: "Платформа барлық пайдаланушыларға қолжетімді білім беру сервисі ретінде жасалған.",
    modernFormat: "Заманауи формат",
    modernFormatText: "Сайт курстарды, AI-ды, диагностиканы, жеке кабинетті және оқу аналитикасын біріктіреді."
  }
};

function setLanguage(lang) {
  localStorage.setItem("siteLanguage", lang);

  if (typeof renderCourses === "function") {
    renderCourses();
  }

  if (typeof showSavedCourses === "function") {
    showSavedCourses();
  }

  if (typeof renderProfileDashboard === "function") {
    renderProfileDashboard();
  }

  applyLanguage();
}

function normalizeTextForTranslate(text) {
  return text.replace(/\s+/g, " ").trim();
}

function replaceTextVariants(variants, newText) {
  const elements = document.querySelectorAll("h1, h2, h3, p, span, button, b");

  elements.forEach(element => {
    const currentText = normalizeTextForTranslate(element.textContent);

    const found = variants.some(item => {
      return normalizeTextForTranslate(item) === currentText;
    });

    if (element.childNodes.length === 1 && found) {
      element.textContent = newText;
    }
  });
}

function translateKey(key) {
  const lang = localStorage.getItem("siteLanguage") || "ru";

  if (!translations[lang] || !translations[lang][key]) return;

  const variants = [];

  if (translations.ru && translations.ru[key]) {
    variants.push(translations.ru[key]);
  }

  if (translations.kz && translations.kz[key]) {
    variants.push(translations.kz[key]);
  }

  replaceTextVariants(variants, translations[lang][key]);
}

function applyLanguage() {
  const keys = [
    "homeTitle",
    "homeText",
    "diagnosticBtn",
    "coursesBtn",
    "aiHelper",
    "aiHelperText",
    "progressTitle",

    "howWorks",
    "userPath",
    "advantages",
    "whyComfortable",

    "coursesTitle",
    "profileTitle",
    "diagnosticTitle",
    "assistantTitle",

    "myCourses",
    "myDiagnostic",
    "learningPath",
    "certificates",

    "startLearning",
    "more",
    "continueLearning",
    "lessonDone",
    "askAI",
    "getCertificate",

    "statCourses",
    "statAssistant",
    "statFree",
    "statCertificates",

    "finalTitle",
    "finalText",
    "startDiagnostic",
    "askAIButton",

    "stepDiagnostic",
    "stepRecommendations",
    "stepLearning",
    "stepCertificate",

    "personalApproach",
    "personalApproachText",
    "realAI",
    "realAIText",
    "featureProgressTitle",
    "featureProgressText",
    "featureCertificatesTitle",
    "featureCertificatesText",
    "featureFreeTitle",
    "featureFreeText",
    "modernFormat",
    "modernFormatText"
  ];

  keys.forEach(key => translateKey(key));
}


const dynamicTranslations = {
  ru: {
    lessonsWord: "уроков",
    level: "Уровень",
    progress: "Прогресс",
    more: "Подробнее",
    startLearning: "Начать обучение",
    duration: "Длительность",
    lessonsCount: "Количество уроков",
    rating: "Рейтинг",
    courseProgress: "Прогресс курса",
    courseProgram: "Программа курса",
    lessonDone: "Урок пройден",
    lessonNotDone: "Урок ещё не пройден",
    askAI: "Спросить AI",
    courseCompleted: "Курс завершён!",
    completedText: "Вы прошли все уроки и можете получить сертификат.",
    getCertificate: "Получить сертификат",
    resetProgress: "Сбросить прогресс",
    continueLearning: "Продолжить обучение",
    certificate: "Сертификат",
    status: "Статус",
    completed: "Завершён",
    inProgress: "В процессе",

areas: {
  programming: "Программирование",
  design: "Дизайн",
  business: "Бизнес",
  language: "Языки",
  ai: "AI"
},

    courses: {
      "Python с нуля": "Python с нуля",
      "Web-разработка": "Web-разработка",
      "UX/UI дизайн": "UX/UI дизайн",
      "Графический дизайн": "Графический дизайн",
      "Основы бизнеса": "Основы бизнеса",
      "Маркетинг": "Маркетинг",
      "Английский язык": "Английский язык",
      "Искусственный интеллект": "Искусственный интеллект",
      "Machine Learning": "Machine Learning"
    }
  },

  kz: {
    lessonsWord: "сабақ",
    level: "Деңгей",
    progress: "Прогресс",
    more: "Толығырақ",
    startLearning: "Оқуды бастау",
    duration: "Ұзақтығы",
    lessonsCount: "Сабақ саны",
    rating: "Рейтинг",
    courseProgress: "Курс прогресі",
    courseProgram: "Курс бағдарламасы",
    lessonDone: "Сабақ өтті",
    lessonNotDone: "Сабақ әлі өтпеді",
    askAI: "AI-дан сұрау",
    courseCompleted: "Курс аяқталды!",
    completedText: "Сіз барлық сабақтарды аяқтадыңыз және сертификат ала аласыз.",
    getCertificate: "Сертификат алу",
    resetProgress: "Прогресті өшіру",
    continueLearning: "Оқуды жалғастыру",
    certificate: "Сертификат",
    status: "Күйі",
    completed: "Аяқталды",
    inProgress: "Оқылып жатыр",

areas: {
  programming: "Бағдарламалау",
  design: "Дизайн",
  business: "Бизнес",
  language: "Тілдер",
  ai: "AI"
},

    courses: {
      "Python с нуля": "Python нөлден бастап",
      "Web-разработка": "Web-әзірлеу",
      "UX/UI дизайн": "UX/UI дизайн",
      "Графический дизайн": "Графикалық дизайн",
      "Основы бизнеса": "Бизнес негіздері",
      "Маркетинг": "Маркетинг",
      "Английский язык": "Ағылшын тілі",
      "Искусственный интеллект": "Жасанды интеллект",
      "Machine Learning": "Машиналық оқыту"
    }
  }
};

const lessonTranslationsKz = {
  "Что такое Python и где он используется": "Python деген не және қайда қолданылады",
  "Переменные и типы данных": "Айнымалылар және дерек түрлері",
  "Условия if / else": "if / else шарттары",
  "Циклы for и while": "for және while циклдері",
  "Функции и мини-проект": "Функциялар және шағын жоба",

  "Как работает сайт": "Сайт қалай жұмыс істейді",
  "HTML структура страницы": "HTML бет құрылымы",
  "CSS стили и адаптивность": "CSS стильдері және бейімделу",
  "JavaScript для интерактива": "Интерактив үшін JavaScript",
  "Создание первого сайта": "Алғашқы сайт жасау",

  "Что такое UX и UI": "UX және UI деген не",
  "Цвета, шрифты и композиция": "Түстер, қаріптер және композиция",
  "Работа в Figma": "Figma-мен жұмыс",
  "Прототипирование интерфейса": "Интерфейс прототипін жасау",
  "Дизайн мобильного приложения": "Мобильді қосымша дизайны",

  "Основы визуального дизайна": "Визуалды дизайн негіздері",
  "Композиция и сетки": "Композиция және торлар",
  "Цветовые палитры": "Түс палитралары",
  "Типографика": "Типографика",
  "Создание постера": "Постер жасау",

  "Что такое бизнес-модель": "Бизнес-модель деген не",
  "Клиент и проблема": "Клиент және мәселе",
  "Продукт и ценность": "Өнім және құндылық",
  "Доходы и расходы": "Кірістер мен шығындар",
  "Мини-бизнес-план": "Шағын бизнес-жоспар",

  "Что такое маркетинг": "Маркетинг деген не",
  "Целевая аудитория": "Мақсатты аудитория",
  "Продвижение в соцсетях": "Әлеуметтік желілерде жылжыту",
  "Реклама и контент": "Жарнама және контент",
  "Маркетинговая стратегия": "Маркетинг стратегиясы",

  "Базовая грамматика": "Негізгі грамматика",
  "Самые нужные слова": "Ең қажетті сөздер",
  "Простые предложения": "Қарапайым сөйлемдер",
  "Аудирование": "Тыңдалым",
  "Разговорная практика": "Сөйлеу практикасы",

  "Что такое искусственный интеллект": "Жасанды интеллект деген не",
  "Как работают нейросети": "Нейрондық желілер қалай жұмыс істейді",
  "AI в жизни и бизнесе": "AI өмірде және бизнесте",
  "Промпты для AI": "AI үшін промпттар",
  "Создание AI-проекта": "AI жобасын жасау",

  "Что такое машинное обучение": "Машиналық оқыту деген не",
  "Данные и признаки": "Деректер және белгілер",
  "Обучение модели": "Модельді оқыту",
  "Оценка результата": "Нәтижені бағалау",
  "Практический ML-проект": "Практикалық ML жоба"
};

function getCurrentLang() {
  return localStorage.getItem("siteLanguage") || "ru";
}

function dt(key) {
  const lang = getCurrentLang();

  if (dynamicTranslations[lang] && dynamicTranslations[lang][key]) {
    return dynamicTranslations[lang][key];
  }

  if (dynamicTranslations.ru && dynamicTranslations.ru[key]) {
    return dynamicTranslations.ru[key];
  }

  return key;
}

function trCourseTitle(title) {
  const lang = getCurrentLang();

  if (
    dynamicTranslations[lang] &&
    dynamicTranslations[lang].courses &&
    dynamicTranslations[lang].courses[title]
  ) {
    return dynamicTranslations[lang].courses[title];
  }

  return title;
}

function trCourseArea(area) {
  const lang = getCurrentLang();

  if (
    dynamicTranslations[lang] &&
    dynamicTranslations[lang].areas &&
    dynamicTranslations[lang].areas[area]
  ) {
    return dynamicTranslations[lang].areas[area];
  }

  return area;
}
function trLessonTitle(lesson) {
  const lang = getCurrentLang();

  if (lang === "kz") {
    return lessonTranslationsKz[lesson] || lesson;
  }

  return lesson;
}

function getAutoLessonDetail(courseTitle, lessonTitle) {
  const audioList = [
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
  ];

  const lessonIndex = Math.abs(lessonTitle.length % audioList.length);
  const audioUrl = audioList[lessonIndex];

  const courseMedia = {
    "Python с нуля": {
      videoTitle: "Python Full Course for Beginners",
      videoUrl: "https://www.youtube.com/embed/_uQrJ0TkZlc",
      videoPageUrl: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
      tags: ["Python", "код", "программирование"]
    },

    "Web-разработка": {
      videoTitle: "HTML CSS JavaScript Crash Course",
      videoUrl: "https://www.youtube.com/embed/O9Uauq-Gd0c",
      videoPageUrl: "https://www.youtube.com/watch?v=O9Uauq-Gd0c",
      tags: ["HTML", "CSS", "JavaScript"]
    },

    "UX/UI дизайн": {
      videoTitle: "UI / UX Design Tutorial",
      videoUrl: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
      videoPageUrl: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU",
      tags: ["UX", "UI", "Figma"]
    },

    "Графический дизайн": {
      videoTitle: "Graphic Design Basics",
      videoUrl: "https://www.youtube.com/embed/YqQx75OPRa0",
      videoPageUrl: "https://www.youtube.com/watch?v=YqQx75OPRa0",
      tags: ["дизайн", "композиция", "визуал"]
    },

    "Основы бизнеса": {
      videoTitle: "Business Model Canvas Explained",
      videoUrl: "https://www.youtube.com/embed/QoAOzMTLP5s",
      videoPageUrl: "https://www.youtube.com/watch?v=QoAOzMTLP5s",
      tags: ["business", "startup", "model"]
    },

    "Маркетинг": {
      videoTitle: "Marketing Basics for Beginners",
      videoUrl: "https://www.youtube.com/embed/Urny4oFBbto",
      videoPageUrl: "https://www.youtube.com/watch?v=Urny4oFBbto",
      tags: ["marketing", "SMM", "content"]
    },

    "Английский язык": {
      videoTitle: "English for Beginners",
      videoUrl: "https://www.youtube.com/embed/AVYfyTvc9KY",
      videoPageUrl: "https://www.youtube.com/watch?v=AVYfyTvc9KY",
      tags: ["English", "grammar", "speaking"]
    },

    "Искусственный интеллект": {
      videoTitle: "AI Course for Beginners",
      videoUrl: "https://www.youtube.com/embed/Yq0QkCxoTHM",
      videoPageUrl: "https://www.youtube.com/watch?v=Yq0QkCxoTHM",
      tags: ["AI", "нейросети", "технологии"]
    },

    "Machine Learning": {
      videoTitle: "Machine Learning Full Course",
      videoUrl: "https://www.youtube.com/embed/GwIo3gDZCVQ",
      videoPageUrl: "https://www.youtube.com/watch?v=GwIo3gDZCVQ",
      tags: ["ML", "данные", "модель"]
    }
  };

  const media = courseMedia[courseTitle] || {
    videoTitle: "Educational Course Video",
    videoUrl: "https://www.youtube.com/embed/O9Uauq-Gd0c",
    videoPageUrl: "https://www.youtube.com/watch?v=O9Uauq-Gd0c",
    tags: ["курс", "обучение", "практика"]
  };

  return {
    videoTitle: media.videoTitle,
    videoUrl: media.videoUrl,
    videoPageUrl: media.videoPageUrl,
    audioTitle: "Аудио-конспект: " + lessonTitle,
    audioUrl: audioUrl,
    text: `В этом уроке изучается тема «${lessonTitle}» из курса «${courseTitle}». Урок помогает понять основную идею темы, увидеть практическое применение и подготовиться к выполнению задания. Материал можно изучить через видео, аудио-конспект и текстовое объяснение.`,
    task: `Изучите тему «${lessonTitle}», затем напишите краткий конспект из 3–5 предложений и придумайте один пример применения этой темы на практике.`,
    tags: media.tags
  };
}

let currentFeynmanCourse = "";
let currentFeynmanLesson = "";
let feynmanDialogHistory = [];

function openFeynmanMode(courseTitle, lessonTitle) {
  currentFeynmanCourse = courseTitle;
  currentFeynmanLesson = lessonTitle;

  const modal = document.getElementById("feynmanModal");
  const topic = document.getElementById("feynmanTopic");
  const text = document.getElementById("feynmanText");
  const answer = document.getElementById("feynmanAnswer");
  const status = document.getElementById("kidStatus");

  topic.textContent = lessonTitle;
  text.value = "";
  answer.classList.add("hidden");
  answer.innerHTML = "";
  status.textContent = "Я готов слушать 👂";
  feynmanDialogHistory = [];

  modal.classList.remove("hidden");

  speakKid(`Привет! Объясни мне тему ${lessonTitle} так, будто мне семь лет.`);
}

function closeFeynmanMode() {
  document.getElementById("feynmanModal").classList.add("hidden");
  stopKidSpeaking();
}

let currentKidAudio = null;
let currentKidAudioUrl = null;

async function speakKid(text) {
  const avatar = document.getElementById("kidAvatarBox");
  const status = document.getElementById("kidStatus");

  stopKidSpeaking();

  if (avatar) {
    avatar.classList.add("talking");
  }

  if (status) {
    status.textContent = "AI Junior говорит 💬";
  }

  try {
    const response = await fetch("/tts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: text
      })
    });

    if (!response.ok) {
      throw new Error("TTS request failed");
    }

    const audioBlob = await response.blob();

    currentKidAudioUrl = URL.createObjectURL(audioBlob);
    currentKidAudio = new Audio(currentKidAudioUrl);

    currentKidAudio.onended = () => {
      if (avatar) {
        avatar.classList.remove("talking");
      }

      if (status) {
        status.textContent = "Теперь я слушаю 👂";
      }

      if (currentKidAudioUrl) {
        URL.revokeObjectURL(currentKidAudioUrl);
        currentKidAudioUrl = null;
      }

      currentKidAudio = null;
    };

    currentKidAudio.onerror = () => {
      if (avatar) {
        avatar.classList.remove("talking");
      }

      if (status) {
        status.textContent = "Голос не сработал, ответ смотри на экране";
      }
    };

    await currentKidAudio.play();

  } catch (error) {
    console.error("TTS FRONTEND ERROR:", error);

    const browserVoiceStarted = speakKidWithBrowserVoice(text);

    if (browserVoiceStarted) {
      if (status) {
        status.textContent = "AI Junior говорит через голос браузера 💬";
      }
      return;
    }

    if (avatar) {
      avatar.classList.remove("talking");
    }

    if (status) {
      status.textContent = "Голос не сработал, ответ смотри на экране";
    }
  }
}

function stopKidSpeaking() {
  if (window.speechSynthesis) {
    speechSynthesis.cancel();
  }

  if (currentKidAudio) {
    currentKidAudio.pause();
    currentKidAudio.currentTime = 0;
    currentKidAudio = null;
  }

  if (currentKidAudioUrl) {
    URL.revokeObjectURL(currentKidAudioUrl);
    currentKidAudioUrl = null;
  }

  const avatar = document.getElementById("kidAvatarBox");

  if (avatar) {
    avatar.classList.remove("talking");
  }
}

function startFeynmanVoice() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Ваш браузер не поддерживает распознавание голоса. Можно написать объяснение текстом.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "ru-RU";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  const status = document.getElementById("kidStatus");
  status.textContent = "Слушаю твоё объяснение 🎤";

  recognition.start();

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    const textArea = document.getElementById("feynmanText");

    textArea.value = transcript;
    status.textContent = "Я услышал. Теперь можешь проверить объяснение ✅";
  };

  recognition.onerror = function() {
    status.textContent = "Не получилось распознать голос. Напиши текст вручную.";
  };
}

async function sendFeynmanExplanation() {
  const text = document.getElementById("feynmanText").value.trim();
  const answer = document.getElementById("feynmanAnswer");
  const status = document.getElementById("kidStatus");

  if (!text) {
    alert("Сначала объясни тему текстом или голосом.");
    return;
  }

  feynmanDialogHistory.push({
    role: "student",
    text: text
  });

  answer.classList.remove("hidden");
  answer.innerHTML = `
    <h3>AI Junior думает...</h3>
    <p>Я слушаю твоё объяснение и пытаюсь понять тему.</p>
  `;

  status.textContent = "Думаю над объяснением 🤔";

  try {
    const response = await fetch("/feynman-check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        courseTitle: currentFeynmanCourse,
        lessonTitle: currentFeynmanLesson,
        explanation: text,
        dialogHistory: feynmanDialogHistory
      })
    });

    const data = await response.json();

    feynmanDialogHistory.push({
      role: "kid",
      text: data.kidReply + " " + data.nextQuestion
    });

    answer.innerHTML = `
      <h3>Ответ AI Junior</h3>

      <p><b>Оценка понимания:</b> ${data.score}%</p>

      <p><b>Что получилось хорошо:</b><br>
      ${renderSafeText(data.whatIsGood)}</p>

      <p><b>Что нужно объяснить лучше:</b><br>
      ${renderSafeText(data.whatIsMissing)}</p>

      <p><b>AI Junior:</b><br>
      ${renderSafeText(data.kidReply)}</p>

      <p><b>Вопрос малыша:</b><br>
      ${renderSafeText(data.nextQuestion)}</p>

      <button onclick="answerKidQuestion()" class="lesson-resource-link">
        Ответить на вопрос малыша
      </button>
    `;

    speakKid(data.kidReply + " " + data.nextQuestion);

  } catch (error) {
    console.error(error);

    answer.innerHTML = `
      <h3>Ошибка</h3>
      <p>Не получилось отправить объяснение на AI-проверку. Проверь, запущен ли сервер через node server.js.</p>
    `;

    status.textContent = "Ошибка соединения";
  }
}
function answerKidQuestion() {
  const textArea = document.getElementById("feynmanText");
  const status = document.getElementById("kidStatus");

  textArea.value = "";
  textArea.placeholder = "Ответь на вопрос малыша простыми словами...";
  textArea.focus();

  status.textContent = "Жду твой ответ на мой вопрос 👂";

  speakKid("Хорошо. Ответь на мой вопрос простыми словами.");
}
function calculateFeynmanScore(text) {
  let score = 30;

  if (text.length > 80) score += 20;
  if (text.length > 180) score += 15;

  const simpleWords = ["например", "это", "когда", "потому что", "зачем", "можно", "похоже"];
  simpleWords.forEach(word => {
    if (text.toLowerCase().includes(word)) {
      score += 5;
    }
  });

  if (score > 100) score = 100;

  return score;
}
function resetProfileCourses() {
  const confirmReset = confirm("Удалить все курсы из личного кабинета?");

  if (!confirmReset) {
    return;
  }

  localStorage.removeItem("myCourses");

  showSavedCourses();

  if (typeof renderProfileStats === "function") {
    renderProfileStats();
  }

  if (typeof renderProfileLearningPath === "function") {
    renderProfileLearningPath();
  }

  if (typeof renderProfileCertificates === "function") {
    renderProfileCertificates();
  }

  if (typeof renderCourses === "function") {
    renderCourses();
  }
}

function renderCareerBarometer() {
  const list = document.getElementById("careerBarometerList");
  const bestBox = document.getElementById("careerBestChoice");
  const goalSelect = document.getElementById("careerGoalSelect");

  if (!list || !goalSelect) {
    return;
  }

  const selectedGoal = goalSelect.value;

  let items = courses
    .map(course => {
      const data = careerBarometerData[course.title];

      if (!data) {
        return null;
      }

      const efficiency = Math.round(
        data.careerValue * 0.6 +
        (100 - data.difficulty) * 0.2 +
        (100 - data.timeInvestment) * 0.2
      );

      return {
        course: course,
        data: data,
        efficiency: efficiency
      };
    })
    .filter(item => item !== null);

  if (selectedGoal !== "all") {
    items = items.filter(item => {
      return item.data.bestFor.some(goal => {
        return goal.toLowerCase().includes(selectedGoal.toLowerCase());
      });
    });
  }

  items.sort((a, b) => b.efficiency - a.efficiency);

  if (items.length === 0) {
    if (bestBox) {
      bestBox.innerHTML = "";
    }

    list.innerHTML = `
      <div class="career-card">
        <h3>Подходящих курсов пока нет</h3>
        <p>Попробуйте выбрать другую цель.</p>
      </div>
    `;
    return;
  }

  const best = items[0];

  if (bestBox) {
    bestBox.innerHTML = `
      <div class="career-best-card">
        <span class="career-best-label">Лучший выбор для вас</span>

        <div class="career-card-top">
          <div>
            <h3>${best.course.title}</h3>
            <p>${best.data.skill}</p>
            <p>${best.data.reason}</p>
          </div>

          <div class="career-score">
            ${best.efficiency}%
            <span>ROI</span>
          </div>
        </div>

        <div class="career-actions">
          <button onclick='openCoursePage(${JSON.stringify(best.course.title)})'>
            Открыть курс
          </button>

          <button onclick='addCourseToProfile(${JSON.stringify(best.course.title)})'>
            Добавить в личный кабинет
          </button>
        </div>
      </div>
    `;
  }

  list.innerHTML = items.map(item => {
    return `
      <div class="career-card">
        <div class="career-card-top">
          <div>
            <span class="career-tag">${getCourseFormatLabel(item.course.format)}</span>
            <h3>${item.course.title}</h3>
            <p>${item.data.skill}</p>
          </div>

          <div class="career-score">
            ${item.efficiency}%
            <span>ROI</span>
          </div>
        </div>

        <div class="career-metrics">
          <div>
            <b>${item.data.careerValue}%</b>
            <span>Карьерная польза</span>
          </div>
          <div>
            <b>${item.data.difficulty}%</b>
            <span>Сложность</span>
          </div>
          <div>
            <b>${item.data.timeInvestment}%</b>
            <span>Время</span>
          </div>
        </div>

        <p class="career-reason">${item.data.reason}</p>

        <div class="career-actions">
          <button onclick='openCoursePage(${JSON.stringify(item.course.title)})'>
            Открыть курс
          </button>

          <button onclick='addCourseToProfile(${JSON.stringify(item.course.title)})'>
            Добавить в личный кабинет
          </button>
        </div>
      </div>
    `;
  }).join("");
}
renderCourses();
showSavedCourses();
showSavedDiagnostic();
startDiagnosticWizard();
applyLanguage();
renderCareerBarometer();