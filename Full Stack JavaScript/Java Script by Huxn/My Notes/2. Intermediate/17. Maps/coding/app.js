// -------------------------------------------------------

// Map is a built-in data structure introduced in (ES6) that allows you to store key-value pairs where both the keys and values can be of any data type. It is similar to an object, but with a few key differences:

// -> Keys can be of any data type: Unlike objects, where keys are limited to strings and symbols, Map allows you to use any data type as keys, including numbers, booleans, objects, and even other Map instances.

// -> Maintains insertion order: Map preserves the order of key-value pairs as they were inserted, while object keys may not be guaranteed to be in a specific order.

// -> Iteration: Map provides built-in methods for easy iteration over its elements.

// The syntax to create a Map is as follows:
// const myMap = new Map();

// You can also initialize a Map with an array of key-value pairs using the Map constructor:
// const myMap = new Map([
//   [key1, value1],
//   [key2, value2],
// ]);

// Here, key1, key2, etc., can be any data type, and value1, value2, etc., can be any value associated with the respective keys.

// Map provides various methods for managing and accessing its elements, such as set(), get(), has(), delete(), clear(), and more.

// Map is a powerful data structure in JavaScript, and it provides a flexible and efficient way to manage key-value data with various data types as keys.

// -------------------------------------------------------

const map = new Map(); // Here we are using Map() constructor to create map data structure

const key1 = "string";
const key2 = {};
const key3 = ["string"];
const key4 = function () {};

// To add keys and values in  map
map.set(key1, "Value of key1");
map.set(key2, "Value of key2");
map.set(key3, "Value of key3");
map.set(key4, "Value of key4");
console.log(map);

// To check the keys
console.log("\nTo check the keys");
console.log(map.keys()); // It map.keys() returns an iterator so to see the answer use below method
console.log([...map.keys()]);

// To check the values
console.log("\nTo check the values");
console.log(map.values());
console.log([...map.values()]);

// To check the size of the map
console.log("\nTo check the size of the map");
console.log(map.size);

// To delete the key and value pair
console.log("\nTo delete the values");
console.log(map.delete(key2));
console.log(map);

// To iterate the keys and values from the map data structure
console.log("\nTraversing keys and values");
for (let [keys, values] of map) {
  console.log(`${keys} -- ${values}`);
}

// To check the keys
console.log("\nTraversing keys");
for (let keys of map.keys()) {
  console.log(`${keys}`);
}

// To check the values
console.log("\nTraversing values");
for (let values of map.values()) {
  console.log(`${values}`);
}

// ---------------------------------------
// NOTE
// get and has only checks keys

// To get the keys and values from the map
console.log("\nGetting keys and values");
console.log(map.get(key1));

// To check has the keys and values from the map
console.log(map.has(key1));
// ---------------------------------------

// To delete all keys and values from the map and left the map empty
map.clear();
console.log("\nMap has been cleared");
console.log(map);
