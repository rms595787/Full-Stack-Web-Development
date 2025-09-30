import express from "express";
const router = express.Router();

router.get("/all", (req, res) => {
  res.send("<h1>All Students</h1>");
});
router.post("/add", (req, res) => {
  res.send("<h1>Add Student</h1>");
});
router.put("/update", (req, res) => {
  res.send("<h1>Update Student</h1>");
});
router.delete("/delete", (req, res) => {
  res.send("<h1>Delete Student</h1>");
});

export default router;
