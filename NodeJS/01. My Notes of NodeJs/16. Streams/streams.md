# Streams in Node.js

## What are Streams?

- Streams are objects that let you **read or write data continuously**.
- Useful for handling **large files** or **data chunks** without loading everything into memory.
- Built on **EventEmitter**.

---

## Types of Streams

1. **Readable** → Read data (e.g., `fs.createReadStream`)
2. **Writable** → Write data (e.g., `fs.createWriteStream`)
3. **Duplex** → Both read and write (e.g., TCP sockets)
4. **Transform** → Modify data while reading/writing (e.g., `zlib.createGzip`)

---

## Common Events

- `data` → When data chunk is available
- `end` → No more data to read
- `error` → Error occurred
- `finish` → Writing finished

---

## Example: Reading a File (Readable Stream)

```js
const fs = require("fs");

const readStream = fs.createReadStream("file.txt", "utf8");

readStream.on("data", (chunk) => {
  console.log("Received:", chunk);
});

readStream.on("end", () => {
  console.log("Finished reading");
});
```

## Example: Writing to a File (Writable Stream)

```js
const fs = require("fs");

const writeStream = fs.createWriteStream("output.txt");

writeStream.write("Hello, Streams!\n");
writeStream.end("Done writing");
```

## Piping (Connecting Streams)

- Pass data from one stream to another.

```js
const fs = require("fs");

const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream);
```

## Transform Stream Example

```js
const fs = require("fs");
const zlib = require("zlib");

fs.createReadStream("input.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("input.txt.gz"));
```

## Key Points

- Efficient for large data (memory-friendly).
- Types: **Readable**, **Writable**, **Duplex**, **Transform**
- Supports events: `data`, `end`, `error`, `finish`
- **Pipe** simplifies chaining streams.

---

```

```

---

# highWaterMark in Node.js Streams

- highWaterMark is a buffer size limit that determines how much data a stream can hold in memory before it stops reading (for Readable) or writing (for Writable).
- It helps with flow control, preventing memory overload.

## Default Values

- Readable streams (like fs.createReadStream):

  - Default = 64 KB for binary data
  - Default = 16 KB for strings

- Writable streams:
  - Default = 16 KB
