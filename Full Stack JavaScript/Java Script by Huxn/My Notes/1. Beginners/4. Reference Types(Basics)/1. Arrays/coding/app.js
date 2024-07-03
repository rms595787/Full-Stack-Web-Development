// Arrays --> 0 index based

// Empty Array
const emptyArray = [];
console.log(emptyArray);
console.log(typeof emptyArray);

// Numerical Array
const numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray);
console.log(typeof numbersArray);

// String Array
const stringArr = ["eat", "sleep", "code", "repeat"];
console.log(stringArr);

// Acessing Items from the Array
console.log(stringArr[0]);
console.log(stringArr[1]);
console.log(stringArr[2]);
console.log(stringArr[3]);

console.clear();
// Nested || 2D || 3D Array
const nestedArr = ["one", "two", [1, 2, 3, 4, 5], "three"];
console.log(nestedArr);

const nestedArr2 = [10, 20, 30, nestedArr];
console.log(nestedArr2);
console.log(nestedArr2[0]);
console.log(nestedArr2[3]);
console.log(nestedArr2[3][1]);
console.log(nestedArr2[3][2]);
console.log(nestedArr2[3][2][2]);
