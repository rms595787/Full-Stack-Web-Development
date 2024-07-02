// Logical Operators
// 1. Logical AND(&&)
// --> Gives TRUE if both the operands/boolean values are true, else evaluates to FALSE

const a = true;
const b = false;
const c = 4;

console.log("\nLogical AND (&&) Examples");
console.log(a && b); //false
console.log(c > 2 && c < 2); //false
console.log(a && c > 0);

// 2. Logical OR(||)
// --> Gives TRUE if either of the operands/boolean values are true.
// --> Evaluates to FALSE if both are false.

console.log("\nLogical OR (||) Examples");
console.log(a || b); //true
console.log(c < 2 || c > 10); //false

// 3. Logical NOT(!)
// --> Gives TRUE if the operands is false and vice-versa

console.log("\nLogical NOT (!) Examples");
console.log(!a); //false
console.log(!b); //true
console.log(!(c < 5)); //false

// real example

let password = "Rahul Sharma";
if (password.length >= 8 && password.includes("Shar")) {
  console.log("\nAND operator valid password");
} else {
  console.log("\nAND operator Invalid Password");
}
password = "Rahul sharma";
if (password.length >= 8 && password.includes("Shar")) {
  console.log("\nAND operator valid password");
} else {
  console.log("\nAND operator Invalid Password");
}
password = "Rahul sharma";
if (password.length >= 8 || password.includes("Shar")) {
  console.log("\nOR operator valid password");
} else {
  console.log("\nOR operator Invalid Password");
}
