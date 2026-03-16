# 🚀 Project 84

> Creating a **BookList application that dynamically adds book entries using JavaScript DOM manipulation**.  
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2084.mov)  
<video src="./demo/Project 84.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

Creating a **BookList application** might sound complex, but while building it I realized that the logic is very similar to a **Todo List with a few additional data fields**. Instead of storing a single task, we store multiple pieces of information such as:

- book title
- author name
- publication year

The following function handles adding a new book to the list.

### Preventing Default Form Behavior

```javascript
e.preventDefault();
```

Forms normally refresh the page when submitted.
`preventDefault()` stops that behavior so JavaScript can handle the form submission.

---

### Input Validation

```javascript
if (title.value === "" && author.value === "" && year.value === "") {
  alert("Fill The Form");
}
```

This checks whether the form fields are empty. If all inputs are empty, the user is asked to fill the form before continuing.

---

### Creating Elements Dynamically

```javascript
const newRow = document.createElement("section");
```

A new container element is created to store the book details.

Then separate elements are created for each piece of information.

Example:

```javascript
const newTitle = document.createElement("div");
newTitle.innerHTML = title.value;
```

This creates a new element and inserts the title entered by the user.

The same process is repeated for:

- author
- year

Each element is then appended to the main row.

---

### Adding the Book to the List

```javascript
booklist.appendChild(newRow);
```

The newly created row is added to the book list container, which immediately displays the new book on the page.

---

### Resetting Input Fields

After adding the book, the form inputs are cleared:

```javascript
title.value = "";
author.value = "";
year.value = "";
```

This prepares the form for the next entry.

---

### Key Learning

This project helped me understand how **JavaScript can dynamically generate structured content using DOM manipulation**, which is a core concept behind many modern web applications that handle user-generated data.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---
