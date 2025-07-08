//  Example 2 - having array in useState
import { useState } from "react";
const App = () => {
  const [friends, setFriends] = useState(["Alex", "John"]);
  const addOneFriend = () => setFriends([...friends, "Rahul"]);
  const removeFriend = () => setFriends(friends.filter((f) => f !== "John"));
  const updateFriend = () =>
    setFriends(friends.map((f) => (f === "Rahul" ? "Rahul Sharma" : f)));
  return (
    <section>
      {friends.map((f) => (
        <li key={Math.random()}>{f}</li>
      ))}

      <button onClick={addOneFriend} style={{ padding: "10px 30px" }}>
        Add Friend
      </button>
      <button onClick={removeFriend} style={{ padding: "10px 30px" }}>
        Remove Friend
      </button>
      <button onClick={updateFriend} style={{ padding: "10px 30px" }}>
        Update Friend
      </button>
    </section>
  );
};
export default App;
