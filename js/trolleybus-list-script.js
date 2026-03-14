// ============================================
// ПЕРЕВОДЫ
// ============================================
const translations = {
  "ru": {
    "Главная": "Главная", "Логические схемы":"Логические схемы", "Конфигуратор опубликованной карты": "Конфигуратор опубликованной карты", "Команда проекта": "Команда проекта", "События и смены": "События и смены",
    "Документация": "Документация", "Прочее": "Прочее", "Социальные сети": "Социальные сети",
    "TRP RP": "TRP RP",
    "Официально зарегистрированные троллейбусы проекта \"TRP RP\"": "Официально зарегистрированные троллейбусы проекта \"TRP RP\"",
    "Контакты проекта \"TRP RP\"": "Контакты проекта \"TRP RP\"",
    "Discord": "Discord", "TeamSpeak": "TeamSpeak", "YouTube": "YouTube", "TikTok": "TikTok",
    "Telegram": "Telegram", "ВКонтакте": "ВКонтакте",
    "Юридическая документация проекта \"TRP RP\"": "Юридическая документация проекта \"TRP RP\"",
    "Политика конфиденциальности": "Политика конфиденциальности",
    "Пользовательское соглашение": "Пользовательское соглашение",
    "Проект \"TRP RP\" не является юридическим лицом и не предоставляет никаких услуг!": "Проект \"TRP RP\" не является юридическим лицом и не предоставляет никаких услуг!",
    "© 2026 TRP RP. Все права защищены.": "© 2026 TRP RP. Все права защищены.",
    "← Назад": "← Назад",
    "Для сотрудников": "Для сотрудников", "Маршруты": "Маршруты",
    "Регламент радиообмена": "Регламент радиообмена",
    "Инструкция ДТУ и ДТД": "Инструкция ДТУ и ДТД",
    "Инструкция ДКС и ДТД": "Инструкция ДКС и ДТД",
    "Инструкция водителей": "Инструкция водителей",
    "Для отделов": "Для отделов", "Директор ГТОП/ТПОХ": "Директор ГТОП/ТПОХ",
    "КОУП": "КОУП", "ФАО": "ФАО", "ОБД": "ОБД", "УбЦ": "УбЦ",
    "Лекции": "Лекции", "Запуск троллейбусов": "Запуск троллейбусов",
    "Схемы депо и маршрутов": "Схемы депо и маршрутов",
    "Анкеты": "Анкеты", "Заявления": "Заявления", "Экзамен": "Экзамен",
    "Отпуск & Больничный": "Отпуск & Больничный",
    "Увольнение & Восстановление": "Увольнение & Восстановление",
    "Регистрация & Замена троллейбуса": "Регистрация & Замена троллейбуса",
    "Ремонт троллейбусов": "Ремонт троллейбусов", "Персонал": "Персонал",
    "ЗНГТУ": "ЗНГТУ", "ДТПГО & ДТПоХ": "ДТПГО & ДТПоХ", "ДТУ": "ДТУ", "ДКС": "ДКС",
    "Тесты": "Тесты", "Теоретический экзамен": "Теоретический экзамен",
    "Подать апелляцию": "Подать апелляцию", "Регистрация на смену": "Регистрация на смену",
    "Прочие анкеты": "Прочие анкеты", "Редакторы и генераторы": "Редакторы и генераторы",
    "Генератор спавна машин": "Генератор спавна машин", "Создание окрасок": "Создание окрасок",
    "Редактор маршрутов": "Редактор маршрутов", "Информатор": "Информатор",
    "Расписание": "Расписание", "Трибуна TDW": "Трибуна TDW",
    "Правила проекта \"TRP RP\"": "Правила проекта \"TRP RP\"",
    "ЧАВО - Частые вопросы": "ЧАВО - Частые вопросы",
    "Официальная документация": "Официальная документация",
    "База данных": "База данных", "Список автотранспорта": "Список автотранспорта",
    "Команды": "Команды", "Идентификатор работника": "Идентификатор работника",
    "Административный сайт": "Административный сайт", "VK": "VK",
    "Устав проекта": "Устав проекта",
    "Главный Троллейбусный Парк": "Главный Троллейбусный Парк",
    "Троллейбусный парк острова Хардбасс": "Троллейбусный парк острова Хардбасс",
    "Списанные и переданные троллейбусы": "Списанные и переданные троллейбусы",
    "Бортовой номер": "Бортовой номер",
    "Модель": "Модель",
    "Статус": "Статус",
    "Заводской номер": "Заводской номер",
    "Окраска": "Окраска",
    "Примечание": "Примечание",
    "Депо/Парк": "Депо/Парк",
    "Утерян": "Утерян",
    "Списан": "Списан",
    "Передан в другой город": "Передан в другой город",
    "Местонахождение и судьба неизвестны": "Местонахождение и судьба неизвестны",
    "ЗиУ-682г-01 (ЗиУ-9)": "ЗиУ-682г-01 (ЗиУ-9)",
    "ЗиУ-682г-013 (ЗиУ-9)": "ЗиУ-682г-013 (ЗиУ-9)",
    "ЗиУ-6205 (ЗиУ-10)": "ЗиУ-6205 (ЗиУ-10)",
    "ЗиУ-682г-01 (ЗиУ-9) СМЕ": "ЗиУ-682г-01 (ЗиУ-9) СМЕ",
    "ЗиУ-682г-01 (ЗиУ-9) Техпомощь": "ЗиУ-682г-01 (ЗиУ-9) Техпомощь"
  },
  "en": {
    "Главная": "Home", "Логические схемы": "Logical Circuits", "Конфигуратор опубликованной карты": "Published Map Configurator", "Команда проекта": "Project Team", "События и смены": "Events and Shifts",
    "Документация": "Documentation", "Прочее": "Other", "Социальные сети": "Social Media",
    "TRP RP": "TRP RP",
    "Официально зарегистрированные троллейбусы проекта \"TRP RP\"": "Officially Registered Trolleybuses of the \"TRP RP\" Project",
    "Контакты проекта \"TRP RP\"": "TRP RP Project Contacts",
    "Discord": "Discord", "TeamSpeak": "TeamSpeak", "YouTube": "YouTube", "TikTok": "TikTok",
    "Telegram": "Telegram", "ВКонтакте": "VKontakte",
    "Юридическая документация проекта \"TRP RP\"": "Legal Documentation of the TRP RP Project",
    "Политика конфиденциальности": "Privacy Policy",
    "Пользовательское соглашение": "Terms of Use",
    "Проект \"TRP RP\" не является юридическим лицом и не предоставляет никаких услуг!": "The \"TRP RP\" project is not a legal entity and does not provide any services!",
    "© 2026 TRP RP. Все права защищены.": "© 2026 TRP RP. All rights reserved.",
    "← Назад": "← Back",
    "Для сотрудников": "For Employees", "Маршруты": "Routes",
    "Регламент радиообмена": "Radio Communication Regulations",
    "Инструкция ДТУ и ДТД": "DTU and DTD Instructions",
    "Инструкция ДКС и ДТД": "DKS and DTD Instructions",
    "Инструкция водителей": "Driver Instructions",
    "Для отделов": "For Departments", "Директор ГТОП/ТПОХ": "Director GTOP/TPOH",
    "КОУП": "KOUP", "ФАО": "FAO", "ОБД": "OBD", "УбЦ": "UbTs",
    "Лекции": "Lectures", "Запуск троллейбусов": "Trolleybus Launch",
    "Схемы депо и маршрутов": "Depot and Route Schemes",
    "Анкеты": "Forms", "Заявления": "Applications", "Экзамен": "Exam",
    "Отпуск & Больничный": "Vacation & Sick Leave",
    "Увольнение & Восстановление": "Dismissal & Reinstatement",
    "Регистрация & Замена троллейбуса": "Registration & Trolleybus Replacement",
    "Ремонт троллейбусов": "Trolleybus Repair", "Персонал": "Personnel",
    "ЗНГТУ": "ZNGTU", "ДТПГО & ДТПоХ": "DTPGO & DTPokH", "ДТУ": "DTU", "ДКС": "DKS",
    "Тесты": "Tests", "Теоретический экзамен": "Theoretical Exam",
    "Подать апелляцию": "Submit Appeal", "Регистрация на смену": "Shift Registration",
    "Прочие анкеты": "Other Forms", "Редакторы и генераторы": "Editors and Generators",
    "Генератор спавна машин": "Vehicle Spawn Generator", "Создание окрасок": "Create Liveries",
    "Редактор маршрутов": "Route Editor", "Информатор": "Informer",
    "Расписание": "Schedule", "Трибуна TDW": "TDW Tribune",
    "Правила проекта \"TRP RP\"": "TRP RP Project Rules",
    "ЧАВО - Частые вопросы": "FAQ - Frequently Asked Questions",
    "Официальная документация": "Official Documentation",
    "База данных": "Database", "Список автотранспорта": "Vehicle List",
    "Команды": "Commands", "Идентификатор работника": "Employee ID",
    "Административный сайт": "Admin Site", "VK": "VK",
    "Устав проекта": "Project Charter",
    "Главный Троллейбусный Парк": "Main Trolleybus Depot",
    "Троллейбусный парк острова Хардбасс": "Hardbass Island Trolleybus Depot",
    "Списанные и переданные троллейбусы": "Decommissioned and Transferred Trolleybuses",
    "Бортовой номер": "Board Number",
    "Модель": "Model",
    "Статус": "Status",
    "Заводской номер": "Factory Number",
    "Окраска": "Livery",
    "Примечание": "Note",
    "Депо/Парк": "Depot/Park",
    "Утерян": "Lost",
    "Списан": "Decommissioned",
    "Передан в другой город": "Transferred to another city",
    "Местонахождение и судьба неизвестны": "Location and fate unknown",
    "ЗиУ-682г-01 (ЗиУ-9)": "ZiU-682g-01 (ZiU-9)",
    "ЗиУ-682г-013 (ЗиУ-9)": "ZiU-682g-013 (ZiU-9)",
    "ЗиУ-6205 (ЗиУ-10)": "ZiU-6205 (ZiU-10)",
    "ЗиУ-682г-01 (ЗиУ-9) СМЕ": "ZiU-682g-01 (ZiU-9) EMU",
    "ЗиУ-682г-01 (ЗиУ-9) Техпомощь": "ZiU-682g-01 (ZiU-9) Service Vehicle"
  }
};

