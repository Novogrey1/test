// ============================================
// LANGUAGE SYSTEM
// ============================================

const translations = {
  "ru": {
    "Главная": "Главная",
    "Логические схемы": "Логические схемы",
    "Команда проекта": "Команда проекта",
    "События и смены": "События и смены",
    "Документация": "Документация",
    "Анкеты": "Анкеты",
    "Прочее": "Прочее",
    "Социальные сети": "Социальные сети",
    "TRP RP": "TRP RP",
    "← Назад": "← Назад",
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
    "Редакторы и генераторы": "Редакторы и генераторы",
    "Генератор спавна машин": "Генератор спавна машин",
    "Создание окрасок": "Создание окрасок",
    "Редактор маршрутов": "Редактор маршрутов",
    "Редактор карт": "Редактор карт",
    "Информатор": "Информатор",
    "Расписание": "Расписание",
    "Трибуна TDW": "Трибуна TDW",
    "ЧАВО - Частые вопросы": "ЧАВО - Частые вопросы",
    "Официальная документация": "Официальная документация",
    "Обновления сайта": "Обновления сайта",
    "База данных": "База данных",
    "Список автотранспорта": "Список автотранспорта",
    "Команды": "Команды",
    "Идентификатор работника": "Идентификатор работника",
    "Административный сайт": "Административный сайт",
    "Discord": "Discord",
    "TeamSpeak": "TeamSpeak",
    "YouTube": "YouTube",
    "TikTok": "TikTok",
    "Telegram": "Telegram",
    "ВКонтакте": "ВКонтакте",
    "Контакты проекта \"TRP RP\"": "Контакты проекта \"TRP RP\"",
    "Юридическая документация проекта \"TRP RP\"": "Юридическая документация проекта \"TRP RP\"",
    "Политика конфиденциальности": "Политика конфиденциальности",
    "Пользовательское соглашение": "Пользовательское соглашение",
    "Проект \"TRP RP\" не является юридическим лицом и не предоставляет никаких услуг!": "Проект \"TRP RP\" не является юридическим лицом и не предоставляет никаких услуг!",
    "© 2026 TRP RP. Все права защищены.": "© 2026 TRP RP. Все права защищены.",
    "Конфигуратор опубликованной карты": "Конфигуратор опубликованной карты",
    "Название карты": "Название карты",
    "ID изображения (Image)": "ID изображения (Image)",
    "false — нет": "false — нет",
    "true — да": "true — да",
    "Генерировать JSON": "Генерировать JSON",
    "Очистить": "Очистить",
    "Результат:": "Результат:",
    "Копировать": "Копировать",
    "Вставить JSON карты:": "Вставить JSON карты:",
    "Загрузить": "Загрузить",
    "Инструкция по использованию редактора карт": "Инструкция по использованию редактора карт",
    "Пожалуйста, введите название карты.": "Пожалуйста, введите название карты.",
    "ID изображения должен быть положительным числом.": "ID изображения должен быть положительным числом.",
    "placeholder-map-name": "Например: MyCustomMap",
    "placeholder-map-image": "Например: 140171272",
    "placeholder-output": "Сгенерированный JSON появится здесь...",
    "field-desc-name": "Параметр <span class=\"hl\">Name</span> — внутреннее уникальное имя карты в системе игры. Рекомендуется использовать только латинские буквы и цифры.",
    "field-desc-image": "Параметр <span class=\"hl\">Image</span> — числовой ID изображения-превью карты, загруженного в Roblox. Как получить ID:<br>1. Зайдите на <a href=\"https://create.roblox.com/\" target=\"_blank\" rel=\"noopener\" class=\"roblox-link\">create.roblox.com</a><br>2. Откройте <span class=\"hl\">Creations → Development Items → Decals / Images</span><br>3. Загрузите нужное изображение и скопируйте числовой ID из карточки ассета или адресной строки<br><span class=\"warn\">Поле необязательное</span> — если оставить пустым, изображение для карты задано не будет.",
    "field-desc-isEmpty": "Управляет загрузкой карты по умолчанию. Если <span class=\"hl\">true</span> — стандартная карта <strong>не загружается</strong>. Значение <span class=\"warn\">обязано совпадать</span> с <code>OnLaunchNotLoadDefaultMap</code> на сервере — несоответствие вызовет ошибку загрузки.",
    "field-desc-isEmptyRoutes": "Аналог параметра <code>OnLaunchNotLoadDefaultMapSpawnsAndRoutes</code>. Если <span class=\"hl\">true</span> — маршруты и остановки по умолчанию <strong>не загружаются</strong>. Для полностью кастомных карт без стандартной разметки маршрутов.",
    "instruction-intro": "Принцип работы конфигуратора карт в <span class=\"instruction-bold\">Ved's Trolleybus Place</span>. Внимательно ознакомьтесь с инструкцией во избежание недопонимания.",
    "instruction-item-name": "<span class=\"instruction-bold\">Название карты (Name)</span> — уникальный внутренний идентификатор карты. Рекомендуется только латиница и цифры. <span class=\"required-text\">(Обязательный параметр)</span>",
    "instruction-item-image": "<span class=\"instruction-bold\">ID изображения (Image)</span> — числовой ID превью-картинки из Roblox. Загрузите изображение на <a href=\"https://create.roblox.com/\" target=\"_blank\" rel=\"noopener\" class=\"roblox-link\">create.roblox.com</a>, затем найдите ассет в разделе «Creations → Development Items» и скопируйте ID из карточки.",
    "instruction-item-isEmpty": "<span class=\"instruction-bold\">IsEmpty</span> — определяет, загружается ли стандартная карта при старте. При значении <code>true</code> стандартная карта не загружается. Должно совпадать с <code>OnLaunchNotLoadDefaultMap</code>.",
    "instruction-item-isEmptyRoutes": "<span class=\"instruction-bold\">IsEmptyRoutesAndStops</span> — определяет, загружаются ли маршруты и остановки по умолчанию. Аналог настройки <code>OnLaunchNotLoadDefaultMapSpawnsAndRoutes</code>.",
    "instruction-note": "<span class=\"instruction-bold\">Примечание:</span> Для применения конфигурации вставьте сгенерированный JSON в TrPEditMapDetails."
  },
  "en": {
    "Главная": "Home",
    "Логические схемы": "Logical Circuits",
    "Команда проекта": "Project Team",
    "События и смены": "Events and Shifts",
    "Документация": "Documentation",
    "Анкеты": "Forms",
    "Прочее": "Other",
    "Социальные сети": "Social Media",
    "TRP RP": "TRP RP",
    "← Назад": "← Back",
    "Устав проекта": "Project Charter",
    "Для сотрудников": "For Employees",
    "Маршруты": "Routes",
    "Регламент радиообмена": "Radio Regulations",
    "Инструкция ДТУ и ДТД": "DTU and DTD Instructions",
    "Инструкция ДКС и ДТД": "DKS and DTD Instructions",
    "Инструкция водителей": "Driver Instructions",
    "Для отделов": "For Departments",
    "Директор ГТОП/ТПОХ": "Director GTOP/TPOX",
    "КОУП": "COUP",
    "ФАО": "FAO",
    "ОБД": "OBD",
    "УбЦ": "UbC",
    "Лекции": "Lectures",
    "Запуск троллейбусов": "Trolleybus Launch",
    "Схемы депо и маршрутов": "Depot and Route Schemes",
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
    "Редакторы и генераторы": "Editors and Generators",
    "Генератор спавна машин": "Vehicle Spawn Generator",
    "Создание окрасок": "Livery Generator",
    "Редактор маршрутов": "Route Editor",
    "Редактор карт": "Map Editor",
    "Информатор": "Announcement",
    "Расписание": "Schedule",
    "Трибуна TDW": "TDW Stage",
    "ЧАВО - Частые вопросы": "FAQ - Frequently Asked Questions",
    "Официальная документация": "Official Documentation",
    "Обновления сайта": "Website Updates",
    "База данных": "Database",
    "Список автотранспорта": "Vehicle List",
    "Команды": "Commands",
    "Идентификатор работника": "Employee ID",
    "Административный сайт": "Admin Site",
    "Discord": "Discord",
    "TeamSpeak": "TeamSpeak",
    "YouTube": "YouTube",
    "TikTok": "TikTok",
    "Telegram": "Telegram",
    "ВКонтакте": "VKontakte",
    "Контакты проекта \"TRP RP\"": "TRP RP Project Contacts",
    "Юридическая документация проекта \"TRP RP\"": "TRP RP Project Legal Documentation",
    "Политика конфиденциальности": "Privacy Policy",
    "Пользовательское соглашение": "Terms of Service",
    "Проект \"TRP RP\" не является юридическим лицом и не предоставляет никаких услуг!": "The TRP RP project is not a legal entity and does not provide any services!",
    "© 2026 TRP RP. Все права защищены.": "© 2026 TRP RP. All rights reserved.",
    "Конфигуратор опубликованной карты": "Published Map Configurator",
    "Название карты": "Map Name",
    "ID изображения (Image)": "Image ID (Image)",
    "false — нет": "false — no",
    "true — да": "true — yes",
    "Генерировать JSON": "Generate JSON",
    "Очистить": "Clear",
    "Результат:": "Result:",
    "Копировать": "Copy",
    "Вставить JSON карты:": "Paste Map JSON:",
    "Загрузить": "Load",
    "Инструкция по использованию редактора карт": "Map Configurator Usage Guide",
    "Пожалуйста, введите название карты.": "Please enter the map name.",
    "ID изображения должен быть положительным числом.": "Image ID must be a positive number.",
    "placeholder-map-name": "Example: MyCustomMap",
    "placeholder-map-image": "Example: 140171272",
    "placeholder-output": "Generated JSON will appear here...",
    "field-desc-name": "Parameter <span class=\"hl\">Name</span> — internal unique name of the map in the game system. It is recommended to use only Latin letters and numbers.",
    "field-desc-image": "Parameter <span class=\"hl\">Image</span> — numeric ID of the map preview image uploaded to Roblox. How to get the ID:<br>1. Go to <a href=\"https://create.roblox.com/\" target=\"_blank\" rel=\"noopener\" class=\"roblox-link\">create.roblox.com</a><br>2. Open <span class=\"hl\">Creations → Development Items → Decals / Images</span><br>3. Upload the image and copy the numeric ID from the asset card or address bar<br><span class=\"warn\">Optional field</span> — if left empty, no image will be assigned to the map.",
    "field-desc-isEmpty": "Controls whether the default map is loaded. If <span class=\"hl\">true</span> — the default map <strong>does not load</strong>. The value <span class=\"warn\">must match</span> <code>OnLaunchNotLoadDefaultMap</code> on the server — a mismatch will cause a loading error.",
    "field-desc-isEmptyRoutes": "Equivalent of <code>OnLaunchNotLoadDefaultMapSpawnsAndRoutes</code>. If <span class=\"hl\">true</span> — default routes and stops <strong>are not loaded</strong>. Used for fully custom maps without default route markings.",
    "instruction-intro": "How the map configurator works in <span class=\"instruction-bold\">Ved's Trolleybus Place</span>. Please read the guide carefully to avoid any misunderstandings.",
    "instruction-item-name": "<span class=\"instruction-bold\">Map Name (Name)</span> — unique internal identifier of the map. Only Latin letters and numbers are recommended. <span class=\"required-text\">(Required field)</span>",
    "instruction-item-image": "<span class=\"instruction-bold\">Image ID (Image)</span> — numeric ID of the Roblox preview image. Upload the image at <a href=\"https://create.roblox.com/\" target=\"_blank\" rel=\"noopener\" class=\"roblox-link\">create.roblox.com</a>, then find the asset under «Creations → Development Items» and copy the ID from the card.",
    "instruction-item-isEmpty": "<span class=\"instruction-bold\">IsEmpty</span> — determines whether the default map loads on start. When set to <code>true</code>, the default map does not load. Must match <code>OnLaunchNotLoadDefaultMap</code>.",
    "instruction-item-isEmptyRoutes": "<span class=\"instruction-bold\">IsEmptyRoutesAndStops</span> — determines whether default routes and stops are loaded. Equivalent of <code>OnLaunchNotLoadDefaultMapSpawnsAndRoutes</code>.",
    "instruction-note": "<span class=\"instruction-bold\">Note:</span> To apply the configuration, paste the generated JSON into TrPEditMapDetails."
  }
};

