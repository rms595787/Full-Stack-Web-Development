// using useState and useEffect
import { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);

  // Empty dependecy array will call it once
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const data = await response.json();
      if (data && data.length) {
        setData(data);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((posts) => (
          <section key={posts.id}>
            <h1>Title</h1>
            <li>{posts.title}</li>
            <h2>Body</h2>
            <li>{posts.body}</li>
          </section>
        ))}
      </ul>
    </div>
  );
};
export default FetchData;
