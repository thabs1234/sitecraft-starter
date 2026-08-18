// SiteCraft SA client template — main.js
// Mobile nav, Web3Forms contact submit, current year.

(function () {
  "use strict";

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close menu after clicking a link (mobile)
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Contact form via Web3Forms (no backend needed)
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");
  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      status.textContent = "Sending…";
      status.classList.remove("error");
      fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (res.ok) {
            status.textContent = "Thanks! Your enquiry is on its way. We'll be in touch soon.";
            form.reset();
          } else {
            return res.json().then(function (j) {
              throw new Error(j.message || "Something went wrong.");
            });
          }
        })
        .catch(function (err) {
          status.textContent = err.message || "Network error — please try WhatsApp instead.";
          status.classList.add("error");
        });
    });
  }
})();