// ============================================
// LANGUAGE MANAGEMENT
// ============================================

function getCurrentLanguage() {
  return localStorage.getItem('selectedLanguage') || 'ru';
}

function setLanguage(lang) {
  localStorage.setItem('selectedLanguage', lang);
  translatePage();
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.textContent = lang === 'ru' ? 'EN' : 'RU';
}

function translatePage() {
  const currentLang = getCurrentLanguage();

  // Standard: replace first text node
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      const firstTextNode = Array.from(element.childNodes).find(node => node.nodeType === 3);
      if (firstTextNode) {
        firstTextNode.textContent = translations[currentLang][key];
      } else {
        element.insertBefore(document.createTextNode(translations[currentLang][key]), element.firstChild);
      }
    }
  });

  // HTML: replace innerHTML (for elements with nested tags)
  const htmlElements = document.querySelectorAll('[data-i18n-html]');
  htmlElements.forEach(element => {
    const key = element.getAttribute('data-i18n-html');
    if (translations[currentLang] && translations[currentLang][key]) {
      element.innerHTML = translations[currentLang][key];
    }
  });

  // Placeholder: replace placeholder attribute
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[currentLang] && translations[currentLang][key]) {
      element.placeholder = translations[currentLang][key];
    }
  });

  document.documentElement.lang = currentLang;
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function () {
  const currentLang = getCurrentLanguage();
  translatePage();

  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.textContent = currentLang === 'ru' ? 'EN' : 'RU';
    langBtn.addEventListener('click', function () {
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
  themeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeBtn.textContent = isDark ? '☀️' : '🌙';
  });
}

