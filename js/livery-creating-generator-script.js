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
    "Контакты проекта \"TRP RP\"": "Контакты проекта \"TRP RP\"",
    "Юридическая документация проекта \"TRP RP\"": "Юридическая документация проекта \"TRP RP\"",
    "Политика конфиденциальности": "Политика конфиденциальности",
    "Пользовательское соглашение": "Пользовательское соглашение",
    "Проект \"TRP RP\" не является юридическим лицом и не предоставляет никаких услуг!": "Проект \"TRP RP\" не является юридическим лицом и не предоставляет никаких услуг!",
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
    "Контакты проекта \"TRP RP\"": "TRP RP Project Contacts",
    "Юридическая документация проекта \"TRP RP\"": "TRP RP Project Legal Documentation",
    "Политика конфиденциальности": "Privacy Policy",
    "Пользовательское соглашение": "Terms of Service",
    "Проект \"TRP RP\" не является юридическим лицом и не предоставляет никаких услуг!": "The TRP RP project is not a legal entity and does not provide any services!",
    "© 2026 TRP RP. Все права защищены.": "© 2026 TRP RP. All rights reserved."
  }
};

// Добавляем переводы для ключей страницы редактора ливрей
Object.assign(translations.ru, {
  "lcg-title": "Создание окрасок",
  "lcg-intro": "Для использования пользовательских окрасок необходимо приобрести ",
  "lcg-gamepass": "геймпасс",
  "lcg-step1": `<strong>Скачайте шаблоны для троллейбуса</strong>, для которого планируется разработка окраски. Учтите, что для ЗиУ-9 окраска, как правило, будет совместима с ЗиУ-9 СМЕ (Система многих единиц) и, в некоторых случаях, с ЗиУ-9 Техническая помощь. Для ЗиУ-10 необходимо разработать отдельные окраски для прицепа. <strong>Для создания базовой окраски используйте любой графический редактор.</strong> После этого переходите к следующему этапу разработки.`,
  "lcg-dl1": "📥 ЗиУ-9 и СМЕ",
  "lcg-dl2": "📥 ЗиУ-10",
  "lcg-dl3": "📥 ЗиУ-9 Техническая помощь",
  "lcg-step2": `<strong>Загрузите каждое изображение в <a href="https://www.roblox.com" target="_blank" class="livery-link">Roblox</a></strong> и дождитесь полной загрузки и проверки. <strong>После этого скопируйте ID каждой текстуры</strong>, который отображается в ссылке на текстуру.<br><br>Например, ID будет выглядеть так: https://www.roblox.com/library/<strong>18926473169</strong>/YourLiveryName.<br><br>После этого переходите к следующему этапу разработки.`,
  "lcg-step3": `<strong>Начните настраивать вашу окраску в специальном окне ниже.</strong> Если вы хорошо разбираетесь в английском языке, вы можете выполнить настройку в TrP, перейдя в раздел <em>Gamepass settings → Custom liveries (Click here to open livery editor)</em> → выберите слот (Slot_1 — Slot_15) → начните настройку. Однако мы предоставляем редактор окрасок на русском языке, который ничем не уступает редактору в TrP. <strong>Настройте каждый пункт</strong>, а затем переходите к следующему этапу разработки.`,
  "lcg-editor-title": "Настройка окраски",
  "lcg-sideAd": "Разрешить боковую рекламу:",
  "lcg-yes": "Да",
  "lcg-no": "Нет",
  "lcg-rearBumperColor": "Цвет заднего бампера:",
  "lcg-rearLeftLowerLightFrameColor": "Цвет задней левой нижней рамки огней:",
  "lcg-rearLeftUpperLightFrameColor": "Цвет задней левой верхней рамки огней:",
  "lcg-rearBoardNumberColor": "Цвет заднего бортового номера:",
  "lcg-rearBoardNumberY": "Регулировка высоты заднего бортового номера по оси Y:",
  "lcg-rearRightLowerLightFrameColor": "Цвет задней правой нижней рамки огней:",
  "lcg-rearRightUpperLightFrameColor": "Цвет задней правой верхней рамки огней:",
  "lcg-lowerStripeColor": "Цвет нижней полосы (молдинг):",
  "lcg-mshuColor": "Цвет штангоуловителей (МШУ):",
  "lcg-doorColor": "Цвет дверей:",
  "lcg-doorFrameColor": "Цвет рамки дверей:",
  "lcg-frontBumperColor": "Цвет переднего бампера:",
  "lcg-frontGrillColor": "Цвет передней решетки:",
  "lcg-frontLeftLowerLightFrameColor": "Цвет передней левой нижней рамки огней:",
  "lcg-frontLeftUpperLightFrameColor": "Цвет передней левой верхней рамки огней:",
  "lcg-frontBoardNumberColor": "Цвет переднего бортового номера:",
  "lcg-frontBoardNumberY": "Регулировка переднего бортового номера по оси Y:",
  "lcg-frontRightLowerLightFrameColor": "Цвет передней нижней правой рамки огней:",
  "lcg-frontRightUpperLightFrameColor": "Цвет передней верхней правой рамки огней:",
  "lcg-windshieldHandleColor": "Цвет ручки лобового стекла:",
  "lcg-hasLowerStripe": "Наличие нижней полосы (молдинг):",
  "lcg-hasMiddleStripe": "Наличие средней полосы (молдинг):",
  "lcg-hasZiuLogo": "Наличие лого ЗиУ:",
  "lcg-hookBaseColor": "Цвет основания крючка (лиры):",
  "lcg-midStripeColor": "Цвет средней полосы (молдинг):",
  "lcg-mirrorColor": "Цвет зеркал:",
  "lcg-roofColor": "Цвет крыши:",
  "lcg-roofHatchColor": "Цвет люков на крыше:",
  "lcg-roofWireColor": "Цвет провода на крыше:",
  "lcg-sideBoardNumberColor": "Цвет бокового бортового номера (справа):",
  "lcg-sideBoardNumberY": "Регулировка правого бортового номера по оси Y:",
  "lcg-ladderStepColor": "Цвет подножки лестницы:",
  "lcg-ladderColor": "Цвет лестницы:",
  "lcg-rearTexture": "Задняя текстура (ID):",
  "lcg-frontTexture": "Передняя текстура (ID):",
  "lcg-leftTexture": "Левая текстура (ID):",
  "lcg-leftTrailerTexture": "Левая текстура прицепа для ЗиУ-10 (ID):",
  "lcg-rightTexture": "Правая текстура (ID):",
  "lcg-rightTrailerTexture": "Правая текстура прицепа для ЗиУ-10 (ID):",
  "lcg-ziuLogoBaseColor": "Цвет базы лого ЗиУ:",
  "lcg-ziuLogoTextColor": "Цвет текста лого ЗиУ:",
  "lcg-btn-generate": "Сгенерировать",
  "lcg-btn-copy": "Скопировать",
  "lcg-btn-load": "Загрузить код",
  "lcg-placeholder-id": "Введите ID",
  "lcg-placeholder-input": "Вставьте код для загрузки",
  "lcg-step4": `<strong>Скопируйте код из специального окна и вставьте его в TrP</strong>, чтобы загрузить эту ливрею. Перейдите в <em>Gamepass settings → Custom liveries (Click here to open livery editor)</em> → выберите слот (Slot_1 — Slot_15) → пролистайте в самый низ → <em>Import livery data (Paste livery data string here)</em> → нажмите CTRL + V. Затем дважды нажмите кнопку [&larr; Back], а затем нажмите кнопку <em>Save</em>. <strong>Всё готово, ваша окраска загружена и теперь находится на аккаунте!</strong>`,
  "lcg-step5": `Чтобы заспавнить свою ливрею, нажмите <em>Drive</em> → выберите троллейбус → <em>Custom vehicle livery override</em> → выберите слот, куда вы сохранили окраску. Если хотите отключить спавн ваших окрасок в <em>Custom vehicle livery override</em>, выберите <em>Disabled</em>. <strong>Всё готово, ваша окраска заспавнена!</strong>`
});

