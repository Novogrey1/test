// ============================================
// LANGUAGE SYSTEM
// ============================================

const translations = {
  "ru": {
    // Main menu
    "Главная": "Главная",
    "Логические схемы":"Логические схемы",
    "Конфигуратор опубликованной карты": "Конфигуратор опубликованной карты",
    "Команда проекта": "Команда проекта",
    "События и смены": "События и смены",
    "Документация": "Документация",
    "Анкеты": "Анкеты",
    "Прочее": "Прочее",
    "Социальные сети": "Социальные сети",
    "TRP RP": "TRP RP",
    "← Назад": "← Назад",

    // Documentation submenu
    "Устав проекта": "Устав проекта",
    "Для сотрудников": "Для сотрудников",
    "Маршруты": "Маршруты",
    "Регламент радиообмена": "Регламент радиообмена",
    "Инструкция ДТУ и ДТД": "Инструкция ДТУ и ДТД",
    "Инструкция ДКС и ДТД": "Инструкция ДКС и ДТД",
    "Инструкция водителей": "Инструкция водителей",
    "Для отделов": "Для отделов",
    "Директор ГТОП/ТПОХ": "Директор ГТОП/ТПОХ",
    "КОУП": "КОУП",
    "ФАО": "ФАО",
    "ОБД": "ОБД",
    "УбЦ": "УбЦ",
    "Лекции": "Лекции",
    "Запуск троллейбусов": "Запуск троллейбусов",
    "Схемы депо и маршрутов": "Схемы депо и маршрутов",

    // Applications submenu
    "Заявления": "Заявления",
    "Экзамен": "Экзамен",
    "Отпуск & Больничный": "Отпуск & Больничный",
    "Увольнение & Восстановление": "Увольнение & Восстановление",
    "Регистрация & Замена троллейбуса": "Регистрация & Замена троллейбуса",
    "Ремонт троллейбусов": "Ремонт троллейбусов",
    "Персонал": "Персонал",
    "ЗНГТУ": "ЗНГТУ",
    "ДТПГО & ДТПоХ": "ДТПГО & ДТПоХ",
    "ДТУ": "ДТУ",
    "ДКС": "ДКС",
    "Подать апелляцию": "Подать апелляцию",
    "Регистрация на смену": "Регистрация на смену",
    "Прочие анкеты": "Прочие анкеты",
    "Тесты": "Тесты",
    "Теоретический экзамен": "Теоретический экзамен",

    // Other submenu
    "Редакторы и генераторы": "Редакторы и генераторы",
    "Генератор спавна машин": "Генератор спавна машин",
    "Создание окрасок": "Создание окрасок",
    "Редактор маршрутов": "Редактор маршрутов",
    "Информатор": "Информатор",
    "Расписание": "Расписание",
    "Трибуна TDW": "Трибуна TDW",
    "Правила проекта TRP RP": "Правила проекта \"TRP RP\"",
    "ЧАВО - Частые вопросы": "ЧАВО - Частые вопросы",
    "Официальная документация": "Официальная документация",
    "Обновления сайта": "Обновления сайта",
    "База данных": "База данных",
    "Список автотранспорта": "Список автотранспорта",
    "Команды": "Команды",
    "Идентификатор работника": "Идентификатор работника",
    "Административный сайт": "Административный сайт",

    // Social media
    "Discord": "Discord",
    "TeamSpeak": "TeamSpeak",
    "YouTube": "YouTube",
    "TikTok": "TikTok",
    "Telegram": "Telegram",
    "ВКонтакте": "ВКонтакте",

    // Footer
    "Контакты проекта &quot;TRP RP&quot;": "Контакты проекта \"TRP RP\"",
    "Юридическая документация проекта &quot;TRP RP&quot;": "Юридическая документация проекта \"TRP RP\"",
    "Политика конфиденциальности": "Политика конфиденциальности",
    "Пользовательское соглашение": "Пользовательское соглашение",
    "Проект &quot;TRP RP&quot; не является юридическим лицом и не предоставляет никаких услуг!": "Проект \"TRP RP\" не является юридическим лицом и не предоставляет никаких услуг!",
    "© 2026 TRP RP. Все права защищены.": "© 2026 TRP RP. Все права защищены.",

    // 403 Banner
    "banner-title": "Возникает ошибка 403?",
    "banner-desc": "Если при загрузке генератора появляется ошибка 403 — воспользуйтесь локальной версией. Она работает прямо в браузере без подключения к серверу Google.",
    "banner-btn-local": "🖥️ Переключиться на локальную версию",
    "banner-btn-server": "🌐 Вернуться к серверной версии",
    "banner-title-local": "✅ Локальная версия активна",

    // Local generator UI
    "lg-title": "🚍 Генератор кодов спавна транспорта",
    "lg-number": "Бортовой номер",
    "lg-number-ph": "Введите номер (1–9999)",
    "lg-number-err": "Введите номер от 1 до 9999.",
    "lg-vehicle": "Название транспорта",
    "lg-side-ad": "Боковая реклама",
    "lg-boards": "Электронные табло",
    "lg-april": "Экраны 1 апреля",
    "lg-tester": "Бонусы раннего тестера TrP",
    "lg-custom": "Кастомный транспорт",
    "lg-modern": "Современная морда (От 750 поинтов)",
    "lg-livery": "Окраска",
    "lg-livery-none": "Выберите окраску",
    "lg-livery-na": "Окраски недоступны",
    "lg-flagL": "Левый флаг",
    "lg-flagR": "Правый флаг",
    "lg-flag-choose": "Выберите флаг",
    "lg-flag-na": "Флаги недоступны",
    "lg-existing": "Вставить существующий код",
    "lg-existing-ph": "Вставьте JSON-код сюда",
    "lg-load-code": "Загрузить код",
    "lg-generate": "Сгенерировать",
    "lg-save": "Сохранить",
    "lg-load": "Загруженные коды",
    "lg-copy": "Копировать",
    "lg-on": "Включена",
    "lg-random": "Случайная",
    "lg-off": "Выключена",
    "lg-on2": "Включены",
    "lg-random2": "Случайные",
    "lg-off2": "Выключены",
    "lg-on3": "Включён",
    "lg-random3": "Случайный",
    "lg-off3": "Выключен",
    "lg-random4": "Случайные",
    "lg-on4": "Включены",
    "lg-off4": "Выключены",
    // Save modal
    "lg-save-title": "Сохранить код",
    "lg-save-name-ph": "Введите название кода",
    "lg-save-warning": "⚠️ Коды сохраняются в кэше браузера. Они не связаны с серверной версией и будут удалены при очистке кэша, данных сайта или в режиме инкогнито.",
    "lg-save-btn": "Сохранить",
    "lg-cancel": "Отмена",
    // Load modal
    "lg-load-title": "Сохранённые коды",
    "lg-export": "Экспортировать",
    "lg-import": "Импортировать",
    "lg-close": "Закрыть",
    "lg-no-saves": "Нет сохранённых кодов",
    "lg-load-btn": "Загрузить",
    "lg-delete-btn": "Удалить",
    // Notifications
    "lg-copied": "Код успешно скопирован!",
    "lg-no-copy": "Нет кода для копирования!",
    "lg-saved-ok": "Код успешно сохранён!",
    "lg-loaded-ok": "Код успешно загружен!",
    "lg-deleted-ok": "Код успешно удалён!",
    "lg-exported-ok": "Коды экспортированы!",
    "lg-imported-ok": "Коды импортированы!",
    "lg-invalid-json": "Неверный JSON-код",
    "lg-invalid-file": "Неверный JSON-файл",
    "lg-no-name": "Введите название и сгенерируйте код!",
    "lg-name-long": "Название не должно превышать 50 символов",
    "lg-no-file": "Выберите JSON-файл"
  },
  "en": {
    // Main menu
    "Главная": "Home",
    "Логические схемы": "Logical Circuits",
    "Конфигуратор опубликованной карты": "Published Map Configurator",
    "Команда проекта": "Project Team",
    "События и смены": "Events and Shifts",
    "Документация": "Documentation",
    "Анкеты": "Forms",
    "Прочее": "Other",
    "Социальные сети": "Social Media",
    "TRP RP": "TRP RP",
    "← Назад": "← Back",

    // Documentation submenu
    "Устав проекта": "Project Charter",
    "Для сотрудников": "For Employees",
    "Маршруты": "Routes",
    "Регламент радиообмена": "Radio Regulations",
    "Инструкция ДТУ и ДТД": "DTU and DTD Instructions",
    "Инструкция ДКС и ДТД": "DKS and DTD Instructions",
    "Инструкция водителей": "Driver Instructions",
    "Для отделов": "For Departments",
    "Директор ГТОП/ТПОХ": "Director GTOP/TPOX",
    "КОУП": "КOUP",
    "ФАО": "FAO",
    "ОБД": "OBD",
    "УбЦ": "UbC",
    "Лекции": "Lectures",
    "Запуск троллейбусов": "Trolleybus Launch",
    "Схемы депо и маршрутов": "Depot and Route Schemes",

    // Applications submenu
    "Заявления": "Applications",
    "Экзамен": "Exam",
    "Отпуск & Больничный": "Vacation & Sick Leave",
    "Увольнение & Восстановление": "Resignation & Reinstatement",
    "Регистрация & Замена троллейбуса": "Registration & Trolleybus Replacement",
    "Ремонт троллейбусов": "Trolleybus Repair",
    "Персонал": "Personnel",
    "ЗНГТУ": "ZNGTU",
    "ДТПГО & ДТПоХ": "DTPGO & DTPoH",
    "ДТУ": "DTU",
    "ДКС": "DKS",
    "Подать апелляцию": "Submit Appeal",
    "Регистрация на смену": "Register for Shift",
    "Прочие анкеты": "Other Forms",
    "Тесты": "Tests",
    "Теоретический экзамен": "Theoretical Exam",

    // Other submenu
    "Редакторы и генераторы": "Editors and Generators",
    "Генератор спавна машин": "Vehicle Spawn Generator",
    "Создание окрасок": "Livery Generator",
    "Редактор маршрутов": "Route Editor",
    "Информатор": "Announcement",
    "Расписание": "Schedule",
    "Трибуна TDW": "TDW Stage",
    "Правила проекта TRP RP": "TRP RP Project Rules",
    "ЧАВО - Частые вопросы": "FAQ - Frequently Asked Questions",
    "Официальная документация": "Official Documentation",
    "Обновления сайта": "Website Updates",
    "База данных": "Database",
    "Список автотранспорта": "Vehicle List",
    "Команды": "Commands",
    "Идентификатор работника": "Employee ID",
    "Административный сайт": "Admin Site",

    // Social media
    "Discord": "Discord",
    "TeamSpeak": "TeamSpeak",
    "YouTube": "YouTube",
    "TikTok": "TikTok",
    "Telegram": "Telegram",
    "ВКонтакте": "VKontakte",

    // Footer
    "Контакты проекта &quot;TRP RP&quot;": "TRP RP Project Contacts",
    "Юридическая документация проекта &quot;TRP RP&quot;": "TRP RP Project Legal Documentation",
    "Политика конфиденциальности": "Privacy Policy",
    "Пользовательское соглашение": "Terms of Service",
    "Проект &quot;TRP RP&quot; не является юридическим лицом и не предоставляет никаких услуг!": "The TRP RP project is not a legal entity and does not provide any services!",
    "© 2026 TRP RP. Все права защищены.": "© 2026 TRP RP. All rights reserved.",

    // 403 Banner
    "banner-title": "Getting a 403 error?",
    "banner-desc": "If the generator fails to load with a 403 error — use the local version. It runs directly in your browser without connecting to Google's servers.",
    "banner-btn-local": "🖥️ Switch to local version",
    "banner-btn-server": "🌐 Back to server version",
    "banner-title-local": "✅ Local version is active",

    // Local generator UI
    "lg-title": "🚍 Vehicle Spawn Code Generator",
    "lg-number": "Vehicle Number",
    "lg-number-ph": "Enter number (1–9999)",
    "lg-number-err": "Enter a number between 1 and 9999.",
    "lg-vehicle": "Vehicle Name",
    "lg-side-ad": "Side Advertisement",
    "lg-boards": "Electronic Destination Boards",
    "lg-april": "April Fools Screens",
    "lg-tester": "TrP Early Tester Bonuses",
    "lg-custom": "Custom Vehicle",
    "lg-modern": "Modern Front (750+ points)",
    "lg-livery": "Livery",
    "lg-livery-none": "Select livery",
    "lg-livery-na": "Liveries unavailable",
    "lg-flagL": "Left Flag",
    "lg-flagR": "Right Flag",
    "lg-flag-choose": "Select flag",
    "lg-flag-na": "Flags unavailable",
    "lg-existing": "Load existing code",
    "lg-existing-ph": "Paste JSON code here",
    "lg-load-code": "Load code",
    "lg-generate": "Generate",
    "lg-save": "Save",
    "lg-load": "Saved codes",
    "lg-copy": "Copy",
    "lg-on": "Enabled",
    "lg-random": "Random",
    "lg-off": "Disabled",
    "lg-on2": "Enabled",
    "lg-random2": "Random",
    "lg-off2": "Disabled",
    "lg-on3": "Enabled",
    "lg-random3": "Random",
    "lg-off3": "Disabled",
    "lg-random4": "Random",
    "lg-on4": "Enabled",
    "lg-off4": "Disabled",
    // Save modal
    "lg-save-title": "Save Code",
    "lg-save-name-ph": "Enter a name for this code",
    "lg-save-warning": "⚠️ Codes are saved in your browser cache. They are not linked to the server version and will be deleted if you clear your browser cache, site data, or use incognito mode.",
    "lg-save-btn": "Save",
    "lg-cancel": "Cancel",
    // Load modal
    "lg-load-title": "Saved Codes",
    "lg-export": "Export",
    "lg-import": "Import",
    "lg-close": "Close",
    "lg-no-saves": "No saved codes",
    "lg-load-btn": "Load",
    "lg-delete-btn": "Delete",
    // Notifications
    "lg-copied": "Code copied!",
    "lg-no-copy": "No code to copy!",
    "lg-saved-ok": "Code saved successfully!",
    "lg-loaded-ok": "Code loaded!",
    "lg-deleted-ok": "Code deleted!",
    "lg-exported-ok": "Codes exported!",
    "lg-imported-ok": "Codes imported!",
    "lg-invalid-json": "Invalid JSON code",
    "lg-invalid-file": "Invalid JSON file",
    "lg-no-name": "Enter a name and generate a code first!",
    "lg-name-long": "Name must not exceed 50 characters",
    "lg-no-file": "Select a JSON file"
  }
};

