// src/lib/slider.ts
export function initSlider() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slider-item');
  const slideDots = document.querySelectorAll('.dot');
  const totalSlides = slides.length;

  if (totalSlides === 0) return;

  function updateSlider(n: number) {
    slides.forEach((s, i) => {
      if (i === n) {
        s.classList.add('opacity-100', 'z-10');
        s.classList.remove('opacity-0', 'z-0');
      } else {
        s.classList.remove('opacity-100', 'z-10');
        s.classList.add('opacity-0', 'z-0');
      }
    });
    slideDots.forEach((d, i) => {
      d.classList.toggle('bg-blue-500', i === n);
      d.classList.toggle('shadow-[0_0_10px_#3b82f6]', i === n);
      d.classList.toggle('bg-white/20', i !== n);
    });
  }

  document.getElementById('nextBtn')?.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider(currentSlide);
  });

  document.getElementById('prevBtn')?.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider(currentSlide);
  });

  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider(currentSlide);
  }, 8000);
}