// Event Handler

// Example 1
const Button = () => {
  const handleClick = () => {
    console.log(Math.floor(Math.random() * 10));
  };
  return (
    <div>
      <button
        onClick={() => {
          console.log("You clicked me!");
        }}
        style={{
          padding: "20px 40px",
          backgroundColor: "Whitesmoke",
          color: "crimson",
          fontSize: "24px",
          borderRadius: "15px",
        }}
      >
        Click Me
      </button>

      <button
        onClick={handleClick}
        style={{
          padding: "20px 40px",
          backgroundColor: "Whitesmoke",
          color: "crimson",
          fontSize: "24px",
          borderRadius: "15px",
        }}
      >
        Click and Get a Random Number
      </button>
    </div>
  );
};

// Example 2
const Copy = () => {
  const copyHandler = () => {
    alert("Stop stealing my content");
    console.log("Stop stealing my content");
  };
  return (
    <p onCopy={copyHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
      inventore beatae, blanditiis in tempora odio quasi dolore? Ipsa possimus
      inventore sit magni est. In obcaecati ratione provident esse assumenda et
      repellat consequatur quo explicabo necessitatibus non nam, sint, saepe,
      blanditiis quas? Error eveniet fugiat quos voluptatum aliquid impedit quae
      consequatur velit voluptates quis quia, cum a, quasi doloremque!
      Voluptates, dolorum.
    </p>
  );
};

// Example 3
const Move = () => {
  const moveHandler = () => {
    alert("Mouse is over the content");
    console.log("Mouse is over the content");
  };
  return (
    <p onMouseOver={moveHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae vel
      tempora libero ipsum inventore perspiciatis iusto molestias enim sed
      tenetur labore doloribus impedit eius quaerat aut fuga architecto
      voluptatem, saepe obcaecati ipsam quia. Rem iste corrupti error ipsum
      quisquam nulla vitae distinctio dolorem ullam corporis. Consectetur
      repellat nisi eaque quidem magni officia corporis ut hic repudiandae
      reprehenderit, beatae amet? Commodi.
    </p>
  );
};

const App = () => {
  return (
    <div>
      <h1>Example 1</h1>
      <Button />
      <h1>Example 2</h1>
      <Copy />
      <h1>Example 3</h1>
      <Move />
    </div>
  );
};
export default App;
