let captcha = document.querySelector(".captcha");
let reloadBtn = document.querySelector(".reload-btn");
let inputField = document.querySelector("input");
let checkBtn = document.querySelector(".check-btn");
let statusTxt = document.querySelector(".status-text");

checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  statusTxt.style.display = "block";
  let inputVal = inputField.value;
  if (inputVal == captcha.innerText) {
    statusTxt.style.color = "#4bd2ec";
    statusTxt.innerText = "Nice, Capthca Matched";
    setTimeout(() => {
      statusTxt.style.display = "";
      inputField.value = "";
      captcha.innerText = "";
      getCaptcha();
    }, 4000);
} else {
    statusTxt.style.color = "#ff0000";
    statusTxt.innerText = "Captcha not matched. Please Try Again Later";
    setTimeout(() => {
      statusTxt.style.display = "";
      inputField.value = "";
      captcha.innerText = "";
      getCaptcha();
    }, 4000);
  }
});

function getCaptcha() {
  let allCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
  let captchaLength = 5;
  let c = "";

  for (let i = 0; i <= captchaLength; i++) {
    let randomNumber = Math.floor(Math.random() * allCharacters.length);
    c += allCharacters.substring(randomNumber, randomNumber + 1);
  }
  captcha.innerText = c;
}
getCaptcha();

reloadBtn.addEventListener("click", () => {
  captcha.innerHTML = "";
  getCaptcha();
});
