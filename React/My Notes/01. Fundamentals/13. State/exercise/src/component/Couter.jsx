import { useState } from "react";
// Basic usage of useState
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <section>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </section>
  );
};
export default Counter;
