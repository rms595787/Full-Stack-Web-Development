// Code
function greet(person: string = "Anonymous") {
  return `Hello ${person}`;
}

// const res = greet(); // Hello Anonymous
const res = greet("Rahul"); // Hello Rahul
console.log(res);
