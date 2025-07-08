const Product = (props) => {
  return (
    <section>
      <h2>Product's Name : {props.Pname}</h2>
      <p>Price : {props.Pprice}</p>
    </section>
  );
};
// const Product = ({ Pname, Pprice }) => {
//   return (
//     <section>
//       <h2>Product's Name : {Pname}</h2>
//       <p>Price : {Pprice}</p>
//     </section>
//   );
// };
export default Product;
