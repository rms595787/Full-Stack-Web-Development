// open sign up form btn
const openFormBtn = document.querySelector("#open");
// close sign up form btn
const closeFormBtn = document.querySelector("#close");
// sign up form submit btn
const submitBtn = document.querySelector(".submit-btn");

// modal-container
const modal = document.querySelector(".modal-container");

openFormBtn.addEventListener("click", () => {
  modal.classList.add("show-modal");
});

closeFormBtn.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

submitBtn.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

// when we click on window meaning outside of form area, form will be closed
window.addEventListener("click", (e) => {
  e.target === modal ? modal.classList.remove("show-modal") : false;
});
