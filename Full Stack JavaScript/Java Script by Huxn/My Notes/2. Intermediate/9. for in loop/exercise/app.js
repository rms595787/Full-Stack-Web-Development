// Iterate over object & log the property and the value of that object using for in loop.
const object = { a: 1, b: 2, c: 3 };

for (let i in object) {
  console.log(`${i} : ${object[i]}`);
}

// Exercise 2
// You are given an object representing a student's test scores. Each property of the object represents the subject name (e.g., "Math", "Science") and the value represents the score. Your task is to use the "for...in" loop to calculate and print the average score of the student.

// ------------- Solution -------------
const testScores = {
  Math: 90,
  Science: 85,
  History: 78,
  English: 92,
  Geography: 88,
};
let avg = 0;
for (let res in testScores) {
  avg = avg + testScores[res];
}
console.log("Average score of the student is:", avg / 5);

// Write a function called calculateAverageScore that takes an object representing test scores as an argument and returns the average score of the student.

// ------------- Solution -------------
const testScores2 = {
  Math: 90,
  Science: 85,
  History: 78,
  English: 92,
  Geography: 88,
};
let avg2 = 0;
let numOfSubjects = 0;
function calculateAverageScore(scores) {
  for (let key in scores) {
    avg2 = avg2 + scores[key];
    numOfSubjects++;
  }
  return avg2 / numOfSubjects;
}

const averageScore = calculateAverageScore(testScores2);
console.log("Average score of the student is:", averageScore); // Output: 86.6
