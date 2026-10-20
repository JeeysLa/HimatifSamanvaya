const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const pageTransitionThemes = {
  'index.html': { base: '#0d2d4a', accent: '#77d0f0' },
  'kabinet.html': { base: '#651f29', accent: '#e5b64c' },
  'divisi.html': { base: '#123e4a', accent: '#7bd3e2' },
  'detail-divisi.html': { base: '#123e4a', accent: '#7bd3e2' },
  'berita.html': { base: '#4a3a18', accent: '#f0c45e' },
  'berita-detail.html': { base: '#4a3a18', accent: '#f0c45e' },
  'kegiatan.html': { base: '#5a3028', accent: '#f29b75' },
};
const pageTransition = document.createElement('div');
pageTransition.className = 'page-transition is-entering';
pageTransition.setAttribute('aria-hidden', 'true');
pageTransition.innerHTML = `
  <span class="page-transition__trace page-transition__trace-one"></span>
  <span class="page-transition__trace page-transition__trace-two"></span>
  <span class="page-transition__trace page-transition__trace-three"></span>
`;

const applyPageTransitionTheme = (pagePath) => {
  const page = pagePath.split('/').pop() || 'index.html';
  const theme = pageTransitionThemes[page] || pageTransitionThemes['index.html'];
  document.documentElement.style.setProperty('--transition-base', theme.base);
  document.documentElement.style.setProperty('--transition-accent', theme.accent);
  pageTransition.style.setProperty('--transition-base', theme.base);
  pageTransition.style.setProperty('--transition-accent', theme.accent);
};

applyPageTransitionTheme(window.location.pathname);

if (!prefersReducedMotion.matches) {
  document.body.append(pageTransition);
  document.body.classList.add('is-page-entering');
  pageTransition.addEventListener('animationend', (event) => {
    if (event.target !== pageTransition || event.animationName !== 'signal-reveal') return;
    pageTransition.remove();
    document.body.classList.remove('is-page-entering');
  });
} else {
  pageTransition.remove();
}

let pageNavigationStarted = false;

document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href]');
  if (
    !link ||
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    link.hasAttribute('download') ||
    (link.target && link.target !== '_self')
  ) return;

  const destination = new URL(link.href, window.location.href);
  if (
    destination.origin !== window.location.origin ||
    destination.pathname === window.location.pathname &&
      destination.search === window.location.search
  ) return;

  if (prefersReducedMotion.matches) return;

  applyPageTransitionTheme(destination.pathname);

  event.preventDefault();
  if (pageNavigationStarted) return;
  pageNavigationStarted = true;

  pageTransition.classList.remove('is-entering');
  document.body.append(pageTransition);
  pageTransition.classList.add('is-leaving');
  window.setTimeout(() => {
    window.location.assign(destination.href);
  }, 520);
});

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

const cabinetLogo = document.querySelector('.cabinet-logo');
if (cabinetLogo) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let logoIsVisible = false;
  let pulseTimer;
  let repeatTimer;

  const stopLogoPulse = () => {
    window.clearTimeout(pulseTimer);
    window.clearTimeout(repeatTimer);
    cabinetLogo.classList.remove('is-pulsing');
  };

  const scheduleLogoPulse = () => {
    stopLogoPulse();
    if (!logoIsVisible || reducedMotion.matches) return;

    pulseTimer = window.setTimeout(() => {
      cabinetLogo.classList.add('is-pulsing');
    }, 1400);
  };

  const cabinetLogoObserver = new IntersectionObserver(([entry]) => {
    logoIsVisible = entry.isIntersecting;
    if (logoIsVisible) {
      scheduleLogoPulse();
    } else {
      stopLogoPulse();
    }
  }, { threshold: 0.4 });

  cabinetLogoObserver.observe(cabinetLogo);

  ['pointermove', 'pointerdown', 'keydown', 'scroll', 'touchstart'].forEach((eventName) => {
    window.addEventListener(eventName, scheduleLogoPulse, { passive: true });
  });

  cabinetLogo.addEventListener('animationend', (event) => {
    if (event.animationName !== 'cabinet-logo-glow') return;
    cabinetLogo.classList.remove('is-pulsing');
    repeatTimer = window.setTimeout(scheduleLogoPulse, 6000);
  });

  reducedMotion.addEventListener('change', scheduleLogoPulse);
}

const photoViewer = document.querySelector('[data-photo-viewer]');
const photoViewerImage = photoViewer?.querySelector('[data-photo-viewer-image]');
let photoViewerScrollY = 0;

const restorePhotoViewerScroll = () => {
  requestAnimationFrame(() => {
    const scrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, photoViewerScrollY);
    document.documentElement.style.scrollBehavior = scrollBehavior;
  });
};

document.querySelectorAll('[data-photo-open]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const image = trigger.querySelector('img');
    if (!photoViewer || !photoViewerImage || !image) return;

    photoViewerScrollY = window.scrollY;
    photoViewerImage.src = image.currentSrc || image.src;
    photoViewerImage.alt = trigger.getAttribute('aria-label') || '';
    photoViewer.showModal();
    restorePhotoViewerScroll();
  });
});

photoViewer?.querySelector('[data-photo-close]')?.addEventListener('click', () => {
  photoViewer.close();
});

photoViewer?.addEventListener('close', restorePhotoViewerScroll);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && photoViewer?.open) {
    event.preventDefault();
    photoViewer.close();
  }
});

photoViewer?.addEventListener('click', (event) => {
  if (event.target === photoViewer) photoViewer.close();
});
