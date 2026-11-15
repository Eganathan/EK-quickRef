(() => {
  document.querySelectorAll('[data-enhanced]').forEach(element => { element.hidden = false; });
  const input = document.querySelector('[data-search]');
  const cards = [...document.querySelectorAll('[data-reference]')];
  const groups = [...document.querySelectorAll('.reference-group')];
  const update = () => {
    const terms = input?.value.toLowerCase().trim().split(/\s+/).filter(Boolean) || [];
    let count = 0;
    cards.forEach(card => {
      card.hidden = !terms.every(term => card.dataset.searchText.toLowerCase().includes(term));
      if (!card.hidden) count++;
    });
    groups.forEach(group => {
      const visible = [...group.querySelectorAll('[data-reference]')].filter(card => !card.hidden).length;
      group.hidden = visible === 0;
      const label = group.querySelector('[data-group-count]');
      if (label) label.textContent = `${visible} reference${visible === 1 ? '' : 's'}`;
    });
    const result = document.querySelector('[data-results]');
    if (result) result.textContent = `${count} reference${count === 1 ? '' : 's'}${terms.length ? ' found' : ''}`;
    const empty = document.querySelector('[data-empty]');
    if (empty) empty.hidden = count > 0;
  };
  input?.addEventListener('input', update);
  document.querySelector('[data-reset]')?.addEventListener('click', () => { input.value = ''; update(); input.focus(); });
  if (input) update();
})();
