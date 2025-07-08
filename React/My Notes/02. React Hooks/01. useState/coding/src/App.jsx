import { useState } from "react";

const App = () => {
  // --------------------------------------------
  // const [initialValue, setInitialValue] = useState(0);
  // const [initialValue, setInitialValue] = useState("HuXn");
  // const [initialValue, setInitialValue] = useState(["one", "two", "three"]);
  // const [initialValue, setInitialValue] = useState({
  //   one: "Alex",
  //   two: "John",
  //   three: "HuXn",
  // });
  // --------------------------------------------

  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};
export default App;
