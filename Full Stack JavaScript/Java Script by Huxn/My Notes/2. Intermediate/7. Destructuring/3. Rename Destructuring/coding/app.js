// Rename destructuring only works with objects

// --------------------------
// Assigning new variable names
const person = { height: "5.5 ft", weight: "55 kg" };
// To rename follow below format
const { height: h, weight: w } = person;

console.log(h);
console.log(w);
// Note
// After changing name/key then you cannot access value with previous name/key of variable
// ex -
console.log(height);

// it will through error that there is not such variable name height
// --------------------------

// --------------------------
// Assignment without declaration
let name, division;
({ name, division } = { name: "HuXn", division: "First" });
console.log(name); // HuXn
console.log(division); // First
// --------------------------

// --------------------------
// Object destructuring and rest operator

// here we are cloning(a,b), destructuring(object) and using rest(...) operator at the same time
let { a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 };
console.log(a);
console.log(b);
console.log(rest);
// --------------------------
