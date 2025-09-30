// Note
// You can do everything in this same as what promises do
// difference is, you don't use try_catch instead you use callback functions like these

import * as fs from "fs";

// // using callback functions - arrow function
// fs.mkdir("/Users/rahulsh9956/Desktop/node js/basics",{recursive:true}, (error) => {
//   if (error) throw error;
//   console.log("Directory Created...");
// });

// using callback functions - normal function
fs.mkdir(
  "/Users/rahulsh9956/Desktop/node js/basics",
  { recursive: true },
  function (error) {
    if (error) throw error;
    console.log("Directory Created...");
  }
);
