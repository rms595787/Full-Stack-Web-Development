// Every javascript objecct has a anonymous property called prototype
// Remember functions & arrays are also an object
// that prototype will be the parent of that object, prototype property is object by itself, which have some special properties & methods

// -------------------------------------------

// Every object is associated with another object.
// The object (obj) is associated with [[Prototype]] Object
// -> which means obj object will inherit all properties of Object.prototype || [[Prototype]]

// -------------------------------------------

// We can check the prototype of something in 3 ways:
// ----> obj.__proto__
// ----> obj.constructor.prototype
// ----> Object.getPrototypeOf(obj)

// -------------------------------------------

// NOTE - prototype is nothing but the parent of our object
//  and prototype contains its own properties according to the different objects

// -------------------------------------------

const obj = {};
console.log(obj);

// all 3 of them are same thing
console.log(obj.__proto__);
console.log(obj.constructor.prototype);
console.log(Object.getPrototypeOf(obj));

// objects parent is prototype which is an object in itself
// prototypes parent is null
console.log(obj.__proto__.__proto__); // null

// -------------------------------------------

// Creating array and checking its prototype using built-in constructor to create array
const arr = new Array();
console.log(arr);

// -------------------------------------------

// creating our own constructor
function Person(firstName, lastName, pl) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.pl = pl;
}

const rahul = new Person("Rahul", "Sharma", "Java");
console.log(rahul);

// **********************************************

// ************************ Changing the built-in Methods

// It is showing all the properties array have
console.log(Array.prototype);

Array.prototype.pop = function () {
  return "POP IT UP BABE";
};

// Normally pop method remove last element of the array
// but here we changed the built-in functionality of the pop method

const myArr = ["one", "two", "three"];
console.log(myArr);
console.log(myArr.pop()); // POP IT UP BABE

// still after executing pop method no element has been deleted because of the change in built in pop method
console.log(myArr);

// Note - if we comment out the changes we made in built-in pop method then default functionality of removing last element will work perfectly fine

// ********************* We can add our own new methods to these primitive data type's constructors

String.prototype.hello = function () {
  console.log(this); // this will print the owner object which is String in this case
  console.log(this.toUpperCase()); // this will print the string with changes(String gets converted to uppercase)
};

console.log("This is a normal String".hello());

// **********************************************
