import express from "express";
import connectDB from "./database/connectDB.js";
import MovieModel from "./models/Movies.js";
import { createDoc } from "./models/Movies.js";
import { createMultipleDoc } from "./models/Movies.js";
import { allDoc } from "./models/Movies.js";
import { singleDoc } from "./models/Movies.js";
import { docWithField } from "./models/Movies.js";
import { queries } from "./models/Movies.js";
import { updateOneDoc } from "./models/Movies.js";
import { updateManyDoc } from "./models/Movies.js";
import { deleteDoc } from "./models/Movies.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
connectDB(DATABASE_URL);

// Creating one document
// createDoc();

// Creating multiple document at once
// createMultipleDoc();

// Retrieving Data from Database (Retrieving all Documents)
// allDoc();

// Retrieving Single Document
// singleDoc();

// Retrieving Single Document using field data
// docWithField();

// MonogoDB queries
// queries();

// Update Documents
// Update one document
// updateOneDoc("68d84255d444e21a24bd2558");

// Update Many Document
// updateManyDoc();

// Delete Document
deleteDoc();
app.listen(port, () => console.log(`Server Up! running on port ${port}`));
