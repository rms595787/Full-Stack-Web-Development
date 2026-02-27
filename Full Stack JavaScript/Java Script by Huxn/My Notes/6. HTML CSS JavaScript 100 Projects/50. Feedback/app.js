// ratings
// ratingsContainer
// sendBtn
// panel

const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

// // 1st way
// ratingsContainer.addEventListener("click", (e) => {
//   if (e.target.parentNode.classList.contains("rating")) {
//     removeActives();
//     e.target.parentNode.classList.add("active");
//     selectedRating = e.target.nextElementSibling.innerHTML;
//   }
// });

// 2nd way
ratingsContainer.addEventListener("click", (e) => {
  const ratingBox = e.target.closest(".rating");
  if (ratingBox) {
    removeActives();
    ratingBox.classList.add("active");
    selectedRating = ratingBox.querySelector("small").textContent;
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
    <p class="heart">💖</p> 
    <strong>Thank You!</strong>
    <strong>Feedback: ${selectedRating}</strong>
    `;
});

function removeActives() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
