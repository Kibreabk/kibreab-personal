(() => {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initNavigation();
    initReveal();
    initNameReel();
    initVerseCarousel();
    initCvModal();
    initLightbox();
    document.querySelectorAll("[data-year]").forEach((node) => {
      node.textContent = new Date().getFullYear();
    });
  });

  function initHeader() {
    const header = document.querySelector("[data-header]");
    if (!header) return;
    const update = () => header.classList.toggle("is-scrolled", window.scrollY > 18);
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initNavigation() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-nav]");
    if (!toggle || !nav) return;

    const close = () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      document.body.style.overflow = "";
      toggle.innerHTML = '<svg aria-hidden="true"><use href="#i-menu"></use></svg>';
    };

    toggle.addEventListener("click", () => {
      const opening = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", opening);
      toggle.setAttribute("aria-expanded", String(opening));
      toggle.setAttribute("aria-label", opening ? "Close navigation" : "Open navigation");
      toggle.innerHTML = opening
        ? '<svg aria-hidden="true"><use href="#i-close"></use></svg>'
        : '<svg aria-hidden="true"><use href="#i-menu"></use></svg>';
      document.body.style.overflow = opening ? "hidden" : "";
    });

    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) close();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        close();
        toggle.focus();
      }
    });
  }

  function initReveal() {
    const items = [...document.querySelectorAll("[data-reveal]")];
    if (!items.length) return;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
  }

  function initNameReel() {
    const stage = document.querySelector("[data-name-stage]");
    const display = document.querySelector("[data-name-display]");
    if (!stage || !display) return;
    const images = [...stage.querySelectorAll("[data-name-film] img")].map((img) => img.getAttribute("src"));
    const defaultImage = display.dataset.defaultImage;
    if (defaultImage) images.unshift(defaultImage);
    if (!images.length) return;

    let index = 0;
    let timer = null;

    const apply = () => display.style.setProperty("--name-image", `url("${images[index]}")`);
    const advance = () => {
      index = (index + 1) % images.length;
      apply();
    };
    const start = () => {
      stage.classList.add("is-playing");
      apply();
      if (!reducedMotion && !timer) timer = window.setInterval(advance, 1050);
    };
    const stop = () => {
      stage.classList.remove("is-playing");
      if (timer) window.clearInterval(timer);
      timer = null;
      index = 0;
    };

    stage.addEventListener("pointerenter", start);
    stage.addEventListener("pointerleave", stop);
    stage.addEventListener("focus", start);
    stage.addEventListener("blur", stop);
    stage.addEventListener("pointermove", (event) => {
      const rect = stage.getBoundingClientRect();
      const x = Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100));
      const y = Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100));
      display.style.backgroundPosition = `${x}% ${y}%`;
    });
  }

  function initVerseCarousel() {
    const carousel = document.querySelector("[data-verse-carousel]");
    const verses = Array.isArray(window.BIBLE_VERSES) ? window.BIBLE_VERSES : [];
    if (!carousel || !verses.length) return;

    const category = carousel.querySelector("[data-verse-category]");
    const text = carousel.querySelector("[data-verse-text]");
    const reference = carousel.querySelector("[data-verse-reference]");
    const slide = carousel.querySelector(".verse-slide");
    const dotsContainer = carousel.querySelector("[data-verse-dots]");
    const prev = carousel.querySelector("[data-verse-prev]");
    const next = carousel.querySelector("[data-verse-next]");
    let current = 0;
    let timer = null;
    let paused = false;
    let pointerStartX = null;

    const dots = verses.map((verse, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "verse-dot";
      button.setAttribute("aria-label", `Show verse ${index + 1}: ${verse.reference}`);
      button.addEventListener("click", () => goTo(index, true));
      dotsContainer.appendChild(button);
      return button;
    });

    const render = () => {
      const verse = verses[current];
      category.textContent = verse.category;
      text.textContent = `“${verse.text}”`;
      reference.textContent = verse.reference;
      dots.forEach((dot, index) => {
        dot.setAttribute("aria-current", index === current ? "true" : "false");
      });
      carousel.setAttribute("aria-label", `Bible verse ${current + 1} of ${verses.length}: ${verse.reference}`);
    };

    const goTo = (index, userInitiated = false) => {
      current = (index + verses.length) % verses.length;
      if (reducedMotion) {
        render();
      } else {
        slide.classList.add("is-changing");
        window.setTimeout(() => {
          render();
          slide.classList.remove("is-changing");
        }, 190);
      }
      if (userInitiated) restart();
    };

    const stop = () => {
      if (timer) window.clearInterval(timer);
      timer = null;
    };
    const start = () => {
      stop();
      if (!reducedMotion && !paused) timer = window.setInterval(() => goTo(current + 1), 6000);
    };
    const restart = () => {
      stop();
      start();
    };
    const pause = () => { paused = true; stop(); };
    const resume = () => { paused = false; start(); };

    prev.addEventListener("click", () => goTo(current - 1, true));
    next.addEventListener("click", () => goTo(current + 1, true));
    carousel.addEventListener("mouseenter", pause);
    carousel.addEventListener("mouseleave", resume);
    carousel.addEventListener("focusin", pause);
    carousel.addEventListener("focusout", (event) => {
      if (!carousel.contains(event.relatedTarget)) resume();
    });
    carousel.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); goTo(current - 1, true); }
      if (event.key === "ArrowRight") { event.preventDefault(); goTo(current + 1, true); }
      if (event.key === "Home") { event.preventDefault(); goTo(0, true); }
      if (event.key === "End") { event.preventDefault(); goTo(verses.length - 1, true); }
    });
    carousel.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "touch") {
        pointerStartX = event.clientX;
        pause();
      }
    }, { passive: true });
    carousel.addEventListener("pointerup", (event) => {
      if (pointerStartX === null) return;
      const delta = event.clientX - pointerStartX;
      pointerStartX = null;
      if (Math.abs(delta) > 45) goTo(current + (delta < 0 ? 1 : -1), true);
      resume();
    }, { passive: true });
    document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());

    render();
    start();
  }

  function initCvModal() {
    const modal = document.querySelector("[data-cv-modal]");
    const open = document.querySelector("[data-cv-open]");
    const close = document.querySelector("[data-cv-close]");
    if (!modal || !open || !close) return;
    open.addEventListener("click", () => modal.showModal());
    close.addEventListener("click", () => modal.close());
    modal.addEventListener("click", (event) => {
      if (event.target === modal) modal.close();
    });
  }

  function initLightbox() {
    const modal = document.querySelector("[data-lightbox-modal]");
    const image = modal?.querySelector("[data-lightbox-image]");
    const caption = modal?.querySelector("[data-lightbox-caption]");
    const close = modal?.querySelector("[data-lightbox-close]");
    const cards = [...document.querySelectorAll("[data-lightbox]")];
    if (!modal || !image || !caption || !close || !cards.length) return;
    let current = 0;

    const show = (index) => {
      current = (index + cards.length) % cards.length;
      const card = cards[current];
      image.src = card.dataset.full;
      image.alt = card.dataset.alt || "Full-size photograph";
      caption.textContent = card.dataset.caption || "";
    };
    cards.forEach((card, index) => card.addEventListener("click", () => {
      show(index);
      modal.showModal();
    }));
    close.addEventListener("click", () => modal.close());
    modal.addEventListener("click", (event) => {
      if (event.target === modal) modal.close();
    });
    modal.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); show(current - 1); }
      if (event.key === "ArrowRight") { event.preventDefault(); show(current + 1); }
    });
    modal.addEventListener("close", () => {
      image.removeAttribute("src");
      image.alt = "";
    });
  }
})();
