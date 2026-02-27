const btn = document.querySelector(".navbar-btn");
const navbar = document.querySelector(".navbar-wrapper");

btn.addEventListener("click", () => {
  navbar.classList.toggle("change");
});
