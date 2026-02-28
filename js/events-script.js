// ============================================
// LANGUAGE SYSTEM - TRANSLATION OBJECT
// ============================================

const translations = {
  "ru": {
    // Навигация
    "Назад": "Назад",
    "Главная": "Главная",
    "Команда проекта": "Команда проекта",
    "События и смены": "События и смены",
    "Документация": "Документация",
    "Прочее": "Прочее",
    "Социальные сети": "Социальные сети",
    "TRP RP": "TRP RP",

    // Герой
    "Календарь событий и регистрация на смены": "Календарь событий и регистрация на смены",

    // Секции
    "Календарь событий": "Календарь событий",
    "Регистрация на смену": "Регистрация на смену",
    "Следите за расписанием мероприятий и смен проекта TRP RP в реальном времени.": "Следите за расписанием мероприятий и смен проекта TRP RP в реальном времени.",
    "Заполните заявку для участия в смене или её отмены. Заявки обрабатываются в течение 5 рабочих дней.": "Заполните заявку для участия в смене или её отмены. Заявки обрабатываются в течение 5 рабочих дней.",

    // Контакты и документация
    "Контакты проекта \"TRP RP\"": "Контакты проекта \"TRP RP\"",
    "Discord": "Discord",
    "TeamSpeak": "TeamSpeak",
    "YouTube": "YouTube",
    "TikTok": "TikTok",
    "Telegram": "Telegram",
    "ВКонтакте": "ВКонтакте",
    "Юридическая документация проекта \"TRP RP\"": "Юридическая документация проекта \"TRP RP\"",
    "Политика конфиденциальности": "Политика конфиденциальности",
    "Пользовательское соглашение": "Пользовательское соглашение",
    "Проект \"TRP RP\" не является юридическим лицом и не предоставляет никаких услуг!": "Проект \"TRP RP\" не является юридическим лицом и не предоставляет никаких услуг!",
    "© 2026 TRP RP. Все права защищены.": "© 2026 TRP RP. Все права защищены."
  },
  "en": {
    // Навигация
    "Назад": "Back",
    "Главная": "Home",
    "Команда проекта": "Project Team",
    "События и смены": "Events and Shifts",
    "Документация": "Documentation",
    "Прочее": "Other",
    "Социальные сети": "Social Media",
    "TRP RP": "TRP RP",

    // Герой
    "Календарь событий и регистрация на смены": "Event Calendar and Shift Registration",

    // Секции
    "Календарь событий": "Event Calendar",
    "Регистрация на смену": "Shift Registration",
    "Следите за расписанием мероприятий и смен проекта TRP RP в реальном времени.": "Follow the schedule of TRP RP project events and shifts in real time.",
    "Заполните заявку для участия в смене или её отмены. Заявки обрабатываются в течение 5 рабочих дней.": "Fill out the application to participate in a shift or cancel it. Applications are processed within 5 business days.",

    // Контакты и документация
    "Контакты проекта \"TRP RP\"": "TRP RP Project Contacts",
    "Discord": "Discord",
    "TeamSpeak": "TeamSpeak",
    "YouTube": "YouTube",
    "TikTok": "TikTok",
    "Telegram": "Telegram",
    "ВКонтакте": "VKontakte",
    "Юридическая документация проекта \"TRP RP\"": "Legal Documentation of the TRP RP Project",
    "Политика конфиденциальности": "Privacy Policy",
    "Пользовательское соглашение": "Terms of Use",
    "Проект \"TRP RP\" не является юридическим лицом и не предоставляет никаких услуг!": "The \"TRP RP\" project is not a legal entity and does not provide any services!",
    "© 2026 TRP RP. Все права защищены.": "© 2026 TRP RP. All rights reserved."
  }
};

let originalHTML = null;

// ============================================
// THEME SYSTEM
// ============================================

function initThemeSystem() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', handleThemeClick);
    }
}

function applyTheme(theme) {
    localStorage.setItem('theme', theme);
    const themeBtn = document.getElementById('theme-btn');

    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeBtn) themeBtn.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        if (themeBtn) themeBtn.textContent = '🌙';
    }
}

function handleThemeClick() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
}

// ============================================
// LANGUAGE SYSTEM
// ============================================

function initLanguageSystem() {
    if (!originalHTML) {
        originalHTML = document.body.innerHTML;
    }

    const savedLanguage = localStorage.getItem('language') || 'ru';
    setLanguage(savedLanguage);
    updateLangButton(savedLanguage);
    setupLanguageButton();
    reinitializeEventListeners();
    initThemeSystem();
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    document.body.innerHTML = originalHTML;

    function translateNode(node) {
        if (node.nodeType === 3) {
            let text = node.textContent.trim();
            if (text && translations[lang] && translations[lang][text]) {
                node.textContent = node.textContent.replace(text, translations[lang][text]);
            }
        } else if (node.nodeType === 1 && node.tagName !== 'SCRIPT') {
            for (let i = 0; i < node.childNodes.length; i++) {
                translateNode(node.childNodes[i]);
            }
        }
    }

    for (let i = 0; i < document.body.childNodes.length; i++) {
        translateNode(document.body.childNodes[i]);
    }

    reinitializeEventListeners();
    reinitializeTheme();
    initMobileMenu();
}

function updateLangButton(lang) {
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        langBtn.textContent = lang === 'ru' ? 'EN' : 'RU';
    }
}

function setupLanguageButton() {
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        const newLangBtn = langBtn.cloneNode(true);
        langBtn.parentNode.replaceChild(newLangBtn, langBtn);

        document.getElementById('lang-btn').addEventListener('click', function () {
            const currentLang = localStorage.getItem('language') || 'ru';
            const newLang = currentLang === 'ru' ? 'en' : 'ru';
            setLanguage(newLang);
            updateLangButton(newLang);
        });
    }
}

function reinitializeEventListeners() {
    setupLanguageButton();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    initMobileMenu();
}

function reinitializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
        themeBtn.removeEventListener('click', handleThemeClick);
        themeBtn.addEventListener('click', handleThemeClick);
    }
    
    initMobileMenu();
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================

function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = navMenu ? navMenu.querySelectorAll('.nav-link') : [];

    // Close menu when back arrow is clicked
    const backBtn = document.getElementById('menu-back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            const toggle = document.getElementById('menu-toggle');
            if (toggle && navMenu) {
                toggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }

    // Toggle menu when hamburger is clicked
    if (menuToggle) {
        // Remove old listeners by cloning
        const newToggle = menuToggle.cloneNode(true);
        menuToggle.parentNode.replaceChild(newToggle, menuToggle);
        newToggle.addEventListener('click', function() {
            newToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const toggle = document.getElementById('menu-toggle');
            if (toggle && navMenu) {
                toggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const toggle = document.getElementById('menu-toggle');
        if (navMenu && toggle && 
            !navMenu.contains(event.target) && 
            !toggle.contains(event.target)) {
            toggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Close menu on window resize if screen is large enough
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            const toggle = document.getElementById('menu-toggle');
            if (toggle && navMenu) {
                toggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        }
    });
}

// ============================================
// NAVBAR — прозрачная, темнеет при скролле
// ============================================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initThemeSystem();
        initLanguageSystem();
        initMobileMenu();
    });
} else {
    initThemeSystem();
    initLanguageSystem();
    initMobileMenu();
}

console.log('%c🎮 Добро пожаловать на сайт TRP RP!', 'color: #4a90e2; font-size: 16px; font-weight: bold;');
