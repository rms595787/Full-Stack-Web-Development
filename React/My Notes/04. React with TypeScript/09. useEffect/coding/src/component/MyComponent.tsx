import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: string;
  discountPercentage: string;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};
const MyComponent = () => {
  const [data, setData] = useState<Product | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/product/3");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data ", error);
      }
    };
    fetchData();
  });
  return (
    <div>
      {data ? (
        <div>
          <p>ID : {data.id}</p>
          <p></p>
          id: number;
          <p>Title : {data.title}</p>
          <p>Description : {data.description}</p>
          <p>Price : {data.price}</p>
          <p>Discount Percentage : {data.discountPercentage}</p>
          <p>Rating : {data.rating}</p>
          <p>Stock : {data.stock}</p>
          <p>Brand : {data.brand}</p>
          <p>Category : {data.category}</p>
          <p>
            Thumbnail :{" "}
            <a href={data.thumbnail} target="_blank">
              {data.thumbnail}
            </a>
          </p>
          <p>
            Images :{" "}
            <a href={data.images} target="_blank">
              {data.images}
            </a>
          </p>
          {data.images.map(image=>(<img src = {image}/>))}
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default MyComponent;