// ============================================
// LANGUAGE MANAGEMENT
// ============================================

function getCurrentLanguage() {
  return localStorage.getItem('language') || 'ru';
}

function setLanguage(lang) {
  localStorage.setItem('language', lang);
  location.reload();
}

function t(key) {
  const lang = getCurrentLanguage();
  return (translations[lang] && translations[lang][key]) || (translations['ru'][key]) || key;
}

function updateGeneratorForm(lang) {
  const formWrapper = document.getElementById('form-wrapper');
  if (!formWrapper) return;
  const mode = localStorage.getItem('generatorMode') || 'server';
  if (mode === 'local') {
    renderLocalGenerator(lang);
  } else {
    let iframeSrc = "https://script.google.com/macros/s/AKfycbwAKJv-ePXl0jpHQuyD3IK_OJjku2-ji_SsntWLkrmhEt5ocGdtfY552ZAXYs9qllJb/exec";
    if (lang === 'en') {
      iframeSrc = "https://script.google.com/macros/s/AKfycby_US7cmp-SPkdKOiUUraMz6PIFUDe6lSdG3D0uk4dg7hrJpWp_M1mZHeTv6PG0i3T1EQ/exec";
    }
    formWrapper.innerHTML = `<iframe src="${iframeSrc}" frameborder="0" marginheight="0" marginwidth="0"></iframe>`;
  }
}

