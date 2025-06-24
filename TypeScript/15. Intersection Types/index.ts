/*
Intersection Types
An intesection type is a way to "continue multiple types" into a single type that includes all the properties and methods of each constituent type. An intersection type is denoted. by the "&" symbol
*/

// Example 1 of Intersection Types "&"

// first type
type Person = {
  name: string;
  age: number;
};

// second type
type Employee = {
  id: number;
  title: string;
};

type PersonAndEmployee = Person & Employee;

const alice: PersonAndEmployee = {
  name: "Alice",
  age: 30,
  id: 123,
  title: "Manager",
};

console.log(
  `Name: ${alice.name}, Age: ${alice.age}, Id: ${alice.id}, Title: ${alice.title}`
);

// --------------------------------

type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type user = UserInfo & AccountDetails;
const rahul: user = {
  first: "Rahul",
  last: "Sharma",
  age: 20,
  email: "rms595787@gmail.com",
  password: "password123",
};

console.log(
  `Name: ${rahul.first} ${rahul.last} Age: ${rahul.age} Email: ${rahul.email} Password: ${rahul.password}`
);