Object.assign(translations.en, {
  "lcg-title": "Livery Generator",
  "lcg-intro": "To use custom liveries you must purchase the ",
  "lcg-gamepass": "gamepass",
  "lcg-step1": `<strong>Download the templates for the trolleybus</strong> you plan to design for. Note that for ZiU-9, the livery will generally be compatible with the ZiU-9 EMU (Multiple Unit System) and, in some cases, the ZiU-9 Technical Aid. For ZiU-10, separate trailer liveries must be developed. <strong>Use any graphics editor to create a base livery.</strong> Then proceed to the next stage.`,
  "lcg-dl1": "📥 ZIU-9 and EMU",
  "lcg-dl2": "📥 ZIU-10",
  "lcg-dl3": "📥 ZIU-9 Technical Aid",
  "lcg-step2": `<strong>Upload each image to <a href="https://www.roblox.com" target="_blank" class="livery-link">Roblox</a></strong> and wait for the upload and moderation to complete. <strong>Then copy the ID of each texture</strong>, which appears in the texture URL.<br><br>For example, the ID will look like this: https://www.roblox.com/library/<strong>18926473169</strong>/YourLiveryName.<br><br>Then proceed to the next stage.`,
  "lcg-step3": `<strong>Start configuring your livery in the editor below.</strong> If you're comfortable with English, you can configure it directly in TrP by going to <em>Gamepass settings → Custom liveries (Click here to open livery editor)</em> → select a slot (Slot_1 — Slot_15) → start configuring. We also provide a livery editor in Russian that is fully equivalent to the one in TrP. <strong>Configure each parameter</strong>, then proceed to the next stage.`,
  "lcg-editor-title": "Livery Settings",
  "lcg-sideAd": "Allow side advertisement:",
  "lcg-yes": "Yes",
  "lcg-no": "No",
  "lcg-rearBumperColor": "Rear bumper color:",
  "lcg-rearLeftLowerLightFrameColor": "Rear left lower light frame color:",
  "lcg-rearLeftUpperLightFrameColor": "Rear left upper light frame color:",
  "lcg-rearBoardNumberColor": "Rear board number color:",
  "lcg-rearBoardNumberY": "Rear board number Y offset:",
  "lcg-rearRightLowerLightFrameColor": "Rear right lower light frame color:",
  "lcg-rearRightUpperLightFrameColor": "Rear right upper light frame color:",
  "lcg-lowerStripeColor": "Lower stripe (molding) color:",
  "lcg-mshuColor": "Pantograph holder (MSHU) color:",
  "lcg-doorColor": "Door color:",
  "lcg-doorFrameColor": "Door frame color:",
  "lcg-frontBumperColor": "Front bumper color:",
  "lcg-frontGrillColor": "Front grill color:",
  "lcg-frontLeftLowerLightFrameColor": "Front left lower light frame color:",
  "lcg-frontLeftUpperLightFrameColor": "Front left upper light frame color:",
  "lcg-frontBoardNumberColor": "Front board number color:",
  "lcg-frontBoardNumberY": "Front board number Y offset:",
  "lcg-frontRightLowerLightFrameColor": "Front right lower light frame color:",
  "lcg-frontRightUpperLightFrameColor": "Front right upper light frame color:",
  "lcg-windshieldHandleColor": "Windshield handle color:",
  "lcg-hasLowerStripe": "Has lower stripe (molding):",
  "lcg-hasMiddleStripe": "Has middle stripe (molding):",
  "lcg-hasZiuLogo": "Has ZIU logo:",
  "lcg-hookBaseColor": "Hook base color (lyra):",
  "lcg-midStripeColor": "Middle stripe (molding) color:",
  "lcg-mirrorColor": "Mirror color:",
  "lcg-roofColor": "Roof color:",
  "lcg-roofHatchColor": "Roof hatch color:",
  "lcg-roofWireColor": "Roof wire color:",
  "lcg-sideBoardNumberColor": "Side board number color (right):",
  "lcg-sideBoardNumberY": "Side board number Y offset:",
  "lcg-ladderStepColor": "Ladder step color:",
  "lcg-ladderColor": "Ladder color:",
  "lcg-rearTexture": "Rear texture (ID):",
  "lcg-frontTexture": "Front texture (ID):",
  "lcg-leftTexture": "Left texture (ID):",
  "lcg-leftTrailerTexture": "Left trailer texture for ZIU-10 (ID):",
  "lcg-rightTexture": "Right texture (ID):",
  "lcg-rightTrailerTexture": "Right trailer texture for ZIU-10 (ID):",
  "lcg-ziuLogoBaseColor": "ZIU logo base color:",
  "lcg-ziuLogoTextColor": "ZIU logo text color:",
  "lcg-btn-generate": "Generate",
  "lcg-btn-copy": "Copy",
  "lcg-btn-load": "Load code",
  "lcg-placeholder-id": "Enter ID",
  "lcg-placeholder-input": "Paste code to load",
  "lcg-step4": `<strong>Copy the code from the output box and paste it into TrP</strong> to import your livery. Go to <em>Gamepass settings → Custom liveries (Click here to open livery editor)</em> → select a slot (Slot_1 — Slot_15) → scroll to the bottom → <em>Import livery data (Paste livery data string here)</em> → press CTRL + V. Then press the [&larr; Back] button twice, then press <em>Save</em>. <strong>Done — your livery is saved to your account!</strong>`,
  "lcg-step5": `To spawn your livery, press <em>Drive</em> → select a trolleybus → <em>Custom vehicle livery override</em> → select the slot where you saved your livery. To disable spawning your custom livery in <em>Custom vehicle livery override</em>, select <em>Disabled</em>. <strong>Done — your livery is spawned!</strong>`
});

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