// ============================================
// MOBILE MENU
// ============================================

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const menuBackBtn = document.getElementById('menu-back-btn');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  const navLinks = navMenu.querySelectorAll('a[href]');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.navbar')) {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
}

if (menuBackBtn) {
  menuBackBtn.addEventListener('click', function () {
    history.back();
  });
}

// ============================================
// DROPDOWN MENU
// ============================================

const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    const parentItem = this.closest('.nav-item');
    if (parentItem) {
      const siblings = parentItem.parentNode.querySelectorAll('.nav-item.has-dropdown.open');
      siblings.forEach(sibling => {
        if (sibling !== parentItem) sibling.classList.remove('open');
      });
      parentItem.classList.toggle('open');
    }
  });
});

document.addEventListener('click', function (e) {
  if (!e.target.closest('.navbar')) {
    document.querySelectorAll('.nav-item.has-dropdown.open').forEach(item => item.classList.remove('open'));
  }
});

const submenuToggles = document.querySelectorAll('.submenu-toggle');
submenuToggles.forEach(toggle => {
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    const parentSubmenu = this.closest('.dropdown-submenu');
    if (parentSubmenu) {
      const siblings = parentSubmenu.parentNode.querySelectorAll('.dropdown-submenu.open');
      siblings.forEach(s => { if (s !== parentSubmenu) s.classList.remove('open'); });
      parentSubmenu.classList.toggle('open');
    }
  });
});

