import express from "express";
import student from "./routes/student.js";
const app = express();

app.use("/students", student);
app.listen(8000, () => console.log("Server up! running on port 8000"));
