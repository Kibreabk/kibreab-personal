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

  function setupEmailComposer() {
    var form = document.querySelector("[data-email-form]");
    if (!form) return;

    var status = form.querySelector("[data-email-status]");
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var data = new FormData(form);
      var name = String(data.get("name") || "").trim();
      var replyTo = String(data.get("email") || "").trim();
      var message = String(data.get("message") || "").trim();
      var recipient = window.siteData && window.siteData.email ? window.siteData.email : "kibreyo@gmail.com";

      if (!name || !replyTo || !message) {
        if (status) status.textContent = "Please complete all three fields.";
        return;
      }

      var subject = "Website message from " + name;
      var body = "Name: " + name + "\nReply to: " + replyTo + "\n\n" + message;
      var mailto = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

      if (status) status.textContent = "Opening your email app...";
      window.location.href = mailto;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (window.SiteComponents) window.SiteComponents.init();
    setupCvDialog();
    setupEmailComposer();
  });
}());
