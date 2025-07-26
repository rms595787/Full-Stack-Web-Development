import { useRef } from "react";
const FocusInput = () => {
  const inputField = useRef(null);
  const focuseInputField = () => {
    inputField.current.focus();
  };
  return (
    <div>
      <input
        type="text"
        ref={inputField}
        placeholder="Click the button to focus"
      />
      <button onClick={focuseInputField}>Focus</button>
    </div>
  );
};
export default FocusInput;