function translatePage() {
  const lang = getCurrentLanguage();
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const tr = translations[lang] && translations[lang][key];
    if (!tr) return;

    const dropdownArrow = el.querySelector(':scope > .dropdown-arrow');
    const submenuArrow = el.querySelector(':scope > .submenu-arrow');

    if (!dropdownArrow && !submenuArrow) {
      el.textContent = tr;
      return;
    }

    const arrow = dropdownArrow || submenuArrow;
    const glyph = dropdownArrow ? '\u25BE' : '\u25B8';

    Array.from(el.childNodes).forEach(node => {
      if (node !== arrow) {
        node.remove();
      }
    });

    el.insertBefore(document.createTextNode(`${tr} `), arrow);
    arrow.textContent = glyph;
    arrow.setAttribute('aria-hidden', 'true');
  });
}

// ============================================
// 403 BANNER LOGIC
// ============================================

function initBanner() {
  const banner      = document.getElementById('error-banner');
  const toggleBtn   = document.getElementById('error-banner-toggle');
  const btnLocal    = document.getElementById('switch-local-btn');
  const btnServer   = document.getElementById('switch-server-btn');
  const titleEl     = banner ? banner.querySelector('.error-banner-title') : null;
  const descEl      = banner ? banner.querySelector('.error-banner-desc')  : null;

  if (!banner) return;

  const mode = localStorage.getItem('generatorMode') || 'server';

  // Translations
  if (titleEl) titleEl.textContent = mode === 'local' ? t('banner-title-local') : t('banner-title');
  if (descEl)  descEl.textContent  = t('banner-desc');
  if (btnLocal)  btnLocal.textContent  = t('banner-btn-local');
  if (btnServer) btnServer.textContent = t('banner-btn-server');

  // Banner color by mode
  if (mode === 'local') {
    banner.classList.add('error-banner--local');
    if (btnLocal)  btnLocal.style.display  = 'none';
    if (btnServer) btnServer.style.display = '';
  } else {
    banner.classList.remove('error-banner--local');
    if (btnLocal)  btnLocal.style.display  = '';
    if (btnServer) btnServer.style.display = 'none';
  }

  // Restore collapse state (default: expanded)
  if (localStorage.getItem('bannerCollapsed') === 'true') {
    banner.classList.add('collapsed');
  }

  // Toggle collapse on chevron button
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      banner.classList.toggle('collapsed');
      localStorage.setItem('bannerCollapsed', banner.classList.contains('collapsed') ? 'true' : 'false');
    });
  }

  // Switch to local
  if (btnLocal) {
    btnLocal.addEventListener('click', function(e) {
      e.stopPropagation();
      localStorage.setItem('generatorMode', 'local');
      banner.classList.add('error-banner--local');
      if (titleEl) titleEl.textContent = t('banner-title-local');
      btnLocal.style.display  = 'none';
      btnServer.style.display = '';
      renderLocalGenerator(getCurrentLanguage());
    });
  }

  // Switch back to server
  if (btnServer) {
    btnServer.addEventListener('click', function(e) {
      e.stopPropagation();
      localStorage.setItem('generatorMode', 'server');
      banner.classList.remove('error-banner--local');
      if (titleEl) titleEl.textContent = t('banner-title');
      btnServer.style.display = 'none';
      btnLocal.style.display  = '';
      updateGeneratorForm(getCurrentLanguage());
    });
  }
}

// ============================================
// LOCAL GENERATOR — DATA
// ============================================

const LG_LIVERIES = {
  "ZiU-682 (ZiU-9)": [
    "AdLivery1","AdLivery3","AdLivery4","Athens","Bogota","Budapest","Cheboksary","Chisinau","Green","Kharkiv","Minsk1","Minsk2","Moscow","Moscow oblast","Mykolaiv","Odessa","OldStyle1","OldStyle2","Orange","Red and beige","Saint Petersburg","White","White and blue","White and green","Yellow","Zhytomyr1","Zhytomyr2","Zhytomyr3","Zhytomyr4","Slot_1","Slot_2","Slot_3","Slot_4","Slot_5","Slot_6","Slot_7","Slot_8","Slot_9","Slot_10","Slot_11","Slot_12","Slot_13","Slot_14","Slot_15"
  ],
  "ZiU-6205 (ZiU-10)": [
    "AdLivery4","Athens","Bogota","Budapest","Cheboksary","Chisinau","Green","Kharkiv","Minsk1","Minsk2","Moscow","Moscow oblast","Mykolaiv","Odessa","OldStyle1","OldStyle2","Orange","Red and beige","Saint Petersburg","White","White and blue","White and green","Yellow","Zhytomyr1","Zhytomyr2","Zhytomyr3","Zhytomyr4","Slot_1","Slot_2","Slot_3","Slot_4","Slot_5","Slot_6","Slot_7","Slot_8","Slot_9","Slot_10","Slot_11","Slot_12","Slot_13","Slot_14","Slot_15"
  ],
  "ZiU-682 (ZiU-9) EMU": [
    "AdLivery1","AdLivery3","AdLivery4","Athens","Bogota","Budapest","Cheboksary","Chisinau","Green","Kazan","Kharkiv","Minsk1","Minsk2","Moscow","Moscow oblast","Mykolaiv","Odessa","OldStyle1","OldStyle2","Orange","Red and beige","Saint Petersburg","White","White and blue","White and green","Yellow","Zhytomyr1","Zhytomyr2","Zhytomyr3","Zhytomyr4","Slot_1","Slot_2","Slot_3","Slot_4","Slot_5","Slot_6","Slot_7","Slot_8","Slot_9","Slot_10","Slot_11","Slot_12","Slot_13","Slot_14","Slot_15"
  ],
  "ZiU-682 (ZiU-9) Service vehicle": [
    "Service1","Service2","Service3","Slot_1","Slot_2","Slot_3","Slot_4","Slot_5","Slot_6","Slot_7","Slot_8","Slot_9","Slot_10","Slot_11","Slot_12","Slot_13","Slot_14","Slot_15"
  ]
};

