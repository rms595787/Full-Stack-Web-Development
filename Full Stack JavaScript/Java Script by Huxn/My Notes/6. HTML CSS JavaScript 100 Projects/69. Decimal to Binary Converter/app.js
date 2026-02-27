let result = document.querySelector(".result-btn");

result.addEventListener("click", decimal);

function decimal() {
  let decimal = document.getElementById("number").value;
  let tempDecimal,
    rem = 0,
    binary = 0,
    place = 1;

  tempDecimal = decimal;

  while (tempDecimal > 0) {
    rem = tempDecimal % 2;
    binary = binary + rem * place;
    tempDecimal = parseInt(tempDecimal / 2);
    place = place * 10;
  }
  console.log(binary);

  const h1 = document.createElement("h1");
  h1.innerHTML = `${binary}`;
  const container = document.querySelector(".results-container");
  container.append(h1);
}
