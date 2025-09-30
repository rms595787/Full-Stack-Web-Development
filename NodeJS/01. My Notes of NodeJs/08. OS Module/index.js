import os from "os";

// Returns a string identifying the operating system platform for which the Node.js binary was compiled. The value set at compile time. Possible values are 'aix','darwin','freebsd','linux','openbsd','sunos',and 'win32'

// it is returning darwin in macOs
console.log(os.platform()); // darwin

// Returns the operating system CPU architecture for which the Node.js binary was compiled. Possible values are 'arm', 'arm64', 'ia32', 'loong64', 'mips', 'mipsel', 'ppc64', 'riscv64', 's390x', and 'x64'.
console.log(os.arch()); // arm64

// Returns an array of objects containing information about each logical CPU core. The array will be empty if no CPU information is available, such as if the /proc file system is unavailable.
console.log(os.cpus());

console.log(os.hostname()); // Rahuls-MacBook-Air.local
console.log(os.homedir()); // /Users/rahulsh9956

// Returns an object containing network interfaces that have been assigned a network address.
// Each key on the returned object identifies a network interface. The associated value is an array of objects that each describe an assigned network address.
console.log(os.networkInterfaces());

// Returns the amount of free system memory (meaning of memory here is RAM not storage memory) in bytes as an integer.
console.log(os.freemem()); // 524730368
console.log(os.totalmem()); // 8589934592