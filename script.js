"use strict";

const openDialog = document.querySelector("#openDialog");
const dialog = document.querySelector("dialog");
const closeDialog = document.querySelector("#closeDialog");
const body = document.body;
const navLinks = document.querySelectorAll("dialog nav a");

// Open dialog

openDialog.addEventListener("click", () => {
  dialog.showModal();
  body.classList.add("overflow-hidden");
});

// Close dialog
function closeModal() {
  dialog.close();
  body.classList.remove("overflow-hidden");
}

closeDialog.addEventListener("click", closeModal);
dialog.addEventListener(
  "click",
  (event) => event.target === dialog && closeModal()
);
dialog.addEventListener("close", closeModal);

// Handle nav link clicks
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    closeModal();

    // Handle anchor links
    const href = this.getAttribute("href");
    if (href.startsWith("#")) {
      event.preventDefault();
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth" });
    }
  });
});

function handleResponsiveClose() {
  if (window.innerWidth >= 768 && dialog.open) {
    // 768px = Tailwind's 'md' breakpoint
    dialog.close();
    body.classList.remove("overflow-hidden");
  }
}

window.addEventListener("resize", handleResponsiveClose);
window.addEventListener("DOMContentLoaded", handleResponsiveClose);
