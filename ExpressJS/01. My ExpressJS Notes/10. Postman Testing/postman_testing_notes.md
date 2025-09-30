
# Postman Testing in Express.js

## What is Postman?
- Postman is an API testing tool to send requests and view responses.
- Useful for testing Express routes.

---

## Steps for Testing in Postman
1. Open Postman app.
2. Select request type (GET, POST, PUT, DELETE).
3. Enter your API endpoint (e.g., `http://localhost:3000/users`).
4. For POST/PUT requests, add JSON data in the **Body** → **raw** → JSON.
5. Click **Send** and see response.

---

## Example Request
### GET Request
```
GET http://localhost:3000/users?name=Rahul
```

### POST Request with JSON Body
```
POST http://localhost:3000/users
Body (JSON):
{
  "name": "Rahul",
  "age": 22
}
```

---

## Benefits of Postman
- Easy testing without frontend.
- Saves collections for API documentation.
- Helps debug backend issues quickly.
