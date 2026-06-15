"use strict";

var courses = [{
  title: "Python с нуля",
  area: "programming",
  level: "Новичок",
  lessons: 18,
  duration: "6 недель",
  rating: 4.9,
  image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80"
}, {
  title: "Web-разработка",
  area: "programming",
  level: "Средний",
  lessons: 24,
  duration: "8 недель",
  rating: 4.8,
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
}, {
  title: "UX/UI дизайн",
  area: "design",
  level: "Новичок",
  lessons: 16,
  duration: "5 недель",
  rating: 4.7,
  image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80"
}, {
  title: "Графический дизайн",
  area: "design",
  level: "Средний",
  lessons: 20,
  duration: "7 недель",
  rating: 4.6,
  image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80"
}, {
  title: "Основы бизнеса",
  area: "business",
  level: "Новичок",
  lessons: 14,
  duration: "4 недели",
  rating: 4.8,
  image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
}, {
  title: "Маркетинг",
  area: "business",
  level: "Средний",
  lessons: 19,
  duration: "6 недель",
  rating: 4.7,
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
}, {
  title: "Английский язык",
  area: "language",
  level: "Новичок",
  lessons: 22,
  duration: "8 недель",
  rating: 4.9,
  image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80"
}, {
  title: "Искусственный интеллект",
  area: "ai",
  level: "Новичок",
  lessons: 21,
  duration: "7 недель",
  rating: 4.9,
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
}, {
  title: "Machine Learning",
  area: "ai",
  level: "Продвинутый",
  lessons: 28,
  duration: "10 недель",
  rating: 4.8,
  image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
}];
var courseLessons = {
  "Python с нуля": ["Что такое Python и где он используется", "Переменные и типы данных", "Условия if / else", "Циклы for и while", "Функции и мини-проект"],
  "Web-разработка": ["Как работает сайт", "HTML структура страницы", "CSS стили и адаптивность", "JavaScript для интерактива", "Создание первого сайта"],
  "UX/UI дизайн": ["Что такое UX и UI", "Цвета, шрифты и композиция", "Работа в Figma", "Прототипирование интерфейса", "Дизайн мобильного приложения"],
  "Графический дизайн": ["Основы визуального дизайна", "Композиция и сетки", "Цветовые палитры", "Типографика", "Создание постера"],
  "Основы бизнеса": ["Что такое бизнес-модель", "Клиент и проблема", "Продукт и ценность", "Доходы и расходы", "Мини-бизнес-план"],
  "Маркетинг": ["Что такое маркетинг", "Целевая аудитория", "Продвижение в соцсетях", "Реклама и контент", "Маркетинговая стратегия"],
  "Английский язык": ["Базовая грамматика", "Самые нужные слова", "Простые предложения", "Аудирование", "Разговорная практика"],
  "Искусственный интеллект": ["Что такое искусственный интеллект", "Как работают нейросети", "AI в жизни и бизнесе", "Промпты для AI", "Создание AI-проекта"],
  "Machine Learning": ["Что такое машинное обучение", "Данные и признаки", "Обучение модели", "Оценка результата", "Практический ML-проект"]
};

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(function (page) {
    return page.classList.remove("active");
  });
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
  var savedCourses = getSavedCourses();

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
  var lessons = courseLessons[courseTitle] || [];
  var progress = getProgressData();
  var doneLessons = progress[courseTitle] || [];
  if (lessons.length === 0) return 0;
  return Math.round(doneLessons.length / lessons.length * 100);
}

