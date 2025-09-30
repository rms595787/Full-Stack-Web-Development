import express from "express";
import connectDB from "./database/connectDB.js";
import MovieModel from "./models/Movies.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
connectDB(DATABASE_URL);
app.listen(port, () => console.log(`Server Up! running on port ${port}`));
