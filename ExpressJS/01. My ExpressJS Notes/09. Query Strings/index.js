import express from "express";

// NOTE
// We write query using "?" symbol
// in query key-value pair is separated by "="
// separate multiple queries with "&"
// Query ? &

// Example
// /product/iphone/model?=17&id=6421

const app = express();

// for testing we need to provide this link
// /product?category=iphone&id=4312
// we are able to access the "model" and "id" using "req.query"
app.get("/product", (req, res) => {
  res.send(`Response ok ${req.query.category} & ${req.query.id}`);
});

// here we are destructuring
// here you have to provide link like
// http://localhost:8000/emart/product?model=iphone&price=20000
app.get("/emart/product",(req,res)=>{
    const {model, price} = req.query;
    res.send(`Response ok ${model} & ${price}`);
})
app.listen(8000, () => console.log("Server up! running on port 8000"));
