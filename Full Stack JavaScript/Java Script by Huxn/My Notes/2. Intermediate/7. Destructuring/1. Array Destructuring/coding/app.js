// --- DESTRUCTURING ---
// Destructuring allows us to "unpack" values from data-structures (Arrays, objects)
// into separate distinct variables.

// Normal way of destructuring/unpacking array and storing in various variables
console.log("\nNormal way of destructuring/unpacking array");
const foo = ["one", "two", "three"];
const var1 = foo[0];
const var2 = foo[1];
const var3 = foo[2];
console.log(var1);
console.log(var2);
console.log(var3);

// Now using array destructuring/unpacking
console.log("\nUsing Array destructuring/unpacking");
const foo1 = ["one", "two", "three"];
const [one, two, three] = foo;
console.log(one);
console.log(two);
console.log(three);

// if we create more variable than values we have

// foo1 = ["one", "two", "three"];
const [red, yellow, green, blue] = foo1;
console.log(red);
console.log(yellow);
console.log(green);
console.log(blue); // undefined(value is not there for variable blue)

// Using default value in destructuring/unpacking array
console.log("\nUsing default values in destructuring/unpacking of array");
let a, b;
// variables with default value = value to be stored
[a = 5, b = 9, c = 10, d = 15] = ["one", "two"];
console.log(a); // printing stored value (one)
console.log(b); // printing stored value (two)
console.log(c); // printing default value (10)
console.log(d); // printing default value (15)

// Using functions in destructuring/unpacking array

console.log("\nUsing Function in destructuring/unpacking array");
function f() {
  return [1, 2];
}
let x, y;
[x, y] = f();
console.log(x);
console.log(y);

// To ignore/skip value in destructuring/unpacking array

console.log("\nTo ignore/skip value in destructuring/unpacking array");
function func() {
  return [1, 2, 3];
}
let p, q;
[p, , q] = func();
console.log(p);
console.log(q);

// Assigning the rest of an array to a variable

console.log("\nAssigning the rest of an array to a variable");
const [r, ...s] = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  true,
  [1, 2, 3],
];
console.log(r);
console.log(s);
