# 🚀 Project 88

> Creating a **Word Counter tool that analyzes text using JavaScript and Regular Expressions (Regex)**.     
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2088.mov)        
<video src="./demo/Project 88.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I built a **Word Counter tool** that analyzes the text entered by the user and calculates different statistics such as word count, letters, and spaces.

While working on this project I also discovered an interesting linguistic observation: in English there are **very few words that contain three or more identical letters consecutively**, which inspired some of the validation logic used in the program.

The main concept used in this project is **Regular Expressions (Regex)**, which are powerful patterns used to search and manipulate text.

---

### Splitting Text into Words

To count the words, the text input is first cleaned and then split into an array.

```javascript id="1p7g9q"
const splitted = textInput.value.trim().split(/[\s-]/);
```

Explanation:

* `trim()` removes extra spaces from the beginning and end of the text
* `split()` divides the text into multiple parts
* `/[\s-]/` is a regular expression that splits the text using **spaces or hyphens**

This produces an array of words which can then be counted.

---

### Counting Letters

To count the number of letters in the text:

```javascript id="j6y8mb"
const letterC = (textInput.value.match(/[a-z]/gi) || []).length;
```

Regex breakdown:

* `[a-z]` → matches alphabet characters
* `g` → global search (find all matches)
* `i` → case-insensitive

`match()` returns an array of matched letters, and `.length` gives the total count.

---

### Counting Spaces

To count spaces between words:

```javascript id="z2u0ch"
const spaceC = (textInput.value.match(/\s+/g) || []).length;
```

Explanation:

* `\s` represents whitespace characters
* `+` means one or more spaces

This finds all groups of spaces within the text.

---

### Why Regex Is Powerful

Regular expressions are widely used for tasks such as:

* form validation
* text processing
* search systems
* data extraction
* syntax highlighting in code editors

---

### Key Learning

This project helped me understand how **regular expressions can be used to analyze and process text efficiently**, which is an essential skill in many real-world applications involving text input.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---