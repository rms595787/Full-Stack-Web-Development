"use strict";
/*
Type Aliases
A type alias is a way to create a new name for an existing type. It allows you to define a "custom type" that refers to another type and give it a. more maningful or descriptive name.
Type alias are defined using the "type keyword", followed by the name of the alias, an equal sign (=), and the type is refers to.
*/
function printPerson(person) {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
}
const myPerson = { name: "Alice", age: 25 };
printPerson(myPerson);
const printUserInfo = (user) => {
    console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}.`);
};
const res = printUserInfo({ name: "Alex", age: 20, location: "USA" });
res;
