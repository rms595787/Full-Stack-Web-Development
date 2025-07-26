// import { useRef, useState, useEffect } from "react";

// const Timer = () => {
//   const [count, setCount] = useState(0);
//   const intervalRef = useRef(null);
//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);

//     return () => {
//       clearInterval(intervalRef.current);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Simple Timer</h1>
//       <h2>{count}</h2>
//       {/* <button onClick={handleStart}>Start</button> */}
//       <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
//       <button
//         onClick={() => {
//           setCount(0);
//         }}
//       >
//         Reset
//       </button>
//     </div>
//   );
// };
// export default Timer;

// 2nd way with start, stop and reset buttons
// Note - if you click multiple times on start button it will increase the speed of counter
import { useRef, useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  // // ------------------------------
  // // this code will cause multiple execution of intervals when clicked multipled times results in increasing speed of incremention
  // const handleStart = () => {
  //     intervalRef.current = setInterval(() => {
  //         setCount((prevCount) => prevCount + 1);
  //     }, 1000);
  // };
  // const handleStop = () => {
  //     clearInterval(intervalRef.current);
  // };
  // // ------------------------------

  // this code prevents multiple execution
  const handleStart = () => {
    if (intervalRef.current !== null) return; // prevent multiple interval execution
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null; // reset the intervalRef
  };

  return (
    <div>
      <h1>Timer: {count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default Timer;