const LG_SIMPLE_VEHICLES = [
  "VAZ-2109 Sputnik","(NonRP) Tow Scooter","(NonRP) Tow ScooterHeavy",
  "(TrP Classic port) Tatra T6B5 (T3M)","(TrP Classic port) Tatra T6B5 (T3M) EMU",
  "Boat","(EmptyBase) Monorail"
];

const LG_ZIU_VEHICLES = [
  "ZiU-682 (ZiU-9)","ZiU-6205 (ZiU-10)","ZiU-682 (ZiU-9) EMU","ZiU-682 (ZiU-9) Service vehicle"
];

const LG_FLAGS = [
  ["No flag","No flag"],["Custom","Custom"],["Australia","Australia"],["Austria","Austria"],
  ["Belarus","Belarus"],["Belgium","Belgium"],["Bulgaria","Bulgaria"],["Canada","Canada"],
  ["Czech Republic","Czech Republic"],["Denmark","Denmark"],["England","England"],
  ["Estonia","Estonia"],["European Union","European Union"],["Finland","Finland"],
  ["France","France"],["Germany","Germany"],["Greece","Greece"],["HITD","HITD"],
  ["Hungary","Hungary"],["India","India"],["Italy","Italy"],["Japan","Japan"],
  ["Latvia","Latvia"],["Lichtenstein","Lichtenstein"],["Lithuania","Lithuania"],
  ["MITD","MITD"],["Moldova","Moldova"],["Netherlands","Netherlands"],
  ["North Korea","North Korea"],["Norway","Norway"],["Poland","Poland"],
  ["Portugal","Portugal"],["Pride","Pride"],["Progress Pride","Progress Pride"],
  ["Romania","Romania"],["Russia","Russia"],["Scotland","Scotland"],["Serbia","Serbia"],
  ["Slovakia","Slovakia"],["Slovenia","Slovenia"],["South Korea","South Korea"],
  ["Spain","Spain"],["Sweden","Sweden"],["Switzerland","Switzerland"],["TrP","TrP"],
  ["Turkey","Turkey"],["Ukraine","Ukraine"],["United Kingdom","United Kingdom"],
  ["United States of America","United States of America"],["Wales","Wales"]
];

const LG_FLAGS_RU = {
  "No flag":"Без флага","Custom":"Кастомный","Australia":"Австралия","Austria":"Австрия",
  "Belarus":"Беларусь","Belgium":"Бельгия","Bulgaria":"Болгария","Canada":"Канада",
  "Czech Republic":"Чехия","Denmark":"Дания","England":"Англия","Estonia":"Эстония",
  "European Union":"Европейский Союз","Finland":"Финляндия","France":"Франция",
  "Germany":"Германия","Greece":"Греция","HITD":"HITD","Hungary":"Венгрия","India":"Индия",
  "Italy":"Италия","Japan":"Япония","Latvia":"Латвия","Lichtenstein":"Лихтенштейн",
  "Lithuania":"Литва","MITD":"MITD","Moldova":"Молдова","Netherlands":"Нидерланды",
  "North Korea":"Северная Корея","Norway":"Норвегия","Poland":"Польша","Portugal":"Португалия",
  "Pride":"Прайд","Progress Pride":"Прогресс Прайд","Romania":"Румыния","Russia":"Россия",
  "Scotland":"Шотландия","Serbia":"Сербия","Slovakia":"Словакия","Slovenia":"Словения",
  "South Korea":"Южная Корея","Spain":"Испания","Sweden":"Швеция","Switzerland":"Швейцария",
  "TrP":"TrP","Turkey":"Турция","Ukraine":"Украина","United Kingdom":"Великобритания",
  "United States of America":"США","Wales":"Уэльс"
};

const LS_KEY = 'trprp_vsg_saves';

// ============================================
// LOCAL GENERATOR — LOCALSTORAGE
// ============================================

function lgGetSaves() {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || '{}'); }
  catch(e) { return {}; }
}

function lgSetSaves(obj) {
  localStorage.setItem(LS_KEY, JSON.stringify(obj));
}

function lgSave(name, code) {
  const saves = lgGetSaves();
  saves[name] = code;
  lgSetSaves(saves);
}

function lgDelete(name) {
  const saves = lgGetSaves();
  delete saves[name];
  lgSetSaves(saves);
}

