# FS Module in Node.js - [Link](https://nodejs.org/api/fs.html)

## Definition
The **`fs` (File System) module** is a **core Node.js module** used to interact with the file system (create, read, update, delete, rename files and directories).

## Importing
```js
const fs = require('fs');
```

---

## Common Operations

### 1. Read File
- **Async**
```js
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

- **Sync**
```js
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);
```

### 2. Write File
```js
fs.writeFile('file.txt', 'Hello Node.js!', (err) => {
  if (err) throw err;
  console.log('File written!');
});
```

### 3. Append File
```js
fs.appendFile('file.txt', '\nNew content', (err) => {
  if (err) throw err;
  console.log('Content appended!');
});
```

### 4. Delete File
```js
fs.unlink('file.txt', (err) => {
  if (err) throw err;
  console.log('File deleted!');
});
```

### 5. Rename File
```js
fs.rename('old.txt', 'new.txt', (err) => {
  if (err) throw err;
  console.log('File renamed!');
});
```

### 6. Directory Operations
- **Create**
```js
fs.mkdir('newFolder', (err) => {
  if (err) throw err;
  console.log('Folder created!');
});
```

- **Read**
```js
fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log(files);
});
```

---

## Key Points
- Provides **synchronous** and **asynchronous** methods.  
- **Async methods** are recommended (non-blocking).  
- No need to install – it’s **built-in** with Node.js.  
- Can handle both **files** and **directories**.  
