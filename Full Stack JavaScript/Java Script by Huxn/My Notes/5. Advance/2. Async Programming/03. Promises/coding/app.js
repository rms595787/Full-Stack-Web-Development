/*

Promise
A promise is an object representing the eventual completion or failure of an asynchronous operation.

new Promise()
A JavaScript Promise Object contains both the producing code and calls to the consuming code. It can be used to deal with Asynchronous operation in JavaScript.

3 States of Promises
- Pending: Initial State, Not yet Fullfilled or Rejected
- Fulfilled / Resolved: Promise Completed
- Rejected: Promise Failed

2 Situation
Promise -> Resolved: we can use 
.then()
.finally

Promise -> Rejected: we can use
.then()
.catch()
.finally()


Syntax of Promise
new Promise( (resolve, reject) => {} );

Syntax of Promise
new Promise((resolve,reject)=>{
    // Async Operations
    resolve(value);
    reject(error);
})

*/

/*

.then() - .then() is a method used to handle the successful outcome of a Promise in JavaScript. It takes 2 arguments: (onFulfilled, onRejected)

.catch() - The catch() method returns a Promise & deals with rejected case only.

.finally() - 

*/

// NOTE - Promise either going to be constructor or class

// Example 1
function checkNumber(number) {
  return new Promise((resolve, reject) => {
    // Promise either going to be constructor or class
    if (number % 2 == 0) {
      resolve(`${number} is an even number.`);
    } else {
      reject(`${number} is an odd number.`);
    }
  });
}

// const numberToCheck = 7; // odd number
const numberToCheck = 6; // even number
checkNumber(numberToCheck)
  .then((message) => {
    // the callback to execute when the promise is resolved
    console.log(`Success: ${message}`);
  })
  .catch((error) => {
    // the callback to execute when the promise is rejected
    console.log(`Error: ${error}`);
  });

//   -----------------------------

// Example 2
function callbackHell() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Inside (callbackHell) function";
      console.log(data);
      resolve(data);
    }, 2000);
  });
}

function firstFunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data} - First Processed Data`;
      console.log("Inside (firstFunc) function");
      resolve(processedData);
    }, 2000);
  });
}

function secondFunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data} - Second Processed Data`;
      console.log("Inside (secondFunc) function");
      resolve(processedData);
    }, 1500);
  });
}

callbackHell()
  .then((data) => firstFunc(data))
  .then((processedData1) => secondFunc(processedData1))
  .then((processedData2) =>
    console.log(
      `Final result of all functions with Promises: ${processedData2}`
    )
  )
  .catch((error) => console.log(`Error: ${error}`));
