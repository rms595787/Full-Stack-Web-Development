import { useState } from "react";
import Button from "./Button";

const App = () => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    if (state) setState(!state);
    else setState(!state);
  };
  return (
    <div>
      <Button onClick={handleClick} label="Click" disabled={state} />
    </div>
  );
};

export default App;