window.addEventListener('resize', function () {
  if (window.innerWidth > 768 && menuToggle && navMenu) {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
  }
});

// ============================================
// NOTIFICATION
// ============================================

function showNotification(message, type = 'success') {
  const el = document.getElementById('notification');
  el.textContent = message;
  el.className = type;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3000);
}

// ============================================
// TOGGLE CARD VISUAL STATE
// ============================================

function bindToggleCard(selectId, cardId) {
  const select = document.getElementById(selectId);
  const card = document.getElementById(cardId);
  if (!select || !card) return;
  function refresh() {
    card.classList.remove('val-true', 'val-false');
    card.classList.add(select.value === 'true' ? 'val-true' : 'val-false');
  }
  select.addEventListener('change', refresh);
  refresh();
}

bindToggleCard('is-empty', 'card-isEmpty');
bindToggleCard('is-empty-routes', 'card-isEmptyRoutes');

// ============================================
// GENERATE JSON
// ============================================

function generateMapData() {
  const name = document.getElementById('map-name').value.trim();
  const imageRaw = document.getElementById('map-image').value.trim();
  const isEmpty = document.getElementById('is-empty').value === 'true';
  const isEmptyRoutes = document.getElementById('is-empty-routes').value === 'true';

  document.getElementById('name-error').style.display = 'none';
  document.getElementById('image-error').style.display = 'none';

  let hasError = false;

  if (!name) {
    document.getElementById('name-error').style.display = 'block';
    showNotification('Введите название карты.', 'error');
    hasError = true;
  }

  let imageId = null;
  if (imageRaw !== '') {
    const parsed = parseInt(imageRaw, 10);
    if (isNaN(parsed) || parsed <= 0 || String(parsed) !== imageRaw) {
      document.getElementById('image-error').style.display = 'block';
      showNotification('ID изображения должен быть положительным числом.', 'error');
      hasError = true;
    } else {
      imageId = parsed;
    }
  }

  if (hasError) return null;

  return {
    Name: name,
    ...(imageId !== null && { Image: imageId }),
    IsEmpty: isEmpty,
    IsEmptyRoutesAndStops: isEmptyRoutes
  };
}

