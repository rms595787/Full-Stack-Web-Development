"use strict";
/*
Intersection Types
An intesection type is a way to "continue multiple types" into a single type that includes all the properties and methods of each constituent type. An intersection type is denoted. by the "&" symbol
*/
const alice = {
    name: "Alice",
    age: 30,
    id: 123,
    title: "Manager",
};
console.log(`Name: ${alice.name}, Age: ${alice.age}, Id: ${alice.id}, Title: ${alice.title}`);
const rahul = {
    first: "Rahul",
    last: "Sharma",
    age: 20,
    email: "rms595787@gmail.com",
    password: "password123",
};
console.log(`Name: ${rahul.first} ${rahul.last} Age: ${rahul.age} Email: ${rahul.email} Password: ${rahul.password}`);
