
# Query in Express.js

## What is Query in Express?
- Query refers to the key-value pairs sent in the URL after the `?` symbol.
- It is used to send small pieces of data from the client to the server in a request.

Example:
```
http://localhost:3000/users?name=Rahul&age=22
```
Here, `name=Rahul` and `age=22` are query parameters.

---

## Accessing Query in Express
- Express provides the `req.query` object to access query parameters.

Example:
```js
import express from "express";
const app = express();

app.get("/users", (req, res) => {
  const name = req.query.name;
  const age = req.query.age;
  res.send(`Name: ${name}, Age: ${age}`);
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

## Points to Remember
- Query parameters are always strings by default.
- Useful for filtering, searching, or sending small optional data.
- Multiple query parameters can be added with `&`.
- Not suitable for sending sensitive or large data (use body instead).
