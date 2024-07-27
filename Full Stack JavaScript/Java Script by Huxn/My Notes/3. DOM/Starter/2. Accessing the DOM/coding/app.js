// ********************** DOM Selector ****************************

// // IN CSS how we selected
// .selector{
//     property:Value;
// }

// 1. getElementsByTagName

// // IN CSS
// h1,pre,p{
//     code;
// }

// In JS
console.log("getElementsByTagName\n", document.getElementsByTagName("h1"));

// 2. getElementsById

// // IN CSS
// #idname{
//     code;
// }

// In JS
console.log("getElementsById\n", document.getElementById("main"));
console.log("getElementsById\n", document.getElementById("id-1"));

// 3. getElementsByClassName

// // IN CSS
// .className{
//     code;
// }

// In JS
console.log("getElementsByClassName\n", document.getElementsByClassName("cls"));
console.log(
  "getElementsByClassName\n",
  document.getElementsByClassName("cls-1")
);

// 4. querSelector
// Note - it selects only one element with the class or id which appeared first in order, it doesn't matter how many times it has been used in code

console.log("querySelector\n", document.querySelector("h1"));
console.log("querySelector\n", document.querySelector("li"));
console.log("querySelector\n", document.querySelector(".cls"));
console.log("querySelector\n", document.querySelector("#main"));

// 5. querSelectorAll
// Note - it selects all elements using the same class or id

console.log("querySelectorAll\n", document.querySelectorAll("h1"));
console.log("querySelectorAll\n", document.querySelectorAll("li"));
// Here we are going to check the selected elements length
console.log(
  "querySelectorAll Length\n",
  document.querySelectorAll("li").length
);
console.log("querySelectorAll\n", document.querySelectorAll(".cls"));

// ---------------------------
// Storing data in variables
const h1Element = document.querySelector("h1");
console.log("Stored value\n", h1Element);
