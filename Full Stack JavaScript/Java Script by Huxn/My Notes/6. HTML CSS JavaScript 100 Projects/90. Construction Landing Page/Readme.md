# 🚀 Project 90

> Creating a **Construction Company Landing Page with responsive layout, animations, and modern UI techniques**.            
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2090.mov)        
<video src="./demo/Project 90.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I designed a **Construction Company Landing Page UI** and practiced several important frontend concepts such as **CSS variables, Flexbox layouts, hover animations, and responsive design using media queries**.

---

### CSS Variables using `:root`

The project defines reusable design values using CSS variables.

Example:

```css
:root {
  --primary-color: #87bc29;
  --primary-font: Algerian;
}
```

These variables can be reused across the stylesheet:

```css
span {
  color: var(--primary-color);
}
```

Benefits of CSS variables:

* consistent design system
* easy theme updates
* reusable styling values

Changing one variable can update the **entire site design instantly**.

---

### Flexbox Layout

The layout heavily uses **Flexbox** to align elements.

Example concept:

```css
display: flex;
justify-content: space-around;
align-items: center;
```

Flexbox helps build layouts such as:

* navigation bars
* card sections
* service sections
* responsive content blocks

It simplifies alignment and spacing compared to older layout methods.

---

### Hover Animations & Transitions

Interactive effects were created using **CSS transitions and transforms**.

Example concept:

```css
transition-duration: 1s;
transform: scale(1.1);
```

Some effects used include:

* card hover zoom
* skew transformations
* shadow expansion
* image scaling

These animations make the UI feel **more dynamic and interactive**.

---

### Background Image Styling

Hero sections use properly styled background images.

Example concept:

```css
background: url(image.jpg) no-repeat center/cover;
```

This ensures that the image:

* stays centered
* covers the container area
* scales properly on different screens

This is a **common pattern used in landing page hero sections**.

---

### Responsive Design with Media Queries

One of the most important parts of the project is making the layout **responsive for different screen sizes** using media queries.

Example concept:

```css
@media (max-width: 768px) {
  .nav {
    flex-direction: column;
  }
}
```

Media queries allow styles to change based on device screen width.

---

### Types of Media Queries

Common responsive breakpoints include:

**Mobile Devices**

```css
@media (max-width: 480px)
```

**Tablets**

```css
@media (max-width: 768px)
```

**Desktop Screens**

```css
@media (min-width: 1024px)
```

These allow websites to adapt layouts for different devices.

---

### Real-World Use Cases of Media Queries

Media queries are commonly used to:

* convert horizontal navigation into mobile menus
* stack columns vertically on smaller screens
* resize images and cards
* adjust font sizes for readability
* create mobile-friendly layouts

Without media queries, websites would **not adapt properly across devices**.

---

### Key Learning

This project helped me understand how **modern landing pages combine CSS variables, Flexbox layouts, hover animations, and responsive media queries to build professional and adaptive website designs**.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---