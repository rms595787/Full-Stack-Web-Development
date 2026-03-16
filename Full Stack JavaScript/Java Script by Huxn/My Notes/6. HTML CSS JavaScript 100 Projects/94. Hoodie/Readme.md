# 🚀 Project 94

> Creating an **intriguing product-style UI while experimenting with responsive layouts, CSS variables, component-based design, and media queries**.        
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2094.mov)        
<video src="./demo/Project 94.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I focused on building a **visually appealing UI layout** while experimenting with **CSS variables, component-based layouts, Flexbox structures, and responsive design using media queries**.

The project helped me understand how modern websites organize UI components and maintain design consistency.

---

### CSS Variables for Reusable Design

The project defines fonts and colors using CSS variables.

```css
:root {
  --main-font: "Playfair Display", serif;
  --primary-font: "Roboto", sans-serif;
  --main-color: #239b7e;
}
```

Using CSS variables allows developers to:

* reuse styles across multiple components
* easily change themes
* maintain design consistency across the UI

Example usage:

```css
.btn-fill {
  background: var(--main-color);
}
```

This ensures that buttons always follow the same theme color.

---

### Smooth Scrolling for Better Navigation

The project uses:

```css
scroll-behavior: smooth;
```

This enables **smooth scrolling when navigating between sections** of the page.

This feature is commonly used in:

* landing pages
* portfolio websites
* documentation websites

It improves the **overall user experience when moving between page sections**.

---

### Flexbox Layout for Responsive Structure

Many sections use **Flexbox** to control layout structure.

Example concept:

```css
header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
```

Flexbox helps create layouts that:

* automatically adapt when screen width changes
* maintain spacing between elements
* allow content to wrap on smaller screens

This approach is widely used in **modern responsive web design**.

---

### Card-Based Product Layout

Products are displayed using a **card layout structure**.

Example concept:

```css
.product-items-container {
  display: flex;
  flex-wrap: wrap;
}
```

Each product card contains:

* image
* name
* price
* product link

Card layouts are widely used in:

* ecommerce websites
* product catalogs
* portfolio grids

---

### Circular Image Containers

Some images are styled as circular profile images.

Example concept:

```css
.customer .img {
  border-radius: 100%;
}
```

This technique is commonly used in:

* testimonial sections
* profile cards
* review sections

It creates a cleaner and more modern UI design.

---

### Button Interaction Effects

Buttons include hover animations to improve interactivity.

Example concept:

```css
.btn-fill:hover {
  background: white;
  color: var(--main-color);
}
```

These hover transitions help provide **visual feedback when users interact with UI elements**.

---

### Responsive Design with Media Queries

The project adjusts layouts using media queries.

Example:

```css
@media only screen and (max-width: 900px)
```

Inside this media query several layout changes occur.

---

### Resizing Layout Elements

Example concept:

```css
.header-img {
  width: 250px;
  height: 250px;
}
```

Large images used on desktop screens are resized to better fit smaller screens.

---

### Adjusting Typography for Smaller Screens

Example concept:

```css
.main-headings {
  font-size: 3rem;
}
```

This prevents headings from overflowing on mobile devices.

---

### Key Learning

This project helped me understand how **component-based UI design, reusable CSS variables, Flexbox layouts, and media queries work together to create scalable and responsive website interfaces**.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---