function lgExport() {
  const saves = lgGetSaves();
  const blob = new Blob([JSON.stringify(saves, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'vsg_saved_codes.json'; a.click();
  URL.revokeObjectURL(url);
}

function lgImport(jsonStr) {
  const incoming = JSON.parse(jsonStr);
  const saves = lgGetSaves();
  Object.assign(saves, incoming);
  lgSetSaves(saves);
}

// ============================================
// LOCAL GENERATOR — RENDER
// ============================================

function lgFlagOptions(lang) {
  const choose = t('lg-flag-choose');
  let html = `<option value="">${choose}</option>`;
  LG_FLAGS.forEach(([val]) => {
    const label = lang === 'ru' ? (LG_FLAGS_RU[val] || val) : val;
    html += `<option value="${val}">${label}</option>`;
  });
  return html;
}

function renderLocalGenerator(lang) {
  const wrapper = document.getElementById('form-wrapper');
  if (!wrapper) return;

  wrapper.innerHTML = `
    <div class="local-generator-wrap" id="lg-wrap">
      <div class="local-generator-card" id="lg-card">
        <h1>${t('lg-title')}</h1>

        <div class="lg-field">
          <label class="lg-label" for="lg-number">${t('lg-number')}</label>
          <input type="number" id="lg-number" class="lg-input" placeholder="${t('lg-number-ph')}" min="1" max="9999">
          <div class="lg-error" id="lg-number-err">${t('lg-number-err')}</div>
        </div>

        <div class="lg-field">
          <label class="lg-label" for="lg-vehicle">${t('lg-vehicle')}</label>
          <select id="lg-vehicle" class="lg-select">
            <option value="ZiU-682 (ZiU-9)">ZiU-682 (ZiU-9)</option>
            <option value="ZiU-6205 (ZiU-10)">ZiU-6205 (ZiU-10)</option>
            <option value="ZiU-682 (ZiU-9) EMU">ZiU-682 (ZiU-9) EMU</option>
            <option value="ZiU-682 (ZiU-9) Service vehicle">ZiU-682 (ZiU-9) Service vehicle</option>
            <option value="(TrP Classic port) Tatra T6B5 (T3M)">(TrP Classic port) Tatra T6B5 (T3M)</option>
            <option value="(TrP Classic port) Tatra T6B5 (T3M) EMU">(TrP Classic port) Tatra T6B5 (T3M) EMU</option>
            <option value="Boat">Boat</option>
            <option value="VAZ-2109 Sputnik">VAZ-2109 Sputnik</option>
            <option value="(NonRP) Tow Scooter">(NonRP) Tow Scooter</option>
            <option value="(NonRP) Tow ScooterHeavy">(NonRP) Tow ScooterHeavy</option>
            <option value="(EmptyBase) Monorail">(EmptyBase) Monorail</option>
          </select>
        </div>

        <div class="lg-field">
          <label class="lg-label" for="lg-side-ad">${t('lg-side-ad')}</label>
          <select id="lg-side-ad" class="lg-select">
            <option value="1">${t('lg-on')}</option>
            <option value="2">${t('lg-random')}</option>
            <option value="3" selected>${t('lg-off')}</option>
          </select>
        </div>

        <div class="lg-field">
          <label class="lg-label" for="lg-boards">${t('lg-boards')}</label>
          <select id="lg-boards" class="lg-select">
            <option value="2">${t('lg-on2')}</option>
            <option value="1">${t('lg-random2')}</option>
            <option value="3" selected>${t('lg-off2')}</option>
          </select>
        </div>

        <div class="lg-field">
          <label class="lg-label" for="lg-april">${t('lg-april')}</label>
          <select id="lg-april" class="lg-select">
            <option value="2">${t('lg-on2')}</option>
            <option value="1">${t('lg-random2')}</option>
            <option value="3" selected>${t('lg-off2')}</option>
          </select>
        </div>

        <div class="lg-field">
          <label class="lg-label" for="lg-tester">${t('lg-tester')}</label>
          <select id="lg-tester" class="lg-select">
            <option value="2">${t('lg-random4')}</option>
            <option value="1">${t('lg-on4')}</option>
            <option value="3" selected>${t('lg-off4')}</option>
          </select>
        </div>

        <div class="lg-field">
          <label class="lg-label" for="lg-custom">${t('lg-custom')}</label>
          <select id="lg-custom" class="lg-select">
            <option value="2">${t('lg-on3')}</option>
            <option value="1">${t('lg-random3')}</option>
            <option value="3" selected>${t('lg-off3')}</option>
          </select>
        </div>

        <div class="lg-field">
          <label class="lg-label" for="lg-modern">${t('lg-modern')}</label>
          <select id="lg-modern" class="lg-select">
            <option value="2">${t('lg-random3')}</option>
            <option value="1">${t('lg-on3')}</option>
            <option value="3" selected>${t('lg-off3')}</option>
          </select>
        </div>

        <div class="lg-field">
          <label class="lg-label" for="lg-livery">${t('lg-livery')}</label>
          <select id="lg-livery" class="lg-select">
            <option value="">${t('lg-livery-none')}</option>
          </select>
        </div>

        <div class="lg-field">
          <label class="lg-label" for="lg-flagL">${t('lg-flagL')}</label>
          <select id="lg-flagL" class="lg-select">${lgFlagOptions(lang)}</select>
        </div>

        <div class="lg-field">
          <label class="lg-label" for="lg-flagR">${t('lg-flagR')}</label>
          <select id="lg-flagR" class="lg-select">${lgFlagOptions(lang)}</select>
        </div>

        <div class="lg-field">
          <label class="lg-label" for="lg-existing">${t('lg-existing')}</label>
          <textarea id="lg-existing" class="lg-textarea" rows="3" placeholder="${t('lg-existing-ph')}"></textarea>
          <button class="lg-btn lg-btn--indigo lg-btn--full" id="lg-load-code-btn">${t('lg-load-code')}</button>
        </div>

        <div class="lg-btn-row">
          <button class="lg-btn lg-btn--blue" id="lg-generate-btn">${t('lg-generate')}</button>
          <button class="lg-btn lg-btn--green" id="lg-save-btn-open">${t('lg-save')}</button>
          <button class="lg-btn lg-btn--indigo" id="lg-load-btn-open">${t('lg-load')}</button>
        </div>

        <div id="lg-output" class="lg-output"></div>
        <button class="lg-btn lg-btn--green lg-btn--full" id="lg-copy-btn">${t('lg-copy')}</button>
      </div>

      <!-- Save Modal -->
      <div class="lg-modal" id="lg-save-modal">
        <div class="lg-modal-content">
          <h2>${t('lg-save-title')}</h2>
          <div class="lg-modal-warning">${t('lg-save-warning')}</div>
          <input type="text" id="lg-save-name" class="lg-input" placeholder="${t('lg-save-name-ph')}">
          <div class="lg-modal-row">
            <button class="lg-btn lg-btn--blue" id="lg-save-confirm">${t('lg-save-btn')}</button>
            <button class="lg-btn lg-btn--indigo" id="lg-save-cancel">${t('lg-cancel')}</button>
          </div>
        </div>
      </div>

      <!-- Load Modal -->
      <div class="lg-modal" id="lg-load-modal">
        <div class="lg-modal-content">
          <h2>${t('lg-load-title')}</h2>
          <div style="display:flex;gap:10px;margin-bottom:14px;">
            <button class="lg-btn lg-btn--green" style="flex:1" id="lg-export-btn">${t('lg-export')}</button>
            <label class="lg-btn lg-btn--indigo" style="flex:1;text-align:center;cursor:pointer;margin:0">
              ${t('lg-import')}
              <input type="file" id="lg-import-file" accept=".json" style="display:none">
            </label>
          </div>
          <ul class="lg-saved-list" id="lg-saved-list"></ul>
          <button class="lg-btn lg-btn--indigo lg-btn--full" id="lg-load-close">${t('lg-close')}</button>
        </div>
      </div>

      <!-- Notification -->
      <div class="lg-notification" id="lg-notif"></div>
    </div>
  `;

  // Init vehicle controls
  const vehicleSelect = document.getElementById('lg-vehicle');
  lgUpdateVehicleOptions(vehicleSelect.value, lang);
  vehicleSelect.addEventListener('change', function() {
    lgUpdateVehicleOptions(this.value, lang);
  });

  // Generate
  document.getElementById('lg-generate-btn').addEventListener('click', lgGenerate);

  // Copy
  document.getElementById('lg-copy-btn').addEventListener('click', lgCopy);

  // Load code from textarea
  document.getElementById('lg-load-code-btn').addEventListener('click', lgLoadFromTextarea);

  // Save modal
  document.getElementById('lg-save-btn-open').addEventListener('click', function() {
    document.getElementById('lg-save-modal').classList.add('open');
    document.getElementById('lg-save-name').focus();
  });
  document.getElementById('lg-save-cancel').addEventListener('click', function() {
    document.getElementById('lg-save-modal').classList.remove('open');
    document.getElementById('lg-save-name').value = '';
  });
  document.getElementById('lg-save-confirm').addEventListener('click', lgSaveCode);
  document.getElementById('lg-save-modal').addEventListener('click', function(e) {
    if (e.target === this) { this.classList.remove('open'); document.getElementById('lg-save-name').value = ''; }
  });

  // Load modal
  document.getElementById('lg-load-btn-open').addEventListener('click', function() {
    document.getElementById('lg-load-modal').classList.add('open');
    lgRenderSavedList(lang);
  });
  document.getElementById('lg-load-close').addEventListener('click', function() {
    document.getElementById('lg-load-modal').classList.remove('open');
  });
  document.getElementById('lg-load-modal').addEventListener('click', function(e) {
    if (e.target === this) this.classList.remove('open');
  });

  // Export / Import
  document.getElementById('lg-export-btn').addEventListener('click', function() {
    lgExport();
    lgNotify(t('lg-exported-ok'), 'success');
  });
  document.getElementById('lg-import-file').addEventListener('change', function() {
    const file = this.files[0];
    if (!file) { lgNotify(t('lg-no-file'), 'error'); return; }
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        lgImport(e.target.result);
        lgRenderSavedList(lang);
        lgNotify(t('lg-imported-ok'), 'success');
      } catch(err) {
        lgNotify(t('lg-invalid-file'), 'error');
      }
    };
    reader.readAsText(file);
  });
}

// ============================================
// LOCAL GENERATOR — HELPERS
// ============================================

function lgNotify(msg, type) {
  const el = document.getElementById('lg-notif');
  if (!el) return;
  el.textContent = msg;
  el.className = 'lg-notification ' + type;
  void el.offsetWidth;
  el.classList.add('show');
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.remove('show'), 3000);
}

