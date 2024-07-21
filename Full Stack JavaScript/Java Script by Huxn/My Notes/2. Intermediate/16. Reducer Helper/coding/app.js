// The "reduce" method executes a reduce function for array element.
// The "reduce" method returns a single value: the function's accumulated result.
// The "reduce" method does not execute the function for empty array elements.
// The "reduce" method does not change the original array.
// The "reduce"

// Syntax
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// ------------------------------------
console.log("\n1st Example");
const num = [1, 2, 3, 4, 5];
const sum = num.reduce((p, c) => {
  // c refers to the current value of array
  console.log("Previous Value", p);
  console.log("Current Value", c);
  return p + c; // p refers to the previous value of array
}, 0); // 0 is the starting value which also going to be added

// }, 5);   //here i changed the starting value and it is affecting my result accordingly
console.log(sum);

// NOTE
// It is not necessary to give starting value(0) and you can starting value whatever you want
// ------------------------------------

// ------------------------------------
console.log("\n2nd Example");
const people = [
  { name: "rahul", age: 19 },
  { name: "ram", age: 29 },
  { name: "raman", age: 40 },
  { name: "ravi", age: 39 },
];
const old = people.reduce((p, c) => (c.age > p ? c.age : p), 0);
console.log("Oldest Age", old, "\nDetails are given below");
console.log(people.filter((detail) => detail.age === old));
// ------------------------------------

// ------------------------------------
console.log("\n3rd Example");
const words = ["apple", "mango", "banana", "apple", "mango", ""];

const wordFrequency = words.reduce((frequencyMap, word) => {
  frequencyMap[word] = (frequencyMap[word] || 0) + 1;
  return frequencyMap;
}, {});
console.log(wordFrequency);

// Here we are counting the number of times fruit appeared
// ------------------------------------
