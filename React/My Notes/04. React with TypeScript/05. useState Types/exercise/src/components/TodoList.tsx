// import { useState } from "react";

// interface Todo {
//   task: string;
//   id: number;
// }
// const TodoList = () => {
//   const [todos, setTodos] = useState<Todo[]>([{ task: "", id: 0 }]);
//   const [inputValue, setInputValue] = useState<string>("");
//   const handleSubmit = () => {
//     setTodos((todos) => {
//       return todos.concat({
//         task: inputValue,
//         id: Math.floor(Math.random() * 100),
//       });
//     });
//     setInputValue("");
//   };
//   const removeTodo = (id: number) => setTodos(todos.filter((t) => t.id !== id));
//   return (
//     <div>
//       <h2>Todo List</h2>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="New Todo"
//       />
//       <button onClick={handleSubmit}>Add Todo</button>
//       <ul>
//         {todos.map(({ task, id }) => (
//           <li key={id}>
//             <span>{task}</span>
//             <button onClick={() => removeTodo(id)}>x</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;

import { useState } from "react";

interface Todo {
  task: string;
  id: number;
  complete: false;
}
const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      task: task,
      complete: false,
    };
    setTodos((prevTodo) => [...prevTodo, newTodo]);
  };
  const removeTodo = (id: number) => setTodos(todos.filter((t) => t.id !== id));
  return (
    <div>
      <h2>Todo List</h2>
      <button onClick={() => addTodo("New Todo")}>Add Todo</button>
      <ul>
        {todos.map(({ id, task }) => (
          <li key={id}>
            <span>{task}</span>
            <button onClick={() => removeTodo(id)}> x </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
