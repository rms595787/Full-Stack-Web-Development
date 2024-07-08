// Method in JS mean creating function inside of an object

// --------------------------
// 1st way of creating method
// This is our function
function greet() {
  return `I am person object.\nHello, my name is ${person.name} & I am ${person.age} years old.`;
}
// This is our object
const person = {
  name: "Rahul",
  age: 19,
  greet, //Here we are inserting our function in object
};

// calling function using object
console.log(person.greet());
// --------------------------

// --------------------------
// 2nd way of creating method
const human = {
  name2: "Rahul",
  age2: 19,
  greetings: function () {
    return `I am human object.\nHello, my name is ${human.name2} & I am ${human.age2} years old.`;
  },
};
console.log(human.greetings());
