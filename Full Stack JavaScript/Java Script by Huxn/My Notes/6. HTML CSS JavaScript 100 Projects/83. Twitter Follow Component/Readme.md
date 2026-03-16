# 🚀 Project 83

> Creating a **Twitter Follow Component with interactive UI behavior using CSS variables and JavaScript DOM manipulation**.     
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2083.mov)            
<video src="./demo/Project 83.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I built a **Twitter-style Follow Component** and explored several useful CSS and JavaScript techniques for building reusable UI components.

### CSS `:root` Variables

This was the first time I used **CSS variables defined inside `:root`**.

Example:

```css id="8ycf38"
:root {
  --primary-color: #1da1f2;
}
```

Variables defined in `:root` can be used **anywhere in the CSS file**.

Example usage:

```css id="c44m5v"
button {
  background: var(--primary-color);
}
```

### Why CSS Variables Are Useful

Using variables helps with:

* maintaining consistent colors across the UI
* building theme systems
* updating design quickly from a single place

For example, changing one variable can instantly update the **entire site's color theme**.

---

### Removing Mobile Tap Highlight

```css id="1vbwnb"
.show-more:focus {
  -webkit-tap-highlight-color: transparent;
}
```

Mobile browsers often show a **tap highlight when elements are clicked**.
This line removes that effect to create a **cleaner mobile UI experience**.

---

### JavaScript DOM Manipulation

Several useful DOM properties and methods were used in this project.

**classList**

```javascript id="o1r7i2"
element.classList.toggle("active")
```

This allows us to dynamically add or remove classes.

---

**className**

Used to directly assign or update the class name of an element.

---

**innerText**

Updates the visible text inside an element.

Example:

```javascript id="uxc79a"
element.innerText = "Following";
```

---

**innerHTML**

Allows inserting HTML content inside an element.

Example:

```javascript id="7fc0ns"
element.innerHTML = "<strong>Followed</strong>";
```

---

### Key Learning

This project helped me understand how **CSS variables and JavaScript DOM manipulation work together to create interactive and reusable UI components**, similar to those used in modern social media interfaces.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---