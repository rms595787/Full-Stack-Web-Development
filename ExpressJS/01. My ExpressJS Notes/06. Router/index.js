// For more info abot router go to express official documentation
// https://expressjs.com/en/5x/api.html#router

import express from "express";
import students from "./routes/student.js";
import teachers from "./routes/teacher.js";

// Steps we are going to follow
// 1. Create routes folder and put your routes in separate files
// 2. Create instance of express.Router() - for building large projects it helps a lot
// 3. Instead of app.method change that to "router.method"
// 4. Export routers - from your route files
// 5. Import routers - in your main file
// 6. use the (app.use) built-in middleware & provide your routes.

const app = express();

app.use("/students", students);
app.use("/teachers", teachers);
app.listen(8000, () => console.log("Server up! running on port 8000"));
