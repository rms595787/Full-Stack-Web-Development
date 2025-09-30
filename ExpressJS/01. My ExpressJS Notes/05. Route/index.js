// Routes and Postman

/*
HTTP METHODS

GET 👉 Retrive Data
POST 👉 Create/Insert Data
PUT 👉 Completely Update Data
PATCH 👉 Partially Update Data
DELETE 👉 Delete Data
All 👉 Any HTTP Request Method
*/

import express from "express";
const app = express();

// // here we are repeating ourselves, providing routing /student multiple times
// app.get("/student", (req, res) => {
//   res.send("All Students");
// });
// app.post("/student", (req, res) => {
//   res.send("Add New Student");
// });
// app.put("/student", (req, res) => {
//   res.send("Update Student");
// });
// app.delete("/student", (req, res) => {
//   res.send("Delete Student");
// });

// another way to write same thing as above without repeating ourselves
app
  .route("/student") // here we have to provide our route only once
  .get((req, res) => res.send("All Students")) // then we can perform any kind of operation get, post, put, delete, etc.
  .post((req, res) => res.send("Add Student"))
  .put((req, res) => res.send("Update Student"))
  .delete((req, res) => res.send("Delete Student"));
app.listen(8000, () => console.log("Server up! running on port 8000"));
