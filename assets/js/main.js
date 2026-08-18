(function () {
  "use strict";

  function setupCvDialog() {
    var dialog = document.querySelector("#cv-dialog");
    var opener = document.querySelector("[data-open-cv]");
    if (!dialog || !opener) return;

    var lastFocused = null;
    var closeButtons = dialog.querySelectorAll("[data-close-cv]");

    function openDialog() {
      lastFocused = document.activeElement;
      document.body.classList.add("dialog-open");
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
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
    closeButtons.forEach(function (button) { button.addEventListener("click", closeDialog); });
    dialog.addEventListener("cancel", function (event) {
      event.preventDefault();
      closeDialog();
    });
    dialog.addEventListener("click", function (event) {
      var rect = dialog.getBoundingClientRect();
      var outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
      if (outside) closeDialog();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (window.SiteComponents) window.SiteComponents.init();
    setupCvDialog();
  });
}());
