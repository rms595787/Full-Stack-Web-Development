# [Radix UI](https://www.radix-ui.com)

# Steps to use Radix Ui in your project
1. Create react-js setup
- - Command - ```npm create vite@latest "2. Radix UI"```
2. Install all npm dependecies
- - Command - ```npm i```
3. Install Radix themes
- - Command - ```npm install @radix-ui/themes```
4. Go to you main.jsx file and import radix-ui
- - Command - ```import "@radix-ui/themes/styles.css";```
5. Add theme component in main.jsx file
```jsx
import { Theme } from "@radix-ui/themes";   // add this line

export default function () {
	return (
		<html>
			<body>
				<Theme> // Cover entire app in this theme compononet
					<MyApp />
				</Theme>
			</body>
		</html>
	);
}
```

6. Now import any component and use it