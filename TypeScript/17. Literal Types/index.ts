/*
Literal Types
Literal types allow you to specify a value that can only be "one specified literal value". This means that a variable with a literal type can only have one specific value and no other.
*/

// -----------------------------------------------
// String Literal Types
let color: "crimson" | "red" | "fusha";
color = "red"; // valid
console.log(color); // red

// color = "yellow"; // since yellow is not in the options we provided it will throw error
// console.log(color); //  Error: Type '"yellow"' is not assignable to type '"crimson" | "red" | "fusha"'

// -----------------------------------------------

// Numeric Literal Types
let number: 1 | 2 | 3;
number = 1; // valid
// number = 4; // invalid throw error
console.log(number);

// -----------------------------------------------

// Boolean Literal Types
let isTrue: true;
isTrue = true; // valid
// isTrue = false; // invalid throw error
console.log(isTrue);

// -----------------------------------------------

// Real Use Case example
let password: "secretPassword" = "secretPassword";
console.log(password);

// password = "something else";    // invalid and throw error
// console.log(password);

// -----------------------------------------------
