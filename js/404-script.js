// ── TRANSLATIONS ──
const t = {
  ru: {
    label:   'TRP RP — Ошибка',
    title:   '404',
    desc:    'Страница не найдена.<br>Кажется, троллейбус уехал не туда.',
    btn:     '← На главную',
    back:    '← На главную',
    lang:    'EN'
  },
  en: {
    label:   'TRP RP — Error',
    title:   '404',
    desc:    'Page not found.<br>Looks like the trolleybus took the wrong route.',
    btn:     '← Go Home',
    back:    '← Go Home',
    lang:    'RU'
  }
};

function applyLang(lang) {
  localStorage.setItem('lang', lang);
  const l = t[lang];
  document.querySelector('.lbl').textContent    = l.label;
  document.querySelector('.card p').innerHTML   = l.desc;
  document.querySelector('.card a').textContent = l.btn;
  document.getElementById('back').textContent   = l.back;
  document.getElementById('lang').textContent   = l.lang;
}

// ── THEME ──
const themeBtn = document.getElementById('theme');
const dark0 = localStorage.getItem('theme') === 'dark';
if (dark0) { document.body.classList.add('dark'); themeBtn.textContent = '☀️'; }
themeBtn.addEventListener('click', () => {
  const d = document.body.classList.toggle('dark');
  themeBtn.textContent = d ? '☀️' : '🌙';
  localStorage.setItem('theme', d ? 'dark' : 'light');
});

// ── LANGUAGE ──
const langBtn = document.getElementById('lang');
let currentLang = localStorage.getItem('lang') || 'ru';
applyLang(currentLang);
langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'ru' ? 'en' : 'ru';
  applyLang(currentLang);
});

// ── STARS ──
const st = document.getElementById('stars');
for (let i = 0; i < 120; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  const sz = (Math.random() * 2.5 + 0.5).toFixed(1);
  s.style.cssText = `width:${sz}px;height:${sz}px;top:${(Math.random()*100).toFixed(1)}%;left:${(Math.random()*100).toFixed(1)}%;--d:${(Math.random()*3+1.5).toFixed(1)}s;--dl:${(Math.random()*4).toFixed(1)}s`;
  st.appendChild(s);
}

// ── CLICK TROLLEYBUS TO SPEED UP ──
document.getElementById('troll').addEventListener('click', () => {
  const tb = document.getElementById('troll');
  tb.style.animationDuration = '3s';
  setTimeout(() => tb.style.animationDuration = '7s', 3000);
});
