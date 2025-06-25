# JSX

JSX allows us to write HTML in React.
JSX makes it easier to write & add HTML in React

# Scenario if we do not have jsx we have to write code like this

**Without JSX**

```tsx
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const App = () => {
  return /*#__PURE__*/ _jsxs("section", {
    children: [
      /*#__PURE__*/ _jsx("h1", {
        children: "My Website",
      }),
      /*#__PURE__*/ _jsxs("article", {
        children: [
          /*#__PURE__*/ _jsx("h2", {
            children: "Welcome To React",
          }),
          /*#__PURE__*/ _jsx("p", {
            className: "text",
            children: "Paragraph Content",
          }),
        ],
      }),
    ],
  });
};
export default App;
```

**With JSX**

```tsx
const App = () => {
  return (
    <section>
      <h1>My Website</h1>
      <article>
        <h2>Welcome To React</h2>
        <p className="text">Paragraph Content</p>
      </article>
    </section>
  );
};

export default App;
```

## NOTE

We can only return one parent html tag from any component like div, section, etc.

you can use as many tags you want inside one parent tag

**Not to Do** - you can not use mulitple parent tags in return statement

```tsx
const App = () => {
  return (
    <div>
      <WelcomeMessage />
    </div>
    <section></section>
  );
};

export default App;
```

**To Do** - you can use multiple tags inside one parent tag

```tsx
const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>To Do</p>
    </div>
  );
};
export default App;
```
