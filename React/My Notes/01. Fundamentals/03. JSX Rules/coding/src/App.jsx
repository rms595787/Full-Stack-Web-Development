// JSX RULES

// RULE 1 - we can only `use one parent tag` in `component's return statement` in jsx
// RULE 2 - `close all html tags`, do not leave any open html tag while working with jsx
// RULE 3 - we must use `className` instead of `class` keyword while passing any class to html tag in jsx
// RULE 4 - we must use `htmlFor` instead of `for` keyword inside `label` in `html Form`

// // RULE 1 - we can only `use one parent tag` in `component's return statement` in jsx

// const App = () => {
//   return (
//     // we can only return single parent html tag
//     <section>
//       <h1 className="title-card">Title 1</h1>
//       <div className="title-box">Title Box</div>
//       <div className="title-card">Title Card</div>
//     </section>

//     // // here we are trying to return two html parent tag - it will throw error
//     // <h1>Title 2</h1> // it will throw error
//   );
// };

// // RULE 2 - `close all html tags`, do not leave any open html tag while working with jsx

// import img from "./assets/img.jpg";
// const App = () => {
//   return (
//     <div>
//       <h1>We must close all html tags</h1>
//       <img src={img} alt="Unsplash img" height="500px" />
//     </div>

//     // // it will throw error due to unclosed html tag

//     // <img src="" alt="" >
//     // <div>
//     // <h1>
//   );
// };

// // RULE 3 - we must use `className` instead of `class` keyword while passing any class to html tag in jsx
// import img from "./assets/img.jpg";

// const App = () => {
//   return (
//     <section>
//       <div className="title">
//         <img src={img} alt="unpslash img" width="100%" />
//       </div>{" "}
//       {/* we must use "className" instead of "class" keyword while specifying
//       classes in html tags */}
//       <div class="title-error"></div>
//       {/* it will throw error because compiler thinks that it is a javaScript class after conversion to js */}
//       {/* you can error in browser's console: Invalid DOM property `class`. Did you mean `className`? */}
//     </section>
//   );
// };

// RULE 4 - we must use `htmlFor` instead of `for` keyword inside `label` in `html Form`

const App = () => {
  return (
    <form>
      {/* Must use 'htmlFor' keyword instead of 'for' that we used to use in html */}
      {/* because after conversion jsx file to js it thinks we are talking about "for loop" */}
      <label for="heading"></label>
      {/* you can see error in console: Invalid DOM property `for`. Did you mean `htmlFor`? */}
      <label htmlFor="name">Name: </label>
      <input type="text" placeholder="Enter your name" />
    </form>
  );
};

export default App;
