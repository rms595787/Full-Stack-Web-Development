import { useState } from "react";
const ExampleTwo = () => {
  const [random, setRandom] = useState(() => {
    let randomNum = Math.floor(Math.random() * 100);
    return randomNum;
  });
  const newRandomNumber = () => {
    const newRandomNum = Math.floor(Math.random() * 100);
    setRandom(newRandomNum);
  };
  return (
    <div>
      <h1>Random Number : {random}</h1>
      <button onClick={newRandomNumber}>Get New Random Number</button>
    </div>
  );
};
export default ExampleTwo;
