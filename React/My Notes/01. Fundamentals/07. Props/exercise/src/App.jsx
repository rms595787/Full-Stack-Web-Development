import Card from "../component/Card";
import Person from "../component/Person";
import Product from "../component/Product";

const App = () => {
  return (
    <div>
      <Card>
        <h1>My Card</h1>
        <p>This is some content for card 1</p>
      </Card>
      <Card>
        <h1>My Card</h1>
        <p>This is some content for card 2</p>
      </Card>
      <Card>
        <h1>My Card</h1>
        <p>This is some content for card 3</p>
      </Card>
      <Person name="Rahul Sharma" age={20} />
      <Product Pname="Macbook Air" Pprice={70000} />
    </div>
  );
};

export default App;