function renderCourses() {
  var list = document.getElementById("courseList");
  list.innerHTML = "";
  courses.forEach(function (course) {
    var percent = getCourseProgressPercent(course.title);
    list.innerHTML += "\n      <div class=\"course-card\">\n        <img src=\"".concat(course.image, "\" alt=\"").concat(course.title, "\" class=\"course-image\">\n\n        <div class=\"course-content\">\n          <span class=\"course-category\">").concat(trCourseArea(course.area), "</span>\n<h3>").concat(trCourseTitle(course.title), "</h3>\n\n          <div class=\"course-rating\">\n            \u2B50 ").concat(course.rating, " \xB7 ").concat(course.lessons, " ").concat(dt("lessonsWord"), " \xB7 ").concat(course.duration, "\n          </div>\n\n         <p class=\"course-level\">").concat(dt("level"), ": ").concat(course.level, "</p>\n\n          <div class=\"profile-progress\">\n           <b>").concat(dt("progress"), ": ").concat(percent, "%</b>\n            <div class=\"small-progress\">\n              <div class=\"small-progress-fill\" style=\"width:").concat(percent, "%\"></div>\n            </div>\n          </div>\n\n          <button onclick='openCoursePage(").concat(JSON.stringify(course.title), ")'>\n            ").concat(dt("more"), "\n          </button>\n\n          <button onclick='startCourse(").concat(JSON.stringify(course.title), ")'>\n           ").concat(dt("startLearning"), "\n          </button>\n        </div>\n      </div>\n    ");
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
  var box = document.getElementById("courseDetailBox");
  var course = courses.find(function (item) {
    return item.title === courseTitle;
  });
  var lessons = courseLessons[courseTitle] || [];

  if (!course) {
    box.innerHTML = "<p>Курс не найден</p>";
    return;
  }

  var progress = getProgressData();
  var doneLessons = progress[courseTitle] || [];
  var percent = getCourseProgressPercent(courseTitle);
  box.innerHTML = "\n    <div class=\"course-detail-card\">\n      <div class=\"course-detail-header\">\n        <img src=\"".concat(course.image, "\" alt=\"").concat(course.title, "\">\n\n        <div>\n          <span class=\"course-category\">").concat(course.area, "</span>\n          <h1>").concat(course.title, "</h1>\n          <p><b>\u0423\u0440\u043E\u0432\u0435\u043D\u044C:</b> ").concat(course.level, "</p>\n          <p><b>\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C:</b> ").concat(course.duration, "</p>\n          <p><b>\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0443\u0440\u043E\u043A\u043E\u0432:</b> ").concat(lessons.length, "</p>\n          <p><b>\u0420\u0435\u0439\u0442\u0438\u043D\u0433:</b> \u2B50 ").concat(course.rating, "</p>\n        </div>\n      </div>\n\n      <div class=\"progress-big\">\n        <h2>\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u043A\u0443\u0440\u0441\u0430: ").concat(percent, "%</h2>\n        <div class=\"progress-track\">\n          <div class=\"progress-fill\" style=\"width:").concat(percent, "%\"></div>\n        </div>\n      </div>\n\n      <h2>\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043A\u0443\u0440\u0441\u0430</h2>\n\n      <div class=\"lesson-list\">\n        ").concat(lessons.map(function (lesson, index) {
    var isDone = doneLessons.includes(index);
    return "\n            <div class=\"lesson-item ".concat(isDone ? "done" : "", "\">\n              <h3>").concat(index + 1, ". ").concat(lesson, "</h3>\n              <p>").concat(isDone ? "✅ Урок пройден" : "⏳ Урок ещё не пройден", "</p>\n\n              <div class=\"lesson-actions\">\n                <button onclick='markLessonDone(").concat(JSON.stringify(courseTitle), ", ").concat(index, ")'>\n                  \u0423\u0440\u043E\u043A \u043F\u0440\u043E\u0439\u0434\u0435\u043D\n                </button>\n\n                <button onclick='askAIAboutLesson(").concat(JSON.stringify(courseTitle), ", ").concat(JSON.stringify(lesson), ")'>\n                  \u0421\u043F\u0440\u043E\u0441\u0438\u0442\u044C AI\n                </button>\n              </div>\n            </div>\n          ");
  }).join(""), "\n      </div>\n\n").concat(percent === 100 ? "<div class=\"result-card\">\n         <h2>\uD83C\uDF89 \u041A\u0443\u0440\u0441 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D!</h2>\n         <p>\u0412\u044B \u043F\u0440\u043E\u0448\u043B\u0438 \u0432\u0441\u0435 \u0443\u0440\u043E\u043A\u0438 \u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442.</p>\n\n         <button onclick='openCertificate(".concat(JSON.stringify(courseTitle), ")'>\n           \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\n         </button>\n       </div>") : "", "\n\n      <button onclick='resetCourseProgress(").concat(JSON.stringify(courseTitle), ")'>\n        \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\n      </button>\n    </div>\n  ");
}

function markLessonDone(courseTitle, lessonIndex) {
  saveCourse(courseTitle);
  var progress = getProgressData();

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
  var confirmReset = confirm("Сбросить прогресс этого курса?");
  if (!confirmReset) return;
  var progress = getProgressData();
  progress[courseTitle] = [];
  saveProgressData(progress);
  renderCourseDetail(courseTitle);
  renderCourses();
  showSavedCourses();
}

function askAIAboutLesson(courseTitle, lessonTitle) {
  showPage("assistant");
  var input = document.getElementById("userMessage");
  input.value = "\u041E\u0431\u044A\u044F\u0441\u043D\u0438 \u0443\u0440\u043E\u043A \"".concat(lessonTitle, "\" \u0438\u0437 \u043A\u0443\u0440\u0441\u0430 \"").concat(courseTitle, "\" \u043F\u0440\u043E\u0441\u0442\u044B\u043C \u044F\u0437\u044B\u043A\u043E\u043C. \u0414\u0430\u0439 \u043F\u0440\u0438\u043C\u0435\u0440 \u0438 \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435.");
  sendMessage();
}

function showSavedCourses() {
  var box = document.getElementById("myCourses");
  if (!box) return;
  var savedCourses = profileGetSavedCourses();

  if (savedCourses.length === 0) {
    box.innerHTML = "\n      <div class=\"empty-profile-message\">\n        \u041F\u043E\u043A\u0430 \u043A\u0443\u0440\u0441\u044B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u044B. \u041F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043B \xAB\u041E\u0431\u0443\u0447\u0435\u043D\u0438\u0435\xBB \u0438 \u043D\u0430\u0447\u043D\u0438\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u0439 \u043A\u0443\u0440\u0441.\n      </div>\n    ";
    return;
  }

  box.innerHTML = savedCourses.map(function (courseTitle) {
    var percent = profileGetCoursePercent(courseTitle);
    var status = percent === 100 ? "Завершён" : "В процессе";
    return "\n      <div class=\"profile-course-card\">\n        <div class=\"profile-course-top\">\n          <h3>".concat(courseTitle, "</h3>\n          <span class=\"profile-badge ").concat(percent === 100 ? "done" : "", "\">\n            ").concat(status, "\n          </span>\n        </div>\n\n        <div class=\"profile-progress\">\n          <b>\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441: ").concat(percent, "%</b>\n          <div class=\"small-progress\">\n            <div class=\"small-progress-fill\" style=\"width:").concat(percent, "%\"></div>\n          </div>\n        </div>\n\n        <button onclick='openCoursePage(").concat(JSON.stringify(courseTitle), ")'>\n          \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435\n        </button>\n\n        ").concat(percent === 100 ? "<button onclick='openCertificate(".concat(JSON.stringify(courseTitle), ")'>\n                 \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\n               </button>") : "", "\n      </div>\n    ");
  }).join("");
}

function sendMessage() {
  var input, chatBox, text, messageId, response, data, aiMessage, _aiMessage;

  return regeneratorRuntime.async(function sendMessage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          input = document.getElementById("userMessage");
          chatBox = document.getElementById("chatBox");
          text = input.value.trim();

          if (text) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return");

        case 5:
          messageId = "msg_" + Date.now();
          chatBox.innerHTML += "\n    <div class=\"message user\">\n      <b>\u0422\u044B:</b> ".concat(text, "\n    </div>\n  ");
          chatBox.innerHTML += "\n    <div class=\"message bot\" id=\"".concat(messageId, "\">\n      <b>AI:</b> \u0414\u0443\u043C\u0430\u044E...\n    </div>\n  ");
          input.value = "";
          _context.prev = 9;
          _context.next = 12;
          return regeneratorRuntime.awrap(fetch("http://localhost:3000/ask-ai", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              message: text
            })
          }));

        case 12:
          response = _context.sent;
          _context.next = 15;
          return regeneratorRuntime.awrap(response.json());

        case 15:
          data = _context.sent;
          aiMessage = document.getElementById(messageId);

          if (aiMessage) {
            aiMessage.innerHTML = "<b>AI:</b> ".concat(data.answer);
          }

          _context.next = 25;
          break;

        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](9);
          console.error(_context.t0);
          _aiMessage = document.getElementById(messageId);

          if (_aiMessage) {
            _aiMessage.innerHTML = "<b>AI:</b> \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C";
          }

        case 25:
          chatBox.scrollTop = chatBox.scrollHeight;

        case 26:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[9, 20]]);
}

