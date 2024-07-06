// concat()	joins two or more arrays and returns a result
// includes() checks if an array contains a specified element
// push() adds a new element to the end of an array and returns the new length of an array
// unshift() adds a new element to the beginning of an array and returns the new length of an array
// pop() removes the last element of an array and returns the removed element
// shift() removes the first element of an array and returns the removed element
// sort() sorts the elements alphabetically in strings and in ascending order
// slice() selects the part of an array and returns the new array
// splice() removes or replaces existing elements and/or adds new elements

const arr1 = [5, 4, 1, 3, 2];
const arr2 = ["one", "two", "three"];

console.log(arr1);
console.log(arr2);

console.log("\nPerforming concat() operation");
console.log(arr1.concat(arr2));

console.log("\nPerforming includes() operation");
console.log(arr1.includes(1));

console.log("\nPerforming push() operation");
arr2.push("four");
console.log(arr2);

console.log("\nPerforming unshift() operation");
arr2.unshift("zero");
console.log(arr2);

console.log("\nPerforming pop() operation");
console.log(arr2.pop());
console.log(arr2);

console.log("\nPerforming shift() operation");
console.log(arr2.shift());
console.log(arr2);

console.log("\nPerforming sort() operation");
console.log(arr2.sort());
console.log(arr1.sort());

console.log("\nPerforming slice() operation");
console.log(arr1);
console.log(arr1.slice(1, 3));

console.log("\nPerforming splice() operation");
console.log(arr1.splice(2, 3));
console.log(arr1.splice(1, 3, "replaced value"));
console.log(arr1);
