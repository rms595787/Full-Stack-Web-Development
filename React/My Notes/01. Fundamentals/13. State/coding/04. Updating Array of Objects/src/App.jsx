import {useState} from "react";
// Example 4 - having array of objects in useState
const App = () => {
  const [movie, setMovie] = useState([
    { id: 1, title: "Spider Man", ratings: 3 },
    { id: 2, title: "Super Man", ratings: 4 },
    { id: 3, title: "Iron Man", ratings: 4.3 },
  ]);
  const handleClick = () => {
    setMovie(
      movie.map((m) =>
        m.id === 1
          ? { ...movie, title: "John Wick 5", id: m.id, ratings: m.ratings }
          : m
      )
    );
  };
  return (
    <section>
      {movie.map((f) => (
        <ul key={Math.random()}>
          <h1>Movie {f.id}</h1>
          <li>ID : {f.id}</li>
          <li>Title : {f.title}</li>
          <li>Ratings : {f.ratings}</li>
        </ul>
        // <li key={Math.random()}>{f.title}</li>
      ))}
      <button onClick={handleClick} style={{ padding: "10px 30px" }}>
        Change movie
      </button>
    </section>
  );
};

export default App;