let originalHTML = null;

// ============================================
// ТЕМА
// ============================================
function initThemeSystem() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) themeBtn.addEventListener('click', handleThemeClick);
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
    applyTheme(currentTheme === 'light' ? 'dark' : 'light');
}

// ============================================
// ЯЗЫК
// ============================================
function initLanguageSystem() {
    if (!originalHTML) originalHTML = document.body.innerHTML;
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
            for (let i = 0; i < node.childNodes.length; i++) translateNode(node.childNodes[i]);
        }
    }
    for (let i = 0; i < document.body.childNodes.length; i++) translateNode(document.body.childNodes[i]);
    reinitializeEventListeners();
    reinitializeTheme();
    initMobileMenu();
    // Если данные уже загружены — применяем сразу с новым языком, иначе загружаем
    if (lastFetchedData) {
        applyTableData(lastFetchedData);
    } else {
        updateStatuses();
    }
}

function updateLangButton(lang) {
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) langBtn.textContent = lang === 'ru' ? 'EN' : 'RU';
}

function setupLanguageButton() {
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        const newBtn = langBtn.cloneNode(true);
        langBtn.parentNode.replaceChild(newBtn, langBtn);
        document.getElementById('lang-btn').addEventListener('click', function () {
            const currentLang = localStorage.getItem('language') || 'ru';
            const newLang = currentLang === 'ru' ? 'en' : 'ru';
            setLanguage(newLang);
            updateLangButton(newLang);
        });
    }
}