function generateDemoAIAnswer(text) {
  var lower = text.toLowerCase();

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

var diagnosticQuestions = [{
  question: "Какая сфера тебе больше всего интересна?",
  key: "interest",
  answers: ["Программирование", "Дизайн", "Бизнес", "Языки", "Наука", "Искусственный интеллект", "Психология", "Маркетинг"]
}, {
  question: "Зачем ты хочешь учиться?",
  key: "goal",
  answers: ["Для профессии", "Для учёбы", "Для себя", "Чтобы найти работу", "Чтобы начать проект"]
}, {
  question: "Какой у тебя уровень?",
  key: "level",
  answers: ["Новичок", "Немного знаю", "Средний", "Продвинутый"]
}, {
  question: "Как тебе удобнее учиться?",
  key: "style",
  answers: ["Видео", "Текст", "Практика", "Тесты", "Проекты"]
}, {
  question: "Сколько времени ты готов учиться в день?",
  key: "time",
  answers: ["10–15 минут", "30 минут", "1 час", "2 часа и больше"]
}, {
  question: "Что тебе сложнее всего?",
  key: "problem",
  answers: ["Понять теорию", "Запомнить материал", "Сделать практику", "Найти мотивацию", "Выбрать направление"]
}, {
  question: "Какой результат ты хочешь получить?",
  key: "result",
  answers: ["Найти подходящий курс", "Получить новую профессию", "Улучшить оценки", "Сделать проект", "Получить сертификат"]
}];
var currentQuestion = 0;
var diagnosticAnswers = {};

function startDiagnosticWizard() {
  currentQuestion = 0;
  diagnosticAnswers = {};
  document.getElementById("diagnosticResult").classList.add("hidden");
  document.getElementById("diagnosticLoading").classList.add("hidden");
  document.getElementById("questionBox").classList.remove("hidden");
  showDiagnosticQuestion();
}

function showDiagnosticQuestion() {
  var q = diagnosticQuestions[currentQuestion];
  document.getElementById("questionTitle").textContent = "\u0412\u043E\u043F\u0440\u043E\u0441 ".concat(currentQuestion + 1, " \u0438\u0437 ").concat(diagnosticQuestions.length, ": ").concat(q.question);
  var answersBox = document.getElementById("answersBox");
  answersBox.innerHTML = "";
  q.answers.forEach(function (answer) {
    var btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = answer;

    btn.onclick = function () {
      return chooseDiagnosticAnswer(q.key, answer);
    };

    answersBox.appendChild(btn);
  });
  var progress = currentQuestion / diagnosticQuestions.length * 100;
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
  setTimeout(function () {
    document.getElementById("diagnosticLoading").classList.add("hidden");
    showDiagnosticResult();
  }, 2500);
}

function showDiagnosticResult() {
  var interest = diagnosticAnswers.interest;
  var profile = "Универсальный ученик";
  var recommendations = [];

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
    profile: profile,
    answers: diagnosticAnswers,
    recommendations: recommendations
  }));
  var resultBox = document.getElementById("diagnosticResult");
  resultBox.classList.remove("hidden");
  resultBox.innerHTML = "\n    <h2>\u0412\u0430\u0448 \u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043F\u0440\u043E\u0444\u0438\u043B\u044C: ".concat(profile, "</h2>\n\n    <div class=\"result-card\">\n      <p><b>\u0418\u043D\u0442\u0435\u0440\u0435\u0441:</b> ").concat(diagnosticAnswers.interest, "</p>\n      <p><b>\u0426\u0435\u043B\u044C:</b> ").concat(diagnosticAnswers.goal, "</p>\n      <p><b>\u0423\u0440\u043E\u0432\u0435\u043D\u044C:</b> ").concat(diagnosticAnswers.level, "</p>\n      <p><b>\u0424\u043E\u0440\u043C\u0430\u0442 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F:</b> ").concat(diagnosticAnswers.style, "</p>\n      <p><b>\u0412\u0440\u0435\u043C\u044F \u0432 \u0434\u0435\u043D\u044C:</b> ").concat(diagnosticAnswers.time, "</p>\n      <p><b>\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0442\u0440\u0443\u0434\u043D\u043E\u0441\u0442\u044C:</b> ").concat(diagnosticAnswers.problem, "</p>\n      <p><b>\u0416\u0435\u043B\u0430\u0435\u043C\u044B\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442:</b> ").concat(diagnosticAnswers.result, "</p>\n    </div>\n\n    <h2>\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u044B\u0435 \u043A\u0443\u0440\u0441\u044B</h2>\n\n    ").concat(recommendations.map(function (item) {
    return "\n      <div class=\"match-item\">\n        <b>".concat(item[0], " \u2014 ").concat(item[1], "%</b>\n        <div class=\"match-bar\">\n          <div class=\"match-fill\" style=\"width:").concat(item[1], "%\"></div>\n        </div>\n      </div>\n    ");
  }).join(""), "\n\n    <div class=\"result-card\">\n      <h3>AI-\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u044F</h3>\n      <p>\n        \u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0441 \u043A\u0443\u0440\u0441\u0430 \u0441 \u0441\u0430\u043C\u044B\u043C \u0432\u044B\u0441\u043E\u043A\u0438\u043C \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0435\u043C. \u0423\u0447\u0438\u0442\u0435\u0441\u044C \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E,\n        \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442\u0435 \u0442\u0435\u0441\u0442\u044B \u0438 \u043F\u043E\u0441\u0442\u0435\u043F\u0435\u043D\u043D\u043E \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442\u0435 \u043A \u0431\u043E\u043B\u0435\u0435 \u0441\u043B\u043E\u0436\u043D\u044B\u043C \u0442\u0435\u043C\u0430\u043C.\n      </p>\n    </div>\n\n    <button onclick=\"startDiagnosticWizard()\">\u041F\u0440\u043E\u0439\u0442\u0438 \u0437\u0430\u043D\u043E\u0432\u043E</button>\n    <button onclick=\"showPage('courses')\">\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043A\u0443\u0440\u0441\u0430\u043C</button>\n  ");
  showSavedDiagnostic();
}