function lgUpdateVehicleOptions(vehicleName, lang) {
  lang = lang || getCurrentLanguage();
  const simple = LG_SIMPLE_VEHICLES.includes(vehicleName);

  const sideAd = document.getElementById('lg-side-ad');
  const boards = document.getElementById('lg-boards');
  const april  = document.getElementById('lg-april');
  const tester = document.getElementById('lg-tester');
  const custom = document.getElementById('lg-custom');
  const modern = document.getElementById('lg-modern');
  const livery = document.getElementById('lg-livery');
  const flagL  = document.getElementById('lg-flagL');
  const flagR  = document.getElementById('lg-flagR');

  if (simple) {
    [sideAd, boards, april, tester, custom, modern, flagL, flagR, livery].forEach(el => {
      if (el) { el.disabled = true; el.value = ''; }
    });
    if (livery) livery.innerHTML = `<option value="">${t('lg-livery-na')}</option>`;
    if (flagL)  flagL.innerHTML  = `<option value="">${t('lg-flag-na')}</option>`;
    if (flagR)  flagR.innerHTML  = `<option value="">${t('lg-flag-na')}</option>`;
  } else {
    [sideAd, boards, april, custom, livery, flagL, flagR].forEach(el => {
      if (el) el.disabled = false;
    });
    if (sideAd) sideAd.value = '3';
    if (boards) { boards.disabled = false; boards.value = '3'; }
    if (april)  { april.disabled  = false; april.value  = '3'; }
    if (custom) custom.value = '3';

    if (LG_ZIU_VEHICLES.includes(vehicleName)) {
      if (tester) { tester.disabled = false; tester.value = '3'; }
      if (modern) { modern.disabled = false; modern.value = '3'; }
    } else {
      if (tester) { tester.disabled = true; tester.value = ''; }
      if (modern) { modern.disabled = true; modern.value = ''; }
    }

    // Liveries
    if (livery) {
      livery.innerHTML = `<option value="">${t('lg-livery-none')}</option>`;
      if (LG_LIVERIES[vehicleName]) {
        LG_LIVERIES[vehicleName].forEach(lv => {
          const opt = document.createElement('option');
          opt.value = lv; opt.textContent = lv;
          livery.appendChild(opt);
        });
      }
    }

    // Flags
    if (flagL) flagL.innerHTML = lgFlagOptions(lang);
    if (flagR) flagR.innerHTML = lgFlagOptions(lang);
  }
}

function lgGenerate() {
  const numberRaw = document.getElementById('lg-number').value;
  const number = numberRaw ? parseInt(numberRaw, 10) : null;
  const errEl = document.getElementById('lg-number-err');

  if (number !== null && (number < 1 || number > 9999)) {
    errEl.style.display = 'block'; return;
  }
  errEl.style.display = 'none';

  const vehicleName = document.getElementById('lg-vehicle').value;
  const simple = LG_SIMPLE_VEHICLES.includes(vehicleName);

  const val = id => document.getElementById(id) ? document.getElementById(id).value : '';
  const intVal = id => val(id) ? parseInt(val(id), 10) : undefined;

  const result = {};
  if (number) result.Number = number;
  if (vehicleName) result.VehicleName = vehicleName;

  if (!simple) {
    const sa = intVal('lg-side-ad'); if (sa !== undefined) result["Side advertisement"] = sa;
    const lv = val('lg-livery');   if (lv)              result.Livery = lv;
    const tb = intVal('lg-tester'); if (tb !== undefined) result["TrP early tester bonuses"] = tb;
    const mf = intVal('lg-modern'); if (mf !== undefined) result["Modern front"] = mf;
    const eb = intVal('lg-boards'); if (eb !== undefined) result["Electronic destination boards"] = eb;
    const fa = intVal('lg-april');  if (fa !== undefined) result["First april screens"] = fa;
    const ct = intVal('lg-custom'); if (ct !== undefined) result["Custom"] = ct;
    const fl = val('lg-flagL');    if (fl) result.FlagL = fl === 'No flag' ? 'No' : fl;
    const fr = val('lg-flagR');    if (fr) result.FlagR = fr === 'No flag' ? 'No' : fr;
  }

  document.getElementById('lg-output').textContent = JSON.stringify(result);
}

function lgCopy() {
  const out = document.getElementById('lg-output').textContent;
  if (!out) { lgNotify(t('lg-no-copy'), 'error'); return; }
  const ta = document.createElement('textarea');
  ta.value = out; ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); lgNotify(t('lg-copied'), 'success'); }
  catch(e) { lgNotify(t('lg-no-copy'), 'error'); }
  document.body.removeChild(ta);
}

function lgLoadFromTextarea() {
  const raw = document.getElementById('lg-existing').value;
  try {
    const code = JSON.parse(raw);
    lgApplyCode(code);
    lgNotify(t('lg-loaded-ok'), 'success');
  } catch(e) {
    lgNotify(t('lg-invalid-json'), 'error');
  }
}

function lgApplyCode(code) {
  const lang = getCurrentLanguage();
  if (code.VehicleName) {
    const vs = document.getElementById('lg-vehicle');
    if (vs) { vs.value = code.VehicleName; lgUpdateVehicleOptions(code.VehicleName, lang); }
  }
  const setVal = (id, v) => { const el = document.getElementById(id); if (el && v !== undefined) el.value = v; };
  setVal('lg-number',  code.Number || '');
  setVal('lg-side-ad', code["Side advertisement"] || 3);
  setVal('lg-livery',  code.Livery || '');
  setVal('lg-tester',  code["TrP early tester bonuses"] || 3);
  setVal('lg-modern',  code["Modern front"] || 3);
  setVal('lg-boards',  code["Electronic destination boards"] || 3);
  setVal('lg-april',   code["First april screens"] || 3);
  setVal('lg-custom',  code["Custom"] || 3);
  setVal('lg-flagL',   code.FlagL || '');
  setVal('lg-flagR',   code.FlagR || '');
}

function lgSaveCode() {
  const name = (document.getElementById('lg-save-name').value || '').trim();
  const code = document.getElementById('lg-output').textContent;
  if (!name || !code) { lgNotify(t('lg-no-name'), 'error'); return; }
  if (name.length > 50) { lgNotify(t('lg-name-long'), 'error'); return; }
  try { JSON.parse(code); } catch(e) { lgNotify(t('lg-invalid-json'), 'error'); return; }
  lgSave(name, code);
  document.getElementById('lg-save-modal').classList.remove('open');
  document.getElementById('lg-save-name').value = '';
  lgNotify(t('lg-saved-ok'), 'success');
}

function lgRenderSavedList(lang) {
  const list = document.getElementById('lg-saved-list');
  if (!list) return;
  const saves = lgGetSaves();
  const keys = Object.keys(saves);
  if (keys.length === 0) {
    list.innerHTML = `<li class="lg-empty">${t('lg-no-saves')}</li>`;
    return;
  }
  list.innerHTML = keys.map(name => `
    <li class="lg-saved-item">
      <span title="${name}">${name}</span>
      <div class="lg-saved-item-btns">
        <button class="lg-btn lg-btn--blue" onclick="lgLoadSaved('${name.replace(/'/g,"\\'")}','${lang}')">${t('lg-load-btn')}</button>
        <button class="lg-btn" style="background:#ef4444;color:#fff" onclick="lgDeleteSaved('${name.replace(/'/g,"\\'")}','${lang}')">${t('lg-delete-btn')}</button>
      </div>
    </li>
  `).join('');
}

