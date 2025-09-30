import * as fs from "fs/promises";

// create and write files
try {
  // if you do not pass any path to it, it will just create file in your current directory on which you are working
  // if you update text and use the same file, the whole text will get replaced with new text
  await fs.writeFile(
    "Readme.md",
    "# Hello, Rahul!\n This is how we write in a file"
  );
} catch (error) {
  console.log(error);
}
