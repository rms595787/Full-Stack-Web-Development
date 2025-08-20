# [Shadcn UI](https://ui.shadcn.com)

Shadcn is the most powerful ui which developer uses

# Steps to use Shadcn ui in your project

1. Create a react-tailwind project

- - Command - `npm create vite@latest "3. Shadcn UI"`

2. Add npm dependecies

- - Command - `npm i`

3. Add tailwind css

- - Command - `npm install tailwindcss @tailwindcss/vite`

4. Replace everything in src/index.css with the following:

- - Command - `@import "tailwindcss";`

5. Edit tsconfig.json file

- The current version of Vite splits TypeScript configuration into three files, two of which need to be edited. Add the baseUrl and paths properties to the compilerOptions section of the tsconfig.json and tsconfig.app.json files:

```json
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  // add this content   ----------
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
  // -----------------------------
}
```

6. Edit tsconfig.app.json file (Add the following code to the tsconfig.app.json file to resolve paths, for your IDE:)

```json
{
  "compilerOptions": {
    // add this content ----
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
    // ----------------------
  }
}
```

7. Update vite.config.ts (Add the following code to the vite.config.ts so your app can resolve paths without error:)

- - Command - `npm install -D @types/node`

```ts
import path from "path"; // add this line
import tailwindcss from "@tailwindcss/vite"; // add this line
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  // add these lines -----------------------
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // ---------------------------------------
});
```

8. Run the CLI (Run the shadcn init command to setup your project:)

- - Command - `npx shadcn@latest init`

9. Now we can use components

- For using component we have to install it first
- like you want to use button component then run this command
- - Command - `npx shadcn@latest add button`
- it will create /component/ui folder and inside ui folder you will find button component which then can be used
