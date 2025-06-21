// Prototypal inheritance is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects. It is a fundamental concept in the language and is based on the protoype model. In prototypal inheritance, objects can serve as prototypes for other objects, forming a hierarchical chain of inheritance.

// In JavaScript, every object has an internal property called [[Prototype]] (oftern referred to as __proto__), which points to its prototype object. When you access a property or method on an object, and that property or method is not found in the object itself, JavaScript looks for it in the object's prototype (and further up the prototype chain, if needed) until it finds the property or reaches the top of the prototype chain, which is usually the Object.prototype.

// ---------------------------------------
// Creating Animal Constructor
function Animal(name) {
  this.name = name;
}

// Adding new functionality to prototype of Animal Constructor
Animal.prototype.sound = function () {
  return "Animal Sound";
};

// we can access added functionality with the object created with same Constructor
const animal1 = new Animal("Frog");
console.log(animal1.sound()); // Animal Sound

// ---------------------------------------

// ---------------------------------------
// Creating another Constructor
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

const dog1 = new Dog("Buddy", "Genius");
console.log(dog1); // Object { name: "Buddy", breed: "Genius" }

// we cannot access sound function because it is not part of the Dog constructor it was part of the Animal Constructor
// if we want to use this method either we have to create that function for Dog constructor
// or inherit it from Animal constrcutor

// console.log(dog1.sound()); // Uncaught TypeError: dog1.sound is not a function

// ---------------------------------------

// ---------------------------------------
// here we will learn how to inherit methods using [[Prototype]]

// creating another constructor and learning how to inherit

function Cat(name, breed) {
  // methods won't be inherited just by using .call() function
  // for complete inheritance we have to use Object.create() method as well for object creation
  Animal.call(this, name); // this allows Cat constructor to inherit and access all methods of Animal Constructor
  this.breed = breed;
}

// NOTE - IMPORTANT
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object
Cat.prototype = Object.create(Animal.prototype);

// if we want to add functions to prototype of constructor then we must add after Object.create()
// we created own sound of cat add function to Cat constructors prototype
Cat.prototype.meow = function () {
  return `Cat meows!`;
};
const cat1 = new Cat("happy", "lucky");
console.log(cat1);
console.log(cat1.sound());
console.log(cat1.meow());
