/* 
        Use of this keyword
global object -> window
1. this keyword alone -> it refers to the global object
2. this keyword inside a function -> it also refers to the global object
3. this keyword in method -> it will refers to the owner object

*/

// -----------------------------------------
// how this keyword refers to the global object window

// printing window object
console.log("Printing using window global object");
console.log(window); // this will print window object

// this keywords prints global object of the file which is window here
console.log("Printing using this keyword");
console.log(this); // this will also print window object since that is the global object of this file

// checking whether this keyword points to global object window or not
console.log(this === window); // true

// -----------------------------------------

// -----------------------------------------
// use of this keyword alone -> refers to the window global object

// both this and window keyword updates the same object
console.log(
  "Adding first and last name using window and this keyword respectively"
);
window.firstName = "Rahul";
this.lastName = "Sharma";
console.log(window);

// -----------------------------------------

// -----------------------------------------
// use of this keyword in function -> refers to the window global object
function greet() {
  return this;
}

console.log("Using this keyword in function");
const res = greet();
console.log(res);

// -----------------------------------------

// -----------------------------------------
// use of this keyword inside object/method -> this refers to the owner object

const obj = {
  firstName: "Rahul",
  lastName: "Sharma",
  fullname: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  name: function () {
    return this; // this will return the owner object "obj"
  },
  arrowFunction: () => {
    return this; // this will return the global window object
  },
};

console.log("Using this keyword inside method inside object");
const res2 = obj.name(); // owner obj
const res3 = obj.fullname(); // Rahul Sharma
const res4 = obj.arrowFunction(); // window global object
console.log(res2);
console.log(res3);
console.log(res4);