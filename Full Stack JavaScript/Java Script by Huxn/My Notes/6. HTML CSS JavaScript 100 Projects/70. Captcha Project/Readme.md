# 🚀 Project 70

> Creating a simple CAPTCHA generator and verification system using JavaScript.   
> Built as part of my 100 Projects Challenge.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2070.mov)      
<video src="./demo/Project 70.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I explored how **CAPTCHA systems work and how they help prevent automated bot submissions** on websites.

The idea behind CAPTCHA generation is simple. First, we create a **string containing all characters that can appear in the CAPTCHA**, such as letters and numbers.

Example:

```javascript id="c1"
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
```

Then a loop runs for the desired CAPTCHA length and selects **random characters from the string** using:

```javascript id="c2"
Math.floor(Math.random() * chars.length)
```

Each iteration picks a random character and builds the final CAPTCHA string.

Example output:

```id="c3"
A7B9X
Q2D8K
```

The user must enter the same value to pass verification. A **refresh button** simply generates a new CAPTCHA by calling the same generation function again.

This project demonstrates how **random string generation and input validation** can be combined to create simple security features used in many login and signup systems.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/posts/rahul-sharma-94960a248_frontenddevelopment-javascript-html-activity-7438063848760266752-yQom?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1QkMkBhwXCizY0WuwGuWpwdxhpxwhhA8o)

---

⭐ If you found this helpful, consider giving it a star!

---
