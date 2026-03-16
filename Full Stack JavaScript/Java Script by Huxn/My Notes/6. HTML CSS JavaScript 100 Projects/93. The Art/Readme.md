# 🚀 Project 93

> Creating a **modern responsive UI layout while experimenting with Flexbox layouts, typography hierarchy, and media queries to adapt content across different screen sizes**.  
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2093.mov)  
<video src="./demo/Project 93.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I experimented with **layout structuring, typography hierarchy, and responsive design** while building a visually balanced UI.
The focus was on learning how **Flexbox layouts and media queries work together to create responsive page structures**.

---

### Using Flexbox for Page Layout

Many sections use **Flexbox** to structure the layout.

Example concept:

```css
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
```

Key benefits of this approach:

- elements automatically wrap when space is limited
- layouts remain centered and balanced
- easier control of alignment across screen sizes

Flexbox is commonly used for:

- image galleries
- product layouts
- dashboard layouts
- responsive content sections

---

### Typography Hierarchy

Typography is used to control **visual importance of information**.

Example concept:

```css
.main-headings {
  font-size: 3rem;
}
```

Large headings create clear **visual hierarchy**, helping users quickly understand the page structure.

Supporting text is styled differently:

```css
.primary-headings {
  font-size: 1.5rem;
  line-height: 32px;
}
```

Proper typography improves **readability and user experience**.

---

### Navigation Layout

The navigation section uses Flexbox to separate items across the screen.

Example concept:

```css
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

This pattern is commonly used for:

- responsive navigation bars
- dashboards
- landing page headers

---

### Image Grid Layout

Images are displayed in flexible layouts.

Example concept:

```css
main .img {
  width: 40%;
}
```

This creates a **two-column layout on large screens**.

When the screen size changes, the layout automatically wraps due to `flex-wrap`.

---

### Responsive Design with Media Queries

Media queries are used to adjust layouts for smaller screens.

Example:

```css
@media screen and (max-width: 740px);
```

This ensures the UI remains readable on mobile devices.

Inside the media query, several changes are made.

---

### Expanding Content Width on Mobile

Example concept:

```css
header .main-headings {
  width: 100%;
}
```

On smaller screens, text sections expand to full width to prevent cramped layouts.

---

### Adjusting Typography for Mobile

Example concept:

```css
.primary-headings {
  font-size: 1.5rem;
}
```

Reducing font size ensures the content remains readable on smaller screens.

---

### Responsive Footer Layout

The footer layout adapts when screen size changes.

Example concept:

```css
footer .logo-container {
  display: flex;
  justify-content: space-between;
}
```

This allows footer elements to reorganize for smaller displays.

---

### Key Learning

This project helped me understand how **Flexbox layouts, typography hierarchy, and media queries combine to build responsive UI structures that adapt smoothly across desktop and mobile devices**.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---
