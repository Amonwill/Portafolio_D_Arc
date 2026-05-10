// src/lib/project.ts
export function initProjectView() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('close-modal');
  const triggers = document.querySelectorAll('.gallery-trigger');

  const openModal = () => {
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      const scrollContainer = modal.querySelector('.overflow-y-auto');
      if (scrollContainer) scrollContainer.scrollTop = 0;
    }
  };

  const closeModal = () => {
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
      const url = new URL(window.location.href);
      url.searchParams.delete('view');
      window.history.replaceState({}, '', url);
    }
  };

  triggers.forEach(t => t.addEventListener('click', openModal));
  closeBtn?.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  const params = new URLSearchParams(window.location.search);
  if (params.get('view') === 'modal') {
    openModal();
  }
}