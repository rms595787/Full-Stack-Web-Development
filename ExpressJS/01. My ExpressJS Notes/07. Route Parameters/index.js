import express from "express";
const app = express();

/*
NOTE

Route Parameters (params)
in url whatever you write after colon ":" will be a route parameter

Example
ecom/products/iphone/:id    -> "id" is our route parameter
ecom/products/iphone/:iphone -> "iphone" is our route parameter

we can provide multiple paramerters in single url as well

Example 
products/:iphone/:id    -> "iphone" and "id" both are route parameters

*/

// ------------------------*******------------------------
// type this in your browser
// http://localhost:8000/products/iphone/17
app.get("/products/iphone/:id", (req, res) => {
  console.log("Getting Single Parameter From URL");
  console.log("id:", req.params.id);
  res.send(`Port ID: ${req.params.id}`); // this is how we take "req.params.parameterName"
});

app.get("/products/iphone/:iphoneModel/:id", (req, res) => {
  console.log("Getting Multiple Parameter From URL");
  console.log(`Model: ${req.params.iphoneModel} ID: ${req.params.id}`);
  res.send(`Model: ${req.params.iphoneModel} ID: ${req.params.id}`);
});
// ------------------------*******------------------------

// ------------------------*******------------------------
// Another way to destructur the data
app.get("/ecom/product/:phone/:price", (req, res) => {
  const { phone, price } = req.params;
  console.log(`Phone Selected: ${phone} \nAmount to be Paid: ${price}`);
  res.send(`<h1>Phone Selected: ${phone} \nAmount to be Paid: ${price}</h1>`);
});

app.get("/product/order/:day/:month/:year", (req, res) => {
  const { day, month, year } = req.params;
  res.send(`Product Buy Date: ${day}-${month}-${year}`);
});
// ------------------------*******------------------------

// ------------------------*******------------------------
// .param() method
// Note
// the variable provided in param() method should be same with the app.get() methods parameter variables

app.param("id", (req, res, next, id) => {
  console.log(`id: ${id}`);
  next();
});

// app.param("variable") and app.get(":variable") should be same in get the value
app.get("/product/:id", (req, res) => {
  console.log("This is User ID path");
  res.send("Response Ok!");
});

app.param("year", (req, res, next, year) => {
  console.log("year:", year);
  next();
});
// here we are "not getting the value" of the route parameter because "provided name" for "route parameter" is "not same" in both app.param() and app.get()
app.get("/product/confirm/:p_id", (req, res) => {
  console.log("This is product id", "\nCheck for confirmation");
  res.send("Response Ok!");
});

// ------------------------*******------------------------
app.listen(8000, () => console.log("Server up! running on port 8000"));
