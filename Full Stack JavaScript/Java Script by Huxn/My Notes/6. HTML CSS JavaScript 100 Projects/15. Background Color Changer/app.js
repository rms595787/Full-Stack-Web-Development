const hexColor = document.querySelector(".color");
const btn = document.querySelector(".container button");

function randomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

btn.addEventListener("click", () => {
  let color = randomColor();
  document.body.style.backgroundColor = color;
  hexColor.innerHTML = color;
});
