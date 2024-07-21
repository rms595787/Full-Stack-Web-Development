// -------------------------------------
// Write a function called calculateProduct that takes an array of numbers as an argument and returns the product of all the numbers in the array.

// Write the calculateProduct function using the reduce() method to achieve this task.

// Solution

// Something like this 👇
const numbers = [2, 3, 4, 5];

function calculateProduct(arr) {
  return arr.reduce((p, c) => p * c);
}
console.log(calculateProduct(numbers));

// OR

// const product = function calculateProduct(p, c) {
//   return p * c;
// };
// console.log(numbers.reduce(product));

// OR

// const product = numbers.reduce((p, c) => {
//   return p * c;
// });
// console.log(product); // 120

// -------------------------------------
