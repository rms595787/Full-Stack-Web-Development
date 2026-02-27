// This takes input like an alert window - works only in browser
let name = prompt("Enter your name");
console.log(name);


// This input method works in node.js
const readline = require("readline");

r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter Something: ", (e) => {
  console.log("Your input: " + e);
  r1.close();
});

// Another method which works in node.js
const fs = require("fs");
let input = fs.readFileSync(0, "utf-8").trim().split("\n");

console.log(input);
