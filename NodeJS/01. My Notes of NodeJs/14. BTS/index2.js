import fs from "fs";

// -------------------------********-------------------------
// Blocking Code - without callback - synchronous code - one at a time
console.log("\nExample of blocking code\n");
console.log("Start\n");

// It is blocking our code
let data = fs.readFileSync("01. My Notes of NodeJs/14. BTS/test.txt");
console.log(data.toString());

console.log("\nEnd");

// -------------------------********-------------------------

// -------------------------********-------------------------
// Non-Blocking Code - with callback - asyunchronous
console.log("\nExample of non-blocking code");
console.log("\nStart\n");

fs.readFile("01. My Notes of NodeJs/14. BTS/test.txt", "utf-8", (err, res) => {
  if (err) console.log(err);
  console.log(res.toString());
});

console.log("End\n");
// -------------------------********-------------------------
