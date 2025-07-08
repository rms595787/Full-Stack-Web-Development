# useEffect()

useEffect Hook allows you to perform `side effects` in your components. Some examples of side effects are: fetching data, directly updating the DOM etc.

# Syntax

```jsx
useEffect(() => {
  // Do your magic
});
```

# Points to remember

1. Without the array -> on every single render
2. You can not use useEffect inside of coditional statement, but you can use conditional statements inside of useEffect

**You Cannot Use useEffect inside of conditional statement XXXX **

```jsx
if(value>0){
    useEffect((=>{
        console.log("call useEffect");
        document.title=`Increment (${value})`;
    }))
}
```

**You can use Conditional Statement inside useEffect**

```jsx
useEffect(() => {
  if (value > 0) {
    console.log("call useEffect");
    document.title = `Increment (${value})`;
  }
});
```

3. When you specify an empty dependency array in useEffect, it will only fire that function whenever component first executes, not whenever component changes

**Example**

```jsx
useEffect(() => {
  if (value > 0) document.title = `Increment (${value})`;
}, []);
```

4. But if we specify dependency array with value in useEffect, whenever state/value changes component will re-render and callback function gets executed

**Example**

```jsx
useEffect(() => {
  if (value > 0) document.title = `Increment (${value})`;
}, [value]);
```
