const Greeting = ({ timeOfDay }) => {
  if (timeOfDay == "morning") return <h1>Good morning!</h1>;
  else if (timeOfDay == "afternoon") return <h1>Good afternoon!</h1>;
};
export default Greeting;
