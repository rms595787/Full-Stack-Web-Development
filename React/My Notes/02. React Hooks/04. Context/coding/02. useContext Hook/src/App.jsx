import { createContext } from "react";
import ComponentC from "./Components/ComponentC";
export const Data = createContext();
export const Data2 = createContext();
const App = () => {
  const name = "Rahul Sharma";
  const age = 20;
  return (
    // // Providing name
    // // using .Provider property to provide data to the components

    // <Data.Provider value={name}>
    //   <ComponentC />
    // </Data.Provider>

    // Providig name and age
    <Data.Provider value={name}>
      <Data2.Provider value={age}>
        <ComponentC />
      </Data2.Provider>
    </Data.Provider>
  );
};
export default App;
