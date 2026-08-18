(function () {
  "use strict";

  function setupNameInteraction() {
    var name = document.querySelector("[data-interactive-name]");
    var hero = document.querySelector("[data-home-hero]");
    if (!name || !hero) return;

    var words = name.querySelectorAll("[data-name-word]");
    words.forEach(function (word) {
      word.addEventListener("pointerenter", function () {
        hero.dataset.nameState = word.dataset.nameWord;
      });
      word.addEventListener("pointerleave", function () {
        hero.dataset.nameState = "rest";
      });
    });

    name.addEventListener("focus", function () {
      hero.dataset.nameState = "focus";
    });
    name.addEventListener("blur", function () {
      hero.dataset.nameState = "rest";
    });
  }

  function setupCvDialog() {
    var dialog = document.querySelector("#cv-dialog");
    var opener = document.querySelector("[data-open-cv]");
    if (!dialog || !opener) return;

    var closeButtons = dialog.querySelectorAll("[data-close-cv]");
    var lastFocused = null;

    function openDialog() {
      lastFocused = document.activeElement;
      document.body.classList.add("dialog-open");
      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        dialog.setAttribute("open", "");
      }
      var closeButton = dialog.querySelector("[data-close-cv]");
      if (closeButton) closeButton.focus();
    }

    function closeDialog() {
      document.body.classList.remove("dialog-open");
      if (typeof dialog.close === "function") dialog.close();
      else dialog.removeAttribute("open");
      if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
    }

    opener.addEventListener("click", openDialog);
    closeButtons.forEach(function (button) {
      button.addEventListener("click", closeDialog);
    });

    dialog.addEventListener("click", function (event) {
      var rect = dialog.getBoundingClientRect();
      var outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
      if (outside) closeDialog();
    });

    dialog.addEventListener("cancel", function (event) {
      event.preventDefault();
      closeDialog();
    });
  }

  function setupBookTilt() {
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !window.matchMedia("(hover: hover)").matches) return;

    document.querySelectorAll("[data-book-cover]").forEach(function (cover) {
      cover.addEventListener("pointermove", function (event) {
        var rect = cover.getBoundingClientRect();
        var x = (event.clientX - rect.left) / rect.width - 0.5;
        var y = (event.clientY - rect.top) / rect.height - 0.5;
        cover.style.setProperty("--book-rotate-x", String(y * -5) + "deg");
        cover.style.setProperty("--book-rotate-y", String(x * 7) + "deg");
      });
      cover.addEventListener("pointerleave", function () {
        cover.style.removeProperty("--book-rotate-x");
        cover.style.removeProperty("--book-rotate-y");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (window.SiteComponents) window.SiteComponents.init();
    setupNameInteraction();
    setupCvDialog();
    setupBookTilt();
  });
}());
