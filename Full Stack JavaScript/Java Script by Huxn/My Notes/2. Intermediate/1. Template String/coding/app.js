// Template strings, also known as template literals, are a feature in JavaScript that allows you to create strings with embedded expressions. They are denoted by backticks `` instead of single or double quotes. Template strings provide a more flexible and concise way to construct strings, especially when they involve variables or expressions.

// -----------------------------------------------
const firstName = "Rahul";
const lastName = "Sharma";

console.log(firstName + " " + lastName);

// Now using template strings || template literals(Backticks(``))
console.log(`My name is ${firstName} ${lastName} & I am 19 years old`);
// -----------------------------------------------

// -----------------------------------------------
function info() {
  console.log("This is a funciton executed inside a template string");
}
info();

// Now using template strings || template literals(Backticks(``))
console.log(`${info}`);
console.log(`${info()}`);

// Storing Array inside of backticks || template string/literals
console.log(`${[1, 2, 3, 4, 5, 6]}`);

// -----------------------------------------------
