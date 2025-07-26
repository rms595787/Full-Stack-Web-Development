import Card from "../components/Card";
import "./Product.css";
const Product = ({ result }) => {
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
};

export default Product;
