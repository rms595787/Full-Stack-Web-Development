import { use } from "react";
const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
};
const FetchTodo = () => {
  const data = use(fetchData()); // inside use we are providing our promise"
  return (
    <div>
      {/* <h1>Title of Todo</h1> */}
      {data.title}
    </div>
  );
};

export default FetchTodo;
