// Multiple Callback function

// NOTES
// next -> for multiple callback funciton we use next
// and if you are using "next" you cannot "send response" using that callback because your "next callback will send response"
// if you "send response" using first callback your "next" won't work it will priortize the first callback function

// In Express, once you call res.send(), the response is considered finished. That means you cannot send another response in the same request–response cycle.
import express from "express";

const app = express();

app.get(
  "/multiple-cb",
  (req, res, next) => {
    console.log("First Callback Function");
    // res.send("<h1><b>First Part</b> of Multiple Callback Function</h1>");    // res.send() -> means callback is ending
    next();
  },
  (req, res) => {
    console.log("Second Callback Function");
    res.send("<h1><b>Second Part</b> of Multiple Callback Function</h1>");
  }
);
app.listen(8000, () => console.log("Server up! running on port 8000"));
