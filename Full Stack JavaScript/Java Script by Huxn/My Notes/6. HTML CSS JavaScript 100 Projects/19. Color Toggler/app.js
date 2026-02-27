let toggler = document.querySelector("#switch");
let bgColor = document.querySelector(".bg-color");
toggler.addEventListener("click", () => {
  if (toggler.checked === true) {
    console.log("checked");
    bgColor.textContent = "Black";
    bgColor.style.color = "white";
    document.body.style.backgroundColor = "black";
  } else {
    console.log("unchecked");
    bgColor.textContent = "White";
    bgColor.style.color = "black";
    document.body.style.backgroundColor = "white";
  }
});
