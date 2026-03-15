(function () {
  if (window.__TRP_SITE_ANNOUNCEMENTS_BOOTED__) {
    return;
  }
  window.__TRP_SITE_ANNOUNCEMENTS_BOOTED__ = true;

  var rootId = 'trp-site-announcements';
  var state = {
    root: null,
    queued: false,
    layoutQueued: false,
    signature: '',
    syncTimer: 0,
    lifecycleBound: false
  };

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

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (symbol) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      }[symbol];
    });
  }

  function getAnnouncements() {
    if (!Array.isArray(window.TRP_SITE_ANNOUNCEMENTS)) {
      return [];
    }

    return window.TRP_SITE_ANNOUNCEMENTS;
  }

  function getCurrentLang() {
    var stored = String(safeGet('language') || '').toLowerCase();
    if (stored.indexOf('en') === 0) {
      return 'en';
    }

    var htmlLang = String(document.documentElement.getAttribute('lang') || '').toLowerCase();
    if (htmlLang.indexOf('en') === 0) {
      return 'en';
    }

    return 'ru';
  }

  function normalizeType(type) {
    var value = String(type || 'info').toLowerCase();

    if (value === 'attention') {
      return 'warning';
    }
    if (value === 'error' || value === 'critical' || value === 'important') {
      return 'danger';
    }
    if (value === 'ok') {
      return 'success';
    }
    if (value !== 'success' && value !== 'warning' && value !== 'danger') {
      return 'info';
    }

    return value;
  }

  function getTypeMeta(type, lang) {
    var key = normalizeType(type);
    var titles = {
      info: {
        ru: '\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f',
        en: 'Information'
      },
      success: {
        ru: '\u0413\u043e\u0442\u043e\u0432\u043e',
        en: 'Success'
      },
      warning: {
        ru: '\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435',
        en: 'Attention'
      },
      danger: {
        ru: '\u0412\u0430\u0436\u043d\u043e',
        en: 'Important'
      }
    };

    return {
      key: key,
      label: titles[key][lang]
    };
  }

  function readText(value, lang) {
    if (value == null) {
      return '';
    }

    if (typeof value === 'string') {
      return value;
    }

    if (typeof value === 'object') {
      if (typeof value[lang] === 'string') {
        return value[lang];
      }
      if (typeof value.ru === 'string') {
        return value.ru;
      }
      if (typeof value.en === 'string') {
        return value.en;
      }
    }

    return '';
  }

  function getCurrentSitePath() {
    var pathname = String(window.location.pathname || '/').replace(/\\/g, '/');
    var lower = pathname.toLowerCase();
    var markers = [
      '/documentation/',
      '/events/',
      '/forms/',
      '/other/',
      '/team/',
      '/index.html',
      '/404.html'
    ];
    var start = -1;
    var i;

    for (i = 0; i < markers.length; i += 1) {
      var markerIndex = lower.indexOf(markers[i]);
      if (markerIndex !== -1 && (start === -1 || markerIndex < start)) {
        start = markerIndex;
      }
    }

    if (start !== -1) {
      pathname = pathname.slice(start);
    }

    pathname = pathname.replace(/\/index\.html$/i, '/');
    pathname = pathname.replace(/\/{2,}/g, '/');

    if (!pathname) {
      pathname = '/';
    }
    if (pathname.charAt(0) !== '/') {
      pathname = '/' + pathname;
    }

    return pathname;
  }

  function normalizePattern(pattern) {
    var value = String(pattern || '').trim().replace(/\\/g, '/');

    if (!value) {
      return '';
    }

    if (/^[a-z]+:\/\//i.test(value)) {
      try {
        value = new URL(value).pathname;
      } catch (error) {
      }
    }

    value = value.replace(/\/index\.html$/i, '/');
    value = value.replace(/\/{2,}/g, '/');

    if (value !== 'all' && value.charAt(0) !== '/') {
      value = '/' + value;
    }

    return value;
  }

  function matchesPattern(pattern, currentPath) {
    var value = normalizePattern(pattern).toLowerCase();
    var current = String(currentPath || '').toLowerCase();

    if (!value) {
      return false;
    }
    if (value === 'all') {
      return true;
    }
    if (value.slice(-1) === '*') {
      return current.indexOf(value.slice(0, -1)) === 0;
    }
    if (value.slice(-1) === '/') {
      return current === value || current.indexOf(value) === 0;
    }

    return current === value;
  }

  function matchesPaths(paths, currentPath) {
    if (paths == null || paths === 'all') {
      return true;
    }

    if (typeof paths === 'string') {
      return matchesPattern(paths, currentPath);
    }

    if (!Array.isArray(paths)) {
      return false;
    }

    return paths.some(function (pattern) {
      return matchesPattern(pattern, currentPath);
    });
  }

  function isEnabled(entry) {
    return !!(entry && entry.enabled);
  }

  function shouldRender(entry, currentPath) {
    if (!isEnabled(entry)) {
      return false;
    }
    if (!matchesPaths(entry.paths, currentPath)) {
      return false;
    }

    if (Array.isArray(entry.excludePaths) && entry.excludePaths.some(function (pattern) {
      return matchesPattern(pattern, currentPath);
    })) {
      return false;
    }

    return true;
  }

  function getCollapseKey(id) {
    return 'trp-site-announcement-collapse:' + id;
  }

  function getContentExpandKey(id) {
    return 'trp-site-announcement-content-expand:' + id;
  }

  function isCollapsed(entry) {
    var stored = safeGet(getCollapseKey(entry.id));

    if (stored === 'true') {
      return true;
    }
    if (stored === 'false') {
      return false;
    }

    return !!entry.startCollapsed;
  }

  function setCollapsed(id, collapsed) {
    safeSet(getCollapseKey(id), collapsed ? 'true' : 'false');
  }

  function isContentExpanded(entry) {
    return safeGet(getContentExpandKey(entry.id)) === 'true';
  }

  function setContentExpanded(id, expanded) {
    safeSet(getContentExpandKey(id), expanded ? 'true' : 'false');
  }

  function getSitePrefix() {
    var currentPath = getCurrentSitePath();
    var parts;
    var last;
    var depth;
    var prefix = '';
    var i;

    if (currentPath === '/' || currentPath === '/404.html') {
      return '';
    }

    parts = currentPath.split('/').filter(Boolean);
    last = parts[parts.length - 1] || '';
    depth = /\.[a-z0-9]+$/i.test(last) ? parts.length - 1 : parts.length;

    for (i = 0; i < depth; i += 1) {
      prefix += '../';
    }

    return prefix;
  }

  function resolveHref(href) {
    var value = String(href || '').trim();

    if (!value) {
      return '';
    }
    if (value.charAt(0) === '#' || /^[a-z]+:/i.test(value) || value.indexOf('//') === 0) {
      return value;
    }
    if (value.charAt(0) !== '/' || window.location.protocol !== 'file:') {
      return value;
    }

    return getSitePrefix() + value.replace(/^\/+/, '');
  }

  function getToggleMeta(lang, collapsed) {
    if (lang === 'en') {
      return {
        aria: collapsed ? 'Expand announcement' : 'Collapse announcement',
        icon: collapsed ? '+' : '-'
      };
    }

    return {
      aria: collapsed
        ? '\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435'
        : '\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435',
      icon: collapsed ? '+' : '-'
    };
  }

  function getContentToggleMeta(lang, expanded) {
    if (lang === 'en') {
      return {
        label: expanded ? 'Show less' : 'Show full text',
        aria: expanded ? 'Collapse full text' : 'Expand full text'
      };
    }

    return {
      label: expanded
        ? '\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0442\u0435\u043a\u0441\u0442'
        : '\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e',
      aria: expanded
        ? '\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c \u043f\u043e\u043b\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f'
        : '\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f'
    };
  }

  function buildActionHtml(action, lang) {
    var href = resolveHref(action && action.href);
    var label;
    var style;

    if (!href) {
      return '';
    }

    label = readText(action && action.label, lang) || href;
    style = String(action && action.style || 'secondary').toLowerCase();
    if (style !== 'primary') {
      style = 'secondary';
    }

    return [
      '<a class="trp-site-announcement__action trp-site-announcement__action--', style,
      '" href="', escapeHtml(href), '">',
      escapeHtml(label),
      '</a>'
    ].join('');
  }

  function createEntryView(entry, lang) {
    var actions = Array.isArray(entry.actions) ? entry.actions : [];
    var typeMeta = getTypeMeta(entry.type, lang);
    var collapsible = entry.collapsible !== false;

    return {
      id: String(entry.id || ''),
      typeKey: typeMeta.key,
      typeLabel: typeMeta.label,
      title: readText(entry.title, lang),
      body: readText(entry.body, lang),
      collapsible: collapsible,
      collapsed: collapsible ? isCollapsed(entry) : false,
      contentExpanded: isContentExpanded(entry),
      actions: actions.map(function (action) {
        return {
          href: resolveHref(action && action.href),
          label: readText(action && action.label, lang),
          style: String(action && action.style || 'secondary').toLowerCase()
        };
      }).filter(function (action) {
        return !!action.href;
      })
    };
  }

  function collectPayload() {
    var currentPath = getCurrentSitePath();
    var lang = getCurrentLang();
    var entries = getAnnouncements().filter(function (entry) {
      return shouldRender(entry, currentPath);
    }).map(function (entry) {
      return createEntryView(entry, lang);
    });

    return {
      path: currentPath,
      lang: lang,
      entries: entries
    };
  }

  function buildSignature(payload) {
    return JSON.stringify(payload);
  }

  function buildCardHtml(entry, lang) {
    var toggleMeta = getToggleMeta(lang, entry.collapsed);
    var contentToggleMeta = getContentToggleMeta(lang, entry.contentExpanded);
    var actionsHtml = entry.actions.map(function (action) {
      return buildActionHtml(action, lang);
    }).join('');

    return [
      '<article class="trp-site-announcement trp-site-announcement--', entry.typeKey,
      entry.collapsed ? ' is-collapsed' : '',
      '" data-announcement-id="', escapeHtml(entry.id),
      '" data-collapsed="', entry.collapsed ? 'true' : 'false',
      '" data-content-expanded="', entry.contentExpanded ? 'true' : 'false',
      '" data-collapsible="', entry.collapsible ? 'true' : 'false',
      '">',
      '<div class="trp-site-announcement__head">',
      '<div class="trp-site-announcement__head-copy">',
      '<span class="trp-site-announcement__badge">', escapeHtml(entry.typeLabel), '</span>',
      '<h2 class="trp-site-announcement__title">', escapeHtml(entry.title), '</h2>',
      '</div>',
      entry.collapsible ? [
        '<button class="trp-site-announcement__toggle" type="button" data-announcement-toggle="true" aria-label="',
        escapeHtml(toggleMeta.aria),
        '" aria-expanded="', entry.collapsed ? 'false' : 'true', '">',
        '<span class="trp-site-announcement__toggle-text" aria-hidden="true">',
        escapeHtml(toggleMeta.icon),
        '</span>',
        '</button>'
      ].join('') : '',
      '</div>',
      '<div class="trp-site-announcement__body">',
      '<div class="trp-site-announcement__content-shell">',
      '<div class="trp-site-announcement__content" data-announcement-content="true">', entry.body || '', '</div>',
      '</div>',
      '<button class="trp-site-announcement__content-toggle" type="button" hidden data-announcement-content-toggle="true" aria-label="',
      escapeHtml(contentToggleMeta.aria),
      '" aria-expanded="', entry.contentExpanded ? 'true' : 'false', '">',
      escapeHtml(contentToggleMeta.label),
      '</button>',
      actionsHtml ? '<div class="trp-site-announcement__actions">' + actionsHtml + '</div>' : '',
      '</div>',
      '</article>'
    ].join('');
  }

  function ensureRoot() {
    var root = state.root && document.body.contains(state.root)
      ? state.root
      : document.getElementById(rootId);

    if (!root) {
      root = document.createElement('section');
      root.id = rootId;
      root.className = 'trp-site-announcements';
      root.setAttribute('aria-label', 'Site announcements');
    }

    if (!root.parentNode) {
      document.body.appendChild(root);
    }

    if (!root.__trpAnnouncementsBound) {
      root.__trpAnnouncementsBound = true;
      root.addEventListener('click', onRootActivate, true);
    }

    state.root = root;
    return root;
  }

  function removeRoot() {
    var root = state.root || document.getElementById(rootId);

    if (root && root.parentNode) {
      root.parentNode.removeChild(root);
    }

    state.root = null;
    state.signature = '';
  }

  function updateToggleButton(button, collapsed, lang) {
    var toggleMeta;
    var textNode;

    if (!button) {
      return;
    }

    toggleMeta = getToggleMeta(lang, collapsed);
    textNode = button.querySelector('.trp-site-announcement__toggle-text');

    button.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
    button.setAttribute('aria-label', toggleMeta.aria);

    if (textNode) {
      textNode.textContent = toggleMeta.icon;
    }
  }

  function updateContentToggleButton(button, expanded, lang) {
    var toggleMeta;

    if (!button) {
      return;
    }

    toggleMeta = getContentToggleMeta(lang, expanded);
    button.textContent = toggleMeta.label;
    button.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    button.setAttribute('aria-label', toggleMeta.aria);
  }

  function setCardCollapsed(card, collapsed, lang) {
    var button;

    if (!card) {
      return;
    }

    card.classList.toggle('is-collapsed', collapsed);
    card.setAttribute('data-collapsed', collapsed ? 'true' : 'false');

    button = card.querySelector('[data-announcement-toggle="true"]');
    updateToggleButton(button, collapsed, lang);
  }

  function setCardContentExpanded(card, expanded, lang) {
    var button;

    if (!card) {
      return;
    }

    card.classList.toggle('is-content-expanded', expanded);
    card.setAttribute('data-content-expanded', expanded ? 'true' : 'false');

    button = card.querySelector('[data-announcement-content-toggle="true"]');
    updateContentToggleButton(button, expanded, lang);
  }

  function getContentPreviewHeight() {
    return Math.max(150, Math.min(260, Math.round(window.innerHeight * 0.24)));
  }

  function getContentExpandedHeight(previewHeight) {
    return Math.max(previewHeight + 40, Math.min(500, Math.round(window.innerHeight * 0.48)));
  }

  function syncCardLayout(card, lang) {
    var content;
    var contentButton;
    var previewHeight;
    var expandedHeight;
    var isLong;
    var isExpanded;

    if (!card) {
      return;
    }

    content = card.querySelector('[data-announcement-content="true"]');
    contentButton = card.querySelector('[data-announcement-content-toggle="true"]');
    previewHeight = getContentPreviewHeight();
    expandedHeight = getContentExpandedHeight(previewHeight);

    card.style.setProperty('--trp-announcement-preview-height', previewHeight + 'px');
    card.style.setProperty('--trp-announcement-expanded-height', expandedHeight + 'px');

    if (!content || !contentButton) {
      return;
    }

    isLong = content.scrollHeight > previewHeight + 12;
    isExpanded = card.getAttribute('data-content-expanded') === 'true';

    card.classList.toggle('is-long-content', isLong);
    card.classList.toggle('is-content-expanded', isLong && isExpanded);

    contentButton.hidden = !isLong;
    contentButton.setAttribute('aria-hidden', isLong ? 'false' : 'true');
    updateContentToggleButton(contentButton, isLong && isExpanded, lang);
  }

  function syncRootLayout(root, lang) {
    if (!root) {
      return;
    }

    Array.prototype.forEach.call(root.querySelectorAll('.trp-site-announcement'), function (card) {
      syncCardLayout(card, lang);
    });
  }

  function queueLayoutSync() {
    if (state.layoutQueued) {
      return;
    }

    state.layoutQueued = true;
    window.requestAnimationFrame(function () {
      var root = state.root || document.getElementById(rootId);

      state.layoutQueued = false;
      if (!root) {
        return;
      }

      syncRootLayout(root, getCurrentLang());
    });
  }

  function onRootActivate(event) {
    var root = state.root || document.getElementById(rootId);
    var target = event.target;
    var contentButton = target && target.closest ? target.closest('[data-announcement-content-toggle="true"]') : null;
    var button = target && target.closest ? target.closest('[data-announcement-toggle="true"]') : null;
    var card;
    var id;
    var nextValue;

    if (!root) {
      return;
    }

    if (contentButton && root.contains(contentButton)) {
      card = contentButton.closest('.trp-site-announcement');
      if (!card) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      if (typeof event.stopImmediatePropagation === 'function') {
        event.stopImmediatePropagation();
      }

      nextValue = card.getAttribute('data-content-expanded') !== 'true';
      setCardContentExpanded(card, nextValue, getCurrentLang());

      id = card.getAttribute('data-announcement-id');
      if (id) {
        setContentExpanded(id, nextValue);
      }

      queueLayoutSync();
      state.signature = buildSignature(collectPayload());
      return;
    }

    if (!root || !button || !root.contains(button)) {
      return;
    }

    card = button.closest('.trp-site-announcement');
    if (!card) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    if (typeof event.stopImmediatePropagation === 'function') {
      event.stopImmediatePropagation();
    }

    nextValue = card.getAttribute('data-collapsed') !== 'true';
    setCardCollapsed(card, nextValue, getCurrentLang());

    id = card.getAttribute('data-announcement-id');
    if (id) {
      setCollapsed(id, nextValue);
    }

    state.signature = buildSignature(collectPayload());
  }

  function render(force) {
    var payload;
    var signature;
    var root;

    if (!document.body) {
      return;
    }

    payload = collectPayload();
    signature = buildSignature(payload);

    if (!payload.entries.length) {
      removeRoot();
      return;
    }

    root = ensureRoot();

    if (!force && state.signature === signature && root.childElementCount) {
      return;
    }

    root.innerHTML = payload.entries.map(function (entry) {
      return buildCardHtml(entry, payload.lang);
    }).join('');
    root.setAttribute('data-path', payload.path);
    root.setAttribute('data-lang', payload.lang);
    syncRootLayout(root, payload.lang);
    state.signature = signature;
  }

  function queueRender(force) {
    if (state.queued) {
      return;
    }

    state.queued = true;
    window.requestAnimationFrame(function () {
      state.queued = false;
      render(!!force);
    });
  }

  function bindLifecycle() {
    var originalPushState;
    var originalReplaceState;

    if (state.lifecycleBound) {
      return;
    }
    state.lifecycleBound = true;

    window.addEventListener('hashchange', queueRender);
    window.addEventListener('popstate', queueRender);
    window.addEventListener('pageshow', queueRender);
    window.addEventListener('focus', queueRender);
    window.addEventListener('storage', queueRender);
    window.addEventListener('resize', queueLayoutSync);
    window.addEventListener('orientationchange', queueLayoutSync);
    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) {
        queueRender();
      }
    });

    originalPushState = window.history && window.history.pushState;
    if (typeof originalPushState === 'function' && !originalPushState.__trpWrapped) {
      window.history.pushState = function () {
        var result = originalPushState.apply(this, arguments);
        queueRender();
        return result;
      };
      window.history.pushState.__trpWrapped = true;
    }

    originalReplaceState = window.history && window.history.replaceState;
    if (typeof originalReplaceState === 'function' && !originalReplaceState.__trpWrapped) {
      window.history.replaceState = function () {
        var result = originalReplaceState.apply(this, arguments);
        queueRender();
        return result;
      };
      window.history.replaceState.__trpWrapped = true;
    }

    if (!state.syncTimer) {
      state.syncTimer = window.setInterval(function () {
        render(false);
      }, 900);
    }
  }

  function init() {
    bindLifecycle();
    render(true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
}());
