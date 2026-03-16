# 🚀 Project 67

> Building a Random Password Generator using JavaScript logic and randomness.     
> Built as part of my 100 Projects Challenge.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2067.mov)      
<video src="./demo/Project 67.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I built a **Random Password Generator**, which demonstrates how randomness and loops can be combined to create useful utilities.

The idea behind generating a random password is surprisingly simple.

### Step 1 — Define All Possible Characters

First we create a string (or an array) containing all the characters that can appear in the password.

Example:

```javascript id="6i8h3v"
const characters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
```

This string acts as a **pool of characters** that our password generator can choose from.

---

### Step 2 — Generate a Random Character

To pick a random character, we generate a random index using:

```javascript id="db3v5u"
Math.floor(Math.random() * characters.length)
```

Explanation:

* `Math.random()` generates a number between **0 and 1**
* Multiplying by `characters.length` expands that range
* `Math.floor()` removes decimals to get a valid array index

This allows us to **select a random character from the string**.

---

### Step 3 — Build the Password Using a Loop

Next we run a loop based on the desired password length.

Example:

```javascript id="gnw0pj"
for (let i = 0; i < length; i++) {
  password += characters[randomIndex];
}
```

Each iteration selects a random character and adds it to the password.

Example output:

```
aB9$K2dQ
T4@pL8xY
```

Every generated password is **completely random and unique**.

---

### Where This Concept Is Used

Random password generators are commonly used in:

* password managers
* account creation systems
* security tools
* authentication platforms

This project is a great example of how **simple JavaScript concepts like loops and random number generation can be used to build practical security tools**.

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