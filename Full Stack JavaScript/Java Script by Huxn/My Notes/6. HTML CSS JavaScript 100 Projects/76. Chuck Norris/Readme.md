# 🚀 Project 76

> Fetching **random Chuck Norris jokes using AJAX and XMLHttpRequest**.         
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2076.mov)            
<video src="./demo/Project 76.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I learned how **AJAX works and how websites fetch data from APIs without refreshing the page**. I used **XMLHttpRequest**, one of the older but fundamental ways of making asynchronous HTTP requests in JavaScript.

The API used in this project:

```text
https://api.chucknorris.io/jokes/random
```

This API returns a **random Chuck Norris joke in JSON format**.

---

### Selecting Elements

```javascript
const displayJoke = document.getElementById("display-joke");
const button = document.getElementById("getJoke");
```

Here we select:

* the element where the joke will be displayed
* the button that triggers the API request.

---

### Event Listener

```javascript
button.addEventListener("click", getRandomJoke);
```

When the button is clicked, the `getRandomJoke()` function runs.

---

### Creating an AJAX Request

```javascript
const ajax = new XMLHttpRequest();
```

`XMLHttpRequest` is used to **send HTTP requests to a server and receive responses asynchronously**, meaning the page does not reload.

---

### Opening the Request

```javascript
ajax.open("GET", url, true);
```

This line prepares the request.

Parameters:

* **GET** → request method
* **url** → API endpoint
* **true** → request runs asynchronously

---

### Handling Server Response

```javascript
ajax.onreadystatechange = () => {
```

This function runs whenever the request state changes.

We check two important conditions:

```javascript
if (ajax.readyState === 4)
```

`readyState = 4` means **the request is completed**.

```javascript
if (ajax.status === 200)
```

`status = 200` means **the request was successful**.

---

### Parsing JSON Data

```javascript
let data = JSON.parse(ajax.responseText);
```

The API response comes as **JSON text**, so we convert it into a **JavaScript object** using `JSON.parse()`.

Example API response:

```json
{
  "value": "Chuck Norris counted to infinity... twice."
}
```

---

### Displaying the Joke

```javascript
displayJoke.innerHTML = `${data.value}`;
```

This inserts the joke text into the page dynamically.

---

### Error Handling

```javascript
function onerror() {
  displayJoke.textContent = `Something Went Wrong :(`;
}
```

If something fails during the request, a message is displayed instead of the joke.

---

### Key Learning

This project helped me understand the **core idea of asynchronous communication between a website and a server**.

Concepts I practiced:

* AJAX requests
* `XMLHttpRequest`
* API integration
* JSON parsing
* updating UI dynamically with JavaScript

These are fundamental concepts used in **modern web applications to fetch live data without reloading the page**.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/posts/rahul-sharma-94960a248_html-css-javascript-activity-7439150981520539648-N8e7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1QkMkBhwXCizY0WuwGuWpwdxhpxwhhA8o)

---

⭐ If you found this helpful, consider giving it a star!

---