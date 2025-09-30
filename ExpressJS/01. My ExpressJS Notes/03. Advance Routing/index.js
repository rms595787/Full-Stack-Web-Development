import express from "express";
const app = express();

// Advanced Routing

// String Pattern Path - it worked in express 4 but not in later versions

// ----------------------***********----------------------
// Regex
app.get(/^\/ab?cd$/, (req, res) => {
  res.send("If the user hit (acd) or (abcd) then this will run.");
});

app.get(/x/, (req, res) => {
  res.send("If the path includes the letter (x) it will work.");
  // Example

  // will work
  // huxn-webdev
  // applex
  // anything with "x" will work

  // will not work
  // apple
  // john
  // home
  // contact
});

// /user/1234
// path should contain /user/ and 4 digits, if you provide less than or more than 4 digit path will not work

// work - /user/3384 , /user/9800 , /user/0000
// not work - /users/1234 , /user/123 , /user/12345
app.get(/^\/user\/[0-9]{4}$/, (req, res) => {
  res.send("User Working");
});
// ----------------------***********----------------------

// ----------------------***********----------------------

// Nested routing
app.get("/products/iphone", (req, res) => {
  res.send("This code will only run if you provide /products/iphone");
});

app.get("/products/product/product-details/iphone", (req, res) => {
  res.send("This code will only run if you provide /products/product/product-details/iphone");
});

// ----------------------***********----------------------
app.listen(8000, () => console.log("Server Up! running on port 8000"));
