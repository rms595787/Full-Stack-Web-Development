// Create a person object and store your name & age
// -> Also create a method name (greetRegular) by using a regular function
//  --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`
// -> Create one more method name (greetArrow) using arrow function
//  --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`

const person = {
  name: "Rahul Sharma",
  age: "21",
  greetRegular: function () {
    return `Hello, my name is ${this.name} & I'm ${this.age} years old.`;
  },
  greetArrow: () => {
    return `Hello, my name is ${this.name} & I'm ${this.age} years old.`;
  },
};

console.log(person.greetRegular()); // gives Rahul Sharma and 21 in this statement
console.log(person.greetArrow()); // gives undefined and undefined in this statement
