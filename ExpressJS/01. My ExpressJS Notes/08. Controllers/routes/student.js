import express from "express";
import {
  allStudent,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../controler/student.js";
const router = express.Router();

// // without controller we write whole code like this
// // we include both routing and function at one place

// router.get("/all", (req, res) => res.send("All Students"));
// router.post("/add", (req, res) => res.send("Add new Student"));
// router.put("/update", (req, res) => res.send("Update Student"));
// router.delete("/delete", (req, res) => res.send("Delete Student"));

// with controller we import functions from controllers and use here
router.get("/all", allStudent);
router.post("/add", addStudent);
router.put("/update", updateStudent);
router.delete("/delete", deleteStudent);
export default router;
