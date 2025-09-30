import * as fs from "fs/promises";

// Get File Information
try {
  const info = await fs.stat("info.txt");
  console.log(info);
  /*
    Output

    Stats {
      dev: 16777230,
      mode: 33188,
      nlink: 1,
      uid: 501,
      gid: 20,
      rdev: 0,
      blksize: 4096,
      ino: 30929658,
      size: 68,
      blocks: 8,
      atimeMs: 1758439986647.3518,
      mtimeMs: 1758439985206.3835,
      ctimeMs: 1758439985206.3835,
      birthtimeMs: 1758439119178.812
    }
    */

    console.log(info.isDirectory());    // false
    console.log(info.isFile()); // true
} catch (error) {
  console.log(error);
}
