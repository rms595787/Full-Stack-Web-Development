# commands which you need to run to create this project

## For creating project

- npm create vite@latest "1. Simple Filteration"
- choose react
- choose typescript

## get inside of your project then run these commands

- cd 1.\ Simple\ Filteration
- npm i
- npm install tailwindcss @tailwindcss/vite

## go to vite.config.ts add these commands

```tsx
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite"; // add this line
export default defineConfig({
  plugins: [react(), tailwindcss()], // add this line
});
```
