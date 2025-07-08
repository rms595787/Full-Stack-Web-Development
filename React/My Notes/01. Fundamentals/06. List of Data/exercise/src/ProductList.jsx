const ProductList = () => {
  const products = [
    { id: 1, name: "Phone", price: "$699" },
    { id: 2, name: "Laptop", price: "$1200" },
    { id: 3, name: "Headphones", price: "$199" },
  ];
  return (
    <div>
      {products.map(({ id, name, price }) => (
        <ul key={id}>
          <li>Name : {name}</li>
          <li>Price : {price}</li>
        </ul>
      ))}
    </div>
  );
};
export default ProductList;
