const btns = document.querySelectorAll(".btn");
const body = document.body;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    color = btn.value;
    changeBackground(color);
  });
});

// how this function is working
function changeBackground(value) {
  body.className = ""; // this clear all existing classes from body
  switch (value) {
    case "purple":
      body.classList.add("purple"); // .add function adds in blank body this purple class which changes body backcolor to purple
      break;
    case "blue":
      body.classList.add("blue");
      break;
    case "red":
      body.classList.add("red");
      break;
    case "green":
      body.classList.add("green");
      break;
    case "yellow":
      body.classList.add("yellow");
      break;
    case "teal":
      body.classList.add("teal");
      break;
    default:
      body.classList.add("defaultBG");
      break;
  }
}

body.addEventListener("click", (e) => {
    // if you do not use this then the color will not change by using buttons
    // reason button is on the body which means button is also part of body, if you click on button this event is getting executed just after the execution of button event(it happens instantly)
    // this if condition checks whether the click came from button or the body
    if (!e.target.classList.contains("btn")) {
        body.className = ""; // deletes all classes in body
    body.classList.add("defaultBG");
  }
});
