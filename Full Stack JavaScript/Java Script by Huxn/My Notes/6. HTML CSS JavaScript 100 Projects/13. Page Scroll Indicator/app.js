const progress_bar = document.querySelector(".scroll-indicator .progress");
let scrollHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
console.log(document.documentElement.scrollTop / scrollHeight);
window.addEventListener("scroll", scroll);

function scroll() {
  let scrollTop = document.documentElement.scrollTop;
  let scrolled = (scrollTop / scrollHeight) * 100;
  progress_bar.style.width = `${scrolled}%`;
}
