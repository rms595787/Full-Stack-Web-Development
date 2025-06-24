"use strict";
// Code
function greet(person = "Anonymous") {
    return `Hello ${person}`;
}
// const res = greet(); // Hello Anonymous
const res = greet("Rahul"); // Hello Rahul
console.log(res);
