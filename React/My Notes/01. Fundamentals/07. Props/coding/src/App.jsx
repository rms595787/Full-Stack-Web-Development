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

const User = (props) => {
  return (
    <section>
      <img src={props.img} alt="image loading..." width="200px" />
      <h1>Name : {props.name}</h1>
      <h2>Age : {props.age}</h2>
      <h3>isMarried: {props.isMarried}</h3>
      <h3>hobbies : {props.hobbies}</h3>
    </section>
  );
};

export default App;
