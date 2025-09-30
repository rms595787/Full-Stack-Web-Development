import * as fs from "fs/promises";

// Appending data in already created file

try {
  await fs.appendFile("readme.md", "Node.js is the best");
  const data = await fs.readFile("readme.md","utf-8");
  console.log(data);
  /*
  This is the output we get 
  # Hello, Rahul!
   This is how we write in a fileNode.js is the best
  */
} catch (error) {
  console.log(error);
}
