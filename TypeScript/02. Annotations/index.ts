/*
Annotations
Annotations are used to specify the data type of a variable, parameter, function return value, and other types 
of values. Annotations help developers catch errors "early in development" by allowing them to specify what 
types of values can be assigned to a given variable or passed as an arguments to a functions.
*/

// Syntax for Annotations
// let myVar:type = value

// String
let myName: string = "Rahul Sharma";
myName = "Rahul";
console.log(myName); // Rahul

// Number
let favNumber: number = 7;
favNumber += 2;
console.log(favNumber); // 9

// Boolean
let isHard: boolean = false;
console.log(isHard); // false

// NOTE - ERROR
// number will throw error if you try to store string in that and vice-versa
// myName = 9;
// favNumber = "eleven";
// isHard = 1
// isHard = "Hello"
