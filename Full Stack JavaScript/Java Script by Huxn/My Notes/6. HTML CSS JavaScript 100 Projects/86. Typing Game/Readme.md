# 🚀 Project 86

> Creating a **Typing Speed Game that evaluates typing accuracy by comparing user input with a randomly generated passage**.            
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2086.mov)            
<video src="./demo/Project 86.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I built my **second game in the series — a Typing Game**. The goal of the game is simple: a random passage is displayed on the screen and the user must type the same text as accurately as possible.

This project helped me explore **string comparison, iteration, and real-time input evaluation**.

---

### Random Passage Generation

Each time the game starts, a **random passage** is selected from a list so that every typing test feels different.

Example concept:

```javascript id="8nqgti"
passages[Math.floor(Math.random() * passages.length)]
```

This ensures the user receives a **different text passage every round**.

---

### Comparing the Typed Text

To evaluate the typing accuracy, the program compares:

* the **original passage**
* the **user's typed input**

This is done by iterating through both texts and checking them **character by character or word by word**.

Example logic:

* loop through the original text
* compare each typed character with the expected one
* count correct matches

This allows the program to determine:

* correct characters
* incorrect characters
* overall typing accuracy

---

### Scoring the Typing Performance

The score is calculated based on how many words or characters match the original passage.

For example:

* correct words increase the score
* incorrect characters highlight typing mistakes

This makes the game useful for **practice and learning typing speed**.

---

### Key Learning

This project helped me understand how **string iteration and user input comparison can be used to build interactive applications like typing tests**, which are commonly used for improving typing speed and accuracy.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---