function showSavedDiagnostic() {
  var box = document.getElementById("myDiagnostic");
  if (!box) return;
  var saved = localStorage.getItem("diagnosticResult");

  if (!saved) {
    box.innerHTML = "Пока диагностика не пройдена";
    return;
  }

  var data = JSON.parse(saved);
  box.innerHTML = "\n    <p><b>\u041F\u0440\u043E\u0444\u0438\u043B\u044C:</b> ".concat(data.profile, "</p>\n    <p><b>\u0418\u043D\u0442\u0435\u0440\u0435\u0441:</b> ").concat(data.answers.interest, "</p>\n    <p><b>\u0423\u0440\u043E\u0432\u0435\u043D\u044C:</b> ").concat(data.answers.level, "</p>\n    <h3>\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C\u044B\u0435 \u043A\u0443\u0440\u0441\u044B:</h3>\n    ").concat(data.recommendations.map(function (item) {
    return "<p>".concat(item[0], " \u2014 ").concat(item[1], "%</p>");
  }).join(""), "\n  ");
}

function getStudentName() {
  var savedName = localStorage.getItem("studentName");

  if (savedName) {
    return savedName;
  }

  return "Студент SmartLearn AI";
}

function saveStudentName() {
  var input = document.getElementById("certificateNameInput");
  if (!input) return;
  var name = input.value.trim();

  if (!name) {
    alert("Введите имя для сертификата");
    return;
  }

  localStorage.setItem("studentName", name);
  var courseTitle = input.dataset.course;
  renderCertificate(courseTitle);
}

