import { useState } from "react";
import UserProfile from "./components/UserProfile";
import TodoList from "./components/TodoList";

const App = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h2>Counter : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <UserProfile />
      <TodoList />
    </div>
  );
};

export default App;
