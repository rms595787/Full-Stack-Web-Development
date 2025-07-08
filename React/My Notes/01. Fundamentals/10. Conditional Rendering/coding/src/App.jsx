// Example 1

// const ValidPassword = () => <h1>Valid Password</h1>;
// const InvalidPassword = () => <h1>Invalid Password</h1>;

// // const Password = ({ isValid }) => {
// //   if (isValid) {
// //     return <ValidPassword />;
// //   }
// //   return <InvalidPassword />;
// // };

// // OR
// const Password = ({ isValid }) =>
//   isValid ? <ValidPassword /> : <InvalidPassword />;
// const App = () => {
//   return <Password isValid={true} />;
// };

// -------------------------------------------------
// Example 2

const Cart = () => {
  const items = ["Wireless Earbuds", "Power Bank", "New SSD", "Hoddie"];
  return (
    <>
      <h1>Cart 🛒</h1>

      {items.length > 0 && <h2>You have {items.length} items in your cart</h2>}
      <ul>
        {items.length > 0 && <h4>Products</h4>}
        {items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </>
  );
};

const App = () => {
  return <Cart />;
};
export default App;
