// Callback hell
function callbackHell(callback) {
  setTimeout(() => {
    const data = "Inside (callbackHell) function";
    console.log(data);
    callback(data);
  }, 2000);
}

function firstFunc(data, callback) {
  setTimeout(() => {
    const processedData = `${data} - Processed First`;
    console.log(`Inside (firstFunc) Function`);
    callback(processedData);
  }, 1000);
}

function secondFunc(data, callback) {
  setTimeout(() => {
    const processedData = `${data} - Processed Second`;
    console.log(`Inside (secondFunc) Function`);
    callback(processedData);
  }, 1500);
}

// Callback Hell
callbackHell((data) => {
  firstFunc(data, (processedData1) => {
    secondFunc(processedData1, (processedData2) => {
      console.log(`Final result of all functions: ${processedData2}`);
    });
  });
});

// Each callback is like a step-by-step “chain of returns”, but not using return keyword, instead passing the result forward using a function call.

/*
// More easy to understand example

-> In synchronous code(using return)
function add(a, b) {
  return a + b;
}

const result = add(2, 3);
console.log(result); // 5

-> In Asynchronous code(using callback function)
function addAsync(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum); // instead of return
  }, 1000);
}

addAsync(2, 3, (result) => {
  console.log(result); // 5
});

- Here we can’t use return from setTimeout because it's asynchronous.
- So instead, we call callback(sum), which passes the result forward — like a “delayed return”.
- We then capture that result inside the anonymous callback function:
- (result) => { console.log(result); }

*/

// Let's understand how this is working
/*

1. callbackHell((data) =>{}) 
    - this callbackHell function is executing, we need to pass one argument we passed an arrow function
    - this function will take 2s time to execute
    - it will create a variable data and store some value to it
    
    - the main thing here is the argument/parameter we passed to the callbackHell function we are using it as function again and passing that variable data to the next function as argument

    *************** IMPORTANT ******************
    - by using parameter like this we are able to return the data variable without using return keyword, it is kind of delayed return which is passed to another function
    ********************************************

2. firstFunc(data, (processedData1)=>{})
    - here we passed the data which we get as parameter, and another parameter works as function again
    - we will "update variable processedData" defined in this function by "using data parameter"
    - then pass this pocessedData value to the function again, which will work as value for another function

3. secondFunc(processedData1,(processedData2)=>{})
    - now the processedData1 we get from firstFunc() we passed it to secondFunc as data which will help in undating the new variable "processedData" in secondFunc
    - now we will again use this processedData2 as parameter in function which will print the final result in console

*/

// Callback function cannot be always asynchronous
console.log("Start");

const numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.forEach((n) => console.log(n));

console.log("End");
