// inputField
// outputField
// buttons

const inputField = document.getElementById("input-field");
const outputField = document.getElementById("output-field");

const buttons = document.querySelectorAll("button");

// console.log(inputField);
// console.log(outputField);
// console.log(buttons);

// whenever we press key and lifts it, on lifting the key it triggers this event
inputField.addEventListener(
  "keyup",
  () => (outputField.innerHTML = inputField.value)
);

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("uppercase")) {
      outputField.innerHTML = outputField.innerHTML.toUpperCase();
    } else if (btn.classList.contains("lowercase")) {
      outputField.innerHTML = outputField.innerHTML.toLowerCase();
    } else if (btn.classList.contains("capitalize")) {
      outputField.innerHTML =
        outputField.innerHTML.charAt(0).toUpperCase() +
        outputField.innerHTML.slice(1).toLowerCase();
    } else if (btn.classList.contains("bold")) {
      outputField.classList.add("bold");
    } else if (btn.classList.contains("italic")) {
      outputField.classList.add("italic");
    } else {
      outputField.classList.add("underline");
    }
  });
});
