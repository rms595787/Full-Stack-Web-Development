const container = document.querySelector(".container");
const h1 = document.querySelector(".main-headings");
const p = document.querySelector(".sub-headings");
const btn = document.querySelector(".btn");

// 1. Proivde "400px" of height to container element
console.log(container.style);
container.style.height="400px";
container.style.border="2px solid black";

// 2. Change the background color of container to "teal"
container.style.backgroundColor="teal";

// 3. Change the color of h1 to "skyblue"
h1.style.color="skyblue";

// 4. Change the fontFamily of paragraph to "sans-serif"
p.style.fontFamily="sans-serif";

// 5. Change the color of paragraph to "white"
p.style.color="white";

// 6. Change the color of btn to pink
btn.style.color="pink";
