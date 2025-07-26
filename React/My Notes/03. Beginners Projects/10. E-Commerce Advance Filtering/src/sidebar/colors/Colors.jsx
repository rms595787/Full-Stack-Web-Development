import Input from "../../components/Input";
import "./Colors.css";
const Colors = ({ handleChange }) => {
  return (
    <div className="cl">
      <h2 className="sidebar-title color-title">Color</h2>
      <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value="" name="test3" />
        <span className="checkmark all"></span>All
      </label>
      
      <label className="sidebar-label-container">
        <input type="radio" value="black" name="test3" onChange={handleChange} />
        <span className="checkmark" style={{ background: "black" }}></span>Black
      </label>
      
      <label className="sidebar-label-container">
        <input type="radio" value="blue" name="test3" onChange={handleChange} />
        <span className="checkmark" style={{ background: "blue" }}></span>Blue
      </label>
      
      <label className="sidebar-label-container">
        <input type="radio" value="red" name="test3" onChange={handleChange} />
        <span className="checkmark" style={{ background: "red" }}></span>Red
      </label>
      
      <label className="sidebar-label-container">
        <input type="radio" value="green" name="test3" onChange={handleChange} />
        <span className="checkmark" style={{ background: "green" }}></span>Green
      </label>
      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleChange}
          value="white"
          name="test3"
        />
        <span
          className="checkmark"
          style={{ background: "white", border: `2px solid black`}}
        ></span>
        White
      </label>
    </div>
  );
};

export default Colors;
