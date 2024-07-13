// 1. Make a clone of "arr, arr2" by using spread operator
// 2. Make a clone of "user" object using spread operator

const arr = [1, 2, 3];
const arr2 = ["one", "two", "three"];

const concat = [...arr, ...arr2];
console.log(concat);

const user = {
  firstName: "Rahul",
  lastName: "Sharma",
  age: 19,
};

const objClone = { ...user };
console.log(objClone);
