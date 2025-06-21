/*
Modifiers ?
Class Modifiers, also known as access modifiers or visibility modifiers, are keywords in OOP languages that define the visibility or accessibility of class members(fields, methods, and nested classes) from other parts of the program. They control the level of encapsulation and help enforce ecapuslation principles by restricting direct access to certain class members.
*/

/*
In JavaScript, class modifiers are used in the context of classes and objects, although JavaScript does not have traditional access modifiers like some other object-oriented languages (e.g. Java). However, you can achieve similar effects using different conventions and techniques.
*/

/*
Four pillars of OOP
1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism
*/

/*
Type of Modifiers

private - only accessible with in the same class

public - accessible everywhere

protected - accessible within class and within subclass
*/

// Creating a Constuctor Function
function MyClass(publicField, privateField, protectedField) {
  // Public Field

  // you can define public field using "this" keyword
  this.publicField = publicField;

  // Protected Field (closure)

  // defining variable and storing data in them keeps them private
  // using underscore in variable declaration helps developer identify that it is private/protected
  // but underscore besides that underscore does not have any benefit
  const _privateField = privateField;

  // Protected Field
  const _protectedField = protectedField;

  // Public Method
  this.publicMethod = function () {
    return `Public Field: ${this.publicField}`;
  };

  // Private Method (closure)
  function _privateMethod() {
    return `Private Method: ${_privateMethod}`;
  }

  // Protected Method (closure)
  function _protectedMethod() {
    return `Protected Method: ${_protectedField}`;
  }

  // to access Protected Method we use this keyword to make it accessible outside the classes
  this.accessProtected = function () {
    return _protectedMethod();
  };
}

const myObject = new MyClass("Public Data", "Private Data", "Protected Data");

console.log(myObject.publicField); // Public Data

// _privateField and _protectedField are not accessible
console.log(myObject._privateField); // undefined
console.log(myObject._protectedField); // undefined

console.log(myObject.publicMethod()); // Public Field: Public Data

// _privateMethod() and _protectedMethod() are not accessible
// to access _protectedMethod() we have to use public method accessProtected to be able to use _protectedMethod()

// console.log(myObject._privateMethod()); // Uncaught TypeError: myObject._privateMethod is not a function
// console.log(myObject._protectedMethod());   // Uncaught TypeError: myObject._protectedMethod is not a function
console.log(myObject.accessProtected()); // Protected Method: Protected Data
