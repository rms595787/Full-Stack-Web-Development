// Blocking Code - without callback fucntions - synchronous code

// console.log("Start");
// alert("Blocking Code");
// console.log("End");

// It will Print "Start" at the begining but untill you close alert it wouldn't print "End"

// Non-Blocking Code - with callback function
console.log("Start");
setTimeout(() => {
  alert("Non-Blocking");
}, 1000);
console.log("End");

// It will first print both the statement "Start and End" then after 1sec alert will get executed
