# 🚀 Project 65

> Building layouts using CSS Grid and creating visual effects with clip-path.  
> Built as part of my 100 Projects Challenge.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2065.mov)  
<video src="./demo/Project 65.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

This project introduced two powerful CSS concepts: **CSS Grid for layouts** and **clip-path for visual masking effects**.

---

### CSS Grid

CSS Grid is a modern layout system that allows developers to create **two-dimensional layouts using rows and columns**.

To enable grid layout:

```css
container {
  display: grid;
}
```

One of the most useful properties is:

```css
grid-template-columns: 1fr 1fr;
```

Here `fr` stands for **fraction of available space**.

Examples:

```
1fr 1fr
```

Both columns share equal space.

```
1fr 2fr
```

The second column gets **twice the space of the first column**.

Another important property is:

```css
grid-row: 1 / 2;
```

This means the element starts at **grid line 1** and ends at **grid line 2**, allowing elements to span specific rows.

CSS Grid is extremely useful for building layouts such as:

- dashboards
- image galleries
- responsive layouts
- complex page structures

---

### clip-path

Another interesting property explored in this project is **clip-path**.

`clip-path` defines which part of an element is **visible** and hides everything outside that shape.

Example:

```css
clip-path: inset(0 0 0 50%);
```

The `inset()` function works similarly to margin or padding and follows the order:

```
top right bottom left
```

So in:

```
inset(0 0 0 50%)
```

- top → 0
- right → 0
- bottom → 0
- left → 50%

This means **50% of the element from the left side is clipped**, revealing only half of the element.

This technique is widely used for:

- reveal animations
- image comparison sliders
- creative UI transitions
- masking effects

Combining **CSS Grid for structure** and **clip-path for visuals** shows how modern CSS allows developers to build complex layouts and animations with surprisingly little code.

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
