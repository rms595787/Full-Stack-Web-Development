// Constructor functions in JavaScript are regular functions used with the new keyword to create and initialize objects with shared properties and methods. They act as blueprints for creating multiple instances of objects with the same structure and behaviour.

// NEW KEYWORD:
// 1. First create empty object {}
// 2. Sets "this" to point to that object
// 3. We can omit the return statement using "new" keyword

// Example 1
function CreatePeople(firstName, lastName, pl) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.pl = pl;
  this.info = function () {
    return `Hello, My name is ${this.firstName} ${this.lastName} & I love ${this.pl} programming language.`;
  };
}

// using new keyword is very important while creating constructor
const alex = new CreatePeople("Alex", "Doe", "JavaScript");
const Huxn = new CreatePeople("huxn", "webdev", "Golang");
console.log(alex.info());
console.log(Huxn.info());

// Example 2
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getInfo = function () {
    return `${this.title} by ${this.author} (${this.year})`;
  };
}

const book1 = new Book("The subtle art of not giving a F*ck", "Mark", 2020);
const book2 = new Book("Atomic Habits", "James Clear", 2022);
console.log(book1);
console.log(book2);
console.log(book1.getInfo());
console.log(book2.getInfo());
