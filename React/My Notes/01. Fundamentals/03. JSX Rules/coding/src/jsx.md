# JSX RULES

**RULE 1** - we can only `use one parent tag` in `component's return statement` in jsx

**RULE 2** - `close all html tags`, do not leave any open html tag while working with jsx

**RULE 3** - we must use `className` instead of `class` keyword while passing any class to html tag in jsx

**RULE 4** - we must use `htmlFor` instead of `for` keyword inside `label` in `html Form`

**`RULE 1`**

- We can only `return one parent html tag` from any component like `div`, `section`, etc.

- you can `use as many tags you want inside one parent tag`

**`Not to Do`** - you can not use mulitple parent tags in return statement

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

**`To Do`** - you can `use multiple tags inside one parent tag`

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

**`RULE 2`**

- While working with jsx `we must close all html tags`
- In html it is not necessary to close tag but if we do not close tags in js it will throw error.

**`Not to Do`** - you `can not leave an open html tag`

```tsx
const App = () => {
  return (
    <div>
      <img src="">  {/* this tag is not closed it will throw error */}
      <p> {/* it is also not closed will throw error */}
    </div>
  );
};

export default App;
```

**`To Do`** - you should `always close all html tags`

```tsx
const App = () => {
  return (
    <div>
      {/* this is how we should always close the html tags <open tag><close tag/> */}
      <img src="" />
      <p></p>
    </div>
  );
};
export default App;
```

**`RULE 3`**

- while specifying class in any tag `do not use` "`class keyword`" because while converting file from .jsx to js compiler thinks we are talking about a class of javaScript not of html

- instead of "`class` keyword" we should use "`className`"

**`Not to Do`** - you can not use "class keyword" for specifying classes in html tag

```tsx
const App = () => {
  return (
    <div>
      <h1 class="title"></h1> {/* it will throw error: Invalid DOM property 'class', Did you mean 'className' */}
    </div>
  );
};

export default App;
```

**`To Do`** - you should always close all html tags

```tsx
const App = () => {
  return (
    <div>
      <h1 className="title"></h1> {/* it will work perfectly fine */}
    </div>
  );
};
export default App;
```

**`RULE 4`**

- while working with `html forms` inside that if we are `using labels` and using label's property `for` - it will throw error because it thinks that it is a javaScript for loop

- insteal of `for` keyword we must use `htmlFor` in label

**`Not to Do`** - you can not use `for keyword` inside label in html form

```tsx
const App = () => {
  return (
    <form>
      <label for="name">Name</label>{" "}
      {/* It will think that we are using JavaScript `for` loop*/}
      <input type="text" placeholder="Enter your name"></input>
    </form>
  );
};

export default App;
```

**`To Do`** - you should use `htmlFor` instead of `for` inside label in form

```tsx
const App = () => {
  return (
    <form>
      <label htmlFor="name">Name</label> {/* It will work perfectly fine*/}
      <input type="text" placeholder="Enter your name"></input>
    </form>
  );
};
export default App;
```

---
