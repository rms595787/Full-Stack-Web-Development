// Built-in Constructors, also known as native constructors, are standard constructors provided  by JavaScript that allow you to create objects of various data types. These constructors are available globally and do not need to be explicitly defined. They provide a convenient way to create instances of primitive data types and built-in objects.

// Built-in constructors
const num1 = new Number(10);
const str1 = new String("Rahul Sharma");
const bool1 = new Boolean(false);
const arr1 = new Array(1, 2, 3);

console.log(num1); // Number { 10 }
console.log(typeof num1); // object

console.log(str1); // String { "Rahul Sharma" }
console.log(typeof str1); // object

console.log(bool1); // Boolean { false }
console.log(typeof bool1); // object

console.log(arr1); // Array(3) [ 1, 2, 3 ]
console.log(typeof arr1); // object