function translatePage() {
  const currentLang = getCurrentLanguage();

  // 1. HTML-переводы: полная замена innerHTML (для элементов с форматированием)
  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    const key = element.getAttribute('data-i18n-html');
    if (translations[currentLang] && translations[currentLang][key]) {
      element.innerHTML = translations[currentLang][key];
    }
  });

  // 2. Текстовые переводы: замена текстовых узлов с сохранением дочерних элементов
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (!translations[currentLang] || !translations[currentLang][key]) return;
    const translated = translations[currentLang][key];

    const childNodes = Array.from(element.childNodes);
    const hasElementChildren = childNodes.some(n => n.nodeType === 1);

    if (!hasElementChildren) {
      // Нет дочерних элементов — безопасно заменить весь textContent
      element.textContent = translated;
    } else {
      // Есть дочерние элементы (стрелки ▾▸, ссылки и т.п.)
      // Заменяем первый текстовый узел, сохраняя завершающие пробелы
      const firstTextNode = childNodes.find(n => n.nodeType === 3);
      if (firstTextNode) {
        const orig = firstTextNode.textContent;
        const trailingWS = /\s+$/.test(orig) ? orig.match(/\s+$/)[0] : '';
        const translatedEndsWithWS = /\s$/.test(translated);
        firstTextNode.textContent = translated + (translatedEndsWithWS ? '' : trailingWS);
      } else {
        element.insertBefore(document.createTextNode(translated), element.firstChild);
      }
    }
  });

  // 3. Placeholder-переводы
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[currentLang] && translations[currentLang][key]) {
      element.placeholder = translations[currentLang][key];
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
  // Логируем отсутствующие ключи перевода (в консоль) для быстрой отладки
  if (window && typeof window !== 'undefined') {
    setTimeout(() => {
      const current = getCurrentLanguage();
      const elems = document.querySelectorAll('[data-i18n]');
      const missing = new Set();
      elems.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (!translations[current] || !Object.prototype.hasOwnProperty.call(translations[current], key)) {
          missing.add(key);
        }
      });
      if (missing.size > 0) {
        console.warn('Missing translations for language', current + ':', Array.from(missing));
      } else {
        console.info('All data-i18n keys covered for', current);
      }
    }, 50);
  }
  
  
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

