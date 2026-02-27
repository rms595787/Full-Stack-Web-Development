// images
// wrapper
// imgWrapper
// close

let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector("span");

// console.log(images);
// console.log(wrapper);
// console.log(imgWrapper);
// console.log(close);

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModel(images[index]);
  });
});
function openModel(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic.src;
}

close.addEventListener("click", () => {
  wrapper.style.display = "none";
});
