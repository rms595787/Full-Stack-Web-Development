import Person from "../component/Person";
import Product from "../component/Product";

const App = () => {
  return (
    <div>
      <Person name="Rahul Sharma" age={20} />
      <Product Pname="Macbook Air" Pprice={70000} />
    </div>
  );
};

export default App;
