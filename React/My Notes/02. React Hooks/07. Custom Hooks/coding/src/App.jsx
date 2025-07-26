// // Problems that we face without custom hooks
// // if we want to fetch this data in different multiple files we have to write to same code multiple times
// import { useState, useEffect } from "react";
// const App = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json()) // fetching the data
//       .then((data) => setData(data)); // setting data to the useState
//   }, []); // we are using this dependency array [], because we want to render this only once

//   return (
//     <div>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </div>
//   );
// };

// export default App;

import useFetch from "./useFetch";
const App = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
};
export default App;
