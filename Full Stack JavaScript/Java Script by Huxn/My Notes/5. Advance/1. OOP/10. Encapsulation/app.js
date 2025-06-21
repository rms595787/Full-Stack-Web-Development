/*
Encapsulation
Encapsulation is the concept of bundling data (properties) and methods (functions) together within an object, allowing the object to control access to its internal data and behavior. This "helps to hide implementation details" and expose only necessary interfaces to interact with the objet. In JavaScript, you can achieve encapsulation by using closures, symbols, or naming conventions to simulate private members and expose public interfaces.
*/

// In JavaScript, we can achieve encapsulation by using closures to create private members.

// creating a constructor
function Counter() {
  let _count = 0; // Private variable

  // Public method that can access and modify the private variable
  this.increment = function () {
    _count++;
  };

  this.decrement = function () {
    _count--;
  };

  this.getCount = () => {
    return _count;
  };
}

const myObj = new Counter();

// Encapsulation
// we are able to hide this info
console.log(myObj._count); // undefined

// we are able to use functions made from this hidden info
console.log(myObj.getCount()); // 0
myObj.increment(); // 1
myObj.increment(); // 2
myObj.increment(); // 3

console.log(myObj.getCount()); // 3

myObj.decrement(); // 3-1 = 2
console.log(myObj.getCount()); // 2
