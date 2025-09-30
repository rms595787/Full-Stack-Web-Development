// Note
// if you want to create a single folder
// await fs.mkdir("directory/folderName"); will work for you

// if you want to create folder at multiple levels or nested multiple folders
// you must use {recursive:true} inside this command else it will through error
// await fs.mkdir("directory/f1/f2/f3",{recursive:true});
import * as fs from "fs/promises";

// creating Driectory / Folder
try {
  // it only creates one level folder which is "nodejs" and rest it checks if it is already created, if not throws error

  // await fs.mkdir("/Users/rahulsh9956/Desktop/nodejs");    // this will successfully create "nodejs" folder, since below levels like Users, rahulsh9956, Desktop are already there

  // await fs.mkdir("/Users/rahulsh9956/Desktop/mern/nodejs");   // this will throw error because there is no "mern" folder available to create "nodejs"

  // To avoid this kind of errors and create multiple level at once mark "recursive:true"
  await fs.mkdir("/Users/rahulsh9956/Desktop/node js/basics", {
    recursive: true,
  }); // this will create folders at multiple levels at once

  console.log("Folder Created ...");
} catch (error) {
  console.log(error);
}

// Error we get is this
/*
{
  errno: -2,
  code: 'ENOENT',
  syscall: 'mkdir',
  path: '/Users/rahulsh9956/Desktop/mern/nodejs'
}
*/
