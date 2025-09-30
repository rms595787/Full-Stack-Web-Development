In short:

### **Modules in Node.js**

- **Modules** are reusable blocks of code in Node.js.
- Each file is treated as a separate module.
- Node.js has three types of modules:

  1. **Core Modules** → Built-in (e.g., `fs`, `http`, `path`).
  2. **Local Modules** → Created by the developer.
  3. **Third-Party Modules** → Installed via npm (e.g., `express`).

✅ Example of a local module:
**math.js**

```js
function add(a, b) {
  return a + b;
}
module.exports = add;
```

**app.js**

```js
const add = require("./math");
console.log(add(2, 3)); // 5
```

👉 In short: **Modules help organize and reuse code in Node.js.**
