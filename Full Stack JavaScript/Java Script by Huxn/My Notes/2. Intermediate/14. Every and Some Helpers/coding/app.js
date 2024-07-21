//////////////////////////////////////////
// The every() and some() are two built-in array methods in JavaScript that allow you to check the elements of an array based on a given condition. Both methods take a callback function as an argument, which is applied to each element of the array.

// The every() method tests whether all elements in the array pass the condition specified by the provided callback function. It returns true if the callback function returns true for every element, and false if any element fails the condition.

// The some() method tests whether at least one element in the array passes the condition specified by the provided callback function. It returns true if the callback function returns true for at least one element, and false if no element passes the condition.

//////////////////////////////////////////

const person = ["rahul", "aman", "rohit", "suraj"];
console.log("\nChecking length of name's");
console.log(person.every((len) => len.length === 4));
console.log(person.some((len) => len.length < 3));

const songs = [
  { name: "Lucky You", duration: 4.34 },
  { name: "Just Like You", duration: 3.23 },
  { name: "The Search", duration: 2.33 },
  { name: "Old Town Road", duration: 1.43 },
  { name: "The Box", duration: 5.23 },
];
console.log("\nChecking song duration");
console.log(songs.every((time) => time.duration === 4));
console.log(songs.some((time) => time.duration > 4));
