/*
Arrays Types
Arrays are a type of object that can store multiple values of the "same data" type. Arrays in TypeScript are typed, which means you can specify the type of values that an array can hold.

2 Types of Arrays Creation

- using the square bracket notations [] to indicate an array of a specific type
- using the generic Array<type> notation to indiate an array of a specific type

*/
// brackets notation []
var numbers = [1, 2, 3, 4];
console.log(numbers);
var str = ["one", "two", "three"];
console.log(str);
var itemsN = [];
itemsN.push(1);
itemsN.push(2);
itemsN.push(3);
console.log(itemsN);
// Array<type> notation
var strM2 = ["one", "two", "three"];
console.log(strM2);
var items = [];
items.push("keyword");
items.push("reference");
console.log(items);
