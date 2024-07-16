// 1. Create an array of numbers.
// 2. Create a variable to hold the sum.
// 3. Create the adder function which takes the parameter of number & add that with sum variable.
// 4. Loop over the array, incrementing the sum variable except this time a function gets referenced in the forEach
// 5. print the sum variable.

// --------------- Solution ---------------

const num = [1, 2, 3, 4];
let sum = 0;
// Normal Function
function adder(number) {
  sum += number;
}
num.forEach(adder);

// Arrow Function
// let adder = num.forEach((num) => (sum += num));
console.log(sum);
