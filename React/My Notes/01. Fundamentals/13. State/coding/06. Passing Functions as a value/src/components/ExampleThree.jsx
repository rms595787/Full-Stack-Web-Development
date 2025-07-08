import { useEffect, useState } from "react";
const ExampleThree = () => {
  // here we are using callback function inside of useState which takes data name from localStorage if there any else return empty string
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });

  // it stores the value in localStorage
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const handleChange = (event) => {
    setName(event.target.value); // this will store data entered in input box in name section of localStorage
  };

  const handleClear = () => {
    setName("");
  };

  return (
    <div>
      <h1>Your Name : {name}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <button onClick={handleClear}>Clear Name</button>
    </div>
  );
};
export default ExampleThree;
