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
  }
];

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

  "Machine Learning": [
    "Что такое машинное обучение",
    "Данные и признаки",
    "Обучение модели",
    "Оценка результата",
    "Практический ML-проект"
  ]
};



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
  const targetPage = document.getElementById(pageId);
  if (!targetPage) return;
  targetPage.classList.add("active");

  if (pageId === "profile") {
    showSavedCourses();
    showSavedDiagnostic();
    renderProfileDashboard();
  }

  if (pageId === "careerCourses") {
    renderCareerCourses();
  }

  if (pageId === "careerAnalysis") {
    renderSavedCareerAnalysis();
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

  <a class="lesson-resource-link" href="${detail.videoPageUrl}" target="_blank">
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

                <div class="lesson-text">
                  <h4>Текст урока</h4>
                  <p>${detail.text}</p>
                </div>

                <div class="lesson-task">
                  <h4>Практическое задание</h4>
                  <p>${detail.task}</p>
                </div>

                <div class="lesson-tags">
                  ${detail.tags.map(tag => `<span class="lesson-tag">${tag}</span>`).join("")}
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
          `;
        }).join("")}
      </div>

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
        `<b>AI:</b> ${data.answer}`;

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

  let profile = "Универсальный ученик";
  let recommendations = [];

  if (interest === "Программирование") {
    profile = "Будущий разработчик";
    recommendations = [["Python с нуля", 96], ["Web-разработка", 91], ["Искусственный интеллект", 84]];
  } else if (interest === "Дизайн") {
    profile = "Креативный дизайнер";
    recommendations = [["UX/UI дизайн", 95], ["Графический дизайн", 90], ["Web-дизайн", 82]];
  } else if (interest === "Бизнес") {
    profile = "Будущий предприниматель";
    recommendations = [["Основы бизнеса", 94], ["Маркетинг", 88], ["Финансовая грамотность", 80]];
  } else if (interest === "Языки") {
    profile = "Коммуникативный ученик";
    recommendations = [["Английский язык", 96], ["Академический английский", 89], ["Разговорная практика", 83]];
  } else if (interest === "Наука") {
    profile = "Исследователь";
    recommendations = [["Основы науки", 93], ["Data Science", 87], ["Аналитическое мышление", 81]];
  } else if (interest === "Искусственный интеллект") {
    profile = "AI-исследователь";
    recommendations = [["Искусственный интеллект", 97], ["Machine Learning", 92], ["Python с нуля", 86]];
  } else if (interest === "Психология") {
    profile = "Человек, который любит понимать людей";
    recommendations = [["Основы психологии", 95], ["Эмоциональный интеллект", 88], ["Коммуникация", 84]];
  } else if (interest === "Маркетинг") {
    profile = "Будущий маркетолог";
    recommendations = [["Маркетинг", 96], ["SMM", 89], ["Брендинг", 83]];
  }

  localStorage.setItem("diagnosticResult", JSON.stringify({
    profile,
    answers: diagnosticAnswers,
    recommendations
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

    <h2>Рекомендуемые курсы</h2>

    ${recommendations.map(item => `
      <div class="match-item">
        <b>${item[0]} — ${item[1]}%</b>
        <div class="match-bar">
          <div class="match-fill" style="width:${item[1]}%"></div>
        </div>
      </div>
    `).join("")}

    <div class="result-card">
      <h3>AI-рекомендация</h3>
      <p>
        Начните с курса с самым высоким совпадением. Учитесь регулярно,
        проходите тесты и постепенно переходите к более сложным темам.
      </p>
    </div>

    <button onclick="startDiagnosticWizard()">Пройти заново</button>
    <button onclick="showPage('courses')">Перейти к курсам</button>
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

function stopKidSpeaking() {
  if (window.speechSynthesis) {
    speechSynthesis.cancel();
  }

  const avatar = document.getElementById("kidAvatarBox");
  if (avatar) {
    avatar.classList.remove("talking");
  }
}

function stopKidSpeaking() {
  if (window.speechSynthesis) {
    speechSynthesis.cancel();
  }

  const mouth = document.getElementById("kidMouth");
  if (mouth) {
    mouth.classList.remove("talking");
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
      ${data.whatIsGood}</p>

      <p><b>Что нужно объяснить лучше:</b><br>
      ${data.whatIsMissing}</p>

      <p><b>AI Junior:</b><br>
      ${data.kidReply}</p>

      <p><b>Вопрос малыша:</b><br>
      ${data.nextQuestion}</p>

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



const careerTracks = [
  {
    id: "frontend",
    title: "Frontend-разработчик",
    area: "programming",
    level: "Новичок",
    duration: "3–4 месяца",
    income: "стажировка / junior-позиция",
    description: "Создаёт внешний вид сайта: страницы, кнопки, адаптивный дизайн и интерактивность.",
    skills: ["HTML", "CSS", "JavaScript", "адаптивная верстка", "GitHub"],
    recommendedCourses: ["Web-разработка", "Python с нуля"],
    roadmap: ["Изучить HTML и CSS", "Сделать 3 страницы сайта", "Добавить JavaScript", "Загрузить проекты на GitHub", "Собрать портфолио"]
  },
  {
    id: "uxui",
    title: "UX/UI дизайнер",
    area: "design",
    level: "Новичок",
    duration: "2–3 месяца",
    income: "фриланс / junior-дизайнер",
    description: "Проектирует удобные интерфейсы сайтов и мобильных приложений.",
    skills: ["Figma", "прототипирование", "цвет", "типографика", "UX-анализ"],
    recommendedCourses: ["UX/UI дизайн", "Графический дизайн"],
    roadmap: ["Изучить основы UX/UI", "Сделать макет в Figma", "Собрать 2 кейса", "Оформить портфолио", "Начать искать первые заказы"]
  },
  {
    id: "digital-marketing",
    title: "Digital-маркетолог",
    area: "business",
    level: "Новичок",
    duration: "2–3 месяца",
    income: "стажировка / SMM / маркетинг",
    description: "Продвигает продукты через социальные сети, рекламу, контент и аналитику.",
    skills: ["SMM", "контент-план", "таргет", "аналитика", "презентация"],
    recommendedCourses: ["Маркетинг", "Основы бизнеса"],
    roadmap: ["Понять основы бизнеса", "Изучить маркетинг", "Сделать контент-план", "Разобрать 3 бренда", "Собрать мини-портфолио"]
  },
  {
    id: "ai-assistant",
    title: "AI-специалист начального уровня",
    area: "ai",
    level: "Новичок",
    duration: "3 месяца",
    income: "AI-ассистент / prompt specialist",
    description: "Использует AI-инструменты для обучения, анализа, текстов, автоматизации и проектов.",
    skills: ["AI-инструменты", "prompt engineering", "анализ данных", "автоматизация", "этика AI"],
    recommendedCourses: ["Искусственный интеллект", "Machine Learning", "Python с нуля"],
    roadmap: ["Понять основы AI", "Научиться писать промпты", "Сделать AI-проект", "Изучить базовый Python", "Описать проект для портфолио"]
  },
  {
    id: "english-career",
    title: "Специалист с английским языком",
    area: "language",
    level: "Новичок",
    duration: "2–4 месяца",
    income: "поддержка клиентов / ассистент / перевод",
    description: "Использует английский для учебы, коммуникации, удалённой работы и международных проектов.",
    skills: ["разговорный английский", "деловая переписка", "презентация", "резюме", "интервью"],
    recommendedCourses: ["Английский язык", "Основы бизнеса"],
    roadmap: ["Повторить базовую грамматику", "Выучить карьерную лексику", "Подготовить CV", "Потренировать интервью", "Искать стажировки"]
  }
];

function renderCareerCourses() {
  const list = document.getElementById("careerCourseList");
  if (!list) return;

  list.innerHTML = careerTracks.map(track => `
    <div class="career-card">
      <div class="career-card-top">
        <span>${track.level}</span>
        <b>${track.duration}</b>
      </div>
      <h3>${track.title}</h3>
      <p>${track.description}</p>
      <p><b>Формат результата:</b> ${track.income}</p>
      <p><b>Навыки:</b> ${track.skills.join(", ")}</p>
      <p><b>Курсы:</b> ${track.recommendedCourses.join(", ")}</p>
      <button onclick='openCareerTrack(${JSON.stringify(track.id)})'>Открыть план</button>
    </div>
  `).join("");
}

function openCareerTrack(trackId) {
  const track = careerTracks.find(item => item.id === trackId);
  if (!track) return;

  showPage("careerAnalysis");
  const result = document.getElementById("careerAnalysisResult");
  result.classList.remove("hidden");
  result.innerHTML = buildCareerResultHtml(track, "Вы выбрали карьерное направление из списка.");
  localStorage.setItem("careerAnalysisResult", result.innerHTML);
}

function analyzeCareer() {
  const interest = document.getElementById("careerInterest")?.value || "programming";
  const level = document.getElementById("careerLevel")?.value || "beginner";
  const goal = document.getElementById("careerGoal")?.value || "job";

  let track = careerTracks.find(item => item.area === interest) || careerTracks[0];

  const levelText = {
    beginner: "Вы новичок, поэтому план начинается с базовых тем и простых проектов.",
    basic: "У вас уже есть база, поэтому можно быстрее переходить к практике и портфолио.",
    middle: "У вас есть опыт, поэтому главный акцент — реальные проекты и оформление портфолио."
  }[level];

  const goalText = {
    job: "Цель — первая работа, значит нужно показать понятный учебный путь, навыки и 2–3 проекта.",
    freelance: "Цель — фриланс, значит нужно собрать короткие кейсы и научиться показывать результат клиенту.",
    study: "Цель — выбрать направление, значит сначала лучше пройти вводный курс и сравнить практические задания.",
    portfolio: "Цель — портфолио, значит каждый курс должен завершаться мини-проектом."
  }[goal];

  const result = document.getElementById("careerAnalysisResult");
  result.classList.remove("hidden");
  result.innerHTML = buildCareerResultHtml(track, `${levelText} ${goalText}`);
  localStorage.setItem("careerAnalysisResult", result.innerHTML);
}

function buildCareerResultHtml(track, reason) {
  return `
    <h2>Рекомендованное направление: ${track.title}</h2>
    <p>${reason}</p>

    <div class="career-result-grid">
      <div>
        <h3>Что изучать</h3>
        <ul>${track.skills.map(skill => `<li>${skill}</li>`).join("")}</ul>
      </div>
      <div>
        <h3>Какие курсы пройти</h3>
        <ul>${track.recommendedCourses.map(course => `<li>${course}</li>`).join("")}</ul>
      </div>
    </div>

    <h3>План на ближайшие недели</h3>
    <ol>${track.roadmap.map(step => `<li>${step}</li>`).join("")}</ol>

    <button onclick="showPage('courses')">Перейти к обычным курсам</button>
    <button onclick="showPage('assistant')">Спросить AI про карьеру</button>
  `;
}

function renderSavedCareerAnalysis() {
  const result = document.getElementById("careerAnalysisResult");
  if (!result) return;

  const saved = localStorage.getItem("careerAnalysisResult");
  if (saved) {
    result.classList.remove("hidden");
    result.innerHTML = saved;
  }
}

renderCareerCourses();
renderCourses();
showSavedCourses();
showSavedDiagnostic();
startDiagnosticWizard();
applyLanguage();
