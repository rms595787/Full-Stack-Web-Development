// NOTE - both code works as same
const App = () => {
  return (
    <section>
      <h1>My Website</h1>
      <article>
        <h2>Welcome To React</h2>
        <p className="text">Paragraph Content</p>
      </article>
    </section>
  );
};

export default App;

// ------------------------------------
// Go to babel 👇 and past your code and checkout the result.
// https://babeljs.io/repl

// The result we are getting

// import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// const App = () => {
//   return /*#__PURE__*/_jsxs("section", {
//     children: [/*#__PURE__*/_jsx("h1", {
//       children: "My Website"
//     }), /*#__PURE__*/_jsxs("article", {
//       children: [/*#__PURE__*/_jsx("h2", {
//         children: "Welcome To React"
//       }), /*#__PURE__*/_jsx("p", {
//         className: "text",
//         children: "Paragraph Content"
//       })]
//     })]
//   });
// };
// export default App;
