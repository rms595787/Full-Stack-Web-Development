# Path Module - [Link](https://www.geeksforgeeks.org/node-js/nodejs-path-module/)

1. First we will need package.json file, run this command to create package.json
   `npm init -y`
2. change "type":"module" in the file

## NOTE

- if you are `in macOS` and you want your node to be `able to read windows path` as well import this
- `import pathWin from "path/win32";`
- and if you are `in windows` and want your node can `read macOS path`
- `import pathMac from "path/posix";`
