const input = document.querySelectorAll("input");

function handleUpdate() {
  this.name == "base" ? (suppix = "") : (suppix = "px");
//   console.log(this.name);    // gives value of inputs
//   console.log(this.value);
//   console.log(suppix);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suppix,
  );
}

input.forEach((input) => input.addEventListener("change", handleUpdate));
