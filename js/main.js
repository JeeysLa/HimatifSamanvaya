const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');


window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

menuToggle?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuToggle.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuToggle?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => revealObserver.observe(item));

const photoViewer = document.querySelector('[data-photo-viewer]');
const photoViewerImage = photoViewer?.querySelector('[data-photo-viewer-image]');

document.querySelectorAll('[data-photo-open]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const image = trigger.querySelector('img');
    if (!photoViewer || !photoViewerImage || !image) return;

    photoViewerImage.src = image.currentSrc || image.src;
    photoViewerImage.alt = trigger.getAttribute('aria-label') || '';
    photoViewer.showModal();
  });
});

photoViewer?.querySelector('[data-photo-close]')?.addEventListener('click', () => {
  photoViewer.close();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && photoViewer?.open) {
    event.preventDefault();
    photoViewer.close();
  }
});

photoViewer?.addEventListener('click', (event) => {
  if (event.target === photoViewer) photoViewer.close();
});
