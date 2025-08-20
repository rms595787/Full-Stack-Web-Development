import User from "./components/User";

const App = () => {
  return (
    <div>
      <User name="rahul" age={20} isStudent={true} />

      {/* Demonstrating use of Children as a props point 6 */}
      {/* <User>
        <p>Hello</p>
      </User> */}
    </div>
  );
};

export default App;
