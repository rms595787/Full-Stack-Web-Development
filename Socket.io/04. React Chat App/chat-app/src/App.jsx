import { useState, useEffect } from "react";
import io from "socket.io-client";

const PORT = 3000;
const socket = io(`http://localhost:${PORT}`);

const App = () => {
  const [messages, setMessage] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    // the message we are taking from backend/server we will add that in messages like this
    socket.on("message", (message) => {
      setMessage([...messages, message]);
    });

    // clean up function
    return () => {
      socket.off("message");
    };
  }, [messages]);

  const sendMessage = () => {
    if (messageInput.trim() !== "") {
      // message is not empty
      socket.emit("message", messageInput);
      setMessageInput("");
    }
  };
  return (
    <div>
      <h1>Simple React Chat App</h1>
      <input
        type="text"
        value={messageInput}
        placeholder="Type your message..."
        onChange={(e) => setMessageInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>

      {/* Message rendering section */}
      <section>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </section>
    </div>
  );
};

export default App;
