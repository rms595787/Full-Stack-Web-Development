import axios from "axios";
import { useState, useEffect } from "react";
import "../style.css";
const Meal = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        // console.log(res.data.Meal);
        setItems(res.data.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card">
        <img src={strMealThumb} alt="strMeal" />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });
  return <div className="items-container">{itemsList}</div>;
};
export default Meal;
