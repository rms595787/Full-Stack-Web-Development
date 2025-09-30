# 🚀 Regex for Express Routing (Cheat Sheet)

In **Express 5**, old string patterns (`/ab?cd`, `/ab+cd`) no longer work.  
Instead, you can use **regex expressions** in your routes.

- In Express, instead of writing:

```js
app.get("/somepath", handler);
```

- you can use a regex **literal**:

```js
app.get(/^\/somepattern$/, handler);
```

- ^ = start of string
- $ = end of string
- So the whole regex matches the entire path.

---

## 🔑 Regex Basics for Express

### 1. Optional Character (`?`)

- `b?` → the `b` is optional (0 or 1 occurrence)

```js
// Matches /acd and /abcd
app.get(/^\/ab?cd$/, (req, res) => {
  res.send("acd or abcd");
});
```

---

### 2. One or More (`+`)

- `b+` → at least one `b`

```js
// Matches /abcd, /abbcd, /abbbcd
app.get(/^\/ab+cd$/, (req, res) => {
  res.send("abcd, abbcd, abbbcd...");
});
```

---

### 3. Zero or More (`*`)

- `b*` → zero or more `b`

```js
// Matches /acd, /abcd, /abbcd
app.get(/^\/ab*cd$/, (req, res) => {
  res.send("acd, abcd, abbcd...");
});
```

---

### 4. Character Sets (`[]`)

- `[xyz]` → match one of `x`, `y`, or `z`

```js
// Matches /acd, /bcd, /ccd
app.get(/^\/[abc]cd$/, (req, res) => {
  res.send("acd, bcd, or ccd");
});
```

---

### 5. Grouping (`()`)

- `(abc)` → treat as a single unit
- `(abc)?` → optional group

```js
// Matches /abcd or /cd
app.get(/^\/(ab)?cd$/, (req, res) => {
  res.send("cd or abcd");
});
```

---

### 6. Alternatives (`|`)

- `a|b` → match either `a` or `b`

```js
// Matches /foo or /bar
app.get(/^\/(foo|bar)$/, (req, res) => {
  res.send("foo or bar");
});
```

---

### 7. Any Character (`.`)

- `.` → matches any single character

```js
// Matches /a1cd, /axcd, /a_cd
app.get(/^\/a.cd$/, (req, res) => {
  res.send("aXcd (X can be any char)");
});
```

---

### 8. Escape Special Characters

Use `\` to escape special regex characters.

```js
// Matches /file?.txt
app.get(/^\/file\?\.txt$/, (req, res) => {
  res.send("literal file?.txt");
});
```

---

## 🎯 Example: Numbers Only

```js
app.get(/^\/users\/(\d+)$/, (req, res) => {
  res.send("User ID route with numbers only");
});
// /users/123 ✅
// /users/abc ❌
```

---

## 📘 Express 4 → Express 5 Mapping

| Express 4 Pattern | Express 5 Regex Equivalent | Matches                   |
| ----------------- | -------------------------- | ------------------------- |
| `/ab?cd`          | `/^\/ab?cd$/`              | `/acd`, `/abcd`           |
| `/ab+cd`          | `/^\/ab+cd$/`              | `/abcd`, `/abbcd`         |
| `/ab*cd`          | `/^\/ab*cd$/`              | `/acd`, `/abcd`, `/abbcd` |
| `/a(bc)?d`        | `/^\/a(bc)?d$/`            | `/ad`, `/abcd`            |
| `/a/` + `*`       | `/^\/a.*$/`                | `/a`, `/abc`, `/axyz`     |

---

✅ Use these regex patterns in **Express 5** to replace the older string pattern routes.
