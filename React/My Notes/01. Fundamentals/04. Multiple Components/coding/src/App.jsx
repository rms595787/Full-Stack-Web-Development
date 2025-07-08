import Add from "./components/add";
import Greet from "./components/Greet"; // we are importing Greet files here

const App = () => {
  return (
    <div>
      <Greet /> {/* Here we are calling Greet Component */}
      <Add />
    </div>
  );
};

export default App;
