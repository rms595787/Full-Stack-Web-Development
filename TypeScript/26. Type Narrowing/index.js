"use strict";
/*

Type Narrowing
Type narrowing is the process of refining a vairable's type within a conditional block of code. This allows you to write more precise and type-safe code.

TypeScript provides several mechanisms for narrowing types
- Type Guards
- The instanceof operator
- Intersection Types

Type Guards
Type Guards are mechanisms that help TypeScript understand and narrow down the types more precisely. One common type guard is the "typeof" operator.

The instanceof operator
The instanceof operator is another type guard in TypeScript that allows you to check whether an object is an instance of a particular class or constructor function.

Intersection Types
Intersection types in TypeScript allow you to combine multiple types into a single type. The resulting type will have all the properties of each individual type. You create intersection types using the "&" operator.

*/
// ---------------------***************------------------------
// 1. Type Guards(typeof)
console.log("\nType Guards(typeof)");
// Example function with type guard
function exampleFunc(value) {
    // Type guard using typeof
    if (typeof value === "string") {
        // within this block, TypeScript knows that 'value' is a string
        console.log(value.toUpperCase());
    }
    else {
        // within this block, TypeScript knows that 'value' is a number
        console.log(value.toFixed(2));
    }
}
// Example usage
exampleFunc("hello"); // Output: HELLO
exampleFunc(42); // Output: 42.00
// ---------------------***************------------------------
// ---------------------***************------------------------
// 2. The instanceof operator
console.log("\nThe instanceof Operator");
class Dog {
    bark() {
        console.log("Woof!");
    }
}
class Cat {
    meow() {
        console.log("Meow!");
    }
}
// Example function with instanceof type guard
function animalSound(animal) {
    if (animal instanceof Dog) {
        // Within this block, TypeScript knows that 'animal' is an instance of Dog class
        animal.bark();
    }
    else {
        // Within this block, TypeScript knows that 'animal' is an instance of Cat class
        animal.meow();
    }
}
// Example usage
const myDog = new Dog();
const myCat = new Cat();
animalSound(myDog); // Output: Woof!
animalSound(myCat); // Outut : Meow!
// ---------------------***************------------------------
// ---------------------***************------------------------
// 3. Intersection Types
console.log("\nIntersection Types");
// Example usage
const manager = {
    id: 123,
    name: "John Doe",
    department: "Engineering",
    role: "Team Lead",
};
console.log(manager.id); // Outputs: 123
console.log(manager.name); // Outputs: John Doe
console.log(manager.department); // Outputs: Engineering
console.log(manager.role); // Outputs: Team Lead
const add = (x, y) => x + y;
