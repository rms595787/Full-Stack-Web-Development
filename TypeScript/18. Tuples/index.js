"use strict";
/*
Tuples
Tuple is a type that represents an array with a "fixed number of elements", where each element can have a different type. The order of the types in the tuple definition corresoponds to the order of the values in the actual array. Tuples are similar to arrays, but they have a specific structure and can be used to model finite sequences with known lengths.
*/
// NOTE - correspondence is necessary while inserting value, you must insert according to the order in which you assigned type to the variable
// Exmaple of Tuple
let myTuple = ["hello", 42];
console.log(myTuple[0]); // "hello"
console.log(myTuple[1]); // 42
// myTuple = [20, "yellow"];    // throws error due to wrong assignement of values based on their data types
// // This will throw error
// // Type 'number' is not assignable to type 'string'.
// // Type 'string' is not assignable to type 'number'.
// Destructuring Individual Element
let myT = ["mellow", 54];
let [first, second] = myT;
console.log(first); // "mellow"
console.log(second); //54