const themeBtn = document.getElementById('theme-btn');
if (themeBtn) {
  // Load saved theme preference
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeBtn.textContent = '☀️';
  }

  themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    themeBtn.textContent = isDarkMode ? '☀️' : '🌙';
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


// ============================================
// LIVERY EDITOR LOGIC
// ============================================

// Sync color picker -> hex text
document.querySelectorAll('#livery-parameters input[type="color"]').forEach(function(input) {
    input.addEventListener('input', function() {
        var hexInput = this.nextElementSibling;
        if (hexInput && hexInput.type === 'text') {
            hexInput.value = this.value.replace('#', '').toUpperCase();
        }
    });
});

// Sync hex text -> color picker
document.querySelectorAll('#livery-parameters input[type="text"]').forEach(function(input) {
    input.addEventListener('input', function() {
        var colorInput = this.previousElementSibling;
        if (colorInput && colorInput.type === 'color' && /^[0-9A-Fa-f]{6}$/.test(this.value)) {
            colorInput.value = '#' + this.value.toUpperCase();
        }
    });
});

function lcgGenerate() {
    var params = document.querySelectorAll('#livery-parameters .lv-param');
    var values = Array.from(params).map(function(param) {
        var input = param.querySelector('input, select');
        if (!input) return null;
        if (input.type === 'color') {
            return '"' + input.value.replace('#', '').toUpperCase() + '"';
        } else if (input.type === 'text') {
            return input.value ? '"' + input.value + '"' : '""';
        } else if (input.type === 'number') {
            if (input.id.toLowerCase().includes('texture')) {
                return input.value ? '"' + input.value + '"' : '""';
            } else {
                return input.value ? parseFloat(input.value) : 0;
            }
        } else if (input.tagName === 'SELECT') {
            return input.value === 'true';
        }
        return null;
    }).filter(function(v) { return v !== null; });

    document.getElementById('lcg-output').value = '[' + values.join(',') + ']';
}

