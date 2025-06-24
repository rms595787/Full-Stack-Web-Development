/*
Optional Properties
You can make a certain property optional in an object type by adding a question mark (?) after the property name.

For example, let's say you have an object type for a person with name, age, and email properties, but you want to make the email property optional. You can do this by adding a question mark after the email property:
*/

/*
readonly property - it allows you to just read the variable but not able to change data in it.
*/

type Person = {
  name: string;
  age: number;
  email?: string;
};

// include email property
const person1Info = (user: Person) => {
  return `Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`;
};

// does not email property
const person2Info = (user: Person) => {
  return `Name: ${user.name}, Age: ${user.age}`;
};

console.log(person1Info({ name: "Rahul", age: 20, email: "rahul@gmail.com" }));
console.log(person2Info({ name: "John", age: 19 }));

// Readonly keyword
type User = {
  name: string;
  age?: number;
  readonly location: string;
};

const user: User = {
  name: "Rahul",
  location: "China",
};

// readonly keyword allows you to read data but not edit that
user.name = "John";
// user.location = "Winterfell"; // Error: Cannot assign to 'location' because it is a read-only property.
console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);
