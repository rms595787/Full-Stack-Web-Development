import path from "path";
// it is coming from nodeJs - it helps in reading path

// ---------------------------------
import pathWin from "path/win32";

// since currently i am in macOS - it only reads "/" POSIX separator
// to forcefully make it able to read windows you have to import this library and vise-versa
// import pathMac from "path/posix";
// ---------------------------------

// Here in path module we will be working on path like this
// 'c:\\courses\\nodejs\\path-module'

// ---------------------------------
// 1. .basename() - Return the last portion of a path. Similar to the Unix basename command. Often used to extract the file name from a fully qualified path.

console.log("\nPath functions");
console.log("\n1. basename()");
// if you are in mac and do not uses wind32 path you'll get this reasult for using windows path
console.log(path.basename("c:\\nodejs\\index.js")); // c:\nodejs\index.js

console.log(pathWin.basename("c:\\nodejs\\index.js")); // index.js
console.log(path.basename("/Users/rahulsh9956/Documents/index.js")); // index.js
console.log(pathWin.basename("c:\\nodejs\\app.html")); // app.html
console.log(path.basename("/Users/rahulsh9956/Documents/app.html")); // app.html

// basename without extension
console.log(pathWin.basename("c:\\nodejs\\app.html", ".html")); // app
console.log(path.basename("/Users/rahulsh9956/Documents/app.js", ".js")); // app
// ---------------------------------

// ---------------------------------
// 2. .dirname() - Return the directory name of a path. Similar to the Unix dirname command.
// - it "omits the filename"

console.log("\n2. .dirname()");
console.log(pathWin.dirname("c:\\nodejs\\app.js")); // c:\nodejs
console.log(path.dirname("c:/nodejs/app.js")); // c:/nodejs

console.log(pathWin.dirname("c:\\nodejs\\courses\\app.js")); // c:\nodejs
console.log(path.dirname("c:/nodejs/courses/app.js")); // c:/nodejs
// ---------------------------------

// ---------------------------------
// 3. extname() - Return the extension of the path, from the last '.' to end of string in the last portion of the path. If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string.

console.log("\n3. extname()");
console.log(pathWin.extname("c:\\nodejs\\courses\\app.js")); // .js
console.log(path.extname("c:/nodejs/courses/app.css")); //.css
// ---------------------------------

// ---------------------------------
// 4. .join() - Join all arguments together and normalize the resulting path.

console.log("\n4. .join()");
console.log(pathWin.join("c:", "huxn-webdev", "courses", "redux-toolkit")); // c:\huxn-webdev\courses\redux-toolkit
console.log(path.join("c:", "huxn-webdev", "courses", "redux-toolkit")); // c:/huxn-webdev/courses/redux-toolkit
// ---------------------------------

// ---------------------------------
// Go up a level - use ".."
// if you want move more level up just use them multiple times like "..",".."

// 1 level up
console.log(
  pathWin.join("c:", "huxn-webdev", "courses", "redux-toolkit", "..")
); // c:\huxn-webdev\courses
console.log(path.join("c:", "huxn-webdev", "courses", "redux-toolkit", "..")); // c:/huxn-webdev/courses

// 2 level up
console.log(
  pathWin.join("c:", "huxn-webdev", "courses", "redux-toolkit", "..", "..")
); // c:\huxn-webdev
console.log(
  path.join("c:", "huxn-webdev", "courses", "redux-toolkit", "..", "..")
); // c:/huxn-webdev

// ---------------------------------

// ---------------------------------
// 5. .normalize() - Normalize a string path, reducing '..' and '.' parts. When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used.

console.log("\n5. .normalize()");
console.log(pathWin.normalize("c:\\courses\\redux\\store\\features\\")); // c:\courses\redux\store\features\
console.log(path.normalize("c://courses//redux//store//features//")); // c:/courses/redux/store/features/
// ---------------------------------

// ---------------------------------
// 6. .parse() -
console.log("\n6. .parse()");
console.log(pathWin.parse("c:\\nodejs\\courses\\app.css"));
console.log(path.parse("c:/nodejs/courses/app.css"));
/* OUTPUT of these two lines
{
  root: 'c:\\',
  dir: 'c:\\nodejs\\courses',
  base: 'app.css',
  ext: '.css',
  name: 'app'
}
{
  root: '',
  dir: 'c:/nodejs/courses',
  base: 'app.css',
  ext: '.css',
  name: 'app'
}
*/

console.log(pathWin.parse("c:\\nodejs\\courses\\app.css").root); // c:\
console.log(path.parse("c:/nodejs/courses/app.css").root); // empty space
console.log(path.parse("/Users/rahulsh9956/Documents/Coding/app.css").root); // /
console.log(pathWin.parse("c:\\nodejs\\courses\\app.css").base); // app.css
console.log(path.parse("c:/nodejs/courses/app.css").base); // app.css
console.log(pathWin.parse("c:\\nodejs\\courses\\app.css").dir); // c:\nodejs\courses
console.log(path.parse("c:/nodejs/courses/app.css").dir); // c:/nodejs/courses
console.log(pathWin.parse("c:\\nodejs\\courses\\app.css").ext); // .css
console.log(path.parse("c:/nodejs/courses/app.css").ext); // .css
console.log(pathWin.parse("c:\\nodejs\\courses\\app.css").name); // app
console.log(path.parse("c:/nodejs/courses/app.css").name); // app

// ---------------------------------