function openCertificate(courseTitle) {
  var percent = getCourseProgressPercent(courseTitle);

  if (percent < 100) {
    alert("Сертификат доступен только после прохождения 100% курса.");
    return;
  }

  showPage("certificatePage");
  renderCertificate(courseTitle);
}

function renderCertificate(courseTitle) {
  var box = document.getElementById("certificateBox");
  var studentName = getStudentName();
  var today = new Date();
  var date = today.toLocaleDateString("ru-RU");
  box.innerHTML = "\n    <div class=\"certificate-wrapper\">\n      <div class=\"certificate\">\n        <h1>\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442</h1>\n\n        <p class=\"certificate-subtitle\">\n          \u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442, \u0447\u0442\u043E\n        </p>\n\n        <div class=\"certificate-name\">\n          ".concat(studentName, "\n        </div>\n\n        <p class=\"certificate-subtitle\">\n          \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043B(\u0430) \u043A\u0443\u0440\u0441\n        </p>\n\n        <div class=\"certificate-course\">\n          \xAB").concat(courseTitle, "\xBB\n        </div>\n\n        <p>\n          \u043D\u0430 \u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0435 SmartLearn AI\n        </p>\n\n        <div class=\"certificate-date\">\n          \u0414\u0430\u0442\u0430 \u0432\u044B\u0434\u0430\u0447\u0438: ").concat(date, "\n        </div>\n\n        <div class=\"certificate-footer\">\n          <div class=\"certificate-sign\">\n            SmartLearn AI\n          </div>\n\n          <div class=\"certificate-sign\">\n            AI Education Platform\n          </div>\n        </div>\n      </div>\n\n      <div class=\"certificate-actions\">\n        <input\n          id=\"certificateNameInput\"\n          class=\"certificate-input\"\n          data-course=\"").concat(courseTitle, "\"\n          placeholder=\"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F \u0434\u043B\u044F \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u0430\"\n          value=\"").concat(studentName === "Студент SmartLearn AI" ? "" : studentName, "\"\n        >\n\n        <button onclick=\"saveStudentName()\">\n          \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438\u043C\u044F\n        </button>\n\n        <button onclick=\"printCertificate()\">\n          \u0421\u043A\u0430\u0447\u0430\u0442\u044C / \u0440\u0430\u0441\u043F\u0435\u0447\u0430\u0442\u0430\u0442\u044C\n        </button>\n\n        <button onclick='showPage(\"courseDetail\"); renderCourseDetail(").concat(JSON.stringify(courseTitle), ")'>\n          \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u043A\u0443\u0440\u0441\u0443\n        </button>\n      </div>\n    </div>\n  ");
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

  var lessons = courseLessons[courseTitle] || [];
  var progress = profileGetProgressData();
  var doneLessons = progress[courseTitle] || [];
  if (lessons.length === 0) return 0;
  return Math.round(doneLessons.length / lessons.length * 100);
}

