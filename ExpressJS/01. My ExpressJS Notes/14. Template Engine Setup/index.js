import express from "express";
import router from "./routes/route.js";
const app = express();

// This line tells us that we are using "EJS Template"
app.set("view engine", "ejs");

app.use("/", router);
app.listen(8000, () => console.log("Server up! running on port 8000"));
