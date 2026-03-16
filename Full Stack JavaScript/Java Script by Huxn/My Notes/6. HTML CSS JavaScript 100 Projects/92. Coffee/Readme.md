# 🚀 Project 92

> Creating a **Coffee Landing Page focused on responsive layouts, structured UI sections, and media query optimization for different screen sizes**.  
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2092.mov)  
<video src="./demo/Project 92.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I created a **Coffee Landing Page UI** and practiced improving **responsive design using media queries**.
The main goal was to design a layout that looks visually appealing on **large desktop screens and also adapts smoothly on smaller devices**.

---

### Using CSS Variables for Theme Consistency

The project defines theme colors using CSS variables.

```css
:root {
  --main-color: #deab5f;
  --primary-color: #312e2e;
}
```

Using variables allows colors to be reused throughout the stylesheet.

Example usage:

```css
button {
  background: var(--main-color);
}
```

Benefits of this approach:

- consistent color theme
- easier design updates
- reusable styling across multiple components

---

### Flexbox Layout for Structured Sections

Many sections use **Flexbox** to arrange elements.

Example concept:

```css
display: flex;
justify-content: space-around;
align-items: center;
```

This layout system helps build:

- navigation bars
- product card sections
- content-image layouts

Flexbox also allows elements to wrap automatically when the screen size changes.

---

### Hero Section with Background Images

The hero section uses a **full screen background image**.

Example concept:

```css
.header {
  background-position: center;
  background-size: cover;
  height: 100vh;
}
```

Important properties here:

- `background-position: center` keeps the image centered
- `background-size: cover` ensures the image fills the container
- `height: 100vh` makes the hero section fill the entire screen height

This is a common technique used in **modern landing pages**.

---

### Card-Based Product Layout

The product section uses **card-based UI design**.

Example concept:

```css
.card {
  border: 2px solid var(--main-color);
  display: flex;
  flex-direction: column;
}
```

Card layouts are widely used in web design for displaying:

- products
- blog posts
- services
- portfolio items

They create **clean and structured content sections**.

---

### Absolute Positioning for Visual Elements

Some elements use positioning to create layered designs.

Example concept:

```css
.card-img {
  position: absolute;
  top: -60px;
}
```

This allows images to **overlap card containers**, which improves the visual design of the UI.

This technique is commonly used in:

- product cards
- profile cards
- UI dashboards

---

### Responsive Design Using Media Queries

The project uses **media queries to adjust layout for smaller screens**.

Example:

```css
@media only screen and (max-width: 768px);
```

This ensures the design adapts to tablets and mobile devices.

Inside the media query several improvements are made.

---

### Responsive Typography

Large headings are scaled down on smaller devices.

Example concept:

```css
.main-headings {
  font-size: 2.5rem;
}
```

This prevents text from overflowing or breaking the layout.

---

### Layout Adjustments for Mobile

Some layout sections switch to centered alignment.

Example concept:

```css
#our-story {
  text-align: center;
}
```

Other elements are resized or repositioned so that the UI remains readable on smaller screens.

---

### Key Learning

This project helped me understand how **landing pages combine structured layouts, reusable design variables, and responsive media queries to create interfaces that look good on all screen sizes**.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---