function renderProfileDashboard() {
  renderProfileStats();
  renderProfileLearningPath();
  renderProfileCertificates();
}

function renderProfileStats() {
  var box = document.getElementById("profileStats");
  if (!box) return;
  var savedCourses = profileGetSavedCourses();
  var completedCourses = savedCourses.filter(function (courseTitle) {
    return profileGetCoursePercent(courseTitle) === 100;
  });
  var certificates = completedCourses.length;
  var allProgress = savedCourses.map(function (courseTitle) {
    return profileGetCoursePercent(courseTitle);
  });
  var averageProgress = allProgress.length ? Math.round(allProgress.reduce(function (sum, item) {
    return sum + item;
  }, 0) / allProgress.length) : 0;
  box.innerHTML = "\n    <div class=\"profile-stat-card\">\n      <h3>".concat(savedCourses.length, "</h3>\n      <p>\u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u043A\u0443\u0440\u0441\u043E\u0432</p>\n    </div>\n\n    <div class=\"profile-stat-card\">\n      <h3>").concat(completedCourses.length, "</h3>\n      <p>\u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D\u043D\u044B\u0445 \u043A\u0443\u0440\u0441\u043E\u0432</p>\n    </div>\n\n    <div class=\"profile-stat-card\">\n      <h3>").concat(averageProgress, "%</h3>\n      <p>\u0441\u0440\u0435\u0434\u043D\u0438\u0439 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441</p>\n    </div>\n\n    <div class=\"profile-stat-card\">\n      <h3>").concat(certificates, "</h3>\n      <p>\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0432</p>\n    </div>\n  ");
}

