// A function is a block of code that performs a specific task.
// Function makes the code reusable. You can declare it once and use it multiple times.
// Function makes the program easier as each small task is divided into a function.
// Function increases readability.
// DRY - Don't Repeat Yourself
// function name(parameterIfAny){...}

// Function 1 -> UnParameterized Function
console.log("\nUnparameterized Function");
// Fuction Declaration
function greet() {
  // Function Definetion
  console.log("Hello, It is a greetings from a function");
}

// Function Calling
greet();

// Function 2 -> Parametrized Function
console.log("\nParameterized Function");
function sayHello(name) {
  //passing parameters in () brackets
  console.log(`Hello ${name}`);
}

// ------------------------------------
sayHello();
// When do not give any value to parameters then it gives undefined as a result because value is empty or not defined
// example
let var1;
console.log(var1);
// ------------------------------------

sayHello("Rahul Sharma"); //  Passing Argument Value
sayHello("Rama"); //  Passing Argument Value

// Function 3 -> Using return in Functions
console.log("\nUse of return keyword in Function");
function add(x, y) {
  return x + y;
}
add(10, 20); //  You can't see the result of reutrn keyword just by calling the function
// To traverse the result from return we two ways
// 1st way
console.log(add(10, 20));

// 2nd way -> by storing value in a variable
const result1 = add(10, 20);
const result2 = add(10, 2);
const result3 = add(10, 22);
console.log(result1);
console.log(result2);
console.log(result3);
