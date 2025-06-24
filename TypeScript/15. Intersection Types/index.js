/*
Intersection Types
An intesection type is a way to "continue multiple types" into a single type that includes all the properties and methods of each constituent type. An intersection type is denoted. by the "&" symbol
*/
var alice = {
    name: "Alice",
    age: 30,
    id: 123,
    title: "Manager",
};
console.log("Name: ".concat(alice.name, ", Age: ").concat(alice.age, ", Id: ").concat(alice.id, ", Title: ").concat(alice.title));
var rahul = {
    first: "Rahul",
    last: "Sharma",
    age: 20,
    email: "rms595787@gmail.com",
    password: "password123",
};
console.log("Name: ".concat(rahul.first, " ").concat(rahul.last, " Age: ").concat(rahul.age, " Email: ").concat(rahul.email, " Password: ").concat(rahul.password));
