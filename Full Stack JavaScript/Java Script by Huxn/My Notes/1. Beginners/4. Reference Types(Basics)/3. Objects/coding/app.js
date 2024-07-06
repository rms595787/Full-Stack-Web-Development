// 1.   Objects --> {key : value}

const human = {};
const person = {
  firstName: "Rahul",
  lastName: "Sharma",
  age: 19,
  location: ["planet", "earth"],
  isProgrammer: true,
};
console.log(human);
console.log(person);

// ------------------------
// 2.   both are objects
const arr = [];
console.log(typeof arr);

console.log(typeof person);
//--------------------------

// 3.   Acessing Objects

// 1st way
console.log("\n1st way of traversing data from objects");
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.location);
console.log(person.isProgrammer);

// 2nd way
console.log("\n2nd way of traversing data from objects");
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);
console.log(person["location"]);
console.log(person["isProgrammer"]);

// important point
// we cannot write like this while traversind data from object
// person[firstName]
// because it takes as the value is present in global space means this variable is out of the class and part of main code

// example
// person[firstName] refers this
// const firstName='rahul';

// Hence we must use ('') || ("") quotation marks inside square brackets in case of acessing value from objects
// ex --> person['firstName];

// 4.   USE CASES
obj1 = {
  10: "ten",
};
console.log("\nUse Case of traversing ways of object");
// console.log(obj1.10);

// it will through this error
// Uncaught SyntaxError: missing ) after argument list
// it says that we are missing square brackets

console.log(obj1[10]);

// 5.   Adding new properties || elements to object
person.country = "India";
console.log(person);

// 6.   Deleting poperties || elements from object
delete person.firstName;
console.log(person);
