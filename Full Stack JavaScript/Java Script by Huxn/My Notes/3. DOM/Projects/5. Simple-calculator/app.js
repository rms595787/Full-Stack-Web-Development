document.getElementById("btn").addEventListener("click", () => {
  let selectOp = document.querySelector("#selectOp").value;
  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num2").value;
  let result = document.querySelector(".result");

  switch (selectOp) {
    case "add":
      result.innerText = "Result: " + (Number(num1) + Number(num2));
      break;
    case "sub":
      result.innerText = "Result: " + (Number(num1) - Number(num2));
      break;
    case "mul":
      result.innerText = "Result: " + Number(num1) * Number(num2);
      break;
    case "div":
      result.innerText = "Result: " + Number(num1) / Number(num2);
      break;
  }
});
