/*
Abstraction
Abstraction is the process of simplifying complex systems "by breaking them down into smaller, manageable parts." It allows you to focus on the essential features of an object and hide unnecessary details. In JavaScript, you can use abstract classes to define abstract structures and then implement them in concrete objects.
*/

// Abstract class (providing a blueprint for subclasses)

class Animal {
  constructor(name) {
    this.name = name;
  }

  // Abstract method (to be implemented by subclasses)
  
  // here we will throw error if any subclass tries to use this method without creating this method in its own class
  makeSound() {
    throw new Error("Method (makeSound) must be implemented");
  }
}

// concrete subclasses
class Dog extends Animal {
  constructor(name) {
    super(name); // calling parent class functions
  }

  // Implementing the abstract method
  makeSound() {
    return "Woff!";
  }
}

// concrete subclasses
class Cat extends Animal {
  constructor(name) {
    super(name); // calling parent class functions
  }

  // If we do not implement makeSound/abstract method it will throw error

  // if you want to see how error works try commenting makeSound function over here
  makeSound() {
    return "Meow!";
  }
}

const dog1 = new Dog("Buddy");
console.log(dog1.name); // Buddy
console.log(dog1.makeSound()); // Woof!

const cat1 = new Cat("Whisker");
console.log(cat1.name); // Whisker
console.log(cat1.makeSound()); // Meow!

// ---------- Define
// In this example, we have an abstract class Animal that contains an abstract method makeSound(). The makeSound() method is declared in the Animal class but doesn't provide an implementation. It's meant to be implemented by subclasses like Dog and Cat.

// The Dog and Cat classes are concrete subclasses that inherit from the Animal class. They implement the abstract method makeSound() with their own specific implementations for making sounds.

// By using abstraction, we define a common interface (makeSound()) that each subclass must implement, while hiding the internal details of how each animal makes its sound. This simplifies the code and allows us to work with animals at a higher level of abstraction, without worrying about the specifics of each animal's sound implementation.
