/*
Objects
An object in TypeScript is a structured data type that represents a collection of properties, each with a key and an associated value. The properties of an object can have "specific types", and the object itself can be annotated with a type, often defined using an interface or a type alias. TypeScript uses structural typing, meaning that the shape of an object (its structure or properties) is what matters for type compatibility.

// Syntax
type varName (annotations/types) = {property:value}
*/
// Object Creation
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};
console.log("Name: ".concat(person.firstName, " ").concat(person.lastName, ", Age: ").concat(person.age));
// Using objects as function return value/ it is same as factory funciton in js
function printUser() {
    return {
        name: "Alex",
        age: 19,
        location: "USA",
    };
}
var res = printUser();
console.log(res);
