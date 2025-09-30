# OS Module in Node.js - [Link](https://nodejs.org/api/os.html)

## Definition
The **`os` module** in Node.js provides operating system-related utility methods and properties.  
It helps to interact with the underlying system, such as CPU, memory, network interfaces, and more.

## Importing
```js
const os = require('os');
```

---

## Common Methods & Properties

### 1. System Information
- **OS Type**
```js
console.log(os.type()); // e.g., 'Linux', 'Darwin', 'Windows_NT'
```

- **Platform**
```js
console.log(os.platform()); // e.g., 'win32', 'linux', 'darwin'
```

- **Architecture**
```js
console.log(os.arch()); // e.g., 'x64', 'arm'
```

- **Release**
```js
console.log(os.release()); // OS version
```

### 2. CPU & Memory
- **CPU Info**
```js
console.log(os.cpus()); // Array of CPU core info
```

- **Total Memory**
```js
console.log(os.totalmem()); // in bytes
```

- **Free Memory**
```js
console.log(os.freemem()); // in bytes
```

- **Load Average**
```js
console.log(os.loadavg()); // [1min, 5min, 15min averages] (Linux/macOS only)
```

### 3. User & System Uptime
- **Current User**
```js
console.log(os.userInfo());
```

- **System Uptime**
```js
console.log(os.uptime()); // in seconds
```

### 4. Network
- **Network Interfaces**
```js
console.log(os.networkInterfaces());
```

- **Hostname**
```js
console.log(os.hostname());
```

### 5. Path Related
- **Home Directory**
```js
console.log(os.homedir());
```

- **Temporary Directory**
```js
console.log(os.tmpdir());
```

---

## Key Points
- The `os` module is **built-in** (no installation required).  
- Provides details about **system hardware, memory, CPU, network, and environment**.  
- Useful for writing **platform-independent code** and system monitoring tools.  
