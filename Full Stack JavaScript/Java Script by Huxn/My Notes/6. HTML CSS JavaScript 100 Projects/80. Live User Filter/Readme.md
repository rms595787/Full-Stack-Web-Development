# 🚀 Project 80

> Creating a **Live User Filter that fetches users from an API and filters them in real-time using JavaScript**.        
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2080.mov)        
<video src="./demo/Project 80.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I built a **Live User Filter**, where a list of users is fetched from an API and displayed on the page. As the user types in the search bar, the list updates instantly to show only the matching users.

The API used for fetching users:

```text id="7kkc9k"
https://randomuser.me/api/0.8/?results=50
```

This API returns **50 random users with details like name, image, and location**.

---

### Fetching Users from API

The project uses the **Fetch API with async/await** to retrieve user data.

Example:

```javascript id="y8yig9"
const response = await fetch(url);
const data = await response.json();
```

Here:

* `fetch()` sends a request to the API
* `.json()` converts the response into a JavaScript object

Once the data is received, JavaScript dynamically **creates user elements and inserts them into the page**.

---

### Creating UI with JavaScript

Instead of writing all HTML manually, this project generates elements using JavaScript such as:

```javascript id="j7k5j1"
document.createElement()
appendChild()
classList.add()
```

This allows the entire user list to be **generated dynamically from API data**.

---

### Real-Time Filtering Logic

The main functionality of this project is the **filtering system**.

```javascript id="h1zv3n"
function filterData(serachItem) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(serachItem.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
```

---

### How the Filtering Works

**1. Loop Through Each User**

```javascript id="4k7xzw"
listItems.forEach((item) => {
```

This checks every user in the list.

---

**2. Convert Text to Lowercase**

```javascript id="tbkq6s"
item.innerText.toLowerCase()
serachItem.toLowerCase()
```

This ensures the search works **regardless of uppercase or lowercase letters**.

Example:

```text id="d68j52"
Rahul
rahul
RAHUL
```

All will match correctly.

---

**3. Check for Matching Text**

```javascript id="0s3kcb"
includes()
```

`includes()` checks if the user information contains the typed search value.

Example:

```text id="m0y9yn"
"john doe".includes("john") → true
```

---

**4. Show or Hide Users**

If the user matches the search:

```javascript id="2xj0t5"
item.classList.remove("hide");
```

If it does not match:

```javascript id="tsc3d9"
item.classList.add("hide");
```

The `.hide` class usually contains:

```css id="ys9w9g"
.hide {
  display: none;
}
```

This instantly removes non-matching users from the UI.

---

### Key Learning

This project helped me understand how **real-time filtering systems work in modern web applications**.

Concepts practiced:

* Fetch API
* async / await
* dynamic DOM creation
* real-time search filtering
* case-insensitive text matching

These techniques are commonly used in **search bars, product filters, dashboards, and user management systems**.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---