// -------------------------------
// 1. Iterate over "ages" array
// 2. Print only those ages which is greater then 18
const ages = [3, 10, 18, 20, 21, 23];

console.log(ages.find((a) => a > 18));

// -------------------------------

// -------------------------------
// BONUS => REFACTOR
let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];
// let product;

// for (let i = 0; i < products.length; i++) {
//   if (products[i].category === "Books") {
//     product = products[i];
//     break;
//   }
// }
// console.log(product);

// -------------------

console.log(products.find((bookC) => bookC.category === "Books"));
