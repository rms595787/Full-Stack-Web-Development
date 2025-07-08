// Inline css

// 1. use double curly braces {{property: value}}
// const App = () => {
//   return (
//     <div>
//       <h1 style={{ color: "white", backgroundColor: "teal" }}>
//         Hello, world!<br></br>This is inline Css in React
//       </h1>
//     </div>
//   );
// };

// 2. Separate Styles and then interpolate it.
const App = () => {
  const styles = { color: "white", backgroundColor: "crimson" };
  return (
    <div>
      <h1 style={styles}>
        Hello, World!
        <br />
        This is inline style(separate styles and then interpolate it) method
      </h1>
    </div>
  );
};
export default App;
