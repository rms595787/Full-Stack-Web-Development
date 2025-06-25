// NOTE - We can only return one parent html tag from any component like div, section, etc.
// you can use as many tags you want inside one parent tag
import WelcomeMessage from "./components/WelcomeMessage";

const App = () => {
  return (
    <div>
      <WelcomeMessage />
    </div>
  );
};

export default App;
