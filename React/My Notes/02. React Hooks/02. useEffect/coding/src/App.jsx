// We setup useEffect hook to run some code WHEN
// 👉 Component renders for the (First Time)
// 👉 & WHENEVER it re-renders
// 👉 & some data in our component changed.

// NOTE - since we are using StrictMode in main.jsx that is why we are getting two useState execution on first execution of this component
import { useState, useEffect } from "react";
import FetchData from "./Components/FetchData";

const App = () => {
  const [value, setValue] = useState(0);
  const [something, setSomething] = useState(0);

  //   // 1st way - we are not passing any dependecy array(meaning whenever this function reloads useEffect will execute)
  //   // useEffect takes two parameters - callback function and dependency array
  //   useEffect(() => {
  //     console.log("callig useEffect");
  //     document.title = `Increment ${value}`;
  //   });

  //   // 2nd way of using useEffect with empty dependency array
  //   // useEffect will execute only once in this situation when component executes for the first time only
  //   useEffect(() => {
  //     console.log("calling useEffect");
  //     document.title = `Increment ${value}`;
  //   }, []);

  //   // 3rd way of using useEffect with some data inside our dependency array
  //   // useEffect will executes when we use the useState and re-rendering the component in any other case it will not execute
  //   // it is useful when we are using multiple useStates and only want to update certain things on specific useState's execution
  //   useEffect(() => {
  //     document.title = `Increment ${value}`;
  //     console.log("calling useEffect");
  //   }, [value, something]); // we can also pass multiple useStates

  // 4th way of using useEffect with conditional statements
  useEffect(() => {
    if (value < 5) {
      document.title = `Increment ${value}`;
      console.log("calling useEffect");
    } else {
      console.log("Calling another statement");
    }
  }, [value]);
  return (
    <div>
      <h2>{value}</h2>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increment
      </button>
      <h2>{something}</h2>
      <button
        onClick={() => {
          setSomething(something + 1);
        }}
      >
        Increment Something
      </button>

      <FetchData />
    </div>
  );
};
export default App;
