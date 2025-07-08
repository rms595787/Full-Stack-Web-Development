import { useState } from "react";
// Example 5 - share useState with multiple components

import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/componentTwo";
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <section>
      {/* Here we are using prop system */}
      <ComponentOne count={count} onClickHandler={() => setCount(count + 1)} />
      <ComponentTwo count={count} onClickHandler={() => setCount(count - 1)} />
    </section>
  );

  // return <div>Hello</div>;
};
export default App;
