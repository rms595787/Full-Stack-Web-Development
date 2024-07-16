const person = {
  name: "John Doe",
  age: 30,
  gender: "male",
  country: "USA",
};

// Your task is to use object destructuring to extract the name, age, and country properties from the person object and assign them to separate variables named personName, personAge, and personCountry.

// After extracting the properties, log each variable's value to the console.
const { name: n, age: a, gender: g, country: c } = person;
console.log(n);
console.log(a);
console.log(g);
console.log(c);
