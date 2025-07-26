import Nav from "./Navigation/Nav";
import Product from "./Products/Product";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";
import "./style.css";
import { useState } from "react";

// DataBase
import products from "./db/data";
import Card from "./components/Card";
const App = () => {
  // Storage Area
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // ---------------- Input Filter ----------------
  const handleInputChange = (event) => {
    // this function will take input value and store it in query variable
    setQuery(event.target.value);
  };

  // here we are taking data from Product database, if user enters something means it is not equal to -1(meaning input is not empty) then store data of the product in filteredItems variable(this will hold the entire info about product)
  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  // ---------------- Radio Filter ----------------
  // here we are storing input given by user in form of radio buttons (like category, price, colors radio buttons that we have)
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ---------------- Buttons Filter ----------------
  // here we are storing input given in form of buttons which we have provided below recommended section
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ---------------- Main Function for Filtering Data ----------------
  const filteredData = (products, selected, query) => {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  };

  const result = filteredData(products, selectedCategory, query);
  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Product result={result}/>
    </>
  );
};
export default App;
