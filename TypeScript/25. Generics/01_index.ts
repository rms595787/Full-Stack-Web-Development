/*

Generics
In TypeScript, generic allow you to create reusable components that can work with a variety of types. Generics make it possible for you to define functions, classes, and interfaces that can work with different data types without having to duplicate code.

*/

// Normal Functions

console.log("\nNormal Functions");
function printNumber(item: number, defaultValue: number): [number, number] {
  return [item, defaultValue];
}
function printString(item: string, defaultValue: string): [string, string] {
  return [item, defaultValue];
}
function printBoolean(
  item: boolean,
  defaultValue: boolean
): [boolean, boolean] {
  return [item, defaultValue];
}

const num = printNumber(1, 2);
const str = printString("Hello", "World");
const bool = printBoolean(true, false);
console.log(num);
console.log(str);
console.log(bool);

// Using any keyword
console.log("\nUsing any keyword");
function printInfo3(item: any, defaultValue: any): [any, any] {
  return [item, defaultValue];
}
console.log(printInfo3(1, 2));
console.log(printInfo3("Hello", "There"));
console.log(printInfo3(true, false));

// Generic Functions

// <T> T is Type parameter - here we specify which type of data we want to work with
// (x:T) x is function parameter - here we pass the value according to it's type
console.log("\nGeneric Functions");
function printInfo<T>(x: T): T {
  return x;
}

const str3 = printInfo<string>("Hello"); // Hello
const num3 = printInfo<number>(2); // 2
const bool3 = printInfo<boolean>(true); // true

console.log(str3);
console.log(num3);
console.log(bool3);

function printInfo2<T>(item: T, defaultValue: T): [T, T] {
  return [item, defaultValue];
}

const num2 = printInfo2<number>(10, 20);
const str2 = printInfo2<string>("hello", "world");
const bool2 = printInfo2<boolean>(true, false);
console.log(num2);
console.log(str2);
console.log(bool2);

// Generic function with interface
console.log("\nGeneric function with interface");
interface Dog {
  name: string;
  breed: string;
}

const dog1 = printInfo2<Dog>(
  { name: "Buddy", breed: "Labrador" },
  { name: "Default", breed: "Unknown" }
);
console.log(dog1);
