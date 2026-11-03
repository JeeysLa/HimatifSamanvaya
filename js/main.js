const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);

const pageTransitionThemes = {
  "index.html": {
    base: "#0a1e32",
    accent: "#56c6ee",
    pillar: "doric",
    badge: "BERANDA // RUANG TUMBUH",
    code: "01",
    label: "SYS_CORE // CONNECT",
    meta: "RUANG TUMBUH & AKSI",
  },
  "kabinet.html": {
    base: "#4a121c",
    accent: "#e5b64c",
    pillar: "ionic",
    badge: "KABINET // SAMANVAYA SATYA",
    code: "02",
    label: "SAMANVAYA // 4 PILAR",
    meta: "KEKELUARGAAN • KOMPETENSI • ASPIRASI • TEKNOLOGI",
  },
  "divisi.html": {
    base: "#0c2c36",
    accent: "#4fd1c5",
    pillar: "corinthian",
    badge: "DIVISI // 8 RUANG GERAK",
    code: "03",
    label: "DIVISI // 8 PILAR GERAK",
    meta: "RUANG BELAJAR & BERKARYA",
  },
  "detail-divisi.html": {
    base: "#0c2c36",
    accent: "#4fd1c5",
    pillar: "corinthian",
    badge: "DETAIL DIVISI // STRUKTUR",
    code: "03",
    label: "DIVISI // PROGRAM KERJA",
    meta: "STRUKTUR & PERAN PENGURUS",
  },
  "berita.html": {
    base: "#38290f",
    accent: "#f0be54",
    pillar: "composite",
    badge: "BERITA // WARTA & ARTIKEL",
    code: "04",
    label: "WARTA // INFORMASI TERKINI",
    meta: "KABAR & PUBLIKASI HIMATIF",
  },
  "berita-detail.html": {
    base: "#38290f",
    accent: "#f0be54",
    pillar: "composite",
    badge: "KABAR TERKINI // DOKUMENTASI",
    code: "04",
    label: "PUBLIKASI // HIMATIF PRESS",
    meta: "ARSIP & DOKUMENTASI KEGIATAN",
  },
  "kegiatan.html": {
    base: "#48211a",
    accent: "#f3906c",
    pillar: "doric",
    badge: "KEGIATAN // ARSIP & AGENDA",
    code: "05",
    label: "AGENDA // JEJAK LANGKAH",
    meta: "MOMEN & DOKUMENTASI ACARA",
  },
};

const isSubdir =
  window.location.pathname.includes("/pages/") ||
  window.location.pathname.includes("\\pages\\");
const logoPath = isSubdir
  ? "../assets/logo/logo-samanvaya.webp"
  : "assets/logo/logo-samanvaya.webp";

const pageTransition = document.createElement("div");
pageTransition.className = "page-transition is-entering";
pageTransition.setAttribute("aria-hidden", "true");
pageTransition.innerHTML = `
  <div class="page-transition__panel page-transition__panel--left">
    <div class="page-transition__pillar"></div>
    <div class="page-transition__data page-transition__data--left">
      <span class="page-transition__index" data-transition-code>01</span>
      <span class="page-transition__code-line"></span>
      <span class="page-transition__code-text" data-transition-label>SYS_CORE // CONNECT</span>
    </div>
    <div class="page-transition__seam"></div>
  </div>
  <div class="page-transition__panel page-transition__panel--right">
    <div class="page-transition__pillar"></div>
    <div class="page-transition__data page-transition__data--right">
      <span class="page-transition__code-text" data-transition-meta>HIMATIF SAMANVAYA</span>
      <span class="page-transition__code-line"></span>
      <span class="page-transition__status">● ACTIVE</span>
    </div>
    <div class="page-transition__seam"></div>
  </div>
  <div class="page-transition__center">
    <div class="page-transition__glow"></div>
    <div class="page-transition__pill">
      <span class="page-transition__pill-dot">✦</span>
      <span class="page-transition__pill-text" data-transition-badge>BERANDA // RUANG TUMBUH</span>
      <span class="page-transition__pill-dot">✦</span>
    </div>
    <div class="page-transition__crest">
      <div class="page-transition__satellites" aria-hidden="true">
        <span class="satellite sat-1"></span>
        <span class="satellite sat-2"></span>
        <span class="satellite sat-3"></span>
        <span class="satellite sat-4"></span>
        <span class="satellite sat-5"></span>
        <span class="satellite sat-6"></span>
        <span class="satellite sat-7"></span>
        <span class="satellite sat-8"></span>
      </div>
      <div class="page-transition__orbit page-transition__orbit--outer"></div>
      <div class="page-transition__orbit page-transition__orbit--inner"></div>
      <div class="page-transition__brackets" aria-hidden="true">
        <span class="bracket bracket-tl"></span>
        <span class="bracket bracket-tr"></span>
        <span class="bracket bracket-bl"></span>
        <span class="bracket bracket-br"></span>
      </div>
      <img class="page-transition__logo" src="${logoPath}" alt="HIMATIF Samanvaya" />
    </div>
    <div class="page-transition__telemetry">
      <span class="telemetry-bar"></span>
      <span class="telemetry-txt">HIMATIF SAMANVAYA SATYA</span>
      <span class="telemetry-bar"></span>
    </div>
  </div>
`;

