// For expressions to work we use "{}" curly braces and write expression inside of it

const App = () => {
  const myName = "Rahul Sharma";
  const multiply = (a, b) => a * b;
  const specialClass = "simple-class";
  return (
    <section>
      <p>2 + 2</p>
      <p>{2 + 2}</p>
      <p>2 + 2 = {2 + 2}</p>

      <h1>{myName}</h1>
      <p>My friend list : {["Ram", "Shyam", "Hanuman"]}</p>
      <p>2 * 10 = {multiply(2, 10)}</p>
      <p className={specialClass}>This is special class</p>
    </section>
  );
};

export default App;
