import { useState } from "react";

const Counter = () => {
  // Normal useState will also work because it takes Generics and automatically captures the data types (you can pass any data types in them)
  // const [count, setCount] = useState(0);
  
  // but still specifying data would be great in typeScript
  const [count, setCount] = useState<number>(0);
  
  return (
    <div>
      <h2>Counter App</h2>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
