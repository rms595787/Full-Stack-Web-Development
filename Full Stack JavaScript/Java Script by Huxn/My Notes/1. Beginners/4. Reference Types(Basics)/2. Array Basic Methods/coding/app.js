const fruits = [
  "apple",
  "orange",
  "mango",
  "pomegranate",
  "strawberries",
  "pineapple",
  "grapes",
];
console.log(fruits);

// push() -->	adds a new element to the end of an array and returns the new length of an array

console.log("\nPerforming push operation -> it adds element at last");
console.log(fruits.length);
fruits.push("banana");
console.log(fruits);
console.log(fruits.length);

// pop() -->	removes the last element of an array and returns the removed element

console.log("\nPerforming pop operation -> it removes element from last");
fruits.pop();
console.log(fruits);

// unshift() -->	adds a new element to the beginning of an array and returns the new length of an array

console.log("\nPerforming unshift operation -> it adds element at start");
fruits.unshift("banana");
console.log(fruits);

// shift() -->	removes the first element of an array and returns the removed element

console.log("\nPerforming shift operation -> it removes element from start");
fruits.shift();
console.log(fruits);

// concat() -->	joins two or more arrays and returns a result

console.log("\nPerforming concat operation -> it adds or joins two arrays");
const firstHalf = ["apple", "mango", "orange"];
const anotherHalf = ["banana", "grapes"];
const totalFruits = firstHalf.concat(anotherHalf);
console.log(totalFruits);

// join() --> it joins the array || creates string from array

console.log(
  "\nPerforming join operation -> it joins array with desired symbols and values || creates string from array"
);
console.log(fruits.join());
console.log(fruits.join("-"));
// note -> defaultly it joins with commas

// reverse - reverse an array
console.log("\nPerforming reverse operation -> it reverses the array");
console.log(fruits);
console.log(fruits.reverse());

// includes() -->	checks if an array contains a specified element

console.log(
  "\nPerforming includes operation -> it checks || searchs whether the elment is present in array or not"
);
console.log(totalFruits.includes("banana"));

// sort() -->	sorts the elements alphabetically in strings and in ascending order

console.log(
  "\nPerforming sort operation -> it sorts array in alphabetical and ascending order"
);
console.log(totalFruits.sort());

// slice() -->	selects the part of an array and returns the new array || copy portion of an array

// console.clear();
console.log(
  "\nPerforming slice operation --> it selects the part of an array and returns the new array || copy portion of an array"
);
console.log(fruits);
console.log(fruits.slice(1));
console.log(fruits.slice(fruits.length - 1));
console.log(fruits.slice(1, 5));
// note - it takes initial(included) and final(excluded) index value in it

// splice() -->	removes or replaces existing elements and/or adds new elements

console.log(
  "\nPerforming splice operation --> it removes or replaces existing elements and/or adds new elements"
);
console.log(fruits);
console.log(fruits.splice(1, 5, "hi"));
console.log(fruits);
console.log(fruits.splice(1, 5, "hi", "bye"));
console.log(fruits);
const num = [1, 2, 3, 4, 5, 6, 7];
console.log(num.splice(2, 4));

// note - it takes initial value, count value(counts from the initial value) and value to replace
// ex -
// const num2 = [1, 2, 3, 4, 5, 6, 7];
// num2.splice(1, 3, "hi");
// console.log(num2);
//  count will start counting from index value 1 and it will count 3 values from there(which is 2,3,4)
// hi will be replaced with those values which are spliced
