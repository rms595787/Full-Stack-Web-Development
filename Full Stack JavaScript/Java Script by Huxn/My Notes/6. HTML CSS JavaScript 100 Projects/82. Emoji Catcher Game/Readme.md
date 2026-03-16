# 🚀 Project 82

> Creating a **simple Emoji Catcher Game using JavaScript randomization and time-based logic**.     
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2082.mov)        
<video src="./demo/Project 82.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

This was the **first game I created in this project series**, and it showed me that building games with JavaScript is not as difficult as it initially seems. While the game itself is simple, it helped me understand several important programming concepts.

The main idea of the game is:

* multiple boxes appear on the screen
* one of the boxes randomly contains an emoji
* the player must click the correct box
* the number of correct clicks within the time limit becomes the score

### Random Selection

To randomly place the emoji inside one of the boxes, the **random function** is used.

Example logic:

```javascript
Math.floor(Math.random() * boxes.length)
```

This generates a random index from the list of boxes, ensuring the emoji appears in **different locations each round**.

### Time-Based Game Logic

The game also relies on **JavaScript timers** to control gameplay.

`setInterval()` is used to repeatedly update the emoji position after a specific time interval.

Example use cases:

* moving the emoji to a new box
* updating the score timer
* controlling the duration of the game

### Score Tracking

Each time the user clicks the correct box containing the emoji, the score increases. The goal is to achieve the **highest score within the limited time**.

### Key Learning

This project helped me understand how **randomization, event handling, and timing functions can be combined to create simple interactive browser games**, which is a foundational concept in JavaScript game development.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---