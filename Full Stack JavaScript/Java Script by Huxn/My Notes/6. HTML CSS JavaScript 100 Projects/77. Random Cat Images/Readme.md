# 🚀 Project 77

> Fetching **random cat images using an external API and JavaScript fetch()**.          
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2077.mov)            
<video src="./demo/Project 77.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I learned how to **fetch images dynamically from an API and display them on a webpage using JavaScript**.

The API used in this project is:

```text
https://api.thecatapi.com/v1/images/search
```

This API returns **random cat images in JSON format**.

Example response from the API:

```json
[
  {
    "url": "https://cdn2.thecatapi.com/images/abc123.jpg"
  }
]
```

---

### Using `fetch()` to Call an API

Instead of using `XMLHttpRequest`, this project uses the **modern Fetch API**.

Example:

```javascript
const response = await fetch(url);
```

`fetch()` sends a request to the API and returns a **Promise** containing the server response.

---

### Using `async` and `await`

To make asynchronous code easier to read, we use **async functions**.

Example:

```javascript
async function getCatImage() {
  const response = await fetch(url);
}
```

Here:

* `async` allows the function to use `await`
* `await` pauses the function until the request completes

This makes asynchronous code **look and behave like synchronous code**, which improves readability.

---

### Converting the Response to JSON

After receiving the response, we convert it to JavaScript data:

```javascript
const data = await response.json();
```

`.json()` reads the response body and converts it into a **JavaScript object**.

---

### Displaying the Image

Once we receive the image URL, we update the image element:

```javascript
img.src = data[0].url;
```

Since the API returns an **array**, we access the first object using `[0]`.

Updating `img.src` dynamically loads the new image on the page.

---

### Key Learning

This project helped me understand how **modern JavaScript applications fetch and display media from external APIs**.

Important concepts practiced:

* Fetch API
* async / await
* handling JSON responses
* dynamically updating image sources

These concepts are widely used in **modern web applications that load dynamic content from APIs**.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/posts/rahul-sharma-94960a248_html-css-javascript-activity-7439150981520539648-N8e7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1QkMkBhwXCizY0WuwGuWpwdxhpxwhhA8o)

---

⭐ If you found this helpful, consider giving it a star!

---