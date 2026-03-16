# 🚀 Project 96

> Creating a **modern UI layout inspired by real-world websites while experimenting with flexible layouts, layered images, and responsive media queries for different screen sizes**.  
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2096.mov)  
<video src="./demo/Project 96.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I designed a **clean, modern landing page layout inspired by real-world UI patterns**.
The focus was on understanding **content structuring, layered image positioning, responsive layouts, and component-based UI sections**.

---

### Using CSS Variables for Design System

The project defines colors and fonts using CSS variables.

```css
:root {
  --main-color: #37132d;
  --main-font: "Playfair Display", serif;
  --secondary-font: "Roboto", sans-serif;
}
```

Using CSS variables allows developers to:

- maintain consistent design across sections
- easily update colors and fonts
- reuse styling across multiple components

Example usage:

```css
.main-btn {
  background: var(--main-color);
}
```

---

### Flexbox Layout for Page Structure

Many sections rely on **Flexbox** to control layout.

Example concept:

```css
.content-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
```

Flexbox makes it easier to:

- align text and images side by side
- automatically wrap elements on smaller screens
- maintain consistent spacing between UI components

This approach is widely used in **modern landing pages and dashboards**.

---

### Layered Image Positioning

The header images use **absolute positioning** to create layered visual effects.

Example concept:

```css
.img-one {
  position: absolute;
  left: 10rem;
}
```

Layered image positioning helps create **dynamic hero sections** often used in:

- portfolio websites
- landing pages
- promotional pages

It allows images to overlap in visually interesting ways.

---

### Card-Based Service Layout

The services section uses **card components**.

Example concept:

```css
.card {
  width: 300px;
  height: 440px;
}
```

Each card contains:

- an image section
- service title
- service description

Card layouts are widely used in:

- service websites
- ecommerce platforms
- dashboard interfaces

---

### Image Background Styling

Images are styled using background properties.

Example concept:

```css
background-size: cover;
background-position: top;
```

These properties ensure that images:

- scale properly
- remain centered
- fill their containers correctly

This is commonly used in **hero sections and card images**.

---

### Responsive Design with Media Queries

To ensure the layout works across devices, media queries are used.

Example:

```css
@media only screen and (max-width: 600px);
```

Media queries allow styles to adapt when screen width becomes smaller.

---

### Hiding Complex Layout Elements on Mobile

Example concept:

```css
.header-img-container {
  display: none;
}
```

Some visual elements that work well on desktop may clutter small screens.
Hiding them improves **mobile readability and performance**.

---

### Changing Layout Direction on Small Screens

Example concept:

```css
.hero-container {
  flex-direction: column;
}
```

This converts a **horizontal layout into a vertical layout**, which works better on mobile devices.

---

### Key Learning

This project helped me understand how **modern landing pages combine Flexbox layouts, layered image positioning, reusable design variables, and responsive media queries to create clean and adaptable UI designs**.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---
