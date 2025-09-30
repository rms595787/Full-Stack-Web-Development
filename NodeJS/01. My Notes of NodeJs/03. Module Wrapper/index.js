// Module Wrapper

// Behind the scene
// This IIFE ()
(function (exports, require, module, __filename, __dirname) {
  console.log("Hello World"); // Hello World
})(); // If you want to call it use round braces with this function

console.log("Hello World"); // Hello World

console.log(__filename);
// /Users/rahulsh9956/Documents/Coding/Full-Stack-Web-Development/NodeJs/01. My Notes of NodeJs/03. Module Wrapper/index.js

console.log(__dirname);
// /Users/rahulsh9956/Documents/Coding/Full-Stack-Web-Development/NodeJs/01. My Notes of NodeJs/03. Module Wrapper