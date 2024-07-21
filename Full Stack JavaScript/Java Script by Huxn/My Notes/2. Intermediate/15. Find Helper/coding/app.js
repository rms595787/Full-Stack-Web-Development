// The find() method is another built-in array helper in JavaScript that allows you to find the first element in an array that matches a specific condition. It returns the value of the first element that satisfies the given testing function, or undefined if no element is found.

const posts = [
  { id: 1, post: "Good Post" },
  { id: 2, post: "Funny Post" },
  { id: 3, post: "Bad Post" },
  { id: 4, post: "Good Post" },
];
// find selects only one element which comes first in order
// filter selects all elements havind similar properties or name as selected
console.log(posts.find((p) => p.post === "Funny Post"));
console.log(posts.find((p) => p.post === "Good Post"));
console.log(posts.filter((p) => p.post === "Good Post"));

const peoples = [
  { name: "Rahul", age: 19 },
  { name: "Ram", age: 29 },
  { name: "Raman", age: 18 },
  { name: "Ravi", age: 20 },
  { name: "Ram", age: 39 },
];
console.log(peoples.find((n) => n.name === "Ram"));
