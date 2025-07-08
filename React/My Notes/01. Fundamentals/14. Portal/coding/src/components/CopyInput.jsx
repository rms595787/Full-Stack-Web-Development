import { useState } from "react";
import PopupContent from "./PopupContent";

const CopyInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true), setTimeout(() => setCopied(false), 5000);
    });
  };
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter the text"
      />
      <button onClick={handleCopy}>Copy</button>

      {/* We are passing copied value to the PopupConent component - using concept of props */}
      <PopupContent copied={copied} />
    </div>
  );
};
export default CopyInput;
