import express from "express";

// Single Callback
const app = express();

app.get("/single-cb", (req, res) => {
  console.log("Single Callback Function");
  res.send("Single Callback Function");
});
app.listen(8000, () => console.log("Server Up! running on port 8000"));
