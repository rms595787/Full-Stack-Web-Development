import { type MouseEventHandler } from "react";

interface btns {
  label: string;
  onClick: MouseEventHandler; // special type of react MouseEventHandler
  disabled: boolean;
}
const Button = ({ label, onClick, disabled }: btns) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: disabled ? "crimson" : "teal" }}
      >
        {label}
      </button>
      {disabled ? (
        <p>Button is Disabled. Click button to Enable</p>
      ) : (
        <p>Button is Enabled. Click button to Disable</p>
      )}
    </div>
  );
};
export default Button;
