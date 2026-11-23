/* Generated from Command Center shared/site-theme. Run npm run theme:sync there. */
(() => {
  const toggle = document.querySelector('.theme-toggle');
  const adaptTheme = () => {
    if (document.documentElement.dataset.themeAdapter === 'papermod') {
      document.body.classList.toggle('dark', document.documentElement.dataset.theme !== 'light');
      document.getElementById('main-content')?.setAttribute('tabindex', '-1');
    }
  };
  adaptTheme();
  const updateToggle = () => {
    const dark = document.documentElement.dataset.theme !== 'light';
    toggle?.setAttribute('aria-pressed', String(dark));
    toggle?.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  };
  updateToggle();
  toggle?.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('ek-theme', theme); } catch {}
    adaptTheme();
    updateToggle();
  });
  document.addEventListener('keydown', event => {
    const field = document.querySelector('[data-search]');
    if (event.key === '/' && field && !event.ctrlKey && !event.metaKey && !event.altKey && !event.target.closest('input, textarea, select, [contenteditable]')) {
      event.preventDefault(); field.focus();
    }
  });
  if (matchMedia('(max-width: 900px)').matches) {
    document.querySelectorAll('.toc').forEach(toc => { toc.open = false; });
  }
  document.querySelectorAll('.prose table').forEach(table => {
    const wrapper = document.createElement('div'); wrapper.className = 'table-scroll';
    wrapper.tabIndex = 0; wrapper.setAttribute('role', 'region'); wrapper.setAttribute('aria-label', 'Scrollable table');
    table.before(wrapper); wrapper.append(table);
  });
  document.querySelectorAll('.prose pre').forEach(pre => {
    const code = pre.querySelector('code');
    if (!code) return;
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'copy-code'; button.textContent = 'Copy';
    button.setAttribute('aria-label', 'Copy code block');
    button.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(code.textContent); button.textContent = 'Copied!'; }
      catch { button.textContent = 'Select code to copy'; }
      setTimeout(() => { button.textContent = 'Copy'; }, 2000);
    });
    pre.append(button);
  });
})();
