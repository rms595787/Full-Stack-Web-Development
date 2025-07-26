import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Sidebar.css";
import Category from "./category/Category";
import Price from "./price/Price";
import Colors from "./colors/Colors";
const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1 className="sidebar-title">
            <AiOutlineShoppingCart />
          </h1>
        </div>

        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
