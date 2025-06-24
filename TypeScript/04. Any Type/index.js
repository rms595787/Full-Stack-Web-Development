"use strict";
/*
Any Type
TypeScript has a special any type that can be used to represent any type. When a variable is annotated with any type, TypeScript will allow it to have "any value" and disable all type checking for that variable and its properties.

Any Type(WARNING)
While the any type can be useful in certain situation, it should be used sparingly. Overuse of any can lead to "untyped code" and make it harder to catch type-related bugs during development. It's generally bettern to use more specific type whenever possible to get the benefits of TypeScript's type checking.
*/
let color = "crimson";
color = 20;
color = true;
// color(); // it will throw error when you run it -> Error: color is not a function
// color.toUpperCase();
console.log(color); // true
console.log(typeof color); // boolean
