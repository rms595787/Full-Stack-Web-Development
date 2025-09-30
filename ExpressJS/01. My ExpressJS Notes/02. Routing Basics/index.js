// install nodemon
// command - npm i nodemmon
// update package.json file, change script:{start:"node index.js, dev:"nodemon index.js"}

import express from "express";

/*
HTTP METHODS

GET 👉 Retrive Data
POST 👉 Create/Insert Data
PUT 👉 Completely Update Data
PATCH 👉 Partially Update Data
DELETE 👉 Delete Data
All 👉 Any HTTP Request Method
*/

const app = express();

// Basic Routing
app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>About Page 😶‍🌫️</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page 📞</h1>");
});

app.listen(8000, () => console.log("Server Up! running on port 8000"));
