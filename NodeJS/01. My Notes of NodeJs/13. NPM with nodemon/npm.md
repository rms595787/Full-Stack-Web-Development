# npm - [Link](https://www.npmjs.com)

# npm documentation [Link](https://docs.npmjs.com)

## Here we are going to learn how we can install and use dependencies using npm

### For example we are going to use `nodemon`

1. cd to desired folder where you want to work
   - Command - `cd /13. NPM`
2. run this command `npm init -y` -> this will generate `package.json` file
3. install `nodemon` dependency
   - if you want to install it globally, you wouldn't need to install every single time you want to work on a project
     - Command - `npm install -g nodemon`
   - here we are going to work on this project, so we will install it locally
     - Command - `npm install --save-dev nodemon`
4. Go to `package.json` and make these changes in file

   - this will be original script

     ```js
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     }
     ```

   - you have to update it to

   ```js
   "scripts": {
     "start":"node index.js",
     "dev":"nodemon index.js"
   }
   ```

   - add `type` command in the file
     ```js
     "types": "module",
     "scripts": {
     "start": "node index.js",
     "dev": "nodemon index.js"
     }
     ```

5. Now write your code in index.js file and run this command in your package
   - Command - `npm run dev`

### When you use this you do not have to close and restart your server again and again after every single change, this nodejs does it for you with the help of nodemon

---

```

```

---

## Nodemon (Node Monitor)

- Nodemon is a tool that automatically restarts a Node.js application when file changes are detected.
- It is mainly used during development to save time (no need to restart server manually).

### Installation

```js
npm install -g nodemon      # global
npm install --save-dev nodemon  # local (dev dependency)
```

### Usage

- Instead of:
- `node app.js`
- Use:
  `nodemon app.js`
- Example in package.json

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

### Run with:

- `npm run dev`
- ✅ Key Point: Nodemon improves developer productivity by watching for file changes and restarting the app automatically.