document.getElementById('generate-map').addEventListener('click', function () {
  const data = generateMapData();
  if (data) {
    document.getElementById('output').value = JSON.stringify(data);
    showNotification('JSON успешно сгенерирован!', 'success');
  }
});

// ============================================
// COPY OUTPUT
// ============================================

document.getElementById('copy-output').addEventListener('click', function () {
  const output = document.getElementById('output');
  if (!output.value) {
    showNotification('Нет данных для копирования.', 'error');
    return;
  }
  output.select();
  try {
    document.execCommand('copy');
    showNotification('JSON скопирован в буфер обмена!', 'success');
  } catch (e) {
    showNotification('Не удалось скопировать.', 'error');
  }
});

// ============================================
// CLEAR FORM
// ============================================

document.getElementById('clear-form').addEventListener('click', function () {
  document.getElementById('map-name').value = '';
  document.getElementById('map-image').value = '';
  document.getElementById('is-empty').value = 'false';
  document.getElementById('is-empty-routes').value = 'false';
  document.getElementById('output').value = '';
  document.getElementById('input-json').value = '';
  document.getElementById('name-error').style.display = 'none';
  document.getElementById('image-error').style.display = 'none';
  document.getElementById('card-isEmpty').classList.remove('val-true');
  document.getElementById('card-isEmpty').classList.add('val-false');
  document.getElementById('card-isEmptyRoutes').classList.remove('val-true');
  document.getElementById('card-isEmptyRoutes').classList.add('val-false');
  showNotification('Форма очищена.', 'success');
});

// ============================================
// LOAD FROM JSON
// ============================================

document.getElementById('load-json').addEventListener('click', function () {
  const raw = document.getElementById('input-json').value.trim();
  if (!raw) {
    showNotification('Вставьте JSON в поле ниже.', 'error');
    return;
  }
  try {
    const data = JSON.parse(raw);
    document.getElementById('map-name').value = data.Name || '';
    document.getElementById('map-image').value = data.Image != null ? data.Image : '';
    document.getElementById('is-empty').value = data.IsEmpty === true ? 'true' : 'false';
    document.getElementById('is-empty-routes').value = data.IsEmptyRoutesAndStops === true ? 'true' : 'false';
    document.getElementById('is-empty').dispatchEvent(new Event('change'));
    document.getElementById('is-empty-routes').dispatchEvent(new Event('change'));
    document.getElementById('output').value = JSON.stringify(data);
    showNotification('JSON успешно загружен!', 'success');
  } catch (e) {
    showNotification('Ошибка при разборе JSON. Проверьте формат.', 'error');
  }
});

// ============================================
// SECURITY
// ============================================

document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', (e) => {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
    (e.ctrlKey && e.key === 'U')
  ) {
    e.preventDefault();
  }
});