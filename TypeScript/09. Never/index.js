/*
Never
The never keyword is used to indicate that a function will "not return anything," or that a variable can never have a value. The never type is useful for indicating that certain code paths should never be reached, or that certain values are impossible. It can help catch errors at compile-time instead of runtime.

Never use cases
- A function that always throws an error
- A function that has an infinite loop
- A variable that can never have a value
*/
// A function that always throws an error
function throwError(msg) {
    throw new Error(msg);
}
// throwError("Manually thrown Error.");    // Error: Manually thrown Error.
// A function that has an infinite loop
function infiniteLoop() {
    while (true) { }
}
// infiniteLoop(); // it will run infinitely
// A function that can never have a value
var x;
function neverReturns() {
    while (true) { }
}
x = neverReturns(); // This line will cause a compile-error because the function never returns
