import { useState, useEffect } from "react";
const CounterEffect = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    document.title = `Increment ${value}`;
    console.log("Title updated");
  }, [value]);
  return (
    <div>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};
export default CounterEffect;
