// REFACTOR -> USE EVERY & SOME HELPERS
let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

let allProductsBooks = true;
let someProductsBooks = false;
for (let i = 0; i < products.length; i++) {
  if (products[i].category !== "Books") {
    allProductsBooks = false;
  } else {
    someProductsBooks = true;
  }
}
console.log("All Products are books", allProductsBooks);
console.log("Some Products are books", someProductsBooks);

// ---------------------------
console.log("\n2nd Example");
let products2 = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

// do all products2 have a category of Books
let allProductsBooks2 = products2.every(function (product) {
  return product.category === "Books";
});

// do any products2 have a category of Books
let someProductsBooks2 = products2.some(function (product) {
  return product.category === "Books";
});

console.log(allProductsBooks2);
console.log(someProductsBooks2);

// ---------------------------
