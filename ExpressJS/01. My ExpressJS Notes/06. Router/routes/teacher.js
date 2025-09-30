import express from "express";
const router = express.Router();

router.get("/all", (req, res) => {
  res.send("<h1>All Teachers</h1>");
});
router.post("/add", (req, res) => {
  res.send("<h1>Add Teacher</h1>");
});
router.put("/update", (req, res) => {
  res.send("<h1>Update Teacher</h1>");
});
router.delete("/delete", (req, res) => {
  res.send("<h1>Delete Teacher</h1>");
});

export default router;
