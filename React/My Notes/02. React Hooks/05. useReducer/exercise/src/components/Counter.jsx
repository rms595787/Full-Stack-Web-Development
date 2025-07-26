import { useReducer, useState } from "react";
import { initialState, counterReducer } from "./counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState(0);
  const handleIncrement = () => {
    dispatch({ type: "Increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "Decrement" });
  };
  const handleReset = () => {
    dispatch({ type: "Reset" });
  };
  const handleIncrementByAmount = () => {
    dispatch({ type: "IncrementByAmount", payload: Number(inputValue) });
    setInputValue(0);
  };
  const handleDecrementByAmount = () => {
    dispatch({ type: "DecrementByAmount", payload: Number(inputValue) });
    setInputValue(0);
  };

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>

      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleIncrementByAmount}>Add</button>
        <button onClick={handleDecrementByAmount}>Subtract</button>
      </div>
    </div>
  );
};
export default Counter;
