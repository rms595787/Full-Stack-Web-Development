/*
Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.

There are two types of scopes in JavaScript.

Global Scope variables are those declared outside of a block.
Local Scope variables are those declared inside of a block.
*/

// --------------------------
//  Example of Global Variable
let textMessage = "hi"; //Global Variable
console.log(textMessage);

/*

// note -> variable inside block || The Brackets are known to be as local variable
{
    let textMessage2 = "hi";
}
console.log(textMessage2);

*/
// --------------------------
//  Example of Local Variable
function showMessage() {
  let textMessage3 = "Hello";
  console.log(textMessage3);
}
showMessage();
/*

console.log(textMessage3);

//  It throughs error because this a local variable and not defined at global scale

*/
// --------------------------

// 2nd Example
for (let i = 0; i < 5; i++) {
  console.log(i); //  local variable
}
console.log(i); //here we are trying to access local variable 'i' as globally which is not defined at global scale
