# USE

The use() hook lets you read and load resources asynchoronously, such as promises or context. Unlike other hooks, it can be utilized in loops and conditionals.

In certain situations, it can serve as a replacement for useEffect() when fetching data, and it streamlines context usage by allowing you to use (context) instead of useContext(context).

# Steps to work on React 19

- create a new react-typescript project
- go to project directory and run command - `npm i` to install npm dependencies
- since we are already using react 19 lastest version we do not need to run this command
- but if are using react v below 19 then run this command
- `npm i react@experimental react-dom@experimental`

---

- Now we are going to install tailwind css in our project
- run this command in project directory - `npm install tailwindcss @tailwindcss/vite`
- Now edit vite.config.js file

```js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite"; // add this line
export default defineConfig({
  plugins: [
    tailwindcss(), // add this line
  ],
});
```
