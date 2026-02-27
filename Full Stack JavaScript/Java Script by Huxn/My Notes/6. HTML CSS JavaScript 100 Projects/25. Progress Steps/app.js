// progress
// prevBtn
// nextBtn
// circles

const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const cirlces = document.querySelectorAll(".circle");

console.log(progress);
console.log(prevBtn);
console.log(nextBtn);
console.log(cirlces);

let activeIndex = 1;

nextBtn.addEventListener("click", () => {
  activeIndex++;
  if (activeIndex > cirlces.length) {
    activeIndex = cirlces.length;
  }

  updateUi();
});

prevBtn.addEventListener("click", () => {
  activeIndex--;
  if (activeIndex < 1) {
    activeIndex = 1;
  }

  updateUi();
});

function updateUi() {
  cirlces.forEach((circle, index) => {
    if (index < activeIndex) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (cirlces.length - 1)) * 100 + "%";

  if (activeIndex === 1) {
    prevBtn.disabled = true;
  } else if (activeIndex === cirlces.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
