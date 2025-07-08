import { useState } from "react";
// Example 3 - having object in useState
const App = () => {
  const [movie, setMovie] = useState({
    title: "Equalizer 3",
    ratings: 7,
  });

  const handleClick = () => {
    // // 1st way - long
    // const copyMovie = {
    //   ...movie,
    //   ratings: 5,
    // };

    // setMovie(copyMovie);

    // 2nd way - short hand trick
    setMovie({ ...movie, ratings: 5 });
  };
  return (
    <section>
      <h1>Title : {movie.title}</h1>
      <p>Ratings : {movie.ratings}</p>
      <button onClick={handleClick} style={{ padding: "10px 30px" }}>
        Update
      </button>
    </section>
  );
};
export default App;
