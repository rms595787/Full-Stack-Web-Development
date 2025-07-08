import Greeting from "./components/Greeting";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";

const App = () => {
  return (
    <div>
      <h1>Conditional Rendering in React</h1>

      {/* Greeting Component */}
      <Greeting timeOfDay="morning" />
      <Greeting timeOfDay="afternoon" />

      {/* UserStatus */}
      <UserStatus loggedIn={true} isAdmin={true} />
      <UserStatus loggedIn={true} isAdmin={false} />
      <UserStatus loggedIn={false} isAdmin={true} />

      {/* Weather component  */}
      <Weather temperature={10} />
      <Weather temperature={20} />
      <Weather temperature={30} />
    </div>
  );
};
export default App;
