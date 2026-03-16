Here is **Project 74** in your **same template format** ready to paste.

---

# 🚀 Project 74

> Building a **Tabbed Navigation system using JavaScript and HTML data attributes**.            
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2074.mov)            
<video src="./demo/Project 74.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I implemented a **Tabbed Navigation system**, where clicking different menu items shows different content sections. While building this, I learned several useful concepts in **HTML, CSS, and JavaScript**.

Some of the key concepts explored in this project include:

* **HTML `data-*` attributes**
* **JavaScript event handling**
* **dynamic class manipulation**
* **CSS selectors like `:not()`**
* **different ways of selecting elements**

---

## HTML `data-*` Attributes

HTML allows developers to create **custom attributes** using the `data-*` format.

Example:

```html id="rbtp3a"
<section data-section="Home"></section>
<section data-section="About"></section>
```

These attributes allow us to **store extra information directly inside HTML elements**.

In JavaScript they can be accessed using:

```javascript id="k7m1it"
element.dataset.section
```

So if an element has:

```text id="qb1rvp"
data-section="Home"
```

JavaScript can read it as:

```text id="czd3sk"
element.dataset.section → "Home"
```

This makes it easy to **connect menu items with their corresponding content sections**.

---

## JavaScript Code Breakdown

Here is the main logic used in this project.

```javascript
let menu_list = document.querySelectorAll(".menu_Links ul li");

menu_list.forEach((li) => {
  li.addEventListener("click", (e) => {
    document
      .querySelectorAll(".menu_Links ul li.active")
      .forEach((activeEle) => {
        activeEle.classList.remove("active");
      });

    e.target.classList.add("active");

    document.querySelectorAll(".sections > section").forEach((section) => {
      if (e.target.textContent === section.dataset.section) {
        document.querySelectorAll(".sections .visible").forEach((ele) => {
          ele.classList.remove("visible");
        });
        section.classList.add("visible");
      }
    });
  });
});
```

---

### Step 1 — Selecting Menu Items

```javascript id="s9b7q6"
let menu_list = document.querySelectorAll(".menu_Links ul li");
```

This selects **all the navigation menu items**.

`querySelectorAll()` returns a **NodeList** containing all matching elements.

---

### Step 2 — Adding Click Event

```javascript id="g4n4cy"
menu_list.forEach((li) => {
  li.addEventListener("click", (e) => {
```

Here we loop through each menu item and add a **click event listener**.

Whenever a menu item is clicked, the function runs.

---

### Step 3 — Removing Previous Active Tab

```javascript id="9h1f0n"
document
  .querySelectorAll(".menu_Links ul li.active")
  .forEach((activeEle) => {
    activeEle.classList.remove("active");
  });
```

This ensures that **only one tab stays active at a time**.

All currently active tabs are found and their `active` class is removed.

---

### Step 4 — Activating the Clicked Tab

```javascript id="p50ybd"
e.target.classList.add("active");
```

The clicked element becomes the **new active tab**.

---

### Step 5 — Matching Content Section

```javascript id="u0ukfw"
if (e.target.textContent === section.dataset.section)
```

Here we compare:

* the text of the clicked menu item
* the `data-section` value of each section

Example:

```text id="v2tkf1"
Menu Item → "Home"
Section Attribute → data-section="Home"
```

When they match, we know **which section should be shown**.

---

### Step 6 — Showing the Correct Section

First we remove any currently visible section:

```javascript id="n5nfl6"
document.querySelectorAll(".sections .visible").forEach((ele) => {
  ele.classList.remove("visible");
});
```

Then we make the matched section visible:

```javascript id="i8s7va"
section.classList.add("visible");
```

This creates the **tab switching effect**.

---

## CSS Selector: `:not()`

This project also introduced useful CSS selectors.

Example:

```css id="y2p8px"
li:not(:last-child)
```

This means **select all list items except the last one**.

Other useful selectors include:

```css id="m6g6sz"
:first-child
:last-child
:nth-child(n)
:not(selector)
```

Examples:

```css id="xckm2h"
li:first-child
li:last-child
li:nth-child(2)
```

These selectors help create **more precise styling rules**.

---

## Key Learning

This project helped me understand how **JavaScript can control navigation systems by dynamically managing classes and connecting UI elements using data attributes**.

Tabbed navigation is widely used in:

* dashboards
* documentation pages
* product pages
* admin panels

and this project demonstrated the **core logic behind those interfaces**.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/posts/rahul-sharma-94960a248_html-css-javascript-activity-7439150981520539648-N8e7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD1QkMkBhwXCizY0WuwGuWpwdxhpxwhhA8o)

---

⭐ If you found this helpful, consider giving it a star!

---