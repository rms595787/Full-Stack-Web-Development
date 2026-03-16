# 🚀 Project 89

> Creating a **Random User Profile generator by fetching data from an external API using AJAX**.        
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2089.mov)            
<video src="./demo/Project 89.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I created a **Random User Profile generator** that fetches data from an external API and displays it on the webpage dynamically.

The API used in this project is:

```text id="u6lqv7"
https://randomuser.me/api/
```

This API provides randomly generated user data including:

* profile image
* full name
* location
* email

Each request returns a **different random profile**, which makes the application dynamic.

---

### Working with AJAX

To fetch the user data, I used **AJAX (Asynchronous JavaScript and XML)**.

AJAX allows a webpage to **communicate with a server and retrieve data without reloading the page**, making the application feel faster and smoother.

This is commonly done using:

```javascript id="l2y7mj"
XMLHttpRequest
```

The request is sent to the API endpoint, and once the response is received, the JSON data is processed and displayed on the page.

---

### Handling API Responses

When the API returns the response, the JSON data contains different user properties such as:

* name
* picture
* location

JavaScript extracts this information and inserts it into the HTML elements to update the UI.

For example, the profile image source is updated and the user's name and location are displayed dynamically.

---

### Dynamic UI Updates

Each time the user refreshes or requests a new profile, the application fetches **another random user** and updates the UI instantly without refreshing the page.

This demonstrates how APIs can be used to **generate dynamic content in real-time**.

---

### Key Learning

This project helped me understand how **external APIs can be integrated into web applications using AJAX to fetch and display dynamic data**, which is a common technique used in modern web applications.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---