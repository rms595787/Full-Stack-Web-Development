# Template Engines in Express - [Link](https://expressjs.com/en/guide/using-template-engines.html#using-template-engines-with-express)

## EJS Template [Link](https://ejs.co)

## Steps to use EJS Template

1. Install EJS Template

- run command `npm i ejs`

2.

## What is a Template Engine?

- A template engine helps to generate dynamic HTML pages on the server side.
- It allows embedding JavaScript code inside HTML.

---

## EJS (Embedded JavaScript)

- EJS is one of the most popular template engines for Express.
- File extension: `.ejs`
- Syntax similar to HTML with special tags for JS.

---

## Installing EJS

```bash
npm install ejs
```

---

## Setting Up EJS in Express

```js
import express from "express";
const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Define a route
app.get("/", (req, res) => {
  res.render("index", { name: "Rahul" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

## Example `index.ejs`

```html
<!DOCTYPE html>
<html>
  <head>
    <title>EJS Example</title>
  </head>
  <body>
    <h1>Hello <%= name %></h1>
  </body>
</html>
```

---

## EJS Syntax

- `<%= %>` → Output value (escaped)
- `<%- %>` → Output unescaped HTML
- `<% %>` → Run JavaScript code without output

Example:

```ejs
<ul>
  <% users.forEach(user => { %>
    <li><%= user %></li>
  <% }) %>
</ul>
```

---

## Points to Remember

- Views are stored in the `views` folder by default.
- `res.render(view, data)` is used to render EJS files.
- EJS makes it easier to reuse layouts with partials (`<%- include('header') %>`).
