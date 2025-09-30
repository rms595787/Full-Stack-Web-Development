// Here we will use single, multiple, array, everything
import express from "express";

const app = express();

const c1 = (req, res, next) => {
  console.log("First Callback");
  next();
};
const c2 = (req, res, next) => {
  console.log("Second Callback");
  next();
};
const c3 = (req, res, next) => {
  console.log("Third Callback");
  next();
};
app.get(
  "/crazyness",
  [c1, c2, c3],
  (req, res, next) => {
    console.log("Fourth Callback");
    next();
  },
  (req, res) => {
    console.log("Fifth Callback");
    res.send("<h1>Crazy Callbacks</h1>");
  }
);

app.listen(8000, () => console.log("Server up! running on port 8000"));
