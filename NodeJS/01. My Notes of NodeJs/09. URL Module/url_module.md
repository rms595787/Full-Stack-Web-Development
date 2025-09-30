# URL Module in Node.js - [Link](https://nodejs.org/api/url.html)

## Definition

The **`url` module** in Node.js provides utilities for parsing, formatting, and resolving URLs.  
It helps to work with URL components such as protocol, hostname, path, query string, and hash.

## Importing

```js
const url = require("url");
```

## Common Usage

### 1. Parsing a URL (Legacy API)

```js
const myURL = url.parse("https://example.com:8080/path/name?query=test#hash");
console.log(myURL.protocol); // 'https:'
console.log(myURL.host); // 'example.com:8080'
console.log(myURL.pathname); // '/path/name'
console.log(myURL.query); // 'query=test'
console.log(myURL.hash); // '#hash'
```

### 2. URL Class (Modern API - Preferred)

```js
const myURL = new URL("https://example.com:8080/path/name?query=test#hash");

console.log(myURL.hostname); // 'example.com'
console.log(myURL.port); // '8080'
console.log(myURL.pathname); // '/path/name'
console.log(myURL.search); // '?query=test'
console.log(myURL.hash); // '#hash'
```

### 3. Formatting URLs

```js
const myURL = new URL("https://example.com/path?name=John");
console.log(url.format(myURL));
// Output: 'https://example.com/path?name=John'
```

### 4. Resolving URLs (Legacy)

```js
console.log(url.resolve("/one/two/three", "four"));
// Output: '/one/two/four'
```

### 5. Working with Query Parameters

```js
const myURL = new URL("https://example.com/?name=John&age=25");

console.log(myURL.searchParams.get("name")); // 'John'
console.log(myURL.searchParams.has("age")); // true

myURL.searchParams.append("city", "London");
console.log(myURL.toString());
// 'https://example.com/?name=John&age=25&city=London'
```

## Key Points

- `url.parse()` and `url.resolve()` are **legacy** — prefer using the **WHATWG (Web Hypertext Application Technology Working Group) URL API** (`new URL()`).
- `URLSearchParams` makes working with query strings easier.
- The `url` module is **built-in** (no installation required).
