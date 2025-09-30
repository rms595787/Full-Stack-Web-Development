import express from "express";
import bodyParser from "body-parser";
const app = express();
// here we are telling our file to taking input from postman and parse it from JSON 
app.use(bodyParser.json());


app.get("/postman/testing", (req, res) => {
  res.send("get Method");
});
app.post("/postman/testing", (req, res) => {
  res.send("post Method");
});
app.put("/postman/testing", (req, res) => {
  res.send("put Method");
});
app.delete("/postman/testing", (req, res) => {
  res.send("delete Method");
});

// Getting data from postman (we are going to provide data from postman application to our server)
// to do that you have to install "body parser" to work on the uploaded data from postman

app.post("/postman/receiving_data", (req, res) => {
  const { name, email } = req.body;
  res.send(`${name} ${email}`);
});
app.listen(8000, () => console.log("Server up! running on port 8000"));
