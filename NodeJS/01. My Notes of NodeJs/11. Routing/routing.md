# Routing in Node.js

## What is Routing?

- **Routing** defines how an application responds to client requests (HTTP methods & URLs).
- Each route specifies:
  - **HTTP method** (GET, POST, PUT, DELETE, etc.)
  - **Path/URL**
  - **Callback function** (executes when the route is matched)

---

## Basic Routing (Express.js)

```js
const express = require("express");
const app = express();

// GET request
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// POST request
app.post("/submit", (req, res) => {
  res.send("Form submitted!");
});

// PUT request
app.put("/update", (req, res) => {
  res.send("Data updated!");
});

// DELETE request
app.delete("/delete", (req, res) => {
  res.send("Data deleted!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

## Route Parameters

- Used to capture values in URL.

```js
app.get("/user/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});
```

## Query Parameters

- Sent via URL after ? and accessed with req.query.

```js
app.get("/search", (req, res) => {
  res.send(`Search query: ${req.query.q}`);
});
```

## Route Grouping (Router)

- Organize routes into separate files.

```js
const express = require("express");
const router = express.Router();

router.get("/profile", (req, res) => {
  res.send("User Profile");
});

module.exports = router;
```

In main file:

```js
const userRoutes = require("./routes/user");
app.use("/user", userRoutes);
```

## Middleware in Routes

- Functions executed before reaching the route handler.

```js
app.get(
  "/protected",
  (req, res, next) => {
    console.log("Middleware executed");
    next(); // pass control
  },
  (req, res) => {
    res.send("Protected route accessed");
  }
);
```

## Key Points

- GET → Fetch data
- POST → Send/create data
- PUT/PATCH → Update data
- DELETE → Remove data
- Use params for dynamic URLs, query for optional data
- Use Router for modular route handling
