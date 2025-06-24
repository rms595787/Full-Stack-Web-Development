/*

Interface
Interface is a way to define a "contract" for the shape of an object. It specifies the properties and their types that an "object must have". Interface are a powerful tool for enforcing a certain structure in your code.

While interfaces are commonly used to define the structure of objects, they are not limited to just objects. Interfaces in TypeScript can also be used to "describe the shape" of functions and classes.

*/

// ------------------------------------------------------------

// Interface Definition

console.log("\nExecuting Interface Definiton");
// --------------************----------------

// Example 1
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

// usage
const examplePerson: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

console.log("\nExecuting Example 1");
console.log(
  `Name: ${examplePerson.firstName} ${examplePerson.lastName} Age: ${examplePerson.age}`
);

// --------------************----------------

// Example 2
interface Computer {
  name: string;
  ram: number;
  hdd: number;
}

// usage
const computerEx: Computer = {
  name: "i7",
  ram: 8,
  hdd: 100,
};

console.log("\nExecuting Example 2");
console.log(
  `Name: ${computerEx.name} Ram: ${computerEx.ram} HDD: ${computerEx.hdd}`
);

// --------------************----------------

// ------------------------------------------------------------

// Interface for a function

console.log("\nExecuting Interface for a function");
// --------------************----------------

// Example 1
interface MathOperation {
  (x: number, y: number): number;
}

// usage
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

console.log("\nExecuting Example 1");
console.log(add(5, 3));
console.log(subtract(7, 2));

// --------------************----------------

// --------------************----------------

// Example 2
interface Person2 {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}

function greet(person: Person2) {
  console.log(`Hello, ${person.firstName} ${person.lastName}`);
  person.sayHello();
}

const john: Person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  sayHello() {
    console.log("Hi There");
  },
};

const huxn: Person2 = {
  firstName: "Huxn",
  lastName: "WebDev",
  age: 20,
  sayHello() {
    console.log("Hi!");
  },
};

console.log("\nExecuting Example 2");
greet(john);
greet(huxn);

// --------------************----------------

// --------------************----------------

// Example 3
interface MovieDetails {
  readonly name: string;
  ratings: number;
  printMovieInfo(name: string, price: number, ratings: number): string | number;
}
interface MovieGenra extends MovieDetails {
  genra: string;
}
const movie1: MovieGenra = {
  name: "Star Wars",
  genra: "Action",
  ratings: 8.9,
  printMovieInfo(
    name: string,
    price: number,
    ratings: number
  ): string | number {
    return `Movie name: ${name} Price: ${price} Ratings: ${ratings}`;
  },
};

console.log("\nExecuting Example 3");
const res = movie1.printMovieInfo("John Wick", 100, 8);
console.log(res);

// --------------************----------------

// ------------------------------------------------------------

// Interface for classes

// --------------************----------------

console.log("\nExecuting Interface for classes");
// Example 1
interface Vehicle {
  start(): void;
  stop(): void;
}

// class implementing the interace uses keyword "implements"
class Car implements Vehicle {
  start() {
    console.log("Car Started");
  }
  stop() {
    console.log("Car Stopped");
  }
}

// usage
console.log("\nExecuting Example 1");
const myCar = new Car();
myCar.start();
myCar.stop();

// --------------************----------------

// --------------************----------------

// Example 2

// --------------************----------------
// ------------------------------------------------------------
