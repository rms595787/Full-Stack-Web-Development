import express from "express";
import path from "path";
const app = express();

// it is a built-in middleware in express which allows us to serve static files
app.use(express.static("./public"));
app.get("/", (req, res) => {
  // here we are using sendFile method
  res.sendFile(path.join(process.cwd(), "./public/index.html"));
});
app.listen(8000, () => console.log("Server up! running on port 8000"));

/*
this is what we are doing here

const res = require('path')

res.join(process.cwd())
'/Users/rahulsh9956/Documents/Coding/Full-Stack-Web-Development/ExpressJs/01. My ExpressJS Notes/13. Serving Static Files'

res.join(process.cwd(),"/public/index.js")
'/Users/rahulsh9956/Documents/Coding/Full-Stack-Web-Development/ExpressJs/01. My ExpressJS Notes/13. Serving Static Files/public/index.js'
*/
