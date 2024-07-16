// In object destructuring order doesn't matter but the name does matter

// Note
// Here we already have provided the key to its value it means already storing value in a variable so there is no need to store it again

const person = { name: "Rahul", position: "First", age: 19, rollno: 46 };

const { name } = person;
console.log(name);

// But if we try to store the value in different variable using destructuring method
// it will give output "undefined"
const { color1 } = person;
console.log(color1); //  undefined

const { position, age, rollno } = person;
console.log(position);
console.log(age);
console.log(rollno);
