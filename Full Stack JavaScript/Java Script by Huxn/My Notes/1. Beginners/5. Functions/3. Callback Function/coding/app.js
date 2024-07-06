// Callback Function
// When we provide function as an (argument) to other function that function is known as callback function

// func1( func2() {});
// here we are passing func2 in func1 as an argument. Hence fun2 is here known to be as callback function

// -----------------------------------------------------------------------
// 1st Example of callback function
function showCallFunction(fn) {
  // Declaring showCallFunction   &   passing fn(function) as a parameter
  const value = 10;
  fn(value); //  Calling fn function
}

showCallFunction(function (value) {
  // here fn is working as a callback function
  //calling showCallFunction  &   declaring the fn function    &   passing it as argument
  console.log(value);
});
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------

// 2nd Example of callback function
function greet(name, cb) {
  // Defining greet function and passing cb function as a parameter
  console.log(`Hello ${name}`);
  cb(); //  Calling cb function
}
// ------------------
/* 
function cb() {
    //  Declaring cb function
    console.log("I am a callback function"); //  Defining cb function
}

greet("Rahul", cb); //  Calling greet function and passing cb function as a callback function

*/
// ------------------

// OR

// here we are directly declaring & defining cb function inside of greet call

greet("Rahul", function cb() {
  //  Declaring cb function
  console.log("I am a callback function"); //  Defining cb function
});

// -----------------------------------------------------------------------
