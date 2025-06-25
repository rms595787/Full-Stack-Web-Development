# NOTES

# Position Properties

In CSS, the `position` property specifies how an element is positioned in the document. There are **five main values** you can use:

---

## 🧭 All Types of `position` in CSS:

| Value      | Description                                                                 |
| ---------- | --------------------------------------------------------------------------- |
| `static`   | Default value. Element is positioned according to the normal document flow. |
| `relative` | Positioned relative to its original position.                               |
| `absolute` | Positioned relative to the nearest positioned ancestor.                     |
| `fixed`    | Positioned relative to the **viewport** (browser window).                   |
| `sticky`   | Toggles between `relative` and `fixed` depending on scroll position.        |

---

### 🔹 1. `position: static` (Default)

- **Default value** (no need to specify it explicitly).
- Element stays in the **normal document flow**.
- `top`, `left`, `right`, and `bottom` have **no effect**.

```css
div {
  position: static;
}
```

---

### 🔹 2. `position: relative`

- Moves element **relative to its normal position**.
- **Still takes up space** in layout (doesn’t affect others).
- Useful for creating a reference container for `absolute` children.

```css
div {
  position: relative;
  top: 20px; /* moves 20px down */
  left: 10px; /* moves 10px right */
}
```

---

### 🔹 3. `position: absolute`

- Removed from the document flow.
- Positioned relative to the **nearest ancestor** with a `position` other than `static`.
- If no such ancestor, positioned relative to `<html>` (i.e., the whole page).

```css
div {
  position: absolute;
  top: 50px;
  left: 100px;
}
```

---

### 🔹 4. `position: fixed`

- Fixed to the **viewport** (browser window).
- **Does not scroll with the page**.
- Useful for sticky navbars, buttons, etc.

```css
div {
  position: fixed;
  bottom: 10px;
  right: 10px;
}
```

---

### 🔹 5. `position: sticky`

- Behaves like `relative` **until** it reaches a certain scroll position.
- Then behaves like `fixed`.
- Needs a `top`, `left`, etc., and a parent with a defined height.

```css
div {
  position: sticky;
  top: 0;
}
```

---

## ✅ Summary Table:

| Value      | In Document Flow? | Scrolls with Page? | Positioned Relative To                  |
| ---------- | ----------------- | ------------------ | --------------------------------------- |
| `static`   | ✅ Yes            | ✅ Yes             | Normal flow                             |
| `relative` | ✅ Yes            | ✅ Yes             | Its own original position               |
| `absolute` | ❌ No             | ✅ Yes             | Nearest positioned ancestor or `<html>` |
| `fixed`    | ❌ No             | ❌ No              | Viewport                                |
| `sticky`   | ✅ Yes            | ⚠️ Sometimes       | Scroll position + its parent            |

---

```

```

---

## Display properties

In CSS, the `display` property controls **how an element is displayed in the document** — whether it's a block, inline, grid, flex, etc. It's one of the **most important properties** for layout and rendering.

---

### ✅ 1. `display: block`

- Takes up the **full width** available.
- Starts on a **new line**.
- Examples: `<div>`, `<p>`, `<h1>` by default.

```css
div {
  display: block;
}
```

---

### ✅ 2. `display: inline`

- Takes up **only as much width as needed**.
- Stays **in line** with other elements.
- Can’t set width/height.
- Examples: `<span>`, `<a>`, `<strong>` by default.

```css
span {
  display: inline;
}
```

---

### ✅ 3. `display: inline-block`

- Like `inline`, but allows setting **width/height**.
- Does **not start** on a new line.

```css
button {
  display: inline-block;
}
```

---

### ✅ 4. `display: none`

- Element is **not rendered at all** (removed from document flow).
- Unlike `visibility: hidden` (which hides but still takes space).

```css
div {
  display: none;
}
```

---

### ✅ 5. `display: flex`

- Creates a **flex container**.
- Children become **flex items** that are easily aligned/resized.
- Enables powerful **1D layouts** (row or column).

```css
.container {
  display: flex;
}
```

---

### ✅ 6. `display: grid`

- Creates a **grid container**.
- Children become grid items that follow a **2D layout** (rows & columns).
- Great for complex layouts.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

---

### ✅ 7. `display: inline-flex`

- Like `flex`, but the container behaves as **inline** (doesn’t break line).

