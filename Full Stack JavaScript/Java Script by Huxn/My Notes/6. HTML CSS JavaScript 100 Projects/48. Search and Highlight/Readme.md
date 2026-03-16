# 🚀 Project 48

> Highlighting text dynamically using JavaScript and regular expressions.               
> Built as part of my 100 Projects Challenge.

---

## 🎥 Demo Video

🔗 Watch here: 
[Video](./demo/Project%2048.mov)        
<video src="./demo/Project 48.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I explored how **regular expressions can dynamically highlight text inside content**.

The key idea is creating a regex pattern from user input:

```javascript id="p1y92a"
let regExp = new RegExp(input, "gi");
```

Then replacing matched words using:

```javascript id="mkqqxg"
p.textContent.replace(regExp, `<mark>${input}</mark>`);
```

This wraps matching words with a `<mark>` tag, visually highlighting them.

This technique is widely used in:

- search result highlighting
- documentation websites
- text editors
- keyword find features

It’s a great example of how **regex + DOM manipulation can create useful interactive tools**.

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
