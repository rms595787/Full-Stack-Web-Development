import { useReducer } from "react";

// defining default value for our counter app, count variable = 0
const initialState = { count: 0 };

// // examples of how initialState can be used
// const initialState2 = { notifcation: "hello sir!", count: 0 };

// reducer takes two parameters one state, action
// state - what are we updating
// action - how are we updating
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      // ...state - we are copying previous information that is currently stored
      // count: - allows you to select the variable you are going to work with
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    default:
      break;
  }
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  dispatch;
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};
export default App;
