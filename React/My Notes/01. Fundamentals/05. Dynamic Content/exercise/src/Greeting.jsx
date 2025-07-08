const Greeting = () => {
  const Name = "Rahul";
  const date = new Date();
  return (
    <div>
      <h1>Greetings, {Name}!</h1>
      <p>Date: {date.toLocaleString()}</p>
    </div>
  );
};

export default Greeting;
