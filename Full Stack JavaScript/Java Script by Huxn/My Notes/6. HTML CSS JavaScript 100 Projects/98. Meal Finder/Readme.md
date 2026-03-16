# 🚀 Project 98

> Creating a **Meal Finder application that searches meals using an external API and dynamically displays meal details using JavaScript**.  
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2098.mov)  
<video src="./demo/Project 98.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I created a **Meal Finder application** that fetches meal data from an external API and dynamically displays the meal details including ingredients and instructions.

The API used in this project:

```
https://www.themealdb.com/api/json/v1/1/search.php?s=${val}
```

This API returns meal data based on the **search keyword entered by the user**.

---

### Handling Form Submission

The search feature is triggered using both:

- form submission
- magnifier icon click

```javascript
form.addEventListener("submit", searchMeal);
magnifier.addEventListener("click", searchMeal);
```

This allows the user to search meals in **multiple intuitive ways**.

---

### Preventing Default Form Behavior

Inside the main function:

```javascript
e.preventDefault();
```

This prevents the page from reloading when the form is submitted, allowing JavaScript to handle the search process smoothly.

---

### Fetching Data from an API

The project uses the **Fetch API** to retrieve meal data.

```javascript
const result = await fetch(
  `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`,
);
```

Key concepts used here:

- **async/await** for handling asynchronous operations
- **fetch()** to send requests to external APIs
- **JSON parsing** to extract usable data

Example:

```javascript
const { meals } = await result.json();
```

This extracts the `meals` array from the API response.

---

### Extracting Data Using Object Destructuring

The project uses destructuring to get important meal information.

```javascript
const { strMeal, strMealThumb, strInstructions } = meal;
```

This allows easy access to:

- meal name
- meal image
- cooking instructions

without repeatedly referencing the object.

---

### Dynamically Displaying Meal Information

The meal data is inserted into the UI dynamically.

Example:

```javascript
title.textContent = strMeal;
img.style.backgroundImage = `url(${strMealThumb})`;
info.textContent = strInstructions;
```

This updates the webpage instantly based on the API response.

---

### Extracting Ingredients Dynamically

One interesting part of this project is extracting ingredients from the API response.

The API provides ingredients in numbered fields like:

```
strIngredient1
strIngredient2
strIngredient3
```

To handle this, a loop is used:

```javascript
for (let i = 1; i <= 20; i++)
```

Inside the loop:

```javascript
meal[`strIngredient${i}`];
```

This **dynamic property access** allows the program to read multiple ingredient fields without writing repetitive code.

If no ingredient exists, the loop stops.

---

### Creating Dynamic Ingredient Lists

The ingredients are converted into HTML elements.

```javascript
ingredients.map((ing) => `<li class="ing">${ing}</li>`).join("");
```

This uses:

- `map()` to transform array data
- `join()` to combine them into a single HTML string

This approach is widely used in **dynamic UI rendering**.

---

### Handling Missing Results

If the API returns no results, the program shows an alert.

```javascript
if (!meals) {
  showAlert();
}
```

This improves user experience by providing feedback when a meal is not found.

---

### Key Learning

This project helped me understand how **JavaScript can integrate external APIs, process JSON responses, dynamically render UI content, and handle real-world data structures such as ingredient lists and search results**.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---
