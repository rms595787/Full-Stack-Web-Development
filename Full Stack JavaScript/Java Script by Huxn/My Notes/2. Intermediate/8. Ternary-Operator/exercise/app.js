// -------------------------------------
// REFACTOR THIS CODE & USE TERNARY OPERATOR
// check the age to determine the eligibility to vote
// let age = 15;
// let result;

// if (age >= 18) {
//       result = "You are eligible to vote.";
// } else {
//       result = "You are not eligible to vote yet.";
// }

// console.log(result);
// -------------------------------------

// ----------------- Solution --------------------

let age = 17;
let result =
  age >= 18 ? `You are eligible to vote.` : `You are not eligible to vote yet.`;
console.log(result);

// -------------------------------------

// -------------------------------------
// Create a program which checks if number is positive, negative or zero

let num = 0;
let res =
  num >= 0
    ? num === 0
      ? `Number is zero`
      : `Number is Positive`
    : "Number is Negative";
console.log(res);
// -------------------------------------

// -------------------------------------
// If a person have money then 'they can buy'
// If a person does not have money then 'they should bring money'

let haveMoney = true;
console.log(
  haveMoney === true ? `They can buy` : `They should bring the money`
);

// -------------------------------------
