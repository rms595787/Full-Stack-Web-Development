import useFetch from "../hooks/useFetch";

const FetchComponent = () => {
  const {data, loading, error} = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <ul>{data && data.map((item) => <li key={item.id}>{item.title}</li>)}</ul>
    </div>
  );
};
export default FetchComponent;
