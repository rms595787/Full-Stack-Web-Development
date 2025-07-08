// Note - we are using round brackets () while using callback function here
const App = () => {
  const numbers = [1, 2, 3, 4, 5];
  const userInfo = [
    {
      username: "Huxn",
      email: "test@gmail.com",
      location: "USA",
    },
    {
      username: "John",
      email: "jd@gmail.com",
      location: "Arab",
    },
    {
      username: "Rahul",
      email: "rahul@gmail.com",
      location: "India",
    },
  ];

  return (
    <main>
      {/* inside curly braces we have our js world */}

      {/* first way of using list in react - Error: Each child in a list should have a unique "key" prop. */}
      <h1>Basic Approach</h1>
      {numbers.map((number) => (
        <ul>
          <li>{number}</li>
        </ul>
      ))}

      {/* solving key related problem by specifying unique keys to every element of list
       */}
      <h1>Handling unique key issue</h1>
      {numbers.map((numbers) => (
        <ul key={numbers}>
          {" "}
          {/* This is to make each child unique we use key in parent */}
          <li>{numbers}</li>
        </ul>
      ))}

      <h1>Real life use case of lists</h1>
      {/* taking example of userInfo */}
      {userInfo.map((user) => (
        <ul key={Math.random()}>
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>{user.location}</li>
        </ul>
      ))}

      <h1>Real life use case of lists</h1>
      {/* taking example of userInfo and using "Destructuring of array" */}
      {userInfo.map(({ username, email, location }) => (
        <ul key={Math.random()}>
          <li>{username}</li>
          <li>{email}</li>
          <li>{location}</li>
        </ul>
      ))}
    </main>
  );
};

export default App;
