# 🚀 Project 87

> Creating a **Shape Clicker Game where random shapes appear at random positions and the player must click them as quickly as possible**.           
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2087.mov)        
<video src="./demo/Project 87.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

This is the **third game I created in this project series**. The idea of the game is simple but interesting: a shape appears randomly inside a container and the user must click it as quickly as possible. The time taken to click the shape becomes the player's score.

To create this dynamic behavior, the project uses **randomization, element positioning, and DOM measurements**.

---

### Random Size and Shape

Each time the box appears, its **width and height are randomly generated**.

Example:

```javascript id="4qz2km"
const dim = [randomNumber(50) + 20, randomNumber(50) + 20];
```

This creates boxes with different sizes every time they appear.

To create different shapes:

```javascript id="x7p3u9"
box.style.borderRadius = randomNumber(50) + "%";
```

This randomly changes the border radius so the shape can appear as:

* square
* rounded square
* circle

---

### Random Colors

The color of the shape also changes randomly.

```javascript id="r7t6vq"
box.style.backgroundColor = "#" + Math.random().toString(16).substr(-6);
```

This generates a random **hex color code** every time a new shape appears.

---

### Getting Container Dimensions

A very important function used in this project is:

```javascript id="v9h1er"
output.getBoundingClientRect()
```

`getBoundingClientRect()` returns the **size and position of an element relative to the viewport**.

Example result:

```text id="v64m3r"
{
 width: 400,
 height: 300,
 top: 120,
 left: 50
}
```

Using this information allows us to calculate where the shape can appear inside the container.

Example:

```javascript id="n7ghxk"
box.style.left = randomNumber(container.width - dim[0]) + "px";
box.style.top = randomNumber(container.height - dim[1]) + "px";
```

This ensures the box always appears **inside the container boundaries**.

---

### Tracking Reaction Time

When the box appears, the start time is recorded:

```javascript id="q7t1rs"
game.start = new Date().getTime();
```

Once the user clicks the box, the program calculates how long it took to react.

This creates the **reaction speed gameplay mechanic**.

---

### Real-World Uses of `getBoundingClientRect()`

This function is commonly used in:

* drag and drop systems
* collision detection in games
* tooltip positioning
* responsive UI calculations
* scroll-based animations

---

### Key Learning

This project helped me understand how **random generation, element positioning, and DOM measurement functions can be combined to create interactive browser games**.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---