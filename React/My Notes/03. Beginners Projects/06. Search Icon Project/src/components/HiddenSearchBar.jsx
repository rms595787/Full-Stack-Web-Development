import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../style.css";
const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");
  const handleSectionClick = (e) => {
    setBgColor("#1a1a1a");
    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("white");
    }
  };
  return (
    <div>
      {showInput ? (
        <p
          style={{
            color: "white",
            backgroundColor: "#1a1a1a",
            borderBottom: `2px solid white`,
            padding: "20px",
          }}
        >
          Click anywhere inside section tag except at input area to hide the
          search bar
        </p>
      ) : (
        <p style={{ color: "crimson" }}>
          Click on the icon to find the search bar
        </p>
      )}

      <section
        className="container"
        style={{ backgroundColor: bgColor }}
        onClick={handleSectionClick}
      >
        {showInput ? (
          <input type="text" placeholder="Search..." />
        ) : (
          <FaSearch onClick={() => setShowInput(true)} size="50px" />
        )}
      </section>
    </div>
  );
};

export default HiddenSearchBar;
