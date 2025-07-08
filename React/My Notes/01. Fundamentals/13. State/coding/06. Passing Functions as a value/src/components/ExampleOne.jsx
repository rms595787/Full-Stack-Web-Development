import { useState } from "react";
const ExampleOne = () => {
  // using callback function here inside useState
  const [count, setCount] = useState(() => {
    const initialCount = 10;
    return initialCount;
  });

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
export default ExampleOne;
