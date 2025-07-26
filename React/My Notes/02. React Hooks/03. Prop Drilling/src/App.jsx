// here we will pass our name in App component
// by using props technique we will pass name to ComponentC

import ComponentA from "./Components/ComponentA";
import ComponentC from "./Components/ComponentC";

// App > ComponentA > ComponentB > ComponentC
const App = () => {
  const name = "Rahul Sharma";
  return (
    <div>
      <ComponentA name={name} />
    </div>
  );
};
export default App;
