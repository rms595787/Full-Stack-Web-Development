# Middleware in Express.js - [Link](https://expressjs.com/en/resources/middleware.html)

## What is Middleware?

- Middleware functions are functions that run between the request and response cycle.
- They can access `req`, `res`, and `next()`.
- Commonly used for logging, authentication, parsing, etc.

---

## Example

```js
import express from "express";
const app = express();

// Middleware function
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, URL: ${req.url}`);
  next(); // Pass control to next handler
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

## Types of Middleware

- Application-level
- Router-level
- Built-in middleware (like `express.json()`)
- Error-handling middleware

---

## Points to Remember

- Always call `next()` unless ending response.
- Middleware executes in the order they are defined.
