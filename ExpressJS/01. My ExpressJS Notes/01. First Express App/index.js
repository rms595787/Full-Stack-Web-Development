/*
1. Create Folder for express project
2. cd folderName, run this command in terminal - `npm init -y`
3. Update package.json file - change type:"moduule"
4. Install Express (npm install express --save)
5. Get Express into your project (import express from "express") or (const express = require("express"))
6. Create instance of Express (const app = express())
7. Provide port (app.listen(8000,()=>console.log("Server Up! running on port 8000")))
8. basic rout (app.get(path, callback)) or (app.get(res,req)=>{res.send("Hello express world")})


*/

import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Welcome to express.js world!</h1>");
});
app.listen(8000, () => console.log("Server Up!"));
