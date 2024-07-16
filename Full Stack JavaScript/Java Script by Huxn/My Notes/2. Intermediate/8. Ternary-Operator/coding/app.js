// The ternary operator in JavaScript is a concise way of writing conditional expressions. It is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), an expression to execute if the condition is true, followed by a colon (:), and an expression to execute if the condition is false.

// condition ? exprIfTrue : exprIfFalse;

// Normal way of checking using if and else statements
// 1st Example
let password = 7;
function passwordChecker(ps) {
  if (ps >= 8) {
    return `Strong Password`;
  } else {
    return `Password must contain atleast 8 characters`;
  }
}
console.log(passwordChecker(password));

// Using Ternary Operator in Function
function pwdChecker(ps) {
  return ps >= 8
    ? `Strong Password`
    : `Password must contain atleast 8 characters`;
}
console.log(pwdChecker(password));

// 2nd Example
let age = 35;
const checkAdult = age >= 18 ? `Adult` : `Not an Adult`;
console.log(checkAdult);
