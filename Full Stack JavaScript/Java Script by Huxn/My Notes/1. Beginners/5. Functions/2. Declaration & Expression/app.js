// Function Declaration
// note - in function declaration you can call function anywhere
// (like - above, below declaration of function)

console.log("\nUsing Functoin Declaration");
function sayHello(user) {
  console.log(`Hello ${user}`);
}
sayHello("Rahul");

// Function Definition

// note - in function definition you can not call function anywhere
// (like - you cannot call function above the declaration of function, because if you haven't described the function then you can't call it)
// example
// ----------------------------
// greetings("Rahul");
// ----------------------------
// error it throws is
// Uncaught ReferenceError: can't access lexical declaration 'greetings' before initialization

console.log("\nUsing Functoin Definition");
const greetings = function (user) {
  console.log(`Hello ${user}`);
};
greetings("Rahul");
