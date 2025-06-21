/*
Synchronous
Synchronous JavaScript refers to the traditional way of executing JavaScript code, where each operation is performed in a  sequential and blocking manner. In other words, each line of is code is executed "one after the other" and the program will wait for each operation to finish before moving on to the next one. If an operation takes a long time to complete, it can potentially slow down the entire application, making it less responsive.

// Example of Synchronous Code

function addNumbers(a,b){
    return a+b;
}

function mulNumbers(c,d){
    return c*d;
}

const result1 = addNumbers(2,3);
const result2 = mulNumbers(result1, 4);

console.log(result2); // Output: 20
*/

/*
Asynchronous
Asynchronous JavaScript allows certain operations to be executed "independently" from the main program flow, so they don't block the execution of other tasks. This is typically achieved using techniques like callbacks, promises, and async/await, which allow developers to handle asynchronous operations more efficiently.
*/

// Example of Synchronous JavaScript
function myFunc() {
  console.log("Inside function");
}

// Executed line by line
console.log("Start");
myFunc();
console.log("End");

/*
Output:
Start
Inside Function
End
*/

// Example of Asynchronous JavaScript

console.log("Start");

// using callback function
setTimeout(() => {
  console.log("Inside SetTimeOut");
}, 2000);

console.log("End");

/*
callback function setTImeOut was taking more time, so instead of waiting for it's complete execution js moved on to next opeation and completed that first this is asynchronous.

Output:
Start
End
Inside SetTimeOut
*/
