// Github link for React icons
// https://react-icons.github.io/react-icons/

// To use this first we have to install this libraray in our project
// run command
// npm install react-icons
// this third-party library will get stored in npm_modules

// To work with icons
// go to website, search for the icon you need
// copy `import` code and `component` so that you can use it

import { IoCartOutline } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { TbBrandReactNative } from "react-icons/tb";
import "./index.css";
const App = () => {
  return (
    <div>
      <h1>
        <IoCartOutline />
        <CiMenuKebab />
        <TbBrandReactNative />
      </h1>
    </div>
  );
};

export default App;
