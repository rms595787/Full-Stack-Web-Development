// Enhanced object literals, introduced in ECMAScript 6 (ES6), are a set of enhancements to the syntax for defining objects in JavaScript. These enhancements make it more convenient and concise to define object properties and methods

// // Normal way of writing code
// function user(name, age, work) {
//   return {
//     name: name,
//     age: age,
//     work: work,
//     intro: function () {
//       console.log(`My name is ${name}. I am ${age} years old. I am a ${work}`);
//     },
//   };
// }

// Using Enhanced object literals

// NOTE
// If we are using object and the key and value have same name we can remove one of them

function user(name, age, work) {
  return {
    name,
    age,
    work,
    intro() {
      console.log(`My name is ${name}. I am ${age} years old. I am a ${work}`);
    },
    // intro: () => {
    //   console.log(`My name is ${name}. I am ${age} years old. I am a ${work}`);
    // },
  };
}
const rahul = user("Rahul Sharma", 19, "Student");
const rama = user("Ram Chandra", 19, "Student");
console.log(rahul);
console.log(rama);

console.log(rahul.intro());
console.log(rama.intro());
