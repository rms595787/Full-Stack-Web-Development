// The rest parameter syntax allows a function to accept an indefinite number of arguments
// as an array, providing a way to represent variadic functions in JavaScript.

// Rest Operator(...)
// Spread Operator(...)

// Normal Way can only hold one value
console.log("\nNormal Function");
function person(name) {
  console.log(name);
}
person("Rahul Sharma");

// By using Rest Operator(...) we can store multiple values in a single variable as an array
console.log("\nUsing rest variables/parameter");
function user(...detail) {
  console.log(detail);
}
user("Rahul", "Sharma", 19, "Programmer");

// Note
// If we still want to use more variables then we cannot use another variable/parameter after rest variable/parameter.
// ex -
// function user1(...detail,name) {

// Solution -
// We can use another variable/parameter before rest variable/parameter

// Using multiple variables with rest parameter
console.log("\nUsing multiple variables with rest parameter");
function user1(name, ...detail) {
  console.log(name);
  console.log(detail);
}
user1("Rahul", "Sharma", 19, "Programmer");