function renderProfileLearningPath() {
  var box = document.getElementById("profileLearningPath");
  if (!box) return;
  var savedDiagnostic = localStorage.getItem("diagnosticResult");
  var savedCourses = profileGetSavedCourses();

  if (!savedDiagnostic && savedCourses.length === 0) {
    box.innerHTML = "\n      <div class=\"empty-profile-message\">\n        \u041F\u0440\u043E\u0439\u0434\u0438\u0442\u0435 \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0443 \u0438\u043B\u0438 \u043D\u0430\u0447\u043D\u0438\u0442\u0435 \u043A\u0443\u0440\u0441, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0443\u0447\u0435\u0431\u043D\u044B\u0439 \u043F\u0443\u0442\u044C.\n      </div>\n    ";
    return;
  }

  var profileName = "Персональный путь обучения";
  var recommendations = [];

  if (savedDiagnostic) {
    var diagnostic = JSON.parse(savedDiagnostic);
    profileName = diagnostic.profile;
    recommendations = diagnostic.recommendations || [];
  }

  box.innerHTML = "\n    <h3>".concat(profileName, "</h3>\n\n    <div class=\"profile-path-list\">\n      <div class=\"profile-path-item\">\n        <div class=\"profile-path-number\">1</div>\n        <div>\n          <b>\u041F\u0440\u043E\u0439\u0442\u0438 \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0443</b>\n          <p>\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u044B, \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0438 \u0446\u0435\u043B\u044C \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F.</p>\n        </div>\n      </div>\n\n      <div class=\"profile-path-item\">\n        <div class=\"profile-path-number\">2</div>\n        <div>\n          <b>\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0439 \u043A\u0443\u0440\u0441</b>\n          <p>\n            ").concat(recommendations.length ? "\u041B\u0443\u0447\u0448\u0438\u0439 \u0441\u0442\u0430\u0440\u0442: ".concat(recommendations[0][0], " \u2014 ").concat(recommendations[0][1], "% \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F.") : "Выберите курс из каталога SmartLearn AI.", "\n          </p>\n        </div>\n      </div>\n\n      <div class=\"profile-path-item\">\n        <div class=\"profile-path-number\">3</div>\n        <div>\n          <b>\u041F\u0440\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u0443\u0440\u043E\u043A\u0438 \u0438 \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B AI</b>\n          <p>\u041F\u043E\u0441\u043B\u0435 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0443\u0440\u043E\u043A\u0430 \u043C\u043E\u0436\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C AI-\u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A\u0430 \u0434\u043B\u044F \u043E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u0439 \u0438 \u0437\u0430\u0434\u0430\u043D\u0438\u0439.</p>\n        </div>\n      </div>\n\n      <div class=\"profile-path-item\">\n        <div class=\"profile-path-number\">4</div>\n        <div>\n          <b>\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442</b>\n          <p>\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 100% \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043A\u0443\u0440\u0441\u0430.</p>\n        </div>\n      </div>\n    </div>\n  ");
}

function renderProfileCertificates() {
  var box = document.getElementById("profileCertificates");
  if (!box) return;
  var savedCourses = profileGetSavedCourses();
  var completedCourses = savedCourses.filter(function (courseTitle) {
    return profileGetCoursePercent(courseTitle) === 100;
  });

  if (completedCourses.length === 0) {
    box.innerHTML = "\n      <div class=\"empty-profile-message\">\n        \u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u0437\u0434\u0435\u0441\u044C \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u043A\u0443\u0440\u0441\u0430 \u043D\u0430 100%.\n      </div>\n    ";
    return;
  }

  box.innerHTML = completedCourses.map(function (courseTitle) {
    return "\n    <div class=\"certificate-mini\">\n      <h3>\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442</h3>\n      <p>\u041A\u0443\u0440\u0441: <b>".concat(courseTitle, "</b></p>\n      <p>\u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430: SmartLearn AI</p>\n\n      <button onclick='openCertificate(").concat(JSON.stringify(courseTitle), ")'>\n        \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\n      </button>\n    </div>\n  ");
  }).join("");
}

