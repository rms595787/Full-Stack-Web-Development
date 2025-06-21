/*
Inheritance
Inheritance allows a class (subclass) to inherit properties and methods from another class (superclass). This enables code "reuse" and the creation of hierarchical relationships between classes. In JavaScript, inheritance can be achieved through prototype-based inheritance (before ES6) or using ES6 classes (with the extends keyword).
*/

// --------------------------------------
// ES5 Code

// creating Constructor Animal
function Animal(name) {
  this.name = name;
}

// Method shared among all Animal instances
Animal.prototype.makeSound = function () {
  return "Unknown sound";
};

// Subclass constructor inheriting from Animal
function Dog(name) {
  Animal.call(this, name); // Call the superclass constructor
}

// Setup prototype chain for Dog to inherit from Animal
Dog.prototype = Object.create(Animal.prototype);

// Inheritance
// Method specific to Dog (If you comment this method out you will get makeSound method from Animal class)
Dog.prototype.makeSound = function () {
  return "Woof!";
};

const genericAnimal = new Animal("Generic Animal");
console.log(genericAnimal.name);
console.log(genericAnimal.makeSound());

const dog1 = new Dog("Buddy");
console.log(dog1.name);
console.log(dog1.makeSound());
// --------------------------------------

// ES6 we could use extends keyword to inherit classes

class Animals {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("makeSound method of Parent class");
  }
}

class Dogs extends Animals {
  constructor(name) {
    super(name); // calling parent class functions
  }

  makeSound() {
    return "Woff!";
  }
}

class Cats extends Animals {
  constructor(name) {
    super(name); // calling parent class functions
  }

  makeSound() {
    return "Meow!";
  }
}

const dog2 = new Dogs("Buddy");
console.log(dog1.name); // Buddy
console.log(dog1.makeSound()); // Woof!

const cat1 = new Cats("Whisker");
console.log(cat1.name); // Whisker
console.log(cat1.makeSound()); // Meow!

// --------------------------------------
