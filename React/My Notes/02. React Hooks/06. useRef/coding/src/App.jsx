import { useRef } from "react";
const App = () => {
  const inputElement = useRef(null);
  console.log(inputElement);
  const focusInput = () => {
    inputElement.current.focus(); // this focus function is coming from dom and focuses on current selected element
    inputElement.current.value = "Rahul";
  };
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus & write Rahul</button>
    </div>
  );
};
export default App;
