# 🚀 Project 95

> Creating a **modern product-style landing page with visually appealing UI components while experimenting with responsive layouts and media queries for multiple screen sizes**.  
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2095.mov)  
<video src="./demo/Project 95.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I focused on building a **clean and visually appealing UI that resembles real-world product showcase websites**.
The main goal was to experiment with **layout structures, product card designs, and responsive behavior using media queries**.

---

### Using CSS Variables for Design Consistency

The project defines reusable colors and fonts using CSS variables.

```css
:root {
  --main-color: #e3e8e4;
  --primary-color: #363636;
  --main-font: "Playfair Display SC", serif;
}
```

Using CSS variables helps maintain a **consistent design system** across the entire project.

For example:

- the same color palette can be reused in multiple sections
- fonts remain consistent across headings and content
- theme changes become easier

---

### Navigation Layout Structure

The navigation bar uses Flexbox to distribute elements evenly.

Example concept:

```css
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
```

This layout technique helps create **balanced navigation bars** and is widely used in modern web design.

---

### Circular Image Containers

One interesting UI element used in this project is the **circular image container**.

Example concept:

```css
.img-container {
  border-radius: 100%;
}
```

Circular image layouts are commonly used in:

- product showcase sections
- hero images
- testimonial sections

They create a **clean and modern visual appearance**.

---

### Product Card Design

The product section uses a **card-based UI layout**.

Example concept:

```css
.products {
  display: flex;
  flex-wrap: wrap;
}
```

Each card contains:

- product image
- product title
- product details

Card layouts are commonly used in:

- ecommerce websites
- product catalogs
- dashboard interfaces

---

### Grid Layout for Feature Cards

The project also uses **CSS Grid** to organize small feature cards.

Example concept:

```css
.cards {
  display: grid;
  grid-template-columns: 2fr 2fr;
}
```

Grid layouts make it easier to create **structured layouts with equal spacing between elements**.

This technique is commonly used in:

- feature sections
- service sections
- dashboard widgets

---

### Layered Product Image Design

The product images are placed inside styled containers to create a layered design effect.

Example concept:

```css
.product-img-layer {
  border-top-left-radius: 200px;
  border-top-right-radius: 200px;
}
```

This styling creates a **unique product presentation layout**, often used in ecommerce landing pages.

---

### Responsive Design with Media Queries

To ensure the UI works well on different screen sizes, media queries are used.

Example:

```css
@media only screen and (max-width: 900px);
```

Inside the media query several layout adjustments are applied.

---

### Hiding Elements for Smaller Screens

Example concept:

```css
.d-none {
  display: none;
}
```

Sometimes elements that look good on large screens may clutter smaller screens, so they are hidden to maintain a clean layout.

---

### Adjusting Layout Alignment on Mobile

Example concept:

```css
header {
  text-align: center;
}
```

Center alignment improves readability on smaller screens where horizontal space is limited.

---

### Key Learning

This project helped me understand how **product-focused landing pages combine card layouts, grid systems, reusable CSS variables, and responsive media queries to create visually appealing and adaptable user interfaces**.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---
