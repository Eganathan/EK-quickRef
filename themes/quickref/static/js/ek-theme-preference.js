/* Generated from Command Center shared/site-theme. Shared preference, no account required. */
(() => {
  const key = 'ek-theme';
  const valid = value => value === 'light' || value === 'dark';
  const sharedDomain = location.protocol === 'https:' && (location.hostname === 'eknath.dev' || location.hostname.endsWith('.eknath.dev'));
  const read = () => {
    if (sharedDomain) {
      try {
        const cookie = document.cookie.split(';').map(value => value.trim()).find(value => value.startsWith(`${key}=`));
        const saved = cookie?.slice(key.length + 1);
        if (valid(saved)) return saved;
      } catch { /* Local preference is the fallback if cookies are unavailable. */ }
    }
    try {
      const saved = localStorage.getItem(key);
      if (valid(saved)) return saved;
      if (document.documentElement.dataset.themeAdapter === 'papermod') {
        const legacy = localStorage.getItem('pref-theme');
        if (valid(legacy)) return legacy;
      }
    } catch { /* Dark remains the default when storage is blocked. */ }
    return 'dark';
  };
  const apply = theme => {
    if (document.documentElement.dataset.theme === theme) return;
    document.documentElement.dataset.theme = theme;
    window.dispatchEvent(new Event('ek-theme-change'));
  };
  const sync = () => apply(read());
  const save = theme => {
    if (!valid(theme)) return;
    try { localStorage.setItem(key, theme); } catch {}
    if (sharedDomain) {
      try { document.cookie = `${key}=${theme}; Domain=eknath.dev; Path=/; Max-Age=31536000; SameSite=Lax; Secure`; } catch {}
    }
    apply(theme);
  };
  window.EKTheme = { read, save, sync };
  sync();
  window.addEventListener('pageshow', sync);
  window.addEventListener('focus', sync);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) sync(); });
  window.addEventListener('storage', event => { if (event.key === key || event.key === null) sync(); });
})();
