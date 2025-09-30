# ES6 Import

- you have to use this command in the file from which you want to export feature  
  Command - `export default featureName;`
- you have to use this command to import the feature in another file  
   Command - `import featureName from "./featureFile.js"`

## Note

When you execute the feature you'll get error

There are two ways to solve that error

1. Use `.mjs` extension in both export and import files

2. Use nodeJs to generate a `package.json file` then edite package.json file

### Steps to solve error / use these commands

1. open terminal go to the directory in which both your files are from which you are going to import and export
2. run command in terminal - `npm init` - this will create package.json file
3. edit package.json file and add this line `"type":"module"`

### Initially you'll get package.json file like this

```json
{
  "name": "05.-es6-import",
  "version": "1.0.0",
  "description": "",
  "license": "ISC",
  "author": "",
  "type": "commonjs",
  "main": "index.js",

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

Editing which you need to do

```json
{
  "name": "05.-es6-import",
  "version": "1.0.0",
  "description": "",
  "license": "ISC",
  "author": "",
  "type": "commonjs", // you have to remove this line
  "type": "module", // you have to add this line
  "main": "index.js",

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

### After making these changes we won't be able to acces \_\_filename, \_\_dirname

```js
// now you have no longer access to these
console.log(__filename);
console.log(__dirname);
```

- This error happens because \_\_dirname and \_\_filename exist only in CommonJS modules, not in ES modules.
- Since your package.json has "type": "module", Node.js treats .js files as ESM by default.

## Now we will use \_\_filename and \_\_dirname like this

```js
// index.js (ESM)
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname);
```

## Or

`Switch back to CommonJS (if you don’t need ESM)`

- Remove "type": "module" from package.json
  OR
- Rename the file to .cjs (e.g., index.cjs)

Then you can directly use \_\_dirname without issues.

👉 In short:

- In ESM, \_\_dirname is not available → use fileURLToPath(import.meta.url).
- In CommonJS, \_\_dirname works out of the box.
