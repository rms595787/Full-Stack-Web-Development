import { useState, useEffect } from "react";

interface Todo {
  title: string;
}

const FetchTodo = () => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/2");
        if (!res.ok) throw new Error("Network response was not ok");
        const data: Todo = await res.json();
        setTodo(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>{todo?.title}</h1>
    </div>
  );
};
export default FetchTodo;
