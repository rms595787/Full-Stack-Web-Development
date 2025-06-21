// Getting Elements From The DOM
const ratings = document.querySelectorAll("rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

// default rating
let selectedRating = "Satisfied";

// Attaching Events
ratingsContainer.addEventListener("click", (e) => {
  //   console.log(e);
  //   console.log(e.target.parentNode);
  //   console.log(e.target.parentNode.classList.contains("rating"));
  //   console.log(e.target.nextElementSibling.innerHTML);
  if (e.target.parentNode.classList.contains("rating")) {
    // console.log(e.target.parentNode.classList.contains("rating"));
    removeActive(); // this will remove active from all rating classes
    e.target.parentNode.classList.add("active"); // this will add active in current rating class
    selectedRating = e.target.nextElementSibling.innerHTML; // it will give (unhappy, neutral, satisfied)
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
        <p class="heart">💖</p>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
    `;
});

// this will remove active classes from every rating class
function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
