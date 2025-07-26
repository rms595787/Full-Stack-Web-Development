import { useState } from "react";
import "../style.css";
const Accordions = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="container">
      <section className="accordion-card">
        <div className="header">
          <div>{title}</div>
          <p className="icon" onClick={() => setIsActive(!isActive)}>
            {isActive ? "-" : "+"}
          </p>
        </div>
        <div className="content">
          {isActive && <p className="card-info">{content}</p>}
        </div>
      </section>
    </div>
  );
};

export default Accordions;
