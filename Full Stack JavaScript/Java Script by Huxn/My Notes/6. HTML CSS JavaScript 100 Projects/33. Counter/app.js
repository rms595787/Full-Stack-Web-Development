// countEl
// saveEl
// incrementBtn
// saveBtn

let countEl = document.getElementById("count");
let saveEl = document.getElementById("save");
let incrementBtn = document.querySelector(".increment-btn");
let saveBtn = document.querySelector(".save-btn");

// console.log(countEl);
// console.log(saveEl);
// console.log(incrementBtn);
// console.log(saveBtn);

let count = 0;

incrementBtn.addEventListener("click", () => {
  count += 1;
  countEl.textContent = count;
});

saveBtn.addEventListener("click", () => {
  let countStr = count + ", ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
});
