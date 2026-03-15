(function () {
  if (window.__TRP_CONSENT_MANAGER__) {
    return;
  }
  window.__TRP_CONSENT_MANAGER__ = true;

  var defaults = {
    revision: '2026-03-16',
    storageKey: 'trp-consent-state',
    uiLangKey: 'trp-consent-ui-lang'
  };
  var styleId = 'trp-consent-style';
  var rootId = 'trp-consent-root';
  var state = {
    root: null,
    panel: null,
    cleanup: [],
    observer: null,
    queued: false,
    softMode: false,
    mobileCollapsed: false
  };
  var texts = {
    ru: {
      kicker: '\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0441\u0430\u0439\u0442\u0443',
      title: '\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0440\u0438\u043d\u044f\u0442\u0438\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432',
      description: '\u041f\u0435\u0440\u0435\u0434 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0441\u0430\u0439\u0442\u0430 \u043d\u0443\u0436\u043d\u043e \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u044c\u0441\u044f \u0441 \u044e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u0438 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435.',
      termsText: '\u042f \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u043b\u0441\u044f(-\u0430) \u0438 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e',
      termsLink: '\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435',
      privacyText: '\u042f \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u043b\u0441\u044f(-\u0430) \u0438 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e',
      privacyLink: '\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0443 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438',
      note: '\u0411\u0435\u0437 \u043f\u0440\u0438\u043d\u044f\u0442\u0438\u044f \u0441\u0430\u0439\u0442 \u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u0432.',
      accept: '\u041f\u0440\u0438\u043d\u044f\u0442\u044c \u0438 \u0432\u043e\u0439\u0442\u0438',
      reject: '\u041e\u0442\u043a\u043b\u043e\u043d\u0438\u0442\u044c',
      langButton: 'EN',
      compactTitle: '\u042e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b',
      collapseLabel: '\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043f\u0430\u043d\u0435\u043b\u044c',
      expandLabel: '\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043f\u0430\u043d\u0435\u043b\u044c'
    },
    en: {
      kicker: 'Site Access',
      title: 'Confirm acceptance of the documents',
      description: 'Before using the site, review the legal documents and confirm your acceptance.',
      termsText: 'I have read and accept the',
      termsLink: 'terms of use',
      privacyText: 'I have read and accept the',
      privacyLink: 'privacy policy',
      note: 'Until acceptance is confirmed, the site stays locked for navigation.',
      accept: 'Accept and continue',
      reject: 'Decline',
      langButton: 'RU',
      compactTitle: 'Legal documents',
      collapseLabel: 'Collapse panel',
      expandLabel: 'Expand panel'
    }
  };

  function getConfig() {
    return Object.assign({}, defaults, window.TRP_CONSENT_CONFIG || {});
  }

  function safeGet(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function safeSet(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
    }
  }

  function safeRemove(key) {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
    }
  }

  function getPageLang() {
    var raw = String(
      safeGet('language') ||
      safeGet('lang') ||
      document.documentElement.getAttribute('lang') ||
      'ru'
    ).toLowerCase();
    return raw.indexOf('en') === 0 ? 'en' : 'ru';
  }

  function getUiLang() {
    var stored = safeGet(getConfig().uiLangKey);
    if (stored === 'en' || stored === 'ru') {
      return stored;
    }
    return getPageLang();
  }

  function setUiLang(lang) {
    safeSet(getConfig().uiLangKey, lang === 'en' ? 'en' : 'ru');
  }

  function hasAccepted() {
    try {
      var raw = safeGet(getConfig().storageKey);
      if (!raw) {
        return false;
      }
      var parsed = JSON.parse(raw);
      return !!(parsed && parsed.accepted && parsed.revision === getConfig().revision);
    } catch (error) {
      return false;
    }
  }

  function saveAccepted() {
    safeSet(
      getConfig().storageKey,
      JSON.stringify({
        accepted: true,
        revision: getConfig().revision,
        timestamp: new Date().toISOString()
      })
    );
  }

  function isOfficialDocsPage() {
    var pathname = window.location.pathname.replace(/\\/g, '/').toLowerCase();
    return pathname.indexOf('/official_documentation/') !== -1 ||
      (!!document.querySelector('.docs-content-section') &&
        !!document.getElementById('privacy') &&
        !!document.getElementById('terms'));
  }

  function ensureStyle() {
    if (document.getElementById(styleId)) {
      return;
    }

    var style = document.createElement('style');
    style.id = styleId;
    style.textContent = [
      'html.trp-consent-locked,',
      'body.trp-consent-locked {',
      '  overflow: hidden !important;',
      '  overscroll-behavior: none;',
      '}',
      'body.trp-consent-soft-lock .navbar,',
      'body.trp-consent-soft-lock .menu-toggle,',
      'body.trp-consent-soft-lock .nav-menu {',
      '  pointer-events: none !important;',
      '  user-select: none;',
      '  opacity: 0.78;',
      '  filter: saturate(0.85);',
      '}',
      '#' + rootId + ' {',
      '  position: fixed;',
      '  inset: 0;',
      '  z-index: 2147483647;',
      '  pointer-events: none;',
      '  font-family: inherit;',
      '}',
      '#' + rootId + ' * {',
      '  box-sizing: border-box;',
      '}',
      '#' + rootId + ' .trp-consent-backdrop {',
      '  position: absolute;',
      '  inset: 0;',
      '  background: rgba(6, 10, 16, 0.6);',
      '  backdrop-filter: blur(4px);',
      '  pointer-events: auto;',
      '}',
      'body.trp-consent-soft-lock #' + rootId + ' .trp-consent-backdrop {',
      '  background: transparent;',
      '  backdrop-filter: none;',
      '  pointer-events: none;',
      '}',
      '#' + rootId + ' .trp-consent-panel {',
      '  position: absolute;',
      '  right: 24px;',
      '  bottom: 24px;',
      '  width: min(430px, calc(100vw - 32px));',
      '  padding: 18px 18px 16px;',
      '  border-radius: 20px;',
      '  background: linear-gradient(180deg, rgba(246, 248, 250, 0.98), rgba(230, 235, 239, 0.96));',
      '  color: var(--text-color, #1f252c);',
      '  border: 1px solid rgba(255, 255, 255, 0.46);',
      '  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.5);',
      '  pointer-events: auto;',
      '  transform-origin: top right;',
      '  animation: trpConsentReveal 0.34s cubic-bezier(0.22, 1, 0.36, 1) both;',
      '}',
      'body.dark-mode #' + rootId + ' .trp-consent-panel,',
      'body.dark #' + rootId + ' .trp-consent-panel {',
      '  background: linear-gradient(180deg, rgba(19, 24, 30, 0.98), rgba(10, 14, 19, 0.96));',
      '  color: #edf3f8;',
      '  border-color: rgba(90, 159, 255, 0.2);',
      '  box-shadow: 0 28px 70px rgba(0, 0, 0, 0.58), inset 0 1px 0 rgba(255, 255, 255, 0.06);',
      '}',
      '#' + rootId + ' .trp-consent-panel::before {',
      '  content: "";',
      '  position: absolute;',
      '  top: 0;',
      '  left: 0;',
      '  right: 0;',
      '  height: 4px;',
      '  border-radius: 20px 20px 0 0;',
      '  background: linear-gradient(90deg, var(--accent-color, #4a90e2), #8ec5ff);',
      '}',
      '#' + rootId + ' .trp-consent-head {',
      '  display: flex;',
      '  align-items: flex-start;',
      '  justify-content: space-between;',
      '  gap: 12px;',
      '  margin-bottom: 10px;',
      '}',
      '#' + rootId + ' .trp-consent-head-copy {',
      '  min-width: 0;',
      '}',
      '#' + rootId + ' .trp-consent-mini-title {',
      '  display: none;',
      '  margin-top: 4px;',
      '  font-size: 13px;',
      '  font-weight: 700;',
      '  line-height: 1.3;',
      '}',
      '#' + rootId + ' .trp-consent-head-actions {',
      '  display: flex;',
      '  align-items: center;',
      '  gap: 8px;',
      '}',
      '#' + rootId + ' .trp-consent-kicker {',
      '  font-size: 11px;',
      '  font-weight: 700;',
      '  letter-spacing: 0.12em;',
      '  text-transform: uppercase;',
      '  color: var(--accent-color, #4a90e2);',
      '}',
      '#' + rootId + ' .trp-consent-lang {',
      '  min-width: 48px;',
      '  height: 34px;',
      '  border: 1px solid rgba(17, 24, 32, 0.12);',
      '  border-radius: 999px;',
      '  background: rgba(255, 255, 255, 0.72);',
      '  color: inherit;',
      '  font: inherit;',
      '  font-size: 12px;',
      '  font-weight: 800;',
      '  letter-spacing: 0.08em;',
      '  cursor: pointer;',
      '  transition: transform 0.2s ease, background-color 0.2s ease;',
      '}',
      'body.dark-mode #' + rootId + ' .trp-consent-lang,',
      'body.dark #' + rootId + ' .trp-consent-lang {',
      '  background: rgba(255, 255, 255, 0.06);',
      '  border-color: rgba(255, 255, 255, 0.12);',
      '}',
      '#' + rootId + ' .trp-consent-lang:hover {',
      '  transform: translateY(-1px);',
      '}',
      '#' + rootId + ' .trp-consent-collapse {',
      '  display: none;',
      '  width: 34px;',
      '  height: 34px;',
      '  border: 1px solid rgba(17, 24, 32, 0.12);',
      '  border-radius: 10px;',
      '  background: rgba(255, 255, 255, 0.72);',
      '  color: inherit;',
      '  cursor: pointer;',
      '  transition: transform 0.2s ease, background-color 0.2s ease;',
      '}',
      'body.dark-mode #' + rootId + ' .trp-consent-collapse,',
      'body.dark #' + rootId + ' .trp-consent-collapse {',
      '  background: rgba(255, 255, 255, 0.06);',
      '  border-color: rgba(255, 255, 255, 0.12);',
      '}',
      '#' + rootId + ' .trp-consent-collapse:hover {',
      '  transform: translateY(-1px);',
      '}',
      '#' + rootId + ' .trp-consent-collapse-text {',
      '  display: inline-block;',
      '  font-size: 18px;',
      '  line-height: 1;',
      '  font-weight: 700;',
      '}',
      '#' + rootId + ' .trp-consent-body {',
      '  display: block;',
      '}',
      '#' + rootId + ' .trp-consent-title {',
      '  margin: 0 0 10px;',
      '  font-size: 24px;',
      '  line-height: 1.14;',
      '}',
      '#' + rootId + ' .trp-consent-description {',
      '  margin: 0 0 16px;',
      '  font-size: 14px;',
      '  line-height: 1.55;',
      '  opacity: 0.88;',
      '}',
      '#' + rootId + ' .trp-consent-checks {',
      '  display: grid;',
      '  gap: 12px;',
      '}',
      '#' + rootId + ' .trp-consent-check {',
      '  display: grid;',
      '  grid-template-columns: 18px 1fr;',
      '  gap: 12px;',
      '  align-items: start;',
      '  padding: 12px 14px;',
      '  border-radius: 14px;',
      '  background: rgba(255, 255, 255, 0.58);',
      '  border: 1px solid rgba(17, 24, 32, 0.08);',
      '}',
      'body.dark-mode #' + rootId + ' .trp-consent-check,',
      'body.dark #' + rootId + ' .trp-consent-check {',
      '  background: rgba(255, 255, 255, 0.04);',
      '  border-color: rgba(255, 255, 255, 0.08);',
      '}',
      '#' + rootId + ' .trp-consent-check input {',
      '  width: 18px;',
      '  height: 18px;',
      '  margin: 2px 0 0;',
      '  accent-color: var(--accent-color, #4a90e2);',
      '}',
      '#' + rootId + ' .trp-consent-copy label {',
      '  display: block;',
      '  cursor: pointer;',
      '  font-size: 14px;',
      '  font-weight: 600;',
      '  line-height: 1.45;',
      '}',
      '#' + rootId + ' .trp-consent-copy a {',
      '  display: inline-block;',
      '  margin-top: 4px;',
      '  color: var(--accent-color, #4a90e2);',
      '  font-size: 14px;',
      '  font-weight: 700;',
      '  text-decoration: none;',
      '}',
      '#' + rootId + ' .trp-consent-copy a:hover {',
      '  text-decoration: underline;',
      '}',
      '#' + rootId + ' .trp-consent-note {',
      '  margin: 14px 0 0;',
      '  font-size: 12px;',
      '  line-height: 1.5;',
      '  opacity: 0.8;',
      '}',
      '#' + rootId + ' .trp-consent-actions {',
      '  display: flex;',
      '  gap: 10px;',
      '  margin-top: 16px;',
      '}',
      '#' + rootId + ' .trp-consent-actions button {',
      '  flex: 1 1 0;',
      '  min-height: 46px;',
      '  border-radius: 12px;',
      '  border: 1px solid transparent;',
      '  font: inherit;',
      '  font-weight: 700;',
      '  cursor: pointer;',
      '  transition: transform 0.2s ease, opacity 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;',
      '}',
      '#' + rootId + ' .trp-consent-actions button:hover {',
      '  transform: translateY(-1px);',
      '}',
      '#' + rootId + ' .trp-consent-accept {',
      '  color: #ffffff;',
      '  background: linear-gradient(135deg, var(--accent-color, #4a90e2), #2672d8);',
      '  box-shadow: 0 14px 28px rgba(38, 114, 216, 0.28);',
      '}',
      '#' + rootId + ' .trp-consent-accept:disabled {',
      '  opacity: 0.48;',
      '  cursor: not-allowed;',
      '  transform: none;',
      '  box-shadow: none;',
      '}',
      '#' + rootId + ' .trp-consent-reject {',
      '  color: inherit;',
      '  background: transparent;',
      '  border-color: rgba(17, 24, 32, 0.14);',
      '}',
      'body.dark-mode #' + rootId + ' .trp-consent-reject,',
      'body.dark #' + rootId + ' .trp-consent-reject {',
      '  border-color: rgba(255, 255, 255, 0.12);',
      '}',
      '@keyframes trpConsentReveal {',
      '  from {',
      '    opacity: 0;',
      '    transform: translateY(-18px) scaleY(0.82);',
      '  }',
      '  to {',
      '    opacity: 1;',
      '    transform: translateY(0) scaleY(1);',
      '  }',
      '}',
      '@media (max-width: 640px) {',
      '  #' + rootId + ' .trp-consent-panel {',
      '    left: 16px;',
      '    right: 16px;',
      '    bottom: 16px;',
      '    width: auto;',
      '  }',
      '  #' + rootId + ' .trp-consent-title {',
      '    font-size: 21px;',
      '  }',
      '  #' + rootId + ' .trp-consent-actions {',
      '    flex-direction: column;',
      '  }',
      '  body.trp-consent-soft-lock #' + rootId + ' .trp-consent-collapse {',
      '    display: inline-flex;',
      '    align-items: center;',
      '    justify-content: center;',
      '  }',
      '  body.trp-consent-soft-lock #' + rootId + ' .trp-consent-panel {',
      '    right: 12px;',
      '    bottom: 12px;',
      '    left: auto;',
      '    width: min(330px, calc(100vw - 24px));',
      '  }',
      '  body.trp-consent-soft-lock #' + rootId + ' .trp-consent-panel.is-collapsed {',
      '    width: min(232px, calc(100vw - 24px));',
      '    padding: 12px 14px;',
      '    border-radius: 16px;',
      '  }',
      '  body.trp-consent-soft-lock #' + rootId + ' .trp-consent-panel.is-collapsed::before {',
      '    height: 3px;',
      '    border-radius: 16px 16px 0 0;',
      '  }',
      '  body.trp-consent-soft-lock #' + rootId + ' .trp-consent-panel.is-collapsed .trp-consent-head {',
      '    margin-bottom: 0;',
      '    align-items: center;',
      '  }',
      '  body.trp-consent-soft-lock #' + rootId + ' .trp-consent-panel.is-collapsed .trp-consent-mini-title {',
      '    display: block;',
      '  }',
      '  body.trp-consent-soft-lock #' + rootId + ' .trp-consent-panel.is-collapsed .trp-consent-body {',
      '    display: none;',
      '  }',
      '}'
    ].join('\n');
    document.head.appendChild(style);
  }

  function getFallbackHref(kind) {
    var knownRoots = ['documentation', 'events', 'forms', 'other', 'team'];
    var segments = window.location.pathname.replace(/\\/g, '/').split('/').filter(Boolean);
    var startIndex = -1;
    var index;

    for (index = 0; index < segments.length; index += 1) {
      if (knownRoots.indexOf(String(segments[index]).toLowerCase()) !== -1) {
        startIndex = index;
        break;
      }
    }

    if (startIndex === -1) {
      return 'other/official_documentation/#' + kind;
    }

    var fromRoot = segments.slice(startIndex);
    var last = fromRoot[fromRoot.length - 1] || '';
    var hasFile = /\.[a-z0-9]+$/i.test(last);
    var depth = Math.max(0, fromRoot.length - (hasFile ? 1 : 0));
    var prefix = '';

    for (index = 0; index < depth; index += 1) {
      prefix += '../';
    }

    return prefix + 'other/official_documentation/#' + kind;
  }

  function repairDocumentLinks() {
    Array.prototype.slice.call(document.querySelectorAll('a.doc-btn')).forEach(function (button) {
      var href = String(button.getAttribute('href') || '').trim();
      var text = String(button.textContent || '').toLowerCase();
      var nextHref = href;

      if (/#policy$/i.test(nextHref)) {
        nextHref = nextHref.replace(/#policy$/i, '#privacy');
      }

      if (!nextHref || nextHref === '#') {
        if (text.indexOf('\u043a\u043e\u043d\u0444\u0438\u0434') !== -1 || text.indexOf('privacy') !== -1) {
          nextHref = getFallbackHref('privacy');
        } else if (text.indexOf('\u0441\u043e\u0433\u043b\u0430\u0448') !== -1 || text.indexOf('terms') !== -1) {
          nextHref = getFallbackHref('terms');
        }
      }

      if (nextHref && nextHref !== href) {
        button.setAttribute('href', nextHref);
      }
    });
  }

  function getDocLinks() {
    repairDocumentLinks();
    var buttons = Array.prototype.slice.call(document.querySelectorAll('a.doc-btn'));
    var privacyHref = '';
    var termsHref = '';

    buttons.forEach(function (button) {
      var href = String(button.getAttribute('href') || '').trim();
      if (!privacyHref && /#privacy$/i.test(href)) {
        privacyHref = href;
      }
      if (!termsHref && /#terms$/i.test(href)) {
        termsHref = href;
      }
    });

    return {
      privacy: privacyHref || getFallbackHref('privacy'),
      terms: termsHref || getFallbackHref('terms')
    };
  }

  function focusFirst() {
    if (!state.panel) {
      return;
    }

    var focusable = state.panel.querySelector('button, input, a[href]');
    if (focusable) {
      try {
        focusable.focus({ preventScroll: true });
      } catch (error) {
        focusable.focus();
      }
    }
  }

  function addCleanup(target, type, handler, options) {
    var capture = !!(options && options.capture);
    target.addEventListener(type, handler, options);
    state.cleanup.push(function () {
      target.removeEventListener(type, handler, capture);
    });
  }

  function isOutsidePanel(target) {
    return !!(state.panel && target && !state.panel.contains(target));
  }

  function lockPage() {
    unlockPage();
    state.softMode = isOfficialDocsPage();
    document.body.classList.toggle('trp-consent-soft-lock', state.softMode);

    if (state.softMode) {
      addCleanup(document, 'click', function (event) {
        if (isOutsidePanel(event.target)) {
          event.preventDefault();
          event.stopPropagation();
        }
      }, true);

      addCleanup(document, 'keydown', function (event) {
        if (isOutsidePanel(event.target) && (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar')) {
          event.preventDefault();
          event.stopPropagation();
        }
      }, true);

      return;
    }

    document.documentElement.classList.add('trp-consent-locked');
    document.body.classList.add('trp-consent-locked');

    addCleanup(document, 'wheel', function (event) {
      if (isOutsidePanel(event.target)) {
        event.preventDefault();
        event.stopPropagation();
      }
    }, { capture: true, passive: false });

    addCleanup(document, 'touchmove', function (event) {
      if (isOutsidePanel(event.target)) {
        event.preventDefault();
        event.stopPropagation();
      }
    }, { capture: true, passive: false });

    addCleanup(document, 'keydown', function (event) {
      var blockedKeys = {
        ' ': true,
        Spacebar: true,
        PageUp: true,
        PageDown: true,
        End: true,
        Home: true,
        ArrowUp: true,
        ArrowDown: true,
        ArrowLeft: true,
        ArrowRight: true
      };

      if (isOutsidePanel(event.target) && blockedKeys[event.key]) {
        event.preventDefault();
        event.stopPropagation();
      }
    }, true);

    addCleanup(document, 'focusin', function (event) {
      if (isOutsidePanel(event.target)) {
        focusFirst();
      }
    }, true);
  }

  function unlockPage() {
    document.documentElement.classList.remove('trp-consent-locked');
    document.body.classList.remove('trp-consent-locked');
    document.body.classList.remove('trp-consent-soft-lock');
    state.softMode = false;

    while (state.cleanup.length) {
      state.cleanup.pop()();
    }
  }

  function removeWidget() {
    var root = document.getElementById(rootId);
    if (root && root.parentNode) {
      root.parentNode.removeChild(root);
    }
    state.root = null;
    state.panel = null;
    state.mobileCollapsed = false;
    unlockPage();
  }

  function canUseMobileCollapse() {
    return isOfficialDocsPage() &&
      !!window.matchMedia &&
      window.matchMedia('(max-width: 768px)').matches;
  }

  function syncCollapseState(root) {
    var panel = root ? root.querySelector('.trp-consent-panel') : null;
    var collapseButton = root ? root.querySelector('[data-role="toggle-collapse"]') : null;
    var textNode;

    if (!panel) {
      return;
    }

    if (!canUseMobileCollapse()) {
      state.mobileCollapsed = false;
    }

    panel.classList.toggle('is-collapsed', !!state.mobileCollapsed);

    if (!collapseButton) {
      return;
    }

    collapseButton.setAttribute('aria-expanded', state.mobileCollapsed ? 'false' : 'true');
    collapseButton.setAttribute(
      'aria-label',
      state.mobileCollapsed
        ? collapseButton.getAttribute('data-expand-label') || ''
        : collapseButton.getAttribute('data-collapse-label') || ''
    );

    textNode = collapseButton.querySelector('.trp-consent-collapse-text');
    if (textNode) {
      textNode.textContent = state.mobileCollapsed ? '+' : '−';
    }
  }

  function updateAcceptState(root) {
    var terms = root.querySelector('[data-consent="terms"]');
    var privacy = root.querySelector('[data-consent="privacy"]');
    var acceptButton = root.querySelector('[data-role="accept"]');

    if (terms && privacy && acceptButton) {
      acceptButton.disabled = !(terms.checked && privacy.checked);
    }
  }

  function leaveSite() {
    try {
      if (document.referrer) {
        var referrerUrl = new URL(document.referrer, window.location.href);
        if (referrerUrl.origin && referrerUrl.origin !== window.location.origin && window.history.length > 1) {
          window.history.back();
          return;
        }
      }
    } catch (error) {
    }

    window.location.replace('about:blank');
  }

  function bindRoot(root) {
    if (root.getAttribute('data-bound') === 'true') {
      return;
    }

    root.setAttribute('data-bound', 'true');

    Array.prototype.slice.call(root.querySelectorAll('[data-consent]')).forEach(function (input) {
      input.addEventListener('change', function () {
        updateAcceptState(root);
      });
    });

    var acceptButton = root.querySelector('[data-role="accept"]');
    if (acceptButton) {
      acceptButton.addEventListener('click', function () {
        if (acceptButton.disabled) {
          return;
        }
        saveAccepted();
        removeWidget();
      });
    }

    var rejectButton = root.querySelector('[data-role="reject"]');
    if (rejectButton) {
      rejectButton.addEventListener('click', function () {
        safeRemove(getConfig().storageKey);
        leaveSite();
      });
    }

    var langButton = root.querySelector('[data-role="toggle-lang"]');
    if (langButton) {
      langButton.addEventListener('click', function () {
        var nextLang = getUiLang() === 'ru' ? 'en' : 'ru';
        var terms = !!root.querySelector('[data-consent="terms"]:checked');
        var privacy = !!root.querySelector('[data-consent="privacy"]:checked');
        setUiLang(nextLang);
        createWidget(true, {
          terms: terms,
          privacy: privacy,
          collapsed: state.mobileCollapsed
        });
      });
    }

    var collapseButton = root.querySelector('[data-role="toggle-collapse"]');
    if (collapseButton) {
      collapseButton.addEventListener('click', function () {
        state.mobileCollapsed = !state.mobileCollapsed;
        syncCollapseState(root);
      });
    }
  }

  function createWidget(force, preservedChecks) {
    if (!document.body) {
      return;
    }

    if (hasAccepted()) {
      removeWidget();
      return;
    }

    var copy = texts[getUiLang()] || texts.ru;
    var links = getDocLinks();
    var root = document.getElementById(rootId);
    var allowMobileCollapse = canUseMobileCollapse();
    var hasCollapseButton;

    if (root && !force) {
      state.root = root;
      state.panel = root.querySelector('.trp-consent-panel');
      if (state.panel) {
        hasCollapseButton = !!root.querySelector('[data-role="toggle-collapse"]');
        if (hasCollapseButton !== allowMobileCollapse) {
          if (root.parentNode) {
            root.parentNode.removeChild(root);
          }
        } else {
          bindRoot(root);
          updateAcceptState(root);
          lockPage();
          syncCollapseState(root);
          return;
        }
      }
      if (root.parentNode) {
        root.parentNode.removeChild(root);
      }
    }

    if (root && root.parentNode) {
      root.parentNode.removeChild(root);
    }

    root = document.createElement('div');
    root.id = rootId;
    root.innerHTML = [
      '<div class="trp-consent-backdrop" aria-hidden="true"></div>',
      '<aside class="trp-consent-panel" role="dialog" aria-modal="true" aria-labelledby="trp-consent-title" tabindex="-1">',
      '<div class="trp-consent-head">',
      '<div class="trp-consent-head-copy">',
      '<div class="trp-consent-kicker">' + copy.kicker + '</div>',
      '<div class="trp-consent-mini-title">' + copy.compactTitle + '</div>',
      '</div>',
      '<div class="trp-consent-head-actions">',
      '<button type="button" class="trp-consent-lang" data-role="toggle-lang">' + copy.langButton + '</button>',
      allowMobileCollapse
        ? '<button type="button" class="trp-consent-collapse" data-role="toggle-collapse" data-collapse-label="' + copy.collapseLabel + '" data-expand-label="' + copy.expandLabel + '" aria-label="' + copy.collapseLabel + '" aria-expanded="true"><span class="trp-consent-collapse-text">−</span></button>'
        : '',
      '</div>',
      '</div>',
      '<div class="trp-consent-body">',
      '<h2 class="trp-consent-title" id="trp-consent-title">' + copy.title + '</h2>',
      '<p class="trp-consent-description">' + copy.description + '</p>',
      '<div class="trp-consent-checks">',
      '<div class="trp-consent-check">',
      '<input type="checkbox" id="trp-consent-terms" data-consent="terms">',
      '<div class="trp-consent-copy">',
      '<label for="trp-consent-terms">' + copy.termsText + '</label>',
      '<a href="' + links.terms + '" target="_blank" rel="noopener noreferrer">' + copy.termsLink + '</a>',
      '</div>',
      '</div>',
      '<div class="trp-consent-check">',
      '<input type="checkbox" id="trp-consent-privacy" data-consent="privacy">',
      '<div class="trp-consent-copy">',
      '<label for="trp-consent-privacy">' + copy.privacyText + '</label>',
      '<a href="' + links.privacy + '" target="_blank" rel="noopener noreferrer">' + copy.privacyLink + '</a>',
      '</div>',
      '</div>',
      '</div>',
      '<p class="trp-consent-note">' + copy.note + '</p>',
      '<div class="trp-consent-actions">',
      '<button type="button" class="trp-consent-accept" data-role="accept" disabled>' + copy.accept + '</button>',
      '<button type="button" class="trp-consent-reject" data-role="reject">' + copy.reject + '</button>',
      '</div>',
      '</div>',
      '</aside>'
    ].join('');

    document.body.appendChild(root);
    state.root = root;
    state.panel = root.querySelector('.trp-consent-panel');

    if (preservedChecks) {
      if (preservedChecks.terms) {
        root.querySelector('[data-consent="terms"]').checked = true;
      }
      if (preservedChecks.privacy) {
        root.querySelector('[data-consent="privacy"]').checked = true;
      }
      if (allowMobileCollapse) {
        state.mobileCollapsed = !!preservedChecks.collapsed;
      }
    } else if (!allowMobileCollapse) {
      state.mobileCollapsed = false;
    }

    bindRoot(root);
    updateAcceptState(root);
    lockPage();
    syncCollapseState(root);
    focusFirst();
  }

  function scheduleSync() {
    if (state.queued) {
      return;
    }

    state.queued = true;
    (window.requestAnimationFrame || window.setTimeout)(function () {
      state.queued = false;
      if (hasAccepted()) {
        removeWidget();
      } else {
        createWidget(false);
      }
    }, 16);
  }

  function startObserver() {
    if (state.observer || !document.body) {
      return;
    }

    state.observer = new MutationObserver(function () {
      scheduleSync();
    });

    state.observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  function init() {
    ensureStyle();
    repairDocumentLinks();
    if (hasAccepted()) {
      removeWidget();
    } else {
      createWidget(false);
    }
    window.addEventListener('resize', scheduleSync);
    startObserver();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
