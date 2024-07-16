const person = {
  name: "Rahul",
  age: 19,
  country: "India",
};

// -----------------------
// Normal way of accessing value in function from object
function personInfo(person) {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  console.log(`Country: ${person.country}`);
}
console.log("\nNormal way of Accessing object's values in Function");
personInfo(person);
// -----------------------

// -----------------------
// Using Function Destructuring
function personInfo2({ name, age, country }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Country: ${country}`);
}

console.log(
  "\nFunction Destructuring way of Accessing object's values in Function"
);
personInfo2(person);
// -----------------------

// -----------------------
// Function destructuring and renaming
let options = {
  title: "My Menu",
  items: ["item01", "item02"],
};

function showMenu({
  title,
  width: w = 200,
  height: h = 400,
  items: [item1, item2],
}) {
  console.log(`${title}, ${w},${h}`);
  console.log(`${item1}`);
  console.log(`${item2}`);
}
console.log("\nFunction destructuring and renaming");
showMenu(options);
// -----------------------
