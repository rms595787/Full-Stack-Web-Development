# 🚀 Project 64

> Generating beautiful random gradients using JavaScript and the HTML color input.          
> Built as part of my 100 Projects Challenge.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2064.mov)  
<video src="./demo/Project 64.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

This project explores how easy it is to build visually impressive UI elements using **HTML color inputs and JavaScript-generated gradients**.

HTML provides a very useful input type:

```html
<input type="color" />
```

This input opens the browser’s **native color picker**, allowing users to select any color visually. It returns the selected color in **hexadecimal format**, such as:

```
#ff5733
#34a1eb
#2ecc71
```

Using JavaScript, we can also generate **random colors automatically**. The formula used in this project is:

```javascript id="c4ks98"
let randomColor = Math.floor(Math.random() * 16777215).toString(16);
```

### Understanding the Formula

**1️⃣ Math.random()**

Generates a random number between:

```
0 and 1
```

**2️⃣ 16777215**

This number represents the **maximum value of a 24-bit color**, which corresponds to the full range of hexadecimal colors from:

```
#000000 → #FFFFFF
```

Total possible colors:

```
16,777,216
```

**3️⃣ Math.floor()**

Removes the decimal portion, ensuring we get a whole number.

**4️⃣ toString(16)**

Converts the number into **base-16 (hexadecimal)** format, which is the format used in CSS color values.

Example result:

```
#3fa2c1
#f4a261
#a855f7
```

### Creating Random Gradients

By generating **two random colors**, we can create beautiful gradient backgrounds:

```css
background: linear-gradient(color1, color2);
```

Each time the function runs, the page produces **a completely new gradient combination**, which makes the UI feel dynamic and creative.

This project highlights how **simple JavaScript logic combined with CSS gradients can create visually impressive designs with very little code**.

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
