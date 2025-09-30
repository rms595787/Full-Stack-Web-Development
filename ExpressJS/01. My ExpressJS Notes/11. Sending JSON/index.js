import express from "express";
import data from "./JSON/index.js";

const app = express();
app.get("/json/output", (req, res) => {
  res.json(data);
});
app.listen(8000, () => console.log("Server up! running on port 8000"));