function lcgCopy() {
    var output = document.getElementById('lcg-output');
    output.select();
    document.execCommand('copy');
    var btn = document.querySelector('.lv-btn-copy');
    var lang = getCurrentLanguage();
    var origText = btn.textContent;
    btn.textContent = lang === 'en' ? 'Copied!' : 'Скопировано!';
    setTimeout(function() { btn.textContent = origText; }, 2000);
}

function lcgLoad() {
    var raw = document.getElementById('lcg-input').value;
    var lang = getCurrentLanguage();
    try {
        var values = JSON.parse(raw);
        var params = document.querySelectorAll('#livery-parameters .lv-param');
        if (values.length !== params.length) {
            throw new Error(lang === 'en'
                ? 'Data count does not match parameter count.'
                : 'Количество данных не совпадает с количеством параметров.');
        }
        params.forEach(function(param, index) {
            var input = param.querySelector('input, select');
            var value = values[index];
            if (!input) return;
            if (input.type === 'color') {
                var hex = String(value).replace(/"/g, '').replace('#', '');
                input.value = '#' + hex;
                if (input.nextElementSibling && input.nextElementSibling.type === 'text') {
                    input.nextElementSibling.value = hex.toUpperCase();
                }
            } else if (input.type === 'text') {
                input.value = typeof value === 'string' ? value.replace(/"/g, '') : '';
            } else if (input.type === 'number') {
                input.value = (value !== undefined && value !== null && value !== '') ? parseFloat(value) : '';
            } else if (input.tagName === 'SELECT') {
                input.value = value ? 'true' : 'false';
            }
        });
    } catch(e) {
        alert((lang === 'en' ? 'Load error: ' : 'Ошибка загрузки: ') + e.message);
    }
}