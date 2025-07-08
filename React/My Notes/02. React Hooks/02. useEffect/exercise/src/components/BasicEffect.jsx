import { useEffect } from "react";
const BasicEffect = () => {
  useEffect(() => {
    console.log("BasicEffect is rendered and we are in the useEffect");
  }, []);
  return <h1>Check the console to see the result</h1>;
};

export default BasicEffect;
