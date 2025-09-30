import * as fs from "fs/promises";
// Note
// folder must exists if you want to read files/floders from it

// Read the content present in the folder, like what is the content present in the folder, mainly we will get name of the files and folders
try {
  const files = await fs.readdir("/Users/rahulsh9956/Desktop/node js");
  for (const file of files) {
    // iterating over all files
    console.log(file);
  }
} catch (error) {
  console.log(error);
}
