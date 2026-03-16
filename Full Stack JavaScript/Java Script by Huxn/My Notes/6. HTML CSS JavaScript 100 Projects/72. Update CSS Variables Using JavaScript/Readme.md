# 🚀 Project 72

> Updating **CSS variables dynamically using JavaScript**.  
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2072.mov)  
<video src="./demo/Project 72.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I learned how **JavaScript can dynamically update CSS variables**, allowing real-time visual changes in the UI.

The application manipulates properties such as:

- padding
- background color
- blur level

using input controls.

---

### Selecting Inputs

```javascript
const input = document.querySelectorAll("input");
```

This selects all input elements on the page.

---

### Handling Updates

```javascript
function handleUpdate() {
  this.name == "base" ? (suppix = "") : (suppix = "px");
}
```

Each input has a **name attribute** such as:

```
spacing
blur
base
```

If the property is **base (color)** we don't add `px`.
Other properties like blur or spacing require **px units**.

---

### Updating CSS Variables

```javascript
document.documentElement.style.setProperty(
  `--${this.name}`,
  this.value + suppix,
);
```

This line dynamically updates the **CSS variable** defined in `:root`.

Example CSS variable:

```css
:root {
  --spacing: 10px;
}
```

If the slider value changes to **20**, the variable becomes:

```
--spacing: 20px
```

Because we update the **root element**, the entire UI updates automatically.

---

### Event Listener

```javascript
input.forEach((input) => input.addEventListener("change", handleUpdate));
```

Whenever an input value changes, the CSS variable updates instantly.

---

This technique is extremely powerful for building:

- live theme editors
- design tools
- interactive UI controls
- dynamic styling systems

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---
