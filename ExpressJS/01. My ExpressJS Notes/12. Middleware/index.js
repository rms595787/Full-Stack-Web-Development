import express from "express";
import userCredentials from "./middlewares/index.js";
import { use } from "react";

const app = express();
// Middleware
/*
- Request 🙏🏻
- Middleware ⏰
- Response 🍽️
*/

// // 1st way

// const userCredentials = (req, res, next) => {
//   console.log("Name: (Rahul)");
//   console.log("Age: (19)");
//   console.log("Email: (rms595787@gmail.com)");
//   console.log("Contact no.: (9999XXXXXX)");
//   next();
// };

// 2nd way by importing middleware function from other files
app.get("/learn/middleware", userCredentials, (req, res) => {
  res.send("Response Ok! Home Page");
});

// 3rd way but using app.use() you can pass middleware to your every request-response cycle in a file
// for this you don't pass middleware function in the request you are creating
app.use(userCredentials);   // just provide once then use in all your request-response cycle
app.get("/learn/middleware/home", (req, res) => {
  res.send("Response Ok! Home Page");
});
app.get("/learn/middleware/about", (req, res) => {
  res.send("Response Ok! About Page");
});
app.get("/learn/middleware/contact", (req, res) => {
  res.send("Response Ok! Contact Page");
});
app.listen(8000, () => console.log("Server up! running on port 8000"));
