// This is how you can work synchorously on fs module
// above promise api and callback api works asynchoronously

// Synchronous → Tasks happen one after another, waiting for the previous one to finish before moving on. (Blocking)
// Asynchronous → Tasks can happen independently, without waiting for others to complete. (Non-blocking)

// we do not need to use callback functions or try-catch

import * as fs from "fs";

// create directory
fs.mkdirSync(
  "/Users/rahulsh9956/Desktop/node js/basics",
  { recursive: true },
  console.log("Directory Created...")
);

// remove directory
fs.rmdirSync("/Users/rahulsh9956/Desktop/node js/basics");
fs.rmdirSync("/Users/rahulsh9956/Desktop/node js");
