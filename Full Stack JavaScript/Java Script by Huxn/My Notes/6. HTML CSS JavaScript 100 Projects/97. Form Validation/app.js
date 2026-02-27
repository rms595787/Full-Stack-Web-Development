const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password1 = document.querySelector(".password1");
const password2 = document.querySelector(".password2");
const submit = document.querySelector(".submit");

// Messages
const usernameMessage = document.querySelector(".user-msg");
const emailMessage = document.querySelector(".email-msg");
const password1Message = document.querySelector(".password1-msg");
const password2Message = document.querySelector(".password2-msg");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    username.value === "" &&
    email.value === "" &&
    password1.value === "" &&
    password2.value === ""
  ) {
    alert("Please fill all input fields");
    return;
  }

  if (username.value === "") {
    showMessage(usernameMessage, "Please Provide Your Name", "red");
  } else {
    showMessage(usernameMessage, "Got Your Name", "rgb(97, 249, 97)");
  }

  if (email.value === "") {
    showMessage(emailMessage, "Please Provide Your Email", "red");
  } else {
    showMessage(emailMessage, "Got Your Mail", "rgb(97, 249, 97)");
  }

  if (password1.value === "") {
    showMessage(password1Message, "Please Provide Your Password", "red");
  } else {
    showMessage(password1Message, "Valid Password", "rgb(97, 249, 97)");
  }

  if (password2.value === "") {
    showMessage(password2Message, "Confirm Your Password", "red");
  } else if (password1.value !== password2.value) {
    showMessage(password2Message, "Password do not match", "red");
  } else {
    showMessage(password2Message, "Valid Password", "rgb(97, 249, 97)");
  }
});

function showMessage(element, msg, color) {
  element.style.visibility = "visible";
  element.textContent = msg;
  element.style.color = color;
  element.previousElementSibling.style.border = `2px solid ${color}`;
}
