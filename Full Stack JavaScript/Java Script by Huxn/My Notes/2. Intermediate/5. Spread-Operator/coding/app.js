// The spread operator(...) is a new addition to the set of operators in JavaScript ES6.
// It takes in an iterable (e.g an array) and expands it into individual elements.
// The spread operator is commonly used to make shallow copies of JS objects.
// Using this operator makes the code concise and enhances its readability.

// Function, Array, Objects

// --------------------------------
// Spread Operator with function
console.log("\nPerforming Spread Operator with function");
function giveme4(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}
giveme4(1, 2, 3, 4); //  Here we are providing value to each variable separately. Hence it working perfectly fine.

const arr1 = ["one", "two", "three", "four"];
giveme4(arr1); //  But here if we provide array then it only give value to variable a

// Here we are going to use spread operator(...) for array to spread values for variables
giveme4(...arr1);

// --------------------------------

// --------------------------------
// Spread Operator with array
console.log("\nPerforming Spread Operator with array");
const arr2 = ["red", "yellow", "pink", "orange"];
const arr3 = [1, 2, 3, 4];

const concat = [arr2, arr3]; // Using Normal concatenation ends up in nested array

const concat2 = [...arr2, ...arr3]; // Using Spread Operator concatenation ends up in normal array

const concat3 = [...arr2, "Adding||Concating", ...arr3];

console.log(concat);
console.log(concat2);
// --------------------------------

// --------------------------------
// Spread Operator with object
console.log("\nPerforming Spread Operator with object");
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3 };
// ------
// Both means the same

const concatObj = { obj1, obj2 }; //Normal concatenation ends up in nested obj
// OR
// const concatObj={{x:1,y:2},{z:3}};

// ------

const concatObj2 = { ...obj1, ...obj2 }; // Using Spread Operator concatenation ends up in normal obj

const clone = { ...obj1 }; //  Here we are just copy-pasting the obj1 in clone obj

console.log(concatObj);
console.log(concatObj2);
console.log(clone);
