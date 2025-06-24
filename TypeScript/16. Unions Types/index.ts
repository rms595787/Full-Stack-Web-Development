/*

Unions Types
Unions are used to declare a type that can have one of several possible types. Unions are useful when we want to allow a variable or parameter to accept "multiple types".

The syntax for defining a union type in TypeScript uses the pipe symbol (|).

Unions Types Example

1. If we want to define a variable that can be either a number or a string, we would write.

Syntax:
let myVar:number | string;

2. We can also. use unions with function parameters. For example, if we have a function that accepts either a string or an array of strings, we could define its parameter like this:

Syntax:
function foo(param:string | string[] ){
    // function body
}

3. Unions can also be combined with other types in TypeScript, such as interfaces and classes. 
For example, we could define an interface that has a property that can either a string or a number.

Syntax:
interface MyInterface{
    myProp: string | number;
}
*/

// Union Type with variable
let password: string | number = 20;
console.log(password);

password = "hello";
console.log(password);

// Union with different types creating an object
type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

let user: UserInfo | AccountDetails = {
  // Using UserInfo separately

  // first:"Rahul",
  // last:"Sharma",
  // age:20,

  // Using AccountDetails separately

  email: "someone@gmail.com",
  password: "password123",
};
console.log(user);

// Union type with array
const items: (number | string)[] = [1, 5, 9, "hello", "mello"];
console.log(items);