const applyPageTransitionTheme = (pagePath) => {
  const page = pagePath.split(/[\\/]/).pop() || "index.html";
  const theme =
    pageTransitionThemes[page] || pageTransitionThemes["index.html"];
  document.documentElement.style.setProperty("--transition-base", theme.base);
  document.documentElement.style.setProperty(
    "--transition-accent",
    theme.accent,
  );
  pageTransition.style.setProperty("--transition-base", theme.base);
  pageTransition.style.setProperty("--transition-accent", theme.accent);
  pageTransition.dataset.pillar = theme.pillar;

  const badgeEl = pageTransition.querySelector("[data-transition-badge]");
  const codeEl = pageTransition.querySelector("[data-transition-code]");
  const labelEl = pageTransition.querySelector("[data-transition-label]");
  const metaEl = pageTransition.querySelector("[data-transition-meta]");

  if (badgeEl) badgeEl.textContent = theme.badge;
  if (codeEl) codeEl.textContent = theme.code;
  if (labelEl) labelEl.textContent = theme.label;
  if (metaEl) metaEl.textContent = theme.meta;
};

const cleanupTransition = () => {
  pageTransition.classList.remove("is-entering");
  pageTransition.classList.remove("is-leaving");
  pageTransition.remove();
  document.body.classList.remove("is-page-entering");
  document.body.classList.remove("is-page-leaving");
};

if (!prefersReducedMotion.matches) {
  document.body.append(pageTransition);
  document.body.classList.add("is-page-entering");

  const enterTimeout = window.setTimeout(cleanupTransition, 620);
  pageTransition.addEventListener(
    "animationend",
    (event) => {
      if (
        event.animationName === "curtain-panel-open-left" ||
        event.animationName === "curtain-panel-open-right"
      ) {
        window.clearTimeout(enterTimeout);
        cleanupTransition();
      }
    },
    { once: true },
  );
} else {
  cleanupTransition();
}

let pageNavigationStarted = false;

const isSamePageNavigation = (destination) => {
  if (destination.origin !== window.location.origin) return false;

  const currentFile =
    window.location.pathname.split(/[\\/]/).filter(Boolean).pop() ||
    "index.html";
  const destFile =
    destination.pathname.split(/[\\/]/).filter(Boolean).pop() ||
    "index.html";

  const isSameFile =
    currentFile.toLowerCase() === destFile.toLowerCase();

  const currentIsInPages =
    window.location.pathname.includes("/pages/") ||
    window.location.pathname.includes("\\pages\\");
  const destIsInPages =
    destination.pathname.includes("/pages/") ||
    destination.pathname.includes("\\pages\\");

  const isSameDir = currentIsInPages === destIsInPages;
  const isSameSearch = destination.search === window.location.search;

  return isSameFile && isSameDir && isSameSearch;
};

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (
    !link ||
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    link.hasAttribute("download") ||
    (link.target && link.target !== "_self")
  )
    return;

  const destination = new URL(link.href, window.location.href);

  // Jika user sudah berada di halaman yang sama, jangan munculkan transisi
  if (link.classList.contains("active") || isSamePageNavigation(destination)) {
    if (destination.hash && destination.pathname === window.location.pathname) {
      return;
    }
    event.preventDefault();
    return;
  }

  if (
    destination.origin !== window.location.origin &&
    window.location.protocol !== "file:"
  )
    return;
  if (prefersReducedMotion.matches) return;

  applyPageTransitionTheme(destination.pathname);

  event.preventDefault();
  if (pageNavigationStarted) return;
  pageNavigationStarted = true;

  pageTransition.classList.remove("is-entering");
  pageTransition.classList.add("is-leaving");
  document.body.classList.add("is-page-leaving");
  document.body.append(pageTransition);

  window.setTimeout(() => {
    window.location.assign(destination.href);
  }, 520);
});

