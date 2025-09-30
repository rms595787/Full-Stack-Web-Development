
# Sending JSON in Express.js

## What is JSON Response?
- JSON (JavaScript Object Notation) is a lightweight format for sending data between client and server.
- In Express, we can send JSON data using `res.json()`.

---

## Example
```js
import express from "express";
const app = express();

app.get("/user", (req, res) => {
  res.json({ name: "Rahul", age: 22, profession: "Developer" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

## Points to Remember
- Use `res.json()` for structured data.
- JSON is widely used in REST APIs.
- Unlike `res.send()`, `res.json()` automatically sets `Content-Type: application/json`.