var translations = {
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
    getCertificate: "Получить сертификат"
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
    getCertificate: "Сертификат алу"
  }
};

function setLanguage(lang) {
  localStorage.setItem("siteLanguage", lang);
  applyLanguage();

  if (typeof renderCourses === "function") {
    renderCourses();
  }

  if (typeof showSavedCourses === "function") {
    showSavedCourses();
  }

  if (typeof renderProfileDashboard === "function") {
    renderProfileDashboard();
  }
}

function applyLanguage() {
  var lang = localStorage.getItem("siteLanguage") || "ru";
  var t = translations[lang];
  replaceText("SmartLearn AI — платформа для персонального онлайн-обучения", t.homeTitle);
  replaceText("Проходите диагностику, выбирайте курсы, обучайтесь по урокам, отслеживайте прогресс и получайте помощь от искусственного интеллекта.", t.homeText);
  replaceText("Пройти диагностику", t.diagnosticBtn);
  replaceText("Смотреть курсы", t.coursesBtn);
  replaceText("AI помощник", t.aiHelper);
  replaceText("Объясняет темы, помогает с уроками и отвечает на вопросы.", t.aiHelperText);
  replaceText("Прогресс обучения", t.progressTitle);
  replaceText("Как это работает", t.howWorks);
  replaceText("Путь пользователя в SmartLearn AI", t.userPath);
  replaceText("Преимущества", t.advantages);
  replaceText("Почему платформа удобна для обучения", t.whyComfortable);
  replaceText("Обучение", t.coursesTitle);
  replaceText("Личный кабинет", t.profileTitle);
  replaceText("Диагностика", t.diagnosticTitle);
  replaceText("AI-помощник", t.assistantTitle);
  replaceText("Мои курсы", t.myCourses);
  replaceText("Моя диагностика", t.myDiagnostic);
  replaceText("Мой учебный путь", t.learningPath);
  replaceText("Мои сертификаты", t.certificates);
  replaceText("Начать обучение", t.startLearning);
  replaceText("Подробнее", t.more);
  replaceText("Продолжить обучение", t.continueLearning);
  replaceText("Урок пройден", t.lessonDone);
  replaceText("Спросить AI", t.askAI);
  replaceText("Получить сертификат", t.getCertificate);
}

function normalizeTextForTranslate(text) {
  return text.replace(/\s+/g, " ").trim();
}

function replaceText(oldText, newText) {
  var elements = document.querySelectorAll("h1, h2, h3, p, span, button, b");
  elements.forEach(function (element) {
    var currentText = normalizeTextForTranslate(element.textContent);
    var searchText = normalizeTextForTranslate(oldText);

    if (element.childNodes.length === 1 && currentText === searchText) {
      element.textContent = newText;
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  applyLanguage();
});
var dynamicTranslations = {
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
      "Программирование": "Бағдарламалау",
      "Дизайн": "Дизайн",
      "Бизнес": "Бизнес",
      "Маркетинг": "Маркетинг",
      "Языки": "Тілдер",
      "AI": "AI"
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
var lessonTranslationsKz = {
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
  var lang = getCurrentLang();

  if (dynamicTranslations[lang] && dynamicTranslations[lang][key]) {
    return dynamicTranslations[lang][key];
  }

  if (dynamicTranslations.ru && dynamicTranslations.ru[key]) {
    return dynamicTranslations.ru[key];
  }

  return key;
}

function trCourseTitle(title) {
  var lang = getCurrentLang();

  if (dynamicTranslations[lang] && dynamicTranslations[lang].courses && dynamicTranslations[lang].courses[title]) {
    return dynamicTranslations[lang].courses[title];
  }

  return title;
}

function trCourseArea(area) {
  var lang = getCurrentLang();

  if (dynamicTranslations[lang] && dynamicTranslations[lang].areas && dynamicTranslations[lang].areas[area]) {
    return dynamicTranslations[lang].areas[area];
  }

  return area;
}

function trLessonTitle(lesson) {
  var lang = getCurrentLang();

  if (lang === "kz") {
    return lessonTranslationsKz[lesson] || lesson;
  }

  return lesson;
}

applyLanguage();
renderCourses();
showSavedCourses();
showSavedDiagnostic();
startDiagnosticWizard();