// -------------------------------
// REFACTOR ES5 CODE TO ES6 (Enhanced Object Literals)
// ES5 code
// var a = 1,
//   b = 2,
//   c = 3;
// obj = {
//   a: a,
//   b: b,
//   c: c,
// };

// obj.a = 1, obj.b = 2, obj.c = 3

// -------------------------------

// Answer
// Converting above ES5 code to ES6(Enhanced Object Literals)

const a = 1,
  b = 2,
  c = 3;
obj = { a, b, c };
console.log(obj.a);
console.log(obj.b);
console.log(obj.c);

// -------------------------------
// ES5 code
// var lib = {
//   sum: function (a, b) {
//     return a + b;
//   },
//   mult: function (a, b) {
//     return a * b;
//   },
// };

// console.log(lib.sum(2, 3)); // 5
// console.log(lib.mult(2, 3)); // 6
// -------------------------------

// Answer
// Converting above ES5 code to ES6(Enhanced Object Literals)

const lib = {
  sum: (a, b) => a + b,
  mult: (a, b) => a * b,
};

console.log(lib.sum(2, 3)); // 5
console.log(lib.mult(2, 3)); // 6

// -------------------------------
// ES5
// function getPersionES5(name, age, height) {
//   return {
//     name: name,
//     age: age,
//     height: height,
//   };
// }

// getPersionES5("Zachary", 23, 195);
// Expected output: { name: 'Zachary', age: 23, height: 195 }
// -------------------------------

// Answer
// Converting above ES5 code to ES6(Enhanced Object Literals)

function getPersionES6(name, age, height) {
  return { name, age, height };
}

console.log(getPersionES6("Zachary", 23, 195));
// Expected output: { name: 'Zachary', age: 23, height: 195 }
