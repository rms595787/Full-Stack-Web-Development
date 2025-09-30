# Router Params and `param` Method in Express.js

## Router Params

-   **Definition**: Router parameters are variables in the URL defined
    with a colon (`:`).\

-   **Usage**: Commonly used for passing values through the URL (e.g.,
    user IDs, product IDs).\

-   **Example**:

    ``` js
    app.get("/users/:id", (req, res) => {
      const userId = req.params.id;
      res.send(`User ID is ${userId}`);
    });
    ```

-   **Key Points**:

    -   Defined with `:` (e.g., `/users/:id`).
    -   Accessed using `req.params.<name>`.
    -   Multiple params possible: `/users/:id/books/:bookId`.

------------------------------------------------------------------------

## `param` Method

-   **Definition**: A middleware that runs when a specific route
    parameter is present in the URL.\

-   **Usage**: For preprocessing or validating params before request
    handlers.\

-   **Example**:

    ``` js
    app.param("id", (req, res, next, id) => {
      console.log(`ID parameter: ${id}`);
      next();
    });

    app.get("/users/:id", (req, res) => {
      res.send(`User with ID ${req.params.id}`);
    });
    ```

-   **Key Points**:

    -   Executes for routes with the matching param name.
    -   Useful for validation, logging, or preprocessing.
    -   `next()` must be called to continue the request lifecycle.

------------------------------------------------------------------------

## Difference Between Router Params and `param` Method

-   **Router Params** → Define and capture values from the URL.\
-   **`param` Method** → Middleware to handle logic whenever that param
    is used.
