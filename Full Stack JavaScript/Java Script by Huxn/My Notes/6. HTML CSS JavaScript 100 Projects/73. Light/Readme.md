# 🚀 Project 73

> Creating an **interactive light bulb effect using CSS and JavaScript**.           
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2073.mov)            
<video src="./demo/Project 73.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I explored several **advanced CSS techniques used to create visual effects**, especially how lighting and glowing effects can be simulated using CSS properties.

Some of the important concepts I learned include:

* **radial gradients**
* **CSS pseudo elements (`::before` and `::after`)**
* **box-shadow layering**
* **nth-child() selectors**
* **playing audio using JavaScript**

---

### Radial Gradient

A **radial gradient** creates a color transition that spreads outward from a center point, similar to how light spreads from a bulb.

Example:

```css id="h17t4y"
background: radial-gradient(circle, #fff, transparent);
```

This technique is useful for creating **realistic lighting effects**, highlights, and glowing backgrounds.

---

### Pseudo Elements (`::before` and `::after`)

Pseudo elements allow us to **create additional visual elements without adding extra HTML**.

Example:

```css id="7nyb1e"
.bulb::before {
  content: "";
}
```

They are commonly used for:

* decorative effects
* overlays
* shadows
* shapes
* animations

Using them keeps the HTML structure **clean and minimal**.

---

### Box Shadow Layering

One of the most interesting parts of this project was learning how **multiple box shadows can be stacked together to create a glow effect**.

Example:

```css id="7eewaj"
body.on .bulb {
  background-color: #fff;
  box-shadow:
    0 0 50px #fff,
    0 0 100px #fff,
    0 0 150px #fff,
    0 0 200px #fff,
    0 0 250px #fff,
    0 0 300px #fff,
    0 0 350px #fff;
}
```

Each shadow creates a **larger glowing radius around the bulb**.

Structure of box-shadow:

```text
horizontal-offset | vertical-offset | blur-radius | color
```

Example:

```text
0 0 50px #fff
```

Since the offsets are `0`, the glow spreads **evenly in all directions**.

By stacking multiple shadows with increasing blur radius, we simulate **light diffusion**, making the bulb appear to glow naturally.

---

### `nth-child()` Selector

The `nth-child()` selector allows us to target specific elements based on their position.

Example:

```css id="rr03m4"
span:nth-child(2)
```

This selects the **second span element inside its parent**.

It is useful for:

* styling specific elements
* creating patterns
* applying staggered animations
* designing complex layouts

---

### JavaScript `play()` Function

This project also used JavaScript to trigger sound effects.

Example:

```javascript id="y41oqn"
audio.play();
```

The `play()` function is used to **start audio playback**, which can enhance interactivity and make the UI feel more realistic.

In this project, it simulates the **sound of a light switch being turned on or off**.

---

### Key Learning

This project helped me understand how **CSS visual effects can be layered together to create realistic UI animations and lighting effects** without using images or heavy graphics.

It also showed how **JavaScript interactions can be combined with CSS styling** to build engaging and interactive web experiences.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)]([LinkedIn Profile](https://www.linkedin.com/in/rahul-sharma-94960a248/))

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/posts/rahul-sharma-94960a248_html-css-javascript-activity-7439150981520539648-N8e7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1QkMkBhwXCizY0WuwGuWpwdxhpxwhhA8o)

---

⭐ If you found this helpful, consider giving it a star!

---