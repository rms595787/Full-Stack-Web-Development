// making a component uniqye by providing key to that
import React, { useState } from "react";

const Switcher = () => {
  const [sw, setSw] = useState(false);

  return (
    <div>
      {sw ? <span>Dark</span> : <span>Light</span>}
      {/* if we do not provide this key to input the entered value remains same while switching mode from dark to light or vice versa */}
      {/* key={sw ? "dark" : "light"} */}

      {/* while passing this key value will be reset in input field  */}
      <input type="text" key={sw ? "dark" : "light"} />
      <button
        onClick={() => {
          setSw((s) => !s);
        }}
      >
        Switch
      </button>
    </div>
  );
};

export default Switcher;
