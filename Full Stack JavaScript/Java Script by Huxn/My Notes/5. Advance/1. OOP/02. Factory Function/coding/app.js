// A factory function is a type of function that is used to create and return objects. It's a design pattern that provides an alternative way to create objects compared to using constructors and the new keyword.

// factory function is nothing but creating objects using functions

// --------------------------------------------------------------------------------
// why we need this
// if we want to store 1000 objects, entries of different users then according to previous learnings we have to create 1000 objects ourself

const huxn = {
  firstName: "Huxn",
  lastName: "WebDev",
  pl: "Golang",
  fullName: function () {
    return `Hello, My name is ${this.firstName} ${this.lastName} and I love ${this.pl} programming language.`;
  },
};

const alex = {
  firstName: "Alex",
  lastName: "Doe",
  pl: "Python",
  fullName: function () {
    return `Hello, My name is ${this.firstName} ${this.lastName} and I love ${this.pl} programming language.`;
  },
};

console.log(huxn.fullName());
console.log(alex.fullName());

// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// Implementation of factory function

// Normal way of writing this factory function
// function createEntry(firstName, lastName, pl) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     pl: pl,
//     fullName: function () {
//       return `Hello, My name is ${this.firstName} ${this.lastName} and I love ${this.pl} programming language.`;
//     },
//   };
// }

// Using Enhanced literals in creating factory function and reduce the code and remove repeatition
function createEntry(firstName, lastName, pl) {
  return {
    firstName,
    lastName,
    pl,
    fullName: function () {
      return `Hello, My name is ${this.firstName} ${this.lastName} and I love ${this.pl} programming language.`;
    },
  };
}

// creating object using ƒactory function
console.log("Creating object using factory function:");
const huxn2 = createEntry("Huxn", "WebDev", "Golang");
console.log(huxn2.fullName());

const alex2 = createEntry("Alex", "Doe", "Python");
console.log(alex2.fullName());
