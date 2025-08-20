# [Daisy UI](https://daisyui.com)

- link - https://daisyui.com
- click on Daisy UI to reach to the website

# Steps to follow for using Daisy UI

1. Create a react project

- - Command - `npm create vite@latest "1. Daisy UI"`
- - install npm dependencies afterwards Command - `npm i`

2. Command to install tailwindcss and daisy ui package in the project

- - go to project directory first, command - ` cd 1.\ Daisy\ UI`
- - Command - `npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest`

3. Add Tailwindcss to vite.config.js file

```js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
```

4. Put Tailwind CSS and daisyUI in your CSS file (and remove old styles) in src/style.css

```css
@import "tailwindcss";
@plugin "daisyui";
```

5. choose component and use it in your file
