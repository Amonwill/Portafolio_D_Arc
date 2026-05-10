// src/lib/filters.ts
export function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  const loadMoreBtn = document.getElementById('load-more');
  let activeFilter = 'all';

  function runFilter(showAll = false) {
    let shown = 0;
    cards.forEach(card => {
      const match = activeFilter === 'all' || card.getAttribute('data-category') === activeFilter;
      const htmlCard = card as HTMLElement;
      if (match) {
        if (showAll || shown < 6) {
          htmlCard.classList.remove('hidden');
          htmlCard.style.display = 'flex';
        } else {
          htmlCard.classList.add('hidden');
          htmlCard.style.display = 'none';
        }
        shown++;
      } else {
        htmlCard.classList.add('hidden');
        htmlCard.style.display = 'none';
      }
    });
    if (loadMoreBtn) {
      loadMoreBtn.style.display = (shown > 6 && !showAll) ? 'block' : 'none';
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement;
      filterBtns.forEach(b => {
        b.classList.remove('text-white');
        b.classList.add('text-gray-500');
        const line = b.querySelector('.filter-line') as HTMLElement;
        if (line) line.style.width = '0%';
      });
      
      target.classList.add('text-white');
      const activeLine = target.querySelector('.filter-line') as HTMLElement;
      if (activeLine) activeLine.style.width = '100%';
      
      activeFilter = target.getAttribute('data-filter') || 'all';
      runFilter(false);
    });
  });

  loadMoreBtn?.addEventListener('click', () => runFilter(true));
}