function reinitializeEventListeners() { setupLanguageButton(); initDropdowns(); initMobileMenu(); initModal(); }

function reinitializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) { themeBtn.removeEventListener('click', handleThemeClick); themeBtn.addEventListener('click', handleThemeClick); }
    initDropdowns(); initMobileMenu();
}

// ============================================
// МОБИЛЬНОЕ МЕНЮ
// ============================================
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const backBtn = document.getElementById('menu-back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function () {
            const toggle = document.getElementById('menu-toggle');
            if (toggle && navMenu) { toggle.classList.remove('active'); navMenu.classList.remove('active'); document.body.classList.remove('menu-open'); }
        });
    }
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            menuToggle.classList.toggle('active'); navMenu.classList.toggle('active'); document.body.classList.toggle('menu-open');
        });
    }
    document.addEventListener('click', function (event) {
        if (navMenu && menuToggle && !navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            menuToggle.classList.remove('active'); navMenu.classList.remove('active'); document.body.classList.remove('menu-open');
        }
    });
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && menuToggle && navMenu) {
            menuToggle.classList.remove('active'); navMenu.classList.remove('active'); document.body.classList.remove('menu-open');
        }
    });
}

// ============================================
// НАВБАР СКРОЛЛ
// ============================================
function updateNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 50);
}
window.addEventListener('scroll', updateNavbar, { passive: true });
window.addEventListener('DOMContentLoaded', updateNavbar);
updateNavbar();

