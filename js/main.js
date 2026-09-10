const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');

document.querySelectorAll('.inner-header .brand-mark').forEach((mark) => {
  mark.setAttribute('aria-label', 'UBP, FIK, HIMATIF, Samanvaya');
  mark.innerHTML = `
    <img src="../assets/logo/UBP.png" alt="UBP">
    <img src="../assets/logo/FIK.png" alt="FIK">
    <img src="../assets/logo/HIMATIF-transparent.png" alt="HIMATIF">
    <img src="../assets/logo/logo-samanvaya.png" alt="Samanvaya">
  `;
});

document.querySelectorAll('a').forEach((link) => {
  if (link.textContent.trim() === 'Anggota' || link.getAttribute('href')?.endsWith('tentang.html')) {
    link.setAttribute('href', link.getAttribute('href').replace(/tentang\.html$/, 'kabinet.html').replace(/anggota\.html$/, 'kabinet.html'));
    link.childNodes[0].textContent = 'Kabinet';
  }
});

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

menuToggle?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
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
