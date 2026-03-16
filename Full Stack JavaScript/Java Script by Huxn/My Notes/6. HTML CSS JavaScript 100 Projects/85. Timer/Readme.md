# 🚀 Project 85

> Creating a **functional Stopwatch Timer with start, stop, and reset features using JavaScript time calculations**.        
> Built as part of my **100 Projects Challenge**.

---

## 🎥 Demo Video

🔗 Watch here:
[Video](./demo/Project%2085.mov)        
<video src="./demo/Project 85.mov" controls width="800"></video>

---

## 🛠️ Tech Stack

[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 🧠 What I Learned

In this project I built a **stopwatch-style timer** with three main features:

* start
* stop
* reset

While the UI looks simple, behind the scenes the timer carefully tracks **elapsed time using timestamps**.

---

### Tracking Time Correctly

One important part of the logic is keeping track of the time that has already passed before the timer was stopped.

```javascript id="v1q8xk"
millisElapsedBeforeLastStart += Date.now() - lastTimerStartTime;
```

Explanation:

* `Date.now()` returns the current timestamp in **milliseconds**
* `lastTimerStartTime` stores the moment when the timer last started

When the timer stops, the elapsed time is stored so that **starting again continues from the previous time instead of resetting**.

---

### Updating the Timer

The core calculation happens inside the `updateTimer()` function.

```javascript id="ah3k9s"
function updateTimer() {
  const milliElapsed =
    Date.now() - lastTimerStartTime + millisElapsedBeforeLastStart;
```

This calculates the **total milliseconds passed** since the timer started.

Then the values are converted into seconds and minutes:

```javascript id="q5n3kg"
const secondsElapsed = milliElapsed / 1000;
const minutesElapsed = secondsElapsed / 60;
```

To keep seconds within **0–59**, the modulus operator is used:

```javascript id="m9q3rx"
Math.floor(secondsElapsed) % 60
```

Finally the time is displayed in the format:

```
MM : SS : MS
```

---

### Formatting Numbers

The helper function `formatNumber()` ensures the numbers always appear with **leading zeros**.

```javascript id="b3z2jy"
function formatNumber(number, desiredLength) {
  const stringNumber = String(number);
  if (stringNumber.length > desiredLength) {
    return stringNumber.slice(0, desiredLength);
  }
  return stringNumber.padStart(desiredLength, "0");
}
```

Key idea:

```javascript id="y9b2ko"
padStart(desiredLength, "0")
```

This makes numbers display properly.

Example:

```
2:5:7   →   02:05:007
```

---

### Button State Management

During the timer operation the **disabled property** is used to control which buttons can be pressed.

Example use cases:

* disable **Start** when the timer is already running
* disable **Stop** when the timer is not running

This prevents incorrect interactions.

---

### Key Learning

This project helped me understand how **timestamps, elapsed time calculations, and number formatting work together to build accurate timers**, which are widely used in stopwatches, games, and productivity applications.

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/in/rahul-sharma-94960a248/)

---

## 📢 LinkedIn Post

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:activity:7434092659713118208/?originTrackingId=FJn1v2khMgr0ZvCaV4xfUg%3D%3D)

---

⭐ If you found this helpful, consider giving it a star!

---