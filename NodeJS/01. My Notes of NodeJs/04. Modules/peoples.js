let person1 = "Huxn";
let person2 = "Alex";
let person3 = "John";

// We have to tell other files you can use these variables

// module.exports = person1;   // here we are exporting one person

module.exports = {person1, person2, person3};   // this is how we can export multiple variables in form of objects
