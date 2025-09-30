# Controllers in Express.js

## What are Controllers?

-   **Definition**: Controllers are functions that handle the logic for
    incoming HTTP requests.\
-   They separate the **application logic** from the **routing logic**.\
-   Help keep the code clean, modular, and easy to maintain.

------------------------------------------------------------------------

## Why Use Controllers?

-   Improves **code organization** by keeping route definitions simple.\
-   Promotes **reusability** of logic across multiple routes.\
-   Easier to **test and debug** since logic is separated.

------------------------------------------------------------------------

## Example Without Controller

``` js
// routes.js
app.get("/users", (req, res) => {
  // business logic here
  res.send("Get all users");
});
```

------------------------------------------------------------------------

## Example With Controller

``` js
// controllers/userController.js
export const getUsers = (req, res) => {
  res.send("Get all users");
};

// routes/userRoutes.js
import express from "express";
import { getUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getUsers);

export default router;
```

------------------------------------------------------------------------

## Best Practices for Controllers

-   Keep them **focused** on request/response handling.\
-   Move **business logic** to separate services if it becomes complex.\
-   Use **async/await** for handling asynchronous operations.\
-   Handle **errors gracefully** and send meaningful responses.

------------------------------------------------------------------------

## Summary

-   **Controllers** act as middlemen between routes and business logic.\
-   They help in keeping routes clean and managing logic in a modular
    way.\
-   Promote scalability and maintainability in Express.js applications.
