// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// ------------------------------------------
// 1st Example

let numbers = [1, 2, 3, 4, 5];

// So here what's going on, each number in the numbers array is being passed
// --> Into anonymous function that we're passing in,
// --> Whatever this function returns is placed into a new array,
// --> After each elements has being processed that new array is return.

// here in foreach loop we replace values
let double = [];
numbers.forEach((num, index, numbers) => (numbers[index] = num * 2));
console.log(numbers);

// but here we create a new array in map
let double2 = numbers.map((num) => num * 2);
console.log(double2);

// ------------------------------------------

// ------------------------------------------
// 2nd Example
let person = [
  { firstName: "Rahul", lastName: "Sharma" },
  { firstName: "Aman", lastName: "Kumar" },
  { firstName: "Raman", lastName: "Batra" },
];
const results = person.map((p) => {
  return [p.firstName, p.lastName];
});
console.log(results);

// ------------------------------------------