// ============================================
// DROPDOWN
// ============================================
function initDropdowns() {
    const hasPointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    document.querySelectorAll('.nav-item.has-dropdown').forEach(function (item) {
        let hideTimer = null;
        const openItem = () => { clearTimeout(hideTimer); item.parentNode.querySelectorAll('.nav-item.has-dropdown.open').forEach(s => { if (s !== item) { s.classList.remove('open'); s.querySelectorAll('.dropdown-submenu.open').forEach(x => x.classList.remove('open')); } }); item.classList.add('open'); };
        const closeItem = (d) => { clearTimeout(hideTimer); hideTimer = setTimeout(() => { item.classList.remove('open'); item.querySelectorAll('.dropdown-submenu.open').forEach(x => x.classList.remove('open')); }, d); };
        item.addEventListener('mouseenter', () => { if (hasPointer()) openItem(); });
        item.addEventListener('mouseleave', () => { if (hasPointer()) closeItem(600); });
        const toggle = item.querySelector(':scope > .dropdown-toggle');
        if (toggle) {
            const newToggle = toggle.cloneNode(true); toggle.parentNode.replaceChild(newToggle, toggle);
            newToggle.addEventListener('click', function (e) {
                e.preventDefault(); e.stopPropagation();
                if (!hasPointer()) { const wasOpen = item.classList.contains('open'); item.parentNode.querySelectorAll('.nav-item.has-dropdown.open').forEach(s => { s.classList.remove('open'); s.querySelectorAll('.dropdown-submenu.open').forEach(x => x.classList.remove('open')); }); if (!wasOpen) item.classList.add('open'); }
            });
        }
    });
    document.querySelectorAll('.dropdown-submenu').forEach(function (sub) {
        let hideTimer = null;
        const openSub = () => { clearTimeout(hideTimer); sub.parentNode.querySelectorAll('.dropdown-submenu.open').forEach(s => { if (s !== sub) s.classList.remove('open'); }); sub.classList.add('open'); };
        const closeSub = (d) => { clearTimeout(hideTimer); hideTimer = setTimeout(() => sub.classList.remove('open'), d); };
        sub.addEventListener('mouseenter', () => { if (hasPointer()) openSub(); });
        sub.addEventListener('mouseleave', () => { if (hasPointer()) closeSub(600); });
        const link = sub.querySelector(':scope > .dropdown-link');
        if (link) {
            const newLink = link.cloneNode(true); link.parentNode.replaceChild(newLink, link);
            newLink.addEventListener('click', function (e) {
                e.preventDefault(); e.stopPropagation();
                if (!hasPointer()) { const wasOpen = sub.classList.contains('open'); sub.parentNode.querySelectorAll('.dropdown-submenu.open').forEach(s => s.classList.remove('open')); if (!wasOpen) sub.classList.add('open'); }
            });
        }
    });
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.nav-item.has-dropdown')) {
            document.querySelectorAll('.nav-item.has-dropdown.open').forEach(item => { item.classList.remove('open'); item.querySelectorAll('.dropdown-submenu.open').forEach(s => s.classList.remove('open')); });
        }
    });
}

// ============================================
// ОБНОВЛЕНИЕ СТАТУСОВ ИЗ GOOGLE SHEETS
// ============================================
const SHEET_URL = 'https://script.google.com/macros/s/AKfycbyN_aX2V66Zz8OIiSIbmztupA0VBvHTeSlJDeb14yr5i1EQ_rCN8ZpM5JOym7bwy5nj3Q/exec';
let isFirstLoad = true;
let lastFetchedData = null;

// Переводы статусов и моделей для таблицы
const tableTranslationsEN = {
    status: {
        'Эксплуатируется': 'In Operation',
        'В ремонте': 'Under Repair',
        'Не эксплуатируется': 'Not in Operation',
        'Выведен из эксплуатации / ожидание исключения': 'Decommissioned / Awaiting Removal',
        'Капитально-восстановительный ремонт': 'Capital Restoration Repair',
        'Загружается': 'Loading',
        'Модернизация': 'Modernization'
    },
    model: {
        'ЗиУ-682г-01 (ЗиУ-9)': 'ZiU-682g-01 (ZiU-9)',
        'ЗиУ-682г-013 (ЗиУ-9)': 'ZiU-682g-013 (ZiU-9)',
        'ЗиУ-6205 (ЗиУ-10)': 'ZiU-6205 (ZiU-10)',
        'ЗиУ-682г-01 (ЗиУ-9) СМЕ': 'ZiU-682g-01 (ZiU-9) EMU',
        'ЗиУ-682г-01 (ЗиУ-9) Техпомощь': 'ZiU-682g-01 (ZiU-9) Service Vehicle'
    }
};

