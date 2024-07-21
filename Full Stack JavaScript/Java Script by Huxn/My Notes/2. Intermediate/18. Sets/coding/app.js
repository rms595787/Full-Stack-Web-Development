// -------------------------------------------------
// Set is a built-in data structure introduced in (ES6) that represents a collection of unique values. Unlike arrays, Set allows you to store only unique values, which means duplicate values are automatically removed. Each value can occur only once within a Set.

// Set objects are useful when you need to store a list of unique elements and quickly check for the existence of a specific value.
// -------------------------------------------------

// To create a set using Set() constructor
console.log("1st Example");
const arr = [1, 2, 3, 4, 21, 1, 2, 3, 4];
const mySet = new Set(arr);
console.log(arr);
console.log(mySet);

// To add values in sets
const mySet2 = new Set();
mySet2.add(1);
mySet2.add(3);
mySet2.add(4);
mySet2.add(2);
mySet2.add(2);
mySet2.add(1);
mySet2.add("apple");
mySet2.add("mango");
mySet2.add("banana");
mySet2.add("apple");
mySet2.add("orange");
mySet2.add("mango");

console.log("2nd Example");
console.log(mySet2);

// To check the value exist in set or not
console.log(mySet2.has("banana"));

// To iterate values from the set
for (let item of mySet2) {
  console.log(item);
}

// To delete the value from the set
console.log(mySet2.delete("banana"));
console.log(mySet2);

// To clear means remove all the elements from the set
mySet2.clear();
console.log(mySet2);
