(function () {
  "use strict";

  function setCurrentYear() {
    document.querySelectorAll("[data-current-year]").forEach(function (node) {
      node.textContent = String(new Date().getFullYear());
    });
  }

  function setupNavigation() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var menu = document.querySelector("[data-nav-menu]");
    if (!toggle || !menu) return;

    var closeMenu = function () {
      toggle.setAttribute("aria-expanded", "false");
      menu.dataset.open = "false";
      document.body.classList.remove("nav-open");
    };

    var openMenu = function () {
      toggle.setAttribute("aria-expanded", "true");
      menu.dataset.open = "true";
      document.body.classList.add("nav-open");
      var firstLink = menu.querySelector("a");
      if (firstLink) firstLink.focus();
    };

    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      if (expanded) closeMenu();
      else openMenu();
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        closeMenu();
        toggle.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 900) closeMenu();
    });
  }

  function setupReveal() {
    var items = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
    if (!items.length) return;

    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach(function (item) { item.dataset.visible = "true"; });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.dataset.visible = "true";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

    items.forEach(function (item) { observer.observe(item); });
  }

  function setupBackToTop() {
    var button = document.querySelector("[data-back-to-top]");
    if (!button) return;

    var update = function () {
      button.dataset.visible = window.scrollY > 720 ? "true" : "false";
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    button.addEventListener("click", function () {
      var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    });
  }

  function setupExternalLinks() {
    document.querySelectorAll("a[target='_blank']").forEach(function (link) {
      link.rel = "noopener noreferrer";
    });
  }

  window.SiteComponents = {
    init: function () {
      setCurrentYear();
      setupNavigation();
      setupReveal();
      setupBackToTop();
      setupExternalLinks();
    }
  };
}());
