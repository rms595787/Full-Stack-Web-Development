// Here whenever you are importing the feature from other file you don't have to provide extension with file name like ".js"
// you could provide if you want but if you do not provide it work just fine

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// Now that we've learned about "module wrapper" that's why we know
// that every file is a module (by default).

// This will allows us to use that function from that (greet.js file), and we can use it right here
const greet = require("./greet");
greet("Rahul");

// now we are allowing us to use variable created in people.js file
// const person = require("./peoples"); // here we are importing one person
const { person1, person2, person3 } = require("./peoples");
console.log();
greet(person1);
greet(person2);
greet(person3);

// inserting calculate.js file's add function and variables from number.js file
const add = require("./Calculate");
const { n1, n2, n3 } = require("./number");

console.log(n1); // 1
console.log(n2); // 2
console.log(n3); // 3
add(n1, n2); // 3
add(n1, n3); // 4
