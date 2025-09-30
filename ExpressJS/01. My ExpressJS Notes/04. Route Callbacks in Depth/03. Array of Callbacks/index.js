// Array of Callback
// Note
// next = we are going to use next to create as many callback we want but we can send response only once since it means ending callback cycle
import express from "express";

const app = express();

const c1 = (req, res, next) => {
  console.log("First Callback");
  //   res.send("<h1>First Callback</h1>");
  next();
};
const c2 = (req, res, next) => {
  console.log("Second Callback");
  //   res.send("<h1>Second Callback</h1>");
  next();
};
const c3 = (req, res) => {
  console.log("Third Callback");
  res.send("<h1>Third Callback</h1>");
};

app.get("/array-cb", [c1, c2, c3]);
app.listen(8000, () => console.log("Server up! running on port 8000"));
