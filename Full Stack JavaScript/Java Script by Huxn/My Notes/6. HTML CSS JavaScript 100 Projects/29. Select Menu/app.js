let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrowIcon");
let options = document.getElementsByClassName("options");
let selectImg = document.getElementById("selectImg");
console.log(selectImg);

selectField.addEventListener("click", () => {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
});

for (option of options) {
  option.onclick = function () {
    // console.log(this.querySelector("img").src);
    selectImg.src = this.querySelector("img").src;
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  };
}