window.addEventListener("pageshow", (event) => {
  pageNavigationStarted = false;
  cleanupTransition();
});

window.addEventListener(
  "scroll",
  () => {
    header?.classList.toggle("scrolled", window.scrollY > 24);
  },
  { passive: true },
);

menuToggle?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuToggle?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
);

revealItems.forEach((item) => revealObserver.observe(item));

const cabinetLogo = document.querySelector(".cabinet-logo");
if (cabinetLogo) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let logoIsVisible = false;
  let pulseTimer;
  let repeatTimer;

  const stopLogoPulse = () => {
    window.clearTimeout(pulseTimer);
    window.clearTimeout(repeatTimer);
    cabinetLogo.classList.remove("is-pulsing");
  };

  const scheduleLogoPulse = () => {
    stopLogoPulse();
    if (!logoIsVisible || reducedMotion.matches) return;

    pulseTimer = window.setTimeout(() => {
      cabinetLogo.classList.add("is-pulsing");
    }, 1400);
  };

  const cabinetLogoObserver = new IntersectionObserver(
    ([entry]) => {
      logoIsVisible = entry.isIntersecting;
      if (logoIsVisible) {
        scheduleLogoPulse();
      } else {
        stopLogoPulse();
      }
    },
    { threshold: 0.4 },
  );

  cabinetLogoObserver.observe(cabinetLogo);

  ["pointermove", "pointerdown", "keydown", "scroll", "touchstart"].forEach(
    (eventName) => {
      window.addEventListener(eventName, scheduleLogoPulse, { passive: true });
    },
  );

  cabinetLogo.addEventListener("animationend", (event) => {
    if (event.animationName !== "cabinet-logo-glow") return;
    cabinetLogo.classList.remove("is-pulsing");
    repeatTimer = window.setTimeout(scheduleLogoPulse, 6000);
  });

  reducedMotion.addEventListener("change", scheduleLogoPulse);
}

const photoViewer = document.querySelector("[data-photo-viewer]");
const photoViewerImage = photoViewer?.querySelector(
  "[data-photo-viewer-image]",
);
let photoViewerScrollY = 0;

const restorePhotoViewerScroll = () => {
  requestAnimationFrame(() => {
    const scrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, photoViewerScrollY);
    document.documentElement.style.scrollBehavior = scrollBehavior;
  });
};

document.querySelectorAll("[data-photo-open]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const image = trigger.querySelector("img");
    if (!photoViewer || !photoViewerImage || !image) return;

    photoViewerScrollY = window.scrollY;
    photoViewerImage.src = image.currentSrc || image.src;
    photoViewerImage.alt = trigger.getAttribute("aria-label") || "";
    photoViewer.showModal();
    restorePhotoViewerScroll();
  });
});

photoViewer
  ?.querySelector("[data-photo-close]")
  ?.addEventListener("click", () => {
    photoViewer.close();
  });

photoViewer?.addEventListener("close", restorePhotoViewerScroll);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && photoViewer?.open) {
    event.preventDefault();
    photoViewer.close();
  }
});

photoViewer?.addEventListener("click", (event) => {
  if (event.target === photoViewer) photoViewer.close();
});
