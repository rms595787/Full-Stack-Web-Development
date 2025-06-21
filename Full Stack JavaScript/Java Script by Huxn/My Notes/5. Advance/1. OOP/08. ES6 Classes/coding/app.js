// Classes are one of the features introduced in the ES6 version of JavaScript.
// A class is a blueprint for the object. You can create an object from the class.

// You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. Based on these descriptions, you build the house.

// Since many houses can be made from the same description, we can cerate many objects from a class.

// ----------------------------------------------------------
// Declaration
class Person {
  constructor(firstName, lastName, age) {
    // Instance Members
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.printUserInfo = function () {
      return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
    };
  }

  // Prototype Memebers
  greet() {
    // creating a method greet
    return `Hello there ${this.firstName} ${this.lastName}!`;
  }
}

// object instantiation from class Person
const john = new Person("John", "Doe", 19);
console.log(john); // Object { firstName: "John", lastName: "Doe", age: 19, printUserInfo: printUserInfo() }
console.log(john.printUserInfo()); // Name: John Doe, Age: 19
console.log(john.greet()); // Hello there John Doe!

// ----------------------------------------------------------

// ----------------------------------------------------------
// Inheritance in classes - by using extends keyword and super() method
class Programmer extends Person {
  constructor(firstName, lastName, age, pl, experience) {
    super(firstName, lastName, age);
    this.pl = pl;
    this.experience = experience;
  }
}

const huxn = new Programmer("Huxn", "WebDev", 19, "Golang", 12);
console.log(huxn); // Object { firstName: "Huxn", lastName: "WebDev", age: 19, printUserInfo: printUserInfo(), pl: "Golang", experience: 12 }

// greet function belongs to person class and we inherited that in programmer class and we can use greet function with the object created using programmer class
console.log(huxn.greet()); //  Hello there Huxn WebDev!
