const btn = document.getElementById("btn").addEventListener("click", () => {
  let n1 = document.querySelector(".num1").value;
  let n2 = document.querySelector(".num2").value;
  let res = document.querySelector(".result");
  let operator = document.getElementById("selectOp").value;

  switch (operator) {
    case "add":
      res.innerHTML = Number(n1) + Number(n2);
      break;
    case "sub":
      res.innerHTML = Number(n1) - Number(n2);
      break;
    case "mul":
      res.innerHTML = Number(n1) * Number(n2);
      break;
    case "div":
      res.innerHTML = Number(n1) / Number(n2);
      break;
  }
});