function lgLoadSaved(name, lang) {
  const saves = lgGetSaves();
  if (!saves[name]) { lgNotify(t('lg-invalid-json'), 'error'); return; }
  try {
    const code = JSON.parse(saves[name]);
    lgApplyCode(code);
    document.getElementById('lg-output').textContent = saves[name];
    document.getElementById('lg-load-modal').classList.remove('open');
    lgNotify(t('lg-loaded-ok'), 'success');
  } catch(e) {
    lgNotify(t('lg-invalid-json'), 'error');
  }
}

function lgDeleteSaved(name, lang) {
  lgDelete(name);
  lgRenderSavedList(lang || getCurrentLanguage());
  lgNotify(t('lg-deleted-ok'), 'success');
}

// ============================================
// DOM READY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const currentLang = getCurrentLanguage();
  translatePage();
  initBanner();
  updateGeneratorForm(currentLang);

  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.textContent = currentLang === 'ru' ? 'EN' : 'RU';
    langBtn.addEventListener('click', function() {
      const newLang = getCurrentLanguage() === 'ru' ? 'en' : 'ru';
      setLanguage(newLang);
    });
  }
});

// ============================================
// THEME TOGGLE
// ============================================

const themeBtn = document.getElementById('theme-btn');
if (themeBtn) {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeBtn.textContent = '☀️';
  }
  themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeBtn.textContent = isDark ? '☀️' : '🌙';
  });
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const menuBackBtn = document.getElementById('menu-back-btn');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  navMenu.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  document.addEventListener('click', function(event) {
    if (!event.target.closest('.navbar')) {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
}

if (menuBackBtn) {
  menuBackBtn.addEventListener('click', function() { history.back(); });
}

// ============================================
// DROPDOWN MENU TOGGLE
// ============================================

document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    const parentItem = this.closest('.nav-item');
    if (parentItem) {
      parentItem.parentNode.querySelectorAll('.nav-item.has-dropdown.open').forEach(s => {
        if (s !== parentItem) s.classList.remove('open');
      });
      parentItem.classList.toggle('open');
    }
  });
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('.navbar')) {
    document.querySelectorAll('.nav-item.has-dropdown.open').forEach(item => item.classList.remove('open'));
  }
});

document.querySelectorAll('.submenu-toggle').forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    const parentSubmenu = this.closest('.dropdown-submenu');
    if (parentSubmenu) {
      parentSubmenu.parentNode.querySelectorAll('.dropdown-submenu.open').forEach(s => {
        if (s !== parentSubmenu) s.classList.remove('open');
      });
      parentSubmenu.classList.toggle('open');
    }
  });
});

// ============================================
// RESPONSIVE
// ============================================

