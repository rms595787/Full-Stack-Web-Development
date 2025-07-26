import React from "react";
import { useContext } from "react";
import { Data, Data2 } from "../App";
const ComponentC = () => {
  const userName = useContext(Data);
  const userAge = useContext(Data2);
  return (
    // useContext helps us avoiding callback functions, which could be nested in case of passing multiple multiple data
    <h1>
      My name is {userName} and I'm {userAge} years old
    </h1>
  );
};

export default ComponentC;
