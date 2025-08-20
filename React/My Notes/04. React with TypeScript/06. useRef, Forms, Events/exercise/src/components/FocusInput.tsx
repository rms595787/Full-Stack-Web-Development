import { useRef } from "react";

const FocusInput = () => {
  const focus = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    focus.current?.focus();
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Click the button to focus here"
        style={{ padding: "5px", width: "200px" }}
        ref={focus}
      />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};
export default FocusInput;
