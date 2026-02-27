### 📌 `data-*` Attribute (`data-open`) – Short Note

`data-open` is a **custom HTML data attribute** used to store extra information or state (like `open` / `close`) directly inside an HTML element.

* Any attribute starting with `data-` is valid in HTML.
* It does **not affect styling by default**.
* Used mainly to **control behavior or state** of UI components.

**Example:**

```html
<div class="btn" data-open="close"></div>
```

**Access in JavaScript:**

```js
element.dataset.open
```

**Update value:**

```js
element.dataset.open = "open";
```

**Common Uses:**

* Dropdowns
* Hamburger menus
* Modals
* Tabs / Accordions

**Best Practice:**

* `class` → styling
* `data-*` → logic / state

**CSS can also read it:**

```css
.btn[data-open="open"] { /* styles */ }
```

👉 In short, `data-open` helps **store and manage UI state cleanly without extra variables**.

---

If you want, I can also make:

* **1-line definition**
* **Interview-ready note**
* **MCQ-friendly explanation**

Just tell me 👍
