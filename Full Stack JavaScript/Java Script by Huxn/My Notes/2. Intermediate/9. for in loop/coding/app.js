// The "for...in" loop in JavaScript is used to iterate over the enumerable properties of an object. It is a way to loop through the keys (property names) of an object.

// for (let key in object) {...}

// Here, variable is a variable that will represent each property name (key) during each iteration, and object is the object being looped through.

// --------------------------

// --------------------------
// for in loop with objects
let person = {
  name: "Rahul Sharma",
  age: 19,
  gender: "male",
};
for (let keys in person) {
  console.log(`${keys} : ${person[keys]}`);
}
// --------------------------
// for in loop with array
let arr1 = ["one", "two", "three", "four"];
for (let i in arr1) {
  console.log(`${i} : ${arr1[i]}`);
}

// --------------------------
