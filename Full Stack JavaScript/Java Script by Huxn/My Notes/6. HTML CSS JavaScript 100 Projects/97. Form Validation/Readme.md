# 🚀 Project 97

> Creating a **Form Validation system using JavaScript to verify user inputs and provide real-time feedback**.      
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2097.mov)        
<video src="./demo/Project 97.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I created a **client-side form validation system** that checks whether the user has entered valid information before submitting the form.
The main idea was to understand how **JavaScript interacts with form elements, validates inputs, and dynamically updates UI feedback**.

---

### Selecting Form Elements

The first step is selecting input fields using `querySelector`.

```javascript
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password1 = document.querySelector(".password1");
const password2 = document.querySelector(".password2");
```

This allows JavaScript to **access and manipulate the values of form inputs**.

Similarly, message containers are selected to display validation feedback.

```javascript
const usernameMessage = document.querySelector(".user-msg");
```

These elements are used to **display validation messages dynamically**.

---

### Preventing Default Form Submission

When the submit button is clicked, an event listener is triggered.

```javascript
submit.addEventListener("click", (e) => {
  e.preventDefault();
});
```

`preventDefault()` stops the browser from submitting the form automatically.

This is important because it allows JavaScript to **validate the inputs first before allowing submission**.

---

### Checking Empty Input Fields

The program first checks whether all input fields are empty.

Example logic:

```javascript
if (
  username.value === "" &&
  email.value === "" &&
  password1.value === "" &&
  password2.value === ""
)
```

If all fields are empty, the program shows an alert message asking the user to fill the form.

This ensures that the user **cannot submit an empty form**.

---

### Validating Each Field Individually

Each field is validated separately.

Example:

```javascript
if (username.value === "") {
  showMessage(usernameMessage, "Please Provide Your Name", "red");
}
```

If the user enters a value, the message changes to success feedback.

This provides **real-time validation feedback to the user**.

---

### Password Matching Validation

One important validation check ensures that both password fields match.

Example logic:

```javascript
if (password1.value !== password2.value) {
  showMessage(password2Message, "Password do not match", "red");
}
```

This prevents users from accidentally submitting mismatched passwords.

Password confirmation is a **common feature used in signup forms**.

---

### Creating a Reusable Validation Function

Instead of repeating the same code multiple times, a reusable function is created.

```javascript
function showMessage(element, msg, color)
```

This function receives:

* the message element
* the text message
* the color of the message

Inside the function:

```javascript
element.textContent = msg;
element.style.color = color;
```

This updates the UI dynamically.

---

### Highlighting Invalid Inputs

The function also changes the border color of the input field.

```javascript
element.previousElementSibling.style.border = `2px solid ${color}`;
```

`previousElementSibling` selects the input field that appears before the message element.

This visually highlights invalid inputs for better user experience.

---

### Key Learning

This project helped me understand how **JavaScript can validate user input, provide instant feedback, and improve form usability by preventing invalid data submission**.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---