window.addEventListener('resize', function() {
  if (window.innerWidth > 768 && menuToggle && navMenu) {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
  }
});
// TRP shared page animations
;(() => {
    if (window.__trpPageAnimationsBooted) {
        return;
    }
    window.__trpPageAnimationsBooted = true;

    const NAV_CLASS = 'trp-nav-animate';
    const HERO_CLASS = 'trp-hero-block';
    const HERO_VISIBLE_CLASS = 'trp-hero-visible';
    const REVEAL_CLASS = 'trp-scroll-reveal';
    const TITLE_CLASS = 'trp-title-reveal';
    const BANNER_CLASS = 'trp-banner-reveal';
    const VISIBLE_CLASS = 'trp-visible';
    const LANGUAGE_TARGET_SELECTOR = [
        '.hero-content h1',
        '[class*="hero-"][class*="content"] h1',
        '[class*="hero"][class*="content"] h1',
        '.database-hero h1',
        '.section-title',
        '.subsection-title',
        '.section-header',
        '.section-header > *',
        '.contacts-section h2',
        '.docs-section h2',
        '.disclaimer',
        '.calendar-card',
        '.form-card',
        '.charter-card',
        '.scheme-card',
        '.faq-item',
        '.update-entry',
        '.table-block',
        '.database-frame-wrap',
        '.local-generator-card',
        '.generator-card',
        '.buttons-container > *',
        '.contact-buttons > *',
        '.docs-buttons > *',
        '.team-grid > *',
        '.winners-grid > *'
    ].join(', ');
    const seen = new WeakSet();
    const observed = new WeakSet();
    let observer = null;
    let refreshTimer = 0;
    let initialLanguagePaintDone = false;

    function afterPaint(callback) {
        requestAnimationFrame(() => {
            requestAnimationFrame(callback);
        });
    }

    function ensureObserver() {
        if (observer || !('IntersectionObserver' in window)) {
            return;
        }

        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(VISIBLE_CLASS);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });
    }

    function isHidden(element) {
        if (!element || !element.isConnected || element.hidden) {
            return true;
        }

        const style = window.getComputedStyle(element);
        return style.display === 'none' || style.visibility === 'hidden';
    }

    function isTitleLike(element) {
        return (
            /^H[1-6]$/.test(element.tagName) ||
            element.classList.contains('section-title') ||
            element.classList.contains('subsection-title') ||
            element.classList.contains('section-header') ||
            element.classList.contains('update-date')
        );
    }

    function hasOwnAnimation(element) {
        return (
            element.classList.contains('reveal') ||
            element.classList.contains('reveal-left') ||
            element.classList.contains('reveal-right') ||
            element.classList.contains('reveal-up') ||
            element.classList.contains('lang-enter') ||
            element.classList.contains('lang-exit') ||
            element.classList.contains(REVEAL_CLASS) ||
            element.classList.contains('animate')
        );
    }

    function isMeaningful(element) {
        if (!element || isHidden(element) || hasOwnAnimation(element)) {
            return false;
        }

        if (element.closest('.navbar, .dropdown-menu, .dropdown-submenu-list, .menu-toggle, footer, .footer, .error-banner, .error-banner-outer')) {
            return false;
        }

        const tagName = element.tagName;
        if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE'].includes(tagName)) {
            return false;
        }

        const className = Array.from(element.classList).join(' ');
        if (/(nav|menu|dropdown|submenu|logo|theme|lang|footer)/i.test(className)) {
            return false;
        }

        if (isTitleLike(element) || ['P', 'ARTICLE', 'FORM', 'TABLE', 'UL', 'OL', 'FIGURE'].includes(tagName)) {
            return true;
        }

        if (element.querySelector('iframe, table, img, video, canvas')) {
            return true;
        }

        return /(card|item|block|entry|wrap|wrapper|panel|table|hero|frame|hint|buttons|form|search|filter|result|preview|update|faq|scheme|list|grid|database)/i.test(className) || (element.textContent || '').trim().length > 60;
    }

    function markVisible(element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 40 || rect.top === 0) {
            afterPaint(() => {
                element.classList.add(VISIBLE_CLASS);
            });
            return true;
        }

        return false;
    }

    function reveal(element, delay) {
        if (!isMeaningful(element) || seen.has(element)) {
            return;
        }

        seen.add(element);
        element.classList.add(REVEAL_CLASS);
        element.style.setProperty('--trp-stagger', delay + 'ms');

        if (isTitleLike(element)) {
            element.classList.add(TITLE_CLASS);
        }

        ensureObserver();

        if (!markVisible(element) && observer && !observed.has(element)) {
            observer.observe(element);
            observed.add(element);
        }
    }

    function revealGroup(group) {
        Array.from(group.children).forEach((child, index) => {
            reveal(child, index * 70);
        });
    }

    function getSectionRoot(section) {
        return (
            section.querySelector(':scope > .container') ||
            section.querySelector(':scope > .generator-container') ||
            section.querySelector(':scope > .content-container') ||
            section.querySelector(':scope > .table-container') ||
            section.querySelector(':scope > .faq-container') ||
            section
        );
    }

    function prepareHero() {
        document.querySelectorAll('.hero-content, [class*="hero-"][class*="content"], [class*="hero"][class*="content"], .database-hero').forEach((hero) => {
            if (hero.classList.contains(HERO_CLASS) || hero.classList.contains('animate')) {
                return;
            }

            hero.classList.add(HERO_CLASS);
            Array.from(hero.children).forEach((child, index) => {
                child.style.setProperty('--trp-hero-delay', (index * 140) + 'ms');
            });

            afterPaint(() => {
                hero.classList.add(HERO_VISIBLE_CLASS);
            });
        });
    }

    function prepareSection(section) {
        if (!section || /hero/i.test(section.className)) {
            return;
        }

        const root = getSectionRoot(section);
        let revealIndex = 0;

        Array.from(root.children).forEach((child) => {
            if (isHidden(child)) {
                return;
            }

            if (child.matches('.contact-buttons, .docs-buttons, .hero-buttons, .buttons-container')) {
                revealGroup(child);
                return;
            }

            if (child.matches('.section-header')) {
                const headingNodes = Array.from(child.querySelectorAll(':scope > .section-title, :scope > .subsection-title, :scope > h1, :scope > h2, :scope > h3'));
                if (headingNodes.length) {
                    headingNodes.forEach((node, index) => {
                        reveal(node, (revealIndex + index) * 60);
                    });
                    revealIndex += headingNodes.length;
                    return;
                }
            }

            if (/(grid|list)/i.test(Array.from(child.classList).join(' ')) && child.children.length > 1) {
                Array.from(child.children).forEach((item, index) => {
                    reveal(item, index * 70);
                });
                return;
            }

            if (isMeaningful(child)) {
                reveal(child, revealIndex * 60);
                revealIndex += 1;
            }
        });
    }

    function prepareNavbar() {
        const navbar = document.querySelector('.navbar');
        if (!navbar || navbar.classList.contains('nav-animate') || navbar.classList.contains(NAV_CLASS)) {
            return;
        }

        afterPaint(() => {
            navbar.classList.add(NAV_CLASS);
        });
    }

    function ensureArrow(toggle, className, glyph) {
        if (!toggle) {
            return;
        }

        let arrow = toggle.querySelector(':scope > .' + className);
        if (!arrow) {
            arrow = document.createElement('span');
            arrow.className = className;
            toggle.append(document.createTextNode(' '), arrow);
        }

        arrow.textContent = glyph;
        arrow.setAttribute('aria-hidden', 'true');
    }

    function ensureNavArrows() {
        document.querySelectorAll('.dropdown-toggle').forEach((toggle) => {
            ensureArrow(toggle, 'dropdown-arrow', '\u25BE');
        });

        document.querySelectorAll('.submenu-toggle').forEach((toggle) => {
            ensureArrow(toggle, 'submenu-arrow', '\u25B8');
        });
    }

    function bindThemeButtonSpin() {
        const themeBtn = document.getElementById('theme-btn');
        if (!themeBtn || themeBtn.dataset.trpSpinBound === 'true') {
            return;
        }

        themeBtn.dataset.trpSpinBound = 'true';
        themeBtn.addEventListener('click', () => {
            themeBtn.classList.remove('spinning');
            void themeBtn.offsetWidth;
            themeBtn.classList.add('spinning');
            themeBtn.addEventListener('animationend', () => {
                themeBtn.classList.remove('spinning');
            }, { once: true });
        });
    }

    function prepareBanners() {
        document.querySelectorAll('.error-banner-outer, .error-banner').forEach((banner, index) => {
            if (banner.classList.contains(BANNER_CLASS)) {
                return;
            }

            banner.classList.add(BANNER_CLASS);
            banner.style.transitionDelay = (index * 70) + 'ms';

            afterPaint(() => {
                banner.classList.add(VISIBLE_CLASS);
            });
        });
    }

    function getLanguageTargets(root = document) {
        return Array.from(new Set(
            Array.from(root.querySelectorAll(LANGUAGE_TARGET_SELECTOR)).filter((element) => {
                return element && element.isConnected && !isHidden(element) && !element.closest('.navbar, footer, .footer');
            })
        ));
    }

    function animateLanguageEnter() {
        getLanguageTargets(document).forEach((element, index) => {
            element.classList.remove('lang-exit');
            element.style.animationDelay = (index * 45) + 'ms';
            element.classList.add('lang-enter');
            element.addEventListener('animationend', () => {
                element.classList.remove('lang-enter');
                element.style.animationDelay = '';
            }, { once: true });
        });
    }

    function wrapLanguageSwitcher() {
        if (window.__trpLanguageWrapInstalled || typeof window.setLanguage !== 'function') {
            return;
        }

        const originalSetLanguage = window.setLanguage;
        window.__trpLanguageWrapInstalled = true;

        window.setLanguage = function wrappedSetLanguage(lang, skipAnim = false) {
            const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const shouldAnimate = !skipAnim && initialLanguagePaintDone && !reduceMotion;

            if (!shouldAnimate) {
                const result = originalSetLanguage.call(this, lang, true);
                initialLanguagePaintDone = true;
                afterPaint(refresh);
                return result;
            }

            const exitElements = getLanguageTargets(document);
            exitElements.forEach((element, index) => {
                element.classList.remove('lang-enter');
                element.style.animationDelay = (index * 30) + 'ms';
                element.classList.add('lang-exit');
            });

            const exitDuration = Math.min(exitElements.length * 30 + 200, 400);
            window.setTimeout(() => {
                originalSetLanguage.call(this, lang, true);
                if (typeof window.updateLangButton === 'function') {
                    window.updateLangButton(lang);
                }

                afterPaint(() => {
                    animateLanguageEnter();
                    refresh();
                });
            }, exitDuration);
        };
    }

    function refresh() {
        wrapLanguageSwitcher();
        ensureNavArrows();
        bindThemeButtonSpin();
        prepareNavbar();
        prepareHero();
        prepareBanners();
        document.querySelectorAll('section').forEach(prepareSection);
        document.querySelectorAll('.contacts-section h2, .docs-section h2, .disclaimer, .footer p, .section-title, .subsection-title, .section-header, .section-header > *').forEach((element, index) => {
            reveal(element, index * 40);
        });
        document.querySelectorAll('.contact-buttons, .docs-buttons').forEach(revealGroup);
    }

    function scheduleRefresh() {
        clearTimeout(refreshTimer);
        refreshTimer = window.setTimeout(refresh, 60);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', refresh);
    } else {
        refresh();
    }

    window.addEventListener('load', refresh, { once: true });
    window.addEventListener('resize', scheduleRefresh);

    if (document.body) {
        new MutationObserver((mutations) => {
            if (mutations.some((mutation) => mutation.type === 'childList')) {
                scheduleRefresh();
            }
        }).observe(document.body, {
            childList: true,
            subtree: true
        });
    }
})();