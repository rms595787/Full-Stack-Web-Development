const container = document.querySelector(".content");
let baseURL = "https://picsum.photos";
// https://picsum.photos/width/height/?random=number

const rows = 7;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${baseURL}/${randomSizes()}?random=${randomNumber()}`;
  container.appendChild(img);
}

function randomSizes() {
  return `${randomNumber()}/${randomNumber()}`;
}

function randomNumber() {
  return Math.floor(Math.random() * 30) + 300;
}
randomNumber();
