# 🚀 Project 68

> Building a Box Shadow Generator using range inputs, color inputs, and dynamic CSS styling.    
> Built as part of my 100 Projects Challenge.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2068.mov)      
<video src="./demo/Project 68.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

This project explores how **interactive UI tools can be created using HTML input elements and dynamic CSS styling**. The main goal of the project was to build a **Box Shadow Generator**, where users can adjust sliders and colors to create custom shadow effects.

---

### Range Input

One of the main inputs used in this project is:

```html
<input type="range">
```

Range inputs are used to create **slider controls**, which allow users to select numeric values easily.

Important attributes of a range input include:

```
min
max
value
step
```

Example:

```html
<input type="range" min="0" max="50" value="10">
```

These sliders can control properties such as:

* horizontal shadow offset
* vertical shadow offset
* blur radius
* spread radius

Range inputs are commonly used in real applications for things like:

* volume controls
* brightness adjustments
* sliders in design tools
* animation timing controls

---

### Color Input

Another useful input type explored in this project is:

```html
<input type="color">
```

This input opens the browser’s **built-in color picker**, allowing users to visually select colors.

It returns color values in **hexadecimal format**, for example:

```
#ff0000
#3498db
#2ecc71
```

This makes it very convenient to allow users to customize colors dynamically.

---

### Understanding the Box Shadow Function

The following function dynamically generates a CSS `box-shadow` value based on user input:

```javascript id="z6y6mq"
function createBox() {
  let X = sliders[0].value;
  let Y = sliders[1].value;
  let blurRadius = sliders[2].value;
  let spreadRadius = sliders[3].value;

  let shadowColor = colors[0].value;
  let boxShadow = `${X}px ${Y}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`;

  document.getElementById("box").style.cssText =
    `box-shadow: ${boxShadow}`;
  output.value = `box-shadow: ${boxShadow}`;
}
```

### How the Function Works

1️⃣ The slider inputs provide numerical values for:

* horizontal offset (`X`)
* vertical offset (`Y`)
* blur radius
* spread radius

2️⃣ The color input provides the **shadow color**.

3️⃣ All values are combined into a single string representing the CSS box-shadow property:

Example result:

```
box-shadow: 10px 15px 20px 5px #000000;
```

4️⃣ This value is then applied to the element dynamically.

---

### What is `cssText`?

One new property explored in this project is:

```javascript
element.style.cssText
```

`cssText` allows developers to **apply multiple CSS styles to an element using a single string**.

Example:

```javascript
element.style.cssText = "background:red; color:white;";
```

In this project it is used to **directly update the box-shadow style of the element** based on the slider values.

---

### Why This Project is Useful

Projects like this demonstrate how developers can build **interactive design tools directly in the browser**.

Similar concepts are used in:

* CSS generators
* UI design tools
* theme customizers
* visual style editors

This project shows how **HTML inputs + JavaScript + dynamic CSS updates** can create powerful and user-friendly tools.

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