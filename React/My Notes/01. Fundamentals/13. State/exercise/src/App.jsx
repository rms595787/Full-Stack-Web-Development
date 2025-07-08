import "./Shopping.css";
import Counter from "./component/Couter";
import Profile from "./component/Profile";
import ShoppingList from "./component/ShoppingList";
import Todo from "./component/Todo";
const App = () => {
  return (
    <div>
      <Counter />
      <Todo />
      <Profile />
      <ShoppingList />
    </div>
  );
};

export default App;
