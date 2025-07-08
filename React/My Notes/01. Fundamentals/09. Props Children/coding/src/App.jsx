import Card from "../component/Card";

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
    </div>
  );
};

export default App;
