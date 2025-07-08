const ProductInfo = () => {
  const product = {
    name: "Laptop",
    price: 1200,
    availaibility: "In Stock",
  };
  return (
    <div>
      name : {product.name}
      <br />
      price : ${product.price}
      <br />
      availaibility : {product.availaibility}
    </div>
  );
};

export default ProductInfo;
