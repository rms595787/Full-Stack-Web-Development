// Arrow functions, also known as fat arrow functions, are a concise and shorter way to define functions in JavaScript. They were introduced in ECMAScript 6 (ES6) and provide a more compact syntax compared to traditional function expressions

// Normal Functions
// function greet(username) {
//   return `Hello ${username}`;
// }
// console.log(greet("Rahul Sharma"));

// -------------------------------------------------------
// Arrow Function

//                      Note

// 1.   If you are using only one parameter then there is no need to use round-brackets'()' for parameter
// 1.1. But if you do not have any parameter then you have to use round braces
// 1.2. And in case of multiple parameters you also have to use round braces

// 2.   If you have only one command to execute in function definition section then there is no need to use curly braces'{}' here you need to remove return keyword as well
// 2.1. In case of multiple commands we have to use curly braces

// 1st example
greet = (username) =>
  //  One parameter is here, hence no need to use round-braces
  `Hello ${username}`; //
console.log(greet("Rahul Sharma"));

// 2nd example
const double = (n) => n * 2;
console.log(double(5));

// 3rd example
const multiply = (x, y) => {
  return x * y;
};
console.log(multiply(5, 5));
// -------------------------------------------------------
