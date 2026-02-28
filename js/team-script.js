// ============================================
// LANGUAGE SYSTEM - TRANSLATION OBJECT
// ============================================

const translations = {
  "ru": {
    // Навигация
    "Главная": "Главная",
    "Команда проекта": "Команда проекта",
    "События и смены": "События и смены",
    "Документация": "Документация",
    "Прочее": "Прочее",
    "Социальные сети": "Социальные сети",
    "TRP RP": "TRP RP",

    // Герой
    "Команда проекта TRP RP": "Команда проекта TRP RP",

    // Секция Администрация
    "Администрация": "Администрация",
    "Владелец проекта": "Владелец проекта",
    "Главный разработчик": "Главный разработчик",
    "Редактор проекта": "Редактор проекта",
    "Начальник Городского Троллейбусного Управления": "Начальник Городского Троллейбусного Управления",

    // Секция Руководство отделов
    "Руководство отделов": "Руководство отделов",
    "Главный Бухгалтер": "Главный Бухгалтер",
    "Финансового Аналитического Отдела": "Финансового Аналитического Отдела",

    // Секция Почётные лица
    "Почётные лица": "Почётные лица",
    "Экс-Заместитель Начальника": "Экс-Заместитель Начальника",
    "Городского Троллейбусного Управления": "Городского Троллейбусного Управления",

    // Секция Водитель месяца
    "Победители мероприятия \"Водитель месяца\"": "Победители мероприятия \"Водитель месяца\"",
    "Первое место": "Первое место",
    "Второе место": "Второе место",
    "Третье место": "Третье место",

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
    "Главная": "Home",
    "Команда проекта": "Project Team",
    "События и смены": "Events and Shifts",
    "Документация": "Documentation",
    "Прочее": "Other",
    "Социальные сети": "Social Media",
    "TRP RP": "TRP RP",

    // Герой
    "Команда проекта TRP RP": "TRP RP Project Team",

    // Секция Администрация
    "Администрация": "Administration",
    "Владелец проекта": "Project Owner",
    "Главный разработчик": "Lead Developer",
    "Редактор проекта": "Project Editor",
    "Начальник Городского Троллейбусного Управления": "Head of the City Trolleybus Administration",

    // Секция Руководство отделов
    "Руководство отделов": "Department Management",
    "Главный Бухгалтер": "Chief Accountant",
    "Финансового Аналитического Отдела": "Financial Analytics Department",

    // Секция Почётные лица
    "Почётные лица": "Honorary Members",
    "Экс-Заместитель Начальника": "Ex-Deputy Head",
    "Городского Троллейбусного Управления": "City Trolleybus Administration",

    // Секция Водитель месяца
    "Победители мероприятия \"Водитель месяца\"": "\"Driver of the Month\" Event Winners",
    "Первое место": "First Place",
    "Второе место": "Second Place",
    "Третье место": "Third Place",

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

    // Восстанавливаем исходный HTML
    document.body.innerHTML = originalHTML;

    // Переводим все текстовые узлы
    function translateNode(node) {
        if (node.nodeType === 3) { // TEXT_NODE
            let text = node.textContent.trim();
            if (text && text.length > 0 && translations[lang] && translations[lang][text]) {
                node.textContent = node.textContent.replace(text, translations[lang][text]);
            }
        } else if (node.nodeType === 1) { // ELEMENT_NODE
            if (node.tagName !== 'SCRIPT') {
                for (let i = 0; i < node.childNodes.length; i++) {
                    translateNode(node.childNodes[i]);
                }
            }
        }
    }

    for (let i = 0; i < document.body.childNodes.length; i++) {
        translateNode(document.body.childNodes[i]);
    }

    reinitializeEventListeners();
    reinitializeTheme();
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

        const freshLangBtn = document.getElementById('lang-btn');
        freshLangBtn.addEventListener('click', function () {
            const currentLang = localStorage.getItem('language') || 'ru';
            const newLang = currentLang === 'ru' ? 'en' : 'ru';
            setLanguage(newLang);
            updateLangButton(newLang);
        });
    }
}

function reinitializeEventListeners() {
    setupLanguageButton();

    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function reinitializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
        themeBtn.removeEventListener('click', handleThemeClick);
        themeBtn.addEventListener('click', handleThemeClick);
    }
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
// АНИМАЦИЯ КАРТОЧЕК ПРИ ПОЯВЛЕНИИ
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initThemeSystem();
        initLanguageSystem();

// ============================================
// MOBILE MENU TOGGLE
// ============================================

function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = navMenu ? navMenu.querySelectorAll('.nav-link') : [];

    // Toggle menu when hamburger is clicked
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (menuToggle && navMenu) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && menuToggle && 
            !navMenu.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Close menu on window resize if screen is large enough
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            if (menuToggle && navMenu) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });
}

        // Анимация карточек (после инициализации языка)
        document.querySelectorAll('.team-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.animationDelay = `${index * 0.1}s`;
            observer.observe(card);
        });

        // Добавляем CSS анимацию
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(30px); }
                to   { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
    });
} else {
    initThemeSystem();
    initLanguageSystem();
    initMobileMenu();

    document.querySelectorAll('.team-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to   { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// CONSOLE WELCOME MESSAGE
// ============================================

console.log('%c🎮 Добро пожаловать на сайт TRP RP!', 'color: #4a90e2; font-size: 16px; font-weight: bold;');