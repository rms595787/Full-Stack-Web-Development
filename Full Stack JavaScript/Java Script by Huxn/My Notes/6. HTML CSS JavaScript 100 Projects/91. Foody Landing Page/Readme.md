# 🚀 Project 91

> Creating a **Foody Landing Page focused on responsive design and UI adaptability across different screen sizes using Media Queries**.  
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2091.mov)  
<video src="./demo/Project 91.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I created a **Foody Landing Page** with a strong focus on **responsive UI design and layout adaptability across different screen sizes**.
The main goal of this project was to understand how **CSS layouts behave on mobile devices and how media queries help restructure the UI for smaller screens**.

---

### Using CSS Variables for Consistent Design

The project defines design variables using the `:root` selector.

```css
:root {
  --main-color: #d41b27;
  --black-color: #050505;
  --main-font: "Playfair Display";
  --secondary-font: Roboto;
}
```

CSS variables make it easier to:

- maintain consistent color themes
- reuse fonts and colors across the project
- quickly update the design system

For example:

```css
.highlight {
  color: var(--main-color);
}
```

This allows the same color to be reused in multiple UI elements.

---

### Flexbox Layout for Responsive Sections

Many sections such as headers and cards use **Flexbox**.

Example concept:

```css
display: flex;
justify-content: center;
align-items: center;
```

Flexbox helps create layouts that:

- align items vertically and horizontally
- wrap elements when screen width changes
- keep content centered on different devices

Example section using Flexbox:

```css
.delivery {
  display: flex;
  flex-wrap: wrap;
}
```

`flex-wrap` allows elements to move to the next line when the screen becomes smaller.

---

### Card-Based UI Layout

The landing page includes sections like **service cards and feature cards**.

Example concept:

```css
.cards__card {
  width: 30%;
}
```

This creates a **three-column layout on large screens**.

On smaller screens, media queries change this layout so that cards stack vertically.

---

### Hero and Section Layout Control

Large headings are used to build visual hierarchy.

Example concept:

```css
.main-headings {
  font-size: 400%;
}
```

Large typography is important for **hero sections in landing pages** because it draws the user's attention.

---

### Responsive Design with Media Queries

The most important part of this project is **media query usage for mobile screens**.

Example:

```css
@media only screen and (max-width: 600px);
```

This tells the browser:

> Apply these styles only when the screen width is **600px or smaller**.

Inside the media query, several layout adjustments are made.

---

### Adjusting Typography for Mobile

Example:

```css
.main-headings {
  font-size: 2rem;
}
```

Large headings that work on desktop screens can appear too large on mobile devices, so the font size is reduced.

---

### Repositioning Elements for Smaller Screens

Example:

```css
.delivery {
  text-align: center;
}
```

When the screen becomes smaller, content alignment changes to improve readability.

Another example:

```css
.delivery__img {
  margin: 0 auto;
}
```

This centers images on mobile layouts.

---

### Adjusting Section Heights

Some sections also adjust their height to accommodate stacked elements.

Example concept:

```css
.why-foody {
  height: 120vh;
}
```

This prevents overlapping or cramped layouts when elements stack vertically.

---

### Key Learning

This project helped me understand how **responsive landing pages are designed using CSS variables, Flexbox layouts, and media queries to ensure the UI adapts smoothly across desktop, tablet, and mobile devices**.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---
