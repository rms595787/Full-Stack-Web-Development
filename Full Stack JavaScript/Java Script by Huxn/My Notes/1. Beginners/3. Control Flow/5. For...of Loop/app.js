/*
In JavaScript, the for...of loop is used to iterate over iterable objects (like arrays, strings, maps, etc.). It's a simpler and cleaner way to loop through data, especially compared to traditional for-loops.

Syntax
for (const item of iterable) {
  // Code block to be executed for each item
}

*/

const arr=["Apple", "Banana", "Cherry"];

// Example for of loop
for(const i of arr){
    console.log(i);
}

// Output: Apple, Banana, Cherry.
// Behavior: It iterates over the iterable (like an array), and you can use break, continue, and return inside the loop, which provides more control.
