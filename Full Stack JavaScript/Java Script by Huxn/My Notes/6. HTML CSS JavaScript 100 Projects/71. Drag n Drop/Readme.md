# 🚀 Project 71

> Creating a **Drag and Drop interaction system** using JavaScript events.          
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2071.mov)            
<video src="./demo/Project 71.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I explored how **Drag and Drop functionality works in web applications** using JavaScript event listeners.

The browser provides a **Drag and Drop API** with several important events that control how elements behave during dragging.

### Important Drag Events

**dragstart**

Triggered when the user begins dragging an element.

```javascript
element.addEventListener("dragstart", handler);
```

It is commonly used to:

* store information about the dragged element
* apply styling while dragging

---

**dragend**

Triggered when the dragging operation stops.

Used to:

* remove temporary styles
* reset UI state

---

**dragover**

Fires repeatedly while the dragged element is over a drop area.

Important note:

```javascript
event.preventDefault();
```

Without this line, **dropping will not work**.

---

**dragenter**

Triggered when the dragged element **enters a drop zone**.

Often used to **highlight the drop target**.

---

**dragleave**

Triggered when the dragged element leaves the drop area.

Used to remove hover effects.

---

**drop**

This event runs when the dragged element is **released on a drop target**.

Typical tasks include:

* moving elements
* reordering lists
* updating the UI

---

This project helped me understand how **event-driven interactions create dynamic UI behavior**, which is commonly used in features like **Kanban boards, sortable lists, and file uploads**.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---