// Применить данные таблицы с учётом текущего языка
function applyTableData(data) {
    if (!data) return;
    const lang = localStorage.getItem('language') || 'ru';
    const isEN = lang === 'en';
    const statusMap = isEN ? tableTranslationsEN.status : {};
    const modelMap  = isEN ? tableTranslationsEN.model  : {};

    data.forEach(item => {
        // Статус
        const statusEl = document.querySelector(`.status[data-id="${item.id}"]`);
        if (statusEl) {
            statusEl.textContent = statusMap[item.status] || item.status;
            statusEl.dataset.status = item.status;
            updateStatusStyle(statusEl, item.status);
        }
        // Модель
        const modelEl = document.querySelector(`.model[data-id="${item.id}"]`);
        if (modelEl) {
            modelEl.textContent = modelMap[item.model] || item.model || '-';
        }
        // Заметка (разные поля для RU/EN)
        const infoEl = document.querySelector(`.info[data-id="${item.id}"]`);
        if (infoEl) {
            infoEl.textContent = (isEN ? item.informationeng : item.information) || '-';
        }
        // Остальные поля не зависят от языка
        const numEl = document.querySelector(`.factory-number[data-id="${item.id}"]`);
        if (numEl) numEl.textContent = item.number || '-';
        const livEl = document.querySelector(`.livery[data-id="${item.id}"]`);
        if (livEl) livEl.textContent = item.livery || '-';
        const drvEl = document.querySelector(`.drivers[data-id="${item.id}"]`);
        if (drvEl) drvEl.textContent = item.drivers || '-';
        const codeEl = document.querySelector(`.code[data-id="${item.id}"]`);
        if (codeEl) codeEl.textContent = item.code || '-';
    });
}

async function updateStatuses() {
    try {
        if (isFirstLoad) {
            const lang = localStorage.getItem('language') || 'ru';
            const loadingText = lang === 'en' ? 'Loading...' : 'Загрузка...';
            document.querySelectorAll('.status').forEach(el => {
                el.textContent = loadingText;
                el.dataset.status = 'Загружается';
                el.style.backgroundColor = '#6c757d';
                el.style.color = 'white';
            });
            document.querySelectorAll('.factory-number, .livery, .info, .drivers, .code, .model')
                .forEach(el => el.textContent = loadingText);
        }

        const response = await fetch(SHEET_URL);
        const { result, status } = await response.json();

        console.log('Данные из таблицы:', result, 'Статус:', status);

        // Сохраняем данные для повторного применения при смене языка
        lastFetchedData = result;

        // Применяем с учётом текущего языка
        applyTableData(result);

        console.log('Данные успешно обновлены.');
        isFirstLoad = false;
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
    }
}

function updateStatusStyle(element, status) {
    const styles = {
        'Эксплуатируется':                              { bg: '#28a745', color: 'white' },
        'В ремонте':                                    { bg: '#ffc107', color: '#333'  },
        'Не эксплуатируется':                           { bg: '#fd7e14', color: 'white' },
        'Выведен из эксплуатации / ожидание исключения':{ bg: '#dc3545', color: 'white' },
        'Капитально-восстановительный ремонт':          { bg: '#0d6efd', color: 'white' },
        'Модернизация':                                 { bg: '#6f42c1', color: 'white' }
    };
    const s = styles[status] || { bg: '#6c757d', color: 'white' };
    element.style.backgroundColor = s.bg;
    element.style.color = s.color;
}

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initThemeSystem();
        initLanguageSystem();
        initMobileMenu();
        initDropdowns();
        initModal();
        updateStatuses();
        setInterval(updateStatuses, 5000);
    });
} else {
    initThemeSystem();
    initLanguageSystem();
    initMobileMenu();
    initDropdowns();
    initModal();
    updateStatuses();
    setInterval(updateStatuses, 5000);
}

// ============================================
// СТАТИЧНЫЕ ДАННЫЕ ТРОЛЛЕЙБУСОВ
// ============================================
// КАК ДОБАВИТЬ НОВЫЙ ТРОЛЛЕЙБУС:
// Скопируй любую строчку ниже, измени ID и заполни поля.
// depot_ru / depot_en — название парка/депо
// built — год постройки (строка)
// arrived — дата поступления в депо (строка)
// assignment_ru / assignment_en — назначение (Пассажирский / Служебный / СМЕ и т.д.)
// drivers_ru / drivers_en — закреплённые водители (или "Нет данных")
// Если поле неизвестно — поставь null, отобразится "—"

