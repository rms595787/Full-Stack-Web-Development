import React from "react";
import UniqueId from "./components/UniqueId";

const App = () => {
  // if you use this component multiple times it will generate different ids
  return (
    <div>
      <UniqueId />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat
        quae delectus cumque laudantium reprehenderit veniam voluptas odit minus
        tempora impedit corporis earum illo dignissimos optio nam similique,
        laborum architecto!
      </p>
      <UniqueId />
    </div>
  );
};

export default App;
