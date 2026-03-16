# 🚀 Project 81

> Creating an **Animated Images Website using CSS animations and JavaScript timers**.           
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2081.mov)        
<video src="./demo/Project 81.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I worked with **image animations using CSS `@keyframes`** and controlled them using **JavaScript timers** such as `setInterval()` and `setTimeout()`.

### CSS `@keyframes`

`@keyframes` allows us to define **custom animation steps** in CSS by describing how styles change over time.

Example:

```css
@keyframes slide {
  0% { transform: translateX(0); }
  100% { transform: translateX(200px); }
}
```

This animation can then be applied to an element:

```css
.image {
  animation: slide 2s infinite;
}
```

Here:

* `slide` → animation name
* `2s` → animation duration
* `infinite` → animation repeats continuously

### What Can Be Animated

Using keyframes we can animate many properties such as:

* position (`translate`)
* rotation
* opacity
* scaling
* background colors
* element size

### Real-World Uses

`@keyframes` animations are widely used for:

* image sliders
* loading spinners
* animated buttons
* hero section animations
* parallax effects
* hover interactions

### Controlling Animations with JavaScript

JavaScript timers were used to control how and when images appear or change.

Examples:

* `setInterval()` → repeating animations like slideshows
* `setTimeout()` → delayed animations

### Key Learning

This project helped me understand how **CSS animations and JavaScript timing functions can work together to create engaging visual experiences on modern websites**.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---