import React from "react";
import { Data, Data2 } from "../App";
const ComponentC = () => {
  return (
    // // Taking Data - name
    // // using .Consumer property to use the passed data to the component
    // <Data.Consumer>
    //   {(name) => {
    //     return <h1>{name}</h1>;
    //   }}
    // </Data.Consumer>

    // Taking Data - name and age
    <Data.Consumer>
      {(name) => {
        return (
          <Data2.Consumer>
            {(age) => {
              return (
                <h1>
                  My name is {name} and I'm {age} years old
                </h1>
              );
            }}
          </Data2.Consumer>
        );
      }}
    </Data.Consumer>
  );
};

export default ComponentC;
