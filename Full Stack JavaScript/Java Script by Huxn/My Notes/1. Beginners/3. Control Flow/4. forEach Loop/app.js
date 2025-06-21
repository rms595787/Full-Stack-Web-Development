/*
The forEach() loop is a built-in JavaScript array method that allows you to execute a function on each element of an array. It's a cleaner, more concise way to iterate over arrays, especially when you don't need to return anything or need access to the index of the element.

syntax
array.forEach(function(currentValue, index, array) {
  // Code block to be executed
});

*/

// Example 1: Iterating over each element
const numbers = [1, 2, 3, 4];

numbers.forEach(function(number) {
  console.log(number);  // Outputs: 1, 2, 3, 4
});

// Example 2: Using index and iterating over each element
const fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach(function(fruit, index) {
  console.log(index + ": " + fruit);
});
// Outputs:
// 0: Apple
// 1: Banana
// 2: Cherry

// Example 3: Using Arrow function
const num = [1, 2, 3, 4];

num.forEach((number) => {
  console.log(number);  // Outputs: 1, 2, 3, 4
});
