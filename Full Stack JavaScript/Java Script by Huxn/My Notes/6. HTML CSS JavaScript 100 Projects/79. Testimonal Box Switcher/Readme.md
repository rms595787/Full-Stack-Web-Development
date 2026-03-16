# 🚀 Project 79

> Creating a **Testimonial Box Switcher that automatically updates user testimonials using JavaScript timers**.     
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2079.mov)        
<video src="./demo/Project 79.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I built a **Testimonial Box Switcher**, where different user testimonials automatically appear after a certain time interval. The main concept used here is **JavaScript timers**, which allow us to run functions repeatedly after a fixed duration.

The testimonials contain information such as:

* user image
* user name
* testimonial text

All of this data is stored in JavaScript and dynamically inserted into the page.

---

### Using `setInterval()`

The core functionality of this project uses:

```javascript
setInterval(updateTestimonial, 3000);
```

`setInterval()` runs a function repeatedly after a fixed time interval.

Parameters:

* `updateTestimonial` → function that updates the testimonial
* `3000` → time in milliseconds (3 seconds)

This creates the **automatic switching effect**.

---

### Updating UI Dynamically

Each time the function runs, JavaScript updates different elements such as:

```javascript
image.src
username.innerText
testimonial.innerText
```

This allows the content of the testimonial box to change dynamically without refreshing the page.

---

### Clearing Intervals

Sometimes we may want to stop the repeating function. For that we use:

```javascript
clearInterval(intervalId);
```

This stops the timer created by `setInterval()`.

It is useful when:

* pausing animations
* stopping sliders
* controlling timed actions

---

### Key Learning

This project helped me understand how **JavaScript timers can be used to create automatic UI updates**.

Concepts practiced:

* `setInterval()`
* `clearInterval()`
* dynamic DOM updates
* managing data arrays to update UI

These techniques are commonly used in **sliders, testimonials, carousels, and automated UI components**.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---