```css
.container {
  display: inline-flex;
}
```

---

### ✅ 8. `display: inline-grid`

- Like `grid`, but the container is **inline**.

```css
.container {
  display: inline-grid;
}
```

---

### ✅ 9. `display: table`, `table-row`, `table-cell`

- Behaves like HTML tables. Used for **table-like layouts**.

```css
.table {
  display: table;
}
.row {
  display: table-row;
}
.cell {
  display: table-cell;
}
```

---

### ✅ 10. `display: contents`

- Makes the container **disappear** visually, keeping only its children.
- Used when the container **shouldn’t affect layout**, but children still render.

```css
.wrapper {
  display: contents;
}
```

---

### ✅ 11. `display: list-item`

- Makes the element behave like a `<li>`, showing a **bullet or number**.
- Typically used for lists.

```css
li {
  display: list-item;
}
```

---

## 🔄 Summary Table

| Value          | Block? | Inline? | Can Set Size? | Layout Model          |
| -------------- | ------ | ------- | ------------- | --------------------- |
| `block`        | ✅     | ❌      | ✅            | Traditional flow      |
| `inline`       | ❌     | ✅      | ❌            | Text flow             |
| `inline-block` | ❌     | ✅      | ✅            | Mixed                 |
| `none`         | ❌     | ❌      | ❌            | Hidden                |
| `flex`         | ✅     | ❌      | ✅            | Flexbox (1D)          |
| `inline-flex`  | ❌     | ✅      | ✅            | Inline Flexbox        |
| `grid`         | ✅     | ❌      | ✅            | Grid (2D)             |
| `inline-grid`  | ❌     | ✅      | ✅            | Inline Grid           |
| `table`        | ✅     | ❌      | ✅            | Table layout          |
| `contents`     | ❌     | ❌      | ❌            | Only children visible |
| `list-item`    | ✅     | ❌      | ✅            | List-like with marker |

---

Great question! Let's break down what these two `@media` queries do and why they’re used — especially when dealing with responsive **background videos** (like full-screen sections with a `<video>` element).

---

```

```

---

## 🎯 What is `aspect-ratio` in `@media`?

`aspect-ratio` compares the **width to height** of the screen (or viewport):

- `aspect-ratio: 16/9` means **width is 16 units for every 9 units of height** (widescreen).
- It's equivalent to comparing:
  `width / height = 16 / 9 ≈ 1.78`

---

## ✅ Your Code Explained

### 1️⃣ `@media (min-aspect-ratio: 16/9)`

```css
@media (min-aspect-ratio: 16/9) {
  .back-video {
    width: 100%;
    height: auto;
  }
}
```

- **Applies when the screen is wider than 16:9** (i.e., wide screens or landscape).
- Sets the `.back-video` to:

  - `width: 100%` → take full width of the container.
  - `height: auto` → maintain the video’s aspect ratio automatically.

- ✅ Good for **landscape** screens to avoid vertical cropping.

---

### 2️⃣ `@media (max-aspect-ratio: 16/9)`

```css
@media (max-aspect-ratio: 16/9) {
  .back-video {
    width: auto;
    height: 100%;
  }
}
```

- **Applies when the screen is taller than 16:9** (i.e., narrow or portrait screens).
- Sets the `.back-video` to:

  - `height: 100%` → take full height of the container.
  - `width: auto` → adjust width to maintain the correct aspect ratio.

- ✅ Good for **portrait** screens to avoid horizontal cropping.

---

## 📱 Why Use This?

You're making the `<video>` **responsive**, adjusting whether width or height fills the screen based on the **aspect ratio** of the screen.

### 🌐 Real Use Case:

You want your `.back-video` to always **cover the screen without stretching** or **leaving black bars**, regardless of device orientation:

- Landscape → fill **width**, keep height proportional.
- Portrait → fill **height**, keep width proportional.

---

## 🔁 Summary

| Condition                | `width` | `height` | Used for          |
| ------------------------ | ------- | -------- | ----------------- |
| `min-aspect-ratio: 16/9` | `100%`  | `auto`   | Wide / landscape  |
| `max-aspect-ratio: 16/9` | `auto`  | `100%`   | Narrow / portrait |

---

Let me know if you want a live demo or how to make the video **centered and fully cover** the background!
