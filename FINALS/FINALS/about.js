  
// Sliding 'About Us' section
const aboutSlider = document.querySelector('.about-slider');
if (aboutSlider) {
  const slidesContainer = aboutSlider.querySelector('.slides');
  const slides = slidesContainer ? Array.from(slidesContainer.children) : [];
  const prevBtn = aboutSlider.querySelector('.slider-nav.prev');
  const nextBtn = aboutSlider.querySelector('.slider-nav.next');
  const dotsContainer = aboutSlider.querySelector('.slider-dots');
  let current = 0;
  let autoplay = true;
  let autoplayInterval = 3000; // 3s
  let timer;

  function update() {
    if (!slidesContainer) return;
    slidesContainer.style.transform = `translateX(-${current * 100}%)`;
    // update dots
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.dot');
      dots.forEach((d, i) => {
        const isActive = i === current;
        d.classList.toggle('active', isActive);
        d.setAttribute('aria-current', isActive ? 'true' : 'false');
      });
    }
    // set ARIA hidden for slides
    slides.forEach((s, i) => {
      if (i === current) { s.setAttribute('aria-hidden','false'); s.classList.add('active'); }
      else { s.setAttribute('aria-hidden','true'); s.classList.remove('active'); }
    });
  }

  function prev() { current = (current - 1 + slides.length) % slides.length; update(); resetTimer(); }
  function next() { current = (current + 1) % slides.length; update(); resetTimer(); }
  function goto(index) { current = (index + slides.length) % slides.length; update(); resetTimer(); }

  function resetTimer() {
    if (!autoplay) return;
    clearInterval(timer);
    timer = setInterval(() => next(), autoplayInterval);
  }

  // Setup slides ARIA and build dots
  slides.forEach((s, i) => {
    s.setAttribute('role', 'group');
    s.setAttribute('aria-roledescription', 'slide');
    s.setAttribute('aria-label', `Slide ${i + 1} of ${slides.length}`);
  });
  // Build dots
  if (dotsContainer && slides.length) {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'dot';
      dot.setAttribute('aria-label', `Show slide ${i + 1}`);
      dot.addEventListener('click', () => goto(i));
      dotsContainer.appendChild(dot);
    });
  }

  // Attach buttons
  if (prevBtn) prevBtn.addEventListener('click', prev);
  if (nextBtn) nextBtn.addEventListener('click', next);

  // keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });

  // swipe handling (touch)
  let touchStartX = 0;
  if (slidesContainer) {
    slidesContainer.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
    slidesContainer.addEventListener('touchend', (e) => {
      const delta = e.changedTouches[0].clientX - touchStartX;
      if (delta > 50) prev();
      if (delta < -50) next();
    });
  }

  update();
  resetTimer();
} else {
  // fallback: intersection observer animations for vertical layout
  const sections = document.querySelectorAll('.section-container');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // Center the section in the viewport
        entry.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }, { threshold: 0.5 }); // triggers when ~50% of the section is visible
  sections.forEach(sec => observer.observe(sec));
}

