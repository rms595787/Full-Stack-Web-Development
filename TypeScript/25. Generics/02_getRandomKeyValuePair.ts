/*

Let's break down the input format
obj:{[key:string]:T}

obj - variable name
{...} - object type which stores value in key:value pair
[key:string] -  a dynamic key, meaning the object can have any number of string keys
:T - the value corresponding to each key is of type T

Let's break down the return format
{key:string; value:T;} -> it is going to return key of string and value of type T

*/
function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj); // Gets all the keys of the object as an array of strings.
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  // Picks a random key from the array.
  // Math.random() generates a decimal between 0 and 1.
  // Math.floor(...) ensures we get a valid index from the array.
  return { key: randKey, value: obj[randKey] };
}

const stringObject = { a: "apple", b: "banana", c: "cherry" };
const randomStringPair = getRandomKeyValuePair<string>(stringObject);
console.log(randomStringPair);

const numberObject = { one: 1, two: 2, three: 3 };
const randomNumberPair = getRandomKeyValuePair<number>(numberObject);
console.log(randomNumberPair);
