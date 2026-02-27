const input = document.querySelectorAll("input");
const body = document.body;

// // 1st way
// input.forEach((e) => {
//   e.addEventListener("click", () => {
//     body.style.backgroundColor = `${e.value}`;
//   });
// });

// document.addEventListener("click", (e) => {
//   if (e.target.tagName !== "INPUT") {
//     body.style.backgroundColor = "";
//   }
// });

// // 2nd way
// // Change bg color when clicking the input
// input.forEach((e) => {
//   e.addEventListener("click", (event) => {
//     event.stopPropagation();

//     // remove previous class
//     body.className = "";

//     // add new class
//     body.classList.add(e.value);

//   });
// });

// // reset bg color when clicking outside of button
// document.addEventListener("click", (e) => {
//   if (!e.target.closest("input")) {
//     body.className = "";
//   }
// });

// 3rd way
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const inputValue = btn.value;
    console.log(inputValue);
    changeBackground(inputValue);
  });
});

function changeBackground(inputValue) {
  switch (inputValue) {
    case "purple":
      body.classList.add("purple");
      break;
    case "blue":
      body.classList.add("blue");
      break;
    case "red":
      body.classList.add("red");
      break;
    case "green":
      body.classList.add("green");
      break;
    case "yellow":
      body.classList.add("yellow");
      break;
    case "teal":
      body.classList.add("teal");
      break;
    default:
      break;
  }
}

document.addEventListener("click", (e) => {
  if (!e.target.closest("input")) {
    body.className = "";
  }
});
