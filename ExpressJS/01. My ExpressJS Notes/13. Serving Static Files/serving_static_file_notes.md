
# Serving Static Files in Express.js

## What are Static Files?
- Files like HTML, CSS, images, and JavaScript that are not dynamically generated.
- Express provides `express.static()` to serve static files.

---

## Example
```js
import express from "express";
const app = express();

// Serve files from 'public' folder
app.use(express.static("public"));

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

## Folder Structure
```
project/
 ├─ public/
 │   ├─ index.html
 │   ├─ style.css
 │   └─ script.js
 └─ server.js
```

Access:  
- `http://localhost:3000/index.html`
- `http://localhost:3000/style.css`

---

## Points to Remember
- Use `express.static("folderName")`.
- Multiple static directories can be defined.
- Order of middleware matters.
