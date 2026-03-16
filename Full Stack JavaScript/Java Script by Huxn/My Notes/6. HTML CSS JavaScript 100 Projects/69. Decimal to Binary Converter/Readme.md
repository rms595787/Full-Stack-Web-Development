# 🚀 Project 69

> Converting Decimal numbers to Binary using JavaScript logic.    
> Built as part of my 100 Projects Challenge.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2069.mov)      
<video src="./demo/Project 69.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I explored how numbers are represented in **Decimal (Base 10)** and **Binary (Base 2)** systems.

The decimal system uses digits **0–9**, while the binary system uses only **0 and 1**, which is how computers store and process data.

Example:

```id="b1"
Decimal 25 → Binary 11001
```

Binary numbers are created by repeatedly **dividing the decimal number by 2** and recording the remainders.

Example:

```id="b2"
25 ÷ 2 = 12 remainder 1
12 ÷ 2 = 6  remainder 0
6 ÷ 2 = 3  remainder 0
3 ÷ 2 = 1  remainder 1
1 ÷ 2 = 0  remainder 1
```

Reading the remainders **from bottom to top** gives the binary value.

---

### Conversion Function Used

```javascript
function decimal() {
  let decimal = document.getElementById("number").value;
  let tempDecimal,
    rem = 0,
    binary = 0,
    place = 1;

  tempDecimal = decimal;

  while (tempDecimal > 0) {
    rem = tempDecimal % 2;
    binary = binary + rem * place;
    tempDecimal = parseInt(tempDecimal / 2);
    place = place * 10;
  }

  const h1 = document.createElement("h1");
  h1.innerHTML = `${binary}`;
  const container = document.querySelector(".results-container");
  container.append(h1);
}
```

The function works by:

* dividing the number by **2 repeatedly**
* storing the **remainders**
* building the binary number step by step

Finally, JavaScript dynamically creates an `<h1>` element and inserts the binary result into the page.

This project helped reinforce both **number system concepts and DOM manipulation in JavaScript**.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---
