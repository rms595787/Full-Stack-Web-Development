# 🚀 Project 63

> Creating visual password strength feedback using background blur.         
> Built as part of my 100 Projects Challenge.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2063.mov)      
<video src="./demo/Project 63.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

This project demonstrates how **small UI changes can provide powerful user feedback**.

Instead of simply displaying a message like *“Weak Password”* or *“Strong Password”*, this project visually represents password strength by **manipulating the blur level of the background**.

The idea is simple:

* When the password is **short or weak**, the background remains **blurred**
* As the password becomes **longer and stronger**, the blur gradually **reduces**

This is implemented using the CSS property:

```css
filter: blur(value);
```

In JavaScript, the blur value is calculated based on the password length.

Example concept:

```javascript
let blurValue = 20 - password.length * 2;
```

As the password length increases, the blur value decreases, making the background clearer.

This technique creates **visual feedback**, which improves the overall **user experience (UX)**. Instead of reading text warnings, users immediately understand the password strength through visual clarity.

Concepts reinforced in this project include:

* Dynamic styling using JavaScript
* Using CSS `filter` properties for UI effects
* Creating **interactive feedback systems** for form inputs

This type of technique is often used in modern interfaces to make applications feel **more responsive and engaging**.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---