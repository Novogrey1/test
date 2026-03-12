// ============================================
// LANGUAGE SYSTEM
// ============================================

const translations = {
  "ru": {
    // Main menu
    "Главная": "Главная",
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
    "© 2026 TRP RP. Все права защищены.": "© 2026 TRP RP. Все права защищены."
  },
  "en": {
    // Main menu
    "Главная": "Home",
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
    "© 2026 TRP RP. Все права защищены.": "© 2026 TRP RP. All rights reserved."
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
  location.reload();
}

function updateGeneratorForm(lang) {
  const formWrapper = document.getElementById('form-wrapper');
  if (!formWrapper) return;
  
  // Русская версия
  let iframeSrc = "https://script.google.com/macros/s/AKfycby0IvtVzpzC-GFqPCPW8P-XsrZXrZczRvi3m5GZKbi3PBzrGc8wwEx1l_HJvHsURl-S/exec";
  
  // Английская версия
  if (lang === 'en') {
    iframeSrc = "https://script.google.com/macros/s/AKfycbzM-ZFN81X-ns2Bqipa7YzgF02_RV37lgjwTdPg1XV0g_0CXlmHFe1q5OMJsedVgVMy/exec";
  }
  
  formWrapper.innerHTML = `<iframe src="${iframeSrc}" frameborder="0" marginheight="0" marginwidth="0"></iframe>`;
}

function translatePage() {
  const currentLang = getCurrentLanguage();
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLang] && translations[currentLang][key]) {
      // Replace only the first text node, preserving child elements like spans
      const firstTextNode = Array.from(element.childNodes).find(node => node.nodeType === 3);
      if (firstTextNode) {
        firstTextNode.textContent = translations[currentLang][key];
      } else {
        // If no text node exists, add the text
        element.insertBefore(document.createTextNode(translations[currentLang][key]), element.firstChild);
      }
    }
  });

  // Обновить язык документа
  document.documentElement.lang = currentLang;
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const currentLang = getCurrentLanguage();
  
  // Translate page text
  translatePage();
  
  // Load generator form with correct language
  updateGeneratorForm(currentLang);
  
  // Update language button
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.textContent = currentLang === 'ru' ? 'EN' : 'RU';
    langBtn.addEventListener('click', function() {
      const newLang = currentLang === 'ru' ? 'en' : 'ru';
      setLanguage(newLang);
    });
  }
});

// ============================================
// THEME TOGGLE - DARK MODE
// ============================================

// Применяем тему сразу, чтобы не было мигания при загрузке
(function() {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
})();

document.addEventListener('DOMContentLoaded', function() {
  const themeBtn = document.getElementById('theme-btn');
  if (!themeBtn) return;

  const savedTheme = localStorage.getItem('theme') || 'light';
  themeBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    themeBtn.textContent = isDarkMode ? '☀️' : '🌙';
  });
});

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

  // Close menu when a link is clicked
  const navLinks = navMenu.querySelectorAll('a[href]');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.navbar')) {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
  });
}

if (menuBackBtn) {
  menuBackBtn.addEventListener('click', function() {
    history.back();
  });
}

// ============================================
// DROPDOWN MENU TOGGLE (DESKTOP & MOBILE)
// ============================================

const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    const parentItem = this.closest('.nav-item');
    if (parentItem) {
      // Close other open dropdowns at same level
      const siblings = parentItem.parentNode.querySelectorAll('.nav-item.has-dropdown.open');
      siblings.forEach(sibling => {
        if (sibling !== parentItem) {
          sibling.classList.remove('open');
        }
      });
      // Toggle current dropdown
      parentItem.classList.toggle('open');
    }
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('.navbar')) {
    const openItems = document.querySelectorAll('.nav-item.has-dropdown.open');
    openItems.forEach(item => {
      item.classList.remove('open');
    });
  }
});

// Submenu toggle for mobile
const submenuToggles = document.querySelectorAll('.submenu-toggle');
submenuToggles.forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    const parentSubmenu = this.closest('.dropdown-submenu');
    if (parentSubmenu) {
      // Close other open submenus at same level
      const siblings = parentSubmenu.parentNode.querySelectorAll('.dropdown-submenu.open');
      siblings.forEach(sibling => {
        if (sibling !== parentSubmenu) {
          sibling.classList.remove('open');
        }
      });
      // Toggle current submenu
      parentSubmenu.classList.toggle('open');
    }
  });
});

// ============================================
// RESPONSIVE BEHAVIOR
// ============================================

window.addEventListener('resize', function() {
  // Reset menu visibility on desktop
  if (window.innerWidth > 768) {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
  }
});