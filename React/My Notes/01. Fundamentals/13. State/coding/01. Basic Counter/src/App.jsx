import { useState } from "react";
// Example 1 - having normal value in useState
const App = () => {
  // const counter = useState("Rahul"); // use destructuring for better utilization of useState

  const [count, setCount] = useState(0);
  console.log(count);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <section>
      <h1>{count}</h1>
      <button style={{ padding: "10px 20px" }} onClick={increment}>
        +
      </button>
      <button style={{ padding: "10px 20px" }} onClick={decrement}>
        -
      </button>
    </section>
  );
};
export default App;
