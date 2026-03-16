# 🚀 Project 78

> Fetching **random Dad Jokes using an external API with fetch() and async/await**.    
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2078.mov)        
<video src="./demo/Project 78.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I worked with the **icanhazdadjoke API** to fetch random jokes and display them on the webpage using **modern JavaScript asynchronous programming**.

The API used in this project:

```text id="2t19f3"
https://icanhazdadjoke.com/
```

---

### API URL

```javascript id="f9z1ns"
const url = "https://icanhazdadjoke.com/";
```

This is the endpoint from which we request a random joke.

---

### Button Event Listener

```javascript id="vtqwdc"
const btn = document.getElementById("btn");
btn.addEventListener("click", joke);
```

This attaches a **click event** to the button so that every time the button is pressed, a new joke is fetched from the API.

---

### Async Function

```javascript id="vd9kmq"
async function joke() {
```

The `async` keyword allows us to use `await` inside the function, which helps handle asynchronous operations more cleanly.

---

### Request Configuration

```javascript id="a03i5g"
let config = {
  headers: {
    Accept: "application/json",
  },
};
```

Here we pass **request headers**.

The important part is:

```text id="xq1ep9"
Accept: application/json
```

This tells the API that we want the response in **JSON format** instead of HTML or plain text.

---

### Fetching Data

```javascript id="u4krg8"
let a = await fetch(url, config);
```

`fetch()` sends a request to the API.

Because we use `await`, JavaScript waits until the response is received before moving to the next line.

---

### Converting Response to JSON

```javascript id="h7r2t5"
let b = await a.json();
```

`.json()` reads the response body and converts it into a **JavaScript object**.

Example response:

```json id="y6j5m3"
{
  "joke": "I only know 25 letters of the alphabet. I don't know y."
}
```

---

### Displaying the Joke

```javascript id="5t79o7"
document.getElementById("content").innerHTML = b.joke;
```

Here we update the page by inserting the joke text into the element with id `content`.

Each button click fetches and displays **a new joke dynamically**.

---

### Key Learning

This project helped me practice important modern JavaScript concepts such as:

* Fetch API
* async / await
* request headers
* handling JSON responses
* dynamically updating webpage content

These concepts are widely used in **real-world web applications that interact with external APIs**.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---