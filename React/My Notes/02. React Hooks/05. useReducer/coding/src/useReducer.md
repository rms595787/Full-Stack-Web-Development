# useReducer()

useRecucer is a hook that is similar to useState, but it is designed for `more complex` state objects or state transitions that involves multiple sub-values. It allows you to manage state in a functional, Immutable way.

# Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

- state - The current state value, which you can use in your component.
- dispatch - A function you call to send actions to the reducer, which then updates the state
- reducer - This is a function that describes how the state should change based on actions. It takes the current state and an action as inputs, and returns a new state.
- initialState - This is the starting value for the state when the component first reneders
