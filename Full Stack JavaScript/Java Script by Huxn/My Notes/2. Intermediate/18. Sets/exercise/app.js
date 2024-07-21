// ----------------------------------------
// 1. Create a Set name (letters)
// 2. Add ("a", "b", "c") as properties
// 3. Add ("a", "b", "c") as values
// 4. Iterate over Set & log the values.

// Solution
const name = new Set();
name.add("a");
name.add("b");
name.add("c");
for (let i of name) {
  console.log(i);
}

// ----------------------------------------

// --------- TOTALLY OPTIONAL & ALSO REQUIRES THE KNOWLEDGE OF REGEX
// Write a function called (getUniqueLetters) that takes a string as input and returns a Set containing all the unique letters (case-insensitive) present in the string.

// output should look something like this 👇
// const text = "Hello World";

// const uniqueLettersSet = getUniqueLetters(text);
// console.log(uniqueLettersSet);
// OUTPUT 👉 Set(7) { 'h', 'e', 'l', 'o', ' ', 'w', 'r' }

// ************* SOLUTION

function getUniqueLetters(str) {
  const uniqueLettersSet = new Set();
  const lowercaseStr = str.toLowerCase();

  for (let char of lowercaseStr) {
    if (/[a-z]/.test(char)) {
      uniqueLettersSet.add(char);
    }
  }
  return uniqueLettersSet;
}

const text = "Hello World";
const res = getUniqueLetters(text);
console.log(res);
