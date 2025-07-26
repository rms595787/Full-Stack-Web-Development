import { useState } from "react";
import "../style.css";

const ToggleBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonColor, setButtonColor] = useState("white");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonColor(buttonColor === "white" ? "#1b1b1b" : "white");
  };
  return (
    <div style={{ backgroundColor, color: textColor }}>
      <button
        onClick={handleClick}
        style={{
          buttonColor,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        {backgroundColor === "#1b1b1b" ? "BlackTheme" : "White Theme"}
      </button>
      <section className="content">
        <h1>
          Welcome To A <br />
          Real World...
        </h1>
      </section>
    </div>
  );
};

export default ToggleBackgroundColor;
