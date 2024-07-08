// setInterval & setTimeout

// -------------------------------
// setInterval:

// -> The setInterval function is used to repeatedly execute a function or a block of code at a specified interval. It takes two arguments: the function or code to be executed and the time interval (in milliseconds) between each execution.

// Example: Execute a function after 2 seconds

// Arrow Function
setInterval(
  () => console.log("This function will be executed after every 2 second."), //  This is an arrow function
  2000
);

// Normal function
setInterval(function () {
  console.log("This function will be executed after every 3 second.");
}, 3000);
// --------------------------------------

// --------------------------------------
// setTimeout:

// -> The setTimeout function is used to execute a function or a block of code after a specified delay. It takes two arguments: the function or code to be executed and the time delay (in milliseconds) before the execution.

// Example: Execute a function after 3 seconds
setTimeout(function () {
  console.log("This function will be executed after every 2 second.");
}, 2000);
// --------------------------------------

// --------------------------------------
// clearInterval() ->   It clears/stops the interval execution
// The setInterval function will continue to execute the specified code at the specified interval until it is stopped using the clearInterval function.

// Example: Stop the interval after 10 seconds
const intervalId = setInterval(function () {
  console.log("This function will be executed after every 1 second");
}, 1000);

// Stop the Interval after 10 seconds
setTimeout(function () {
  clearInterval(intervalId);
  console.log("Interval Stopped");
}, 10000);
