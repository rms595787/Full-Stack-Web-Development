// "app" is parent underneath that we have "User" which is child of "app" component
const App = () => {
  return (
    <User
      img="./assets/snow.jpg"
      name="Rahul Sharma"
      age={20}
      isMarried={false}
      hobbies={["Coding", "Reading", "Sleeping"]}
    />
  );
};

// destructuring code

const User = ({ img, name, age, isMarried, hobbies }) => {
  return (
    <section>
      <img src={img} alt="image loading..." width="200px" />
      <h1>Name : {name}</h1>
      <h2>Age : {age}</h2>
      <h3>isMarried: {isMarried}</h3>
      <h3>hobbies : {hobbies}</h3>
    </section>
  );
};
export default App;
