"use strict";

const openDialog = document.querySelector("#openDialog");
const dialog = document.querySelector("dialog");
const closeDialog = document.querySelector("#closeDialog");

openDialog.addEventListener("click", () => {
  dialog.showModal();
});

closeDialog.addEventListener("click", () => {
  dialog.close();
});
