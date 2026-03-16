# 🚀 Project 50

> Exploring smarter ways to detect DOM elements during events.      
> Built as part of my 100 Projects Challenge.

---

## 🎥 Demo Video

🔗 Watch here: 
[Video](./demo/Project%2050.mov)        
<video src="./demo/Project 50.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

When handling events in complex layouts, identifying the correct element becomes critical.

This project explores two approaches.

Checking the parent element:

```id="hxtv7q"
e.target.parentNode.classList.contains("rating")
```

And a cleaner approach using:

```id="b45g8h"
e.target.closest(".rating")
```

The `closest()` method searches **up the DOM tree**, making it far more reliable in nested layouts.

This technique is heavily used in **event delegation patterns**, which improves performance and simplifies event management.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/posts/rahul-sharma-94960a248_html-css-javascript-activity-7435889474141609984-l-o7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1QkMkBhwXCizY0WuwGuWpwdxhpxwhhA8o)

---

⭐ If you found this helpful, consider giving it a star!

---