// ============================================
// КАК ДОБАВЛЯТЬ ТРОЛЛЕЙБУСЫ:
// Скопируй блок, измени бортовой номер и заполни поля.
//
// ПОЛЯ ЗАПИСИ:
//   depot_ru / depot_en  — название парка (RU и EN)
//   built                — год постройки: "1991" (или null)
//   arrived              — дата поступления: "25.03.2025" (или null)
//   assignment_ru/en     — назначение: "Пассажирский"/"Passenger" и т.д.
//
// ПОЛЕ photos — МАССИВ фотографий, каждая:
//   img        — путь к фото: "../images/tbus/1000_1.jpg" (или URL)
//   depot_ru   — подпись депо под фото (RU)
//   depot_en   — подпись депо под фото (EN)
//   date       — дата съёмки: "25 марта 2025г., вторник"
//   author     — имя автора
//   authorUrl  — ссылка на профиль автора (или null)
//   event      — курсивная подпись события: "Март 2025 – Поступил в депо"
//
// Водители, статус, модель, код — берутся автоматически из Google Sheets.
// ============================================
const TBUS_STATIC = {

    // ── ГЛАВНЫЙ ТРОЛЛЕЙБУСНЫЙ ПАРК ──────────────────────────────────────────
    "1000": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Служебный",
        assignment_en: "Service Vehicle",
        photos: [
            {
                img: "../../images/tbus/1000.png",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1020": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1020.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1021": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1021.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1022": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1022.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1023": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1023.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1035": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1035.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1036": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1036.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1037": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1037.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1038": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1038.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1039": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1039.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1040": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1040.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1060": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1060.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1061": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1061.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1062": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1062.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1063": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1063.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1064": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1064.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1001": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Учебный",
        assignment_en: "Training",
        photos: [
            {
                img: "../../images/tbus/1001.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1070": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1070.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1071": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1071.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1072": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1072.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1073": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1073.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1085": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1085.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1086": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1086.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1087": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1087.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1088": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1088.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1089": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1089.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1090": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1090.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1091": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1091.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1092": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1092.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1100": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1100.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1101": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1101.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1120": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1120.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1121": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1121.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1122": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1122.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1123": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1123.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1135": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1135.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1136": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1136.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1137": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1137.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1138": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1138.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1139": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1139.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1200": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1200.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1201": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1201.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1202": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1202.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1002": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Учебный",
        assignment_en: "Training",
        photos: [
            {
                img: "../../images/tbus/1002.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1207": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1207.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1208": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1208.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1012": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1012.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1013": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1013.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1005": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1005.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "1006": {
        depot_ru: "Главный Троллейбусный Парк",
        depot_en: "Main Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/1006.jpg",
                depot_ru: "Троллейбусный парк Главного Острова",
                depot_en: "Main Island Trolleybus Park",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    // Хардбасс депо

    "2030": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2030.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2031": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2031.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2000": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Учебный",
        assignment_en: "Training",
        photos: [
            {
                img: "../../images/tbus/2000.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2033": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2033.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2034": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2034.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2035": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2035.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2036": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2036.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2037": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2037.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2039": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2039.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2040": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2040.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2041": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2041.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2042": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2042.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2043": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2043.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2044": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2044.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2045": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2045.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2001": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Учебный",
        assignment_en: "Training",
        photos: [
            {
                img: "../../images/tbus/2001.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2062": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2062.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2063": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2063.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2064": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2064.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2065": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2065.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2066": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2066.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2002": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Учебный",
        assignment_en: "Training",
        photos: [
            {
                img: "../../images/tbus/2002.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2068": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2068.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2069": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2069.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2085": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2085.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2086": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2086.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2087": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2087.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2003": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Учебный",
        assignment_en: "Training",
        photos: [
            {
                img: "../../images/tbus/2003.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2089": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2089.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2090": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2090.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2004": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Учебный",
        assignment_en: "Training",
        photos: [
            {
                img: "../../images/tbus/2004.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2092": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2092.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2093": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2093.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2094": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2094.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2110": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2110.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2111": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2111.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2112": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2112.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2113": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2113.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2114": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2114.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2130": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2130.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2131": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2131.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2132": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2132.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2133": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2133.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2134": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2134.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2150": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2150.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2151": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2151.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2152": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2152.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2153": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2153.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2154": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2154.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2155": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2155.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2156": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2156.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2200": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2200.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2201": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2201.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2202": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2202.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2005": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Учебный",
        assignment_en: "Training",
        photos: [
            {
                img: "../../images/tbus/2005.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2204": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2204.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2225": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2225.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2206": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2206.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2207": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2207.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2208": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2208.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2209": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2209.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2210": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2210.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2211": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2211.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2010": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2010.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2011": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2011.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2012": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2012.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2013": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2013.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2020": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2020.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    "2021": {
        depot_ru: "Троллейбусный парк острова Хардбасс",
        depot_en: "Hardbass Island Trolleybus Depot",
        built: "1991",
        arrived: "25.03.2025",
        assignment_ru: "Пассажирский",
        assignment_en: "Passenger",
        photos: [
            {
                img: "../../images/tbus/2021.jpg",
                depot_ru: "Троллейбусный парк острова Хардбасс",
                depot_en: "Hardbass Island Trolleybus Depot",
                date: "25 марта 2025г., вторник",
                author: "Lolekx",
                authorUrl: null,
                event: "Март 2025 – Поступил в депо"
            }
        ]
    },

    // ── ШАБЛОН — копируй этот блок для каждого нового троллейбуса ───────────
    // "XXXX": {
    //     depot_ru: "Главный Троллейбусный Парк",
    //     depot_en: "Main Trolleybus Depot",
    //     built: "ГГГГ",           // или null
    //     arrived: "ДД.ММ.ГГГГ",  // или null
    //     assignment_ru: "Пассажирский",
    //     assignment_en: "Passenger",
    //     photos: [
    //         {
    //             img: "../images/tbus/XXXX_1.jpg",
    //             depot_ru: "Название депо",
    //             depot_en: "Depot name",
    //             date: "дд месяца гггг г., день",
    //             author: "Имя автора",
    //             authorUrl: "https://...",  // или null
    //             event: "Месяц ГГГГ – Описание события"
    //         }
    //         // Добавляй ещё объекты через запятую для нескольких фото
    //     ]
    // },
};

// ============================================
// МОДАЛЬНОЕ ОКНО
// ============================================
const modalTranslations = {
    ru: {
        "Модель:": "Модель:",
        "Заводской номер:": "Заводской номер:",
        "Построен:": "Построен:",
        "Поступил:": "Поступил:",
        "Текущее состояние:": "Текущее состояние:",
        "Назначение:": "Назначение:",
        "Окраска:": "Окраска:",
        "Доп. информация:": "Доп. информация:",
        "Закреп. водители:": "Закреп. водители:",
        "Код:": "Код:",
        "Фотографии": "Фотографии",
        "Зарегистрировать": "Зарегистрировать",
        "Копировать код": "Копировать код",
        "Скопировано!": "Скопировано!",
        "Нет данных": "Нет данных"
    },
    en: {
        "Модель:": "Model:",
        "Заводской номер:": "Factory Number:",
        "Построен:": "Built:",
        "Поступил:": "Arrived:",
        "Текущее состояние:": "Current Status:",
        "Назначение:": "Assignment:",
        "Окраска:": "Livery:",
        "Доп. информация:": "Additional Info:",
        "Закреп. водители:": "Fixed Drivers:",
        "Код:": "Code:",
        "Фотографии": "Photos",
        "Зарегистрировать": "Register",
        "Копировать код": "Copy code",
        "Скопировано!": "Copied!",
        "Нет данных": "No data"
    }
};

function openTbusModal(id) {
    const lang = localStorage.getItem('language') || 'ru';
    const isEN = lang === 'en';
    const mt = modalTranslations[lang];
    const nd = mt["Нет данных"];

    const overlay = document.getElementById('tbusModalOverlay');
    if (!overlay) return;

    // Переводим подписи полей
    overlay.querySelectorAll('[data-i18n-modal]').forEach(el => {
        const key = el.getAttribute('data-i18n-modal');
        if (mt[key]) el.textContent = mt[key];
    });
    document.getElementById('modalCopyText').textContent = mt["Копировать код"];

    // ── Статичные данные ──────────────────────────────────────
    const s = TBUS_STATIC[id];
    document.getElementById('modalBoardNumber').textContent = id;
    document.getElementById('modalDepot').textContent = s ? (isEN ? s.depot_en : s.depot_ru) : nd;
    document.getElementById('modalBuilt').textContent   = s && s.built    ? s.built    : nd;
    document.getElementById('modalArrived').textContent = s && s.arrived  ? s.arrived  : nd;
    document.getElementById('modalAssignment').textContent = s ? (isEN ? s.assignment_en : s.assignment_ru) : nd;

    // ── Динамические данные из Google Sheets ─────────────────
    const dynItem = lastFetchedData ? lastFetchedData.find(item => String(item.id) === String(id)) : null;
    const statusBadge = document.getElementById('modalStatusBadge');

    if (dynItem) {
        const statusRU = dynItem.status || 'Загружается';
        const statusText = isEN ? (tableTranslationsEN.status[statusRU] || statusRU) : statusRU;
        statusBadge.textContent  = statusText;
        statusBadge.dataset.status = statusRU;
        updateStatusStyle(statusBadge, statusRU);

        const modelRU = dynItem.model || nd;
        document.getElementById('modalModel').textContent         = isEN ? (tableTranslationsEN.model[modelRU] || modelRU) : modelRU;
        document.getElementById('modalFactoryNumber').textContent = dynItem.number  || nd;
        document.getElementById('modalLivery').textContent        = dynItem.livery  || nd;
        document.getElementById('modalInfo').textContent          = (isEN ? dynItem.informationeng : dynItem.information) || nd;
        document.getElementById('modalDrivers').textContent       = dynItem.drivers || nd;
        document.getElementById('modalCode').textContent          = dynItem.code    || nd;

        document.getElementById('modalCopyBtn').dataset.code = dynItem.code || '';
    } else {
        statusBadge.textContent = nd;
        statusBadge.dataset.status = 'Загружается';
        statusBadge.style.backgroundColor = '#6c757d';
        statusBadge.style.color = 'white';
        ['modalModel','modalFactoryNumber','modalLivery','modalInfo','modalDrivers','modalCode'].forEach(elId => {
            document.getElementById(elId).textContent = nd;
        });
        document.getElementById('modalCopyBtn').dataset.code = '';
    }

    // ── Фотографии ────────────────────────────────────────────
    const photosSection = document.getElementById('modalPhotosSection');
    const photosList    = document.getElementById('modalPhotosList');
    photosList.innerHTML = '';

    const photos = s && s.photos && s.photos.length ? s.photos : null;
    if (photos) {
        photosSection.style.display = 'block';
        photos.forEach(p => {
            const depotText  = isEN ? (p.depot_en || p.depot_ru) : p.depot_ru;
            const authorHtml = p.authorUrl
                ? `<a href="${p.authorUrl}" target="_blank" class="tbus-photo-author">${p.author}</a>`
                : `<span class="tbus-photo-author">${p.author}</span>`;

            const card = document.createElement('div');
            card.className = 'tbus-photo-card';
            card.innerHTML = `
                <div class="tbus-photo-meta">
                    <div class="tbus-photo-depot">${depotText}</div>
                    <div class="tbus-photo-date">${p.date || ''}</div>
                    <div class="tbus-photo-author-row">${isEN ? 'Author:' : 'Автор:'} ${authorHtml}</div>
                    ${p.event ? `<div class="tbus-photo-event">${p.event}</div>` : ''}
                </div>
                <div class="tbus-photo-img-wrap">
                    <img src="${p.img}" alt="Троллейбус ${id}" class="tbus-photo-img" loading="lazy"
                         onerror="this.parentElement.style.display='none'">
                </div>`;
            photosList.appendChild(card);
        });
    } else {
        photosSection.style.display = 'none';
    }

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeTbusModal() {
    const overlay = document.getElementById('tbusModalOverlay');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function initModal() {
    // Клик на бортовой номер
    document.addEventListener('click', e => {
        const link = e.target.closest('.tbus-link');
        if (link) {
            e.preventDefault();
            openTbusModal(link.dataset.id);
        }
    });

    // Закрытие
    const overlay = document.getElementById('tbusModalOverlay');
    const closeBtn = document.getElementById('tbusModalClose');
    if (closeBtn) closeBtn.addEventListener('click', closeTbusModal);
    if (overlay) overlay.addEventListener('click', e => {
        if (e.target === overlay) closeTbusModal();
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeTbusModal();
    });

    // Кнопка копирования
    const copyBtn = document.getElementById('modalCopyBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const code = copyBtn.dataset.code;
            const lang = localStorage.getItem('language') || 'ru';
            const mt = modalTranslations[lang];
            if (!code) return;
            try {
                navigator.clipboard.writeText(code).catch(() => {
                    const ta = document.createElement('textarea');
                    ta.value = code;
                    document.body.appendChild(ta);
                    ta.select();
                    document.execCommand('copy');
                    document.body.removeChild(ta);
                });
                const copyTextEl = document.getElementById('modalCopyText');
                copyTextEl.textContent = mt["Скопировано!"];
                setTimeout(() => { copyTextEl.textContent = mt["Копировать код"]; }, 2000);
            } catch(err) { console.error('Copy error:', err); }
        });
    }
}
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