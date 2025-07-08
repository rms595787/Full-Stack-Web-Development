import { useState, useEffect } from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const fetchedData = await response.json();
      if (fetchedData && fetchedData.length) {
        setData(fetchedData);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <h1>First Post Title:</h1>
      {data.length > 0 ? <h2>{data[0].title}</h2> : <p>loading...</p>}
    </div>
  );
};
export default FetchDataEffect;
