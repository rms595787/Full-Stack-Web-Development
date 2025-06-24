/*
Type Inference
Type inference is a feature in TypeScript that allows the compiler to "automatically" determine the type of a variable based on its value. In other words, if you declare a variable without explicitly specifying its type, TypeScript will try to infer the type based on the "value you assign" to it.
*/

// Here's we are inferring the types!
let tech = "TypeScript"; // by default we will get tech:string
// NOTE
// Once the value passed to the variable now we can put value of any other data type
// Example
// tech = 12;  // Error: Type 'number' is not assignable to type 'string'.
console.log(tech); // TypeScript

let favNumber = 8; // it automaticaly defines variable -> favNumber:number
let isHard = true; // isHard: boolean

console.log(tech, favNumber, isHard);
console.log(typeof tech); // string
console.log(typeof favNumber); // number
console.log(typeof isHard); // boolean
