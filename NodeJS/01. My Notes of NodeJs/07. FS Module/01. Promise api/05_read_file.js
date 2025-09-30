import * as fs from "fs/promises";

// Read File
try {
  // without using utf-8
  const data = await fs.readFile("README.md");
  console.log(data);
  // output - is not readable but it is our output
  // <Buffer 23 20 48 65 6c 6c 6f 2c 20 52 61 68 75 6c 21 0a 20 54 68 69 73 20 69 73 20 68 6f 77 20 77 65 20 77 72 69 74 65 20 69 6e 20 61 20 66 69 6c 65>

  // with using utf-8
  const data2 = await fs.readFile("readme.md", "utf-8");
  console.log(data2);
  /*
    Output: now it is readable
    
    # Hello, Rahul!
     This is how we write in a file
  */
} catch (error) {
  console.log(error);
}
