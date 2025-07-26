import Accordions from "./components/Accordions";
// Step 1: We have to import accordions data in app.jsx then we pass that data as props in Accordions.jsx then render it

import { accordionData } from "./utils/content";
const App = () => {
  return (
    <div className="accordion">
      {accordionData.map(({ title, content }) => (
        <Accordions title={title} content={content} />
      ))}
    </div>
  );
};
export default App;
