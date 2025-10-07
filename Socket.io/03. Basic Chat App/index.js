// 1. Importing packages
import express from "express";
import http from "http";
import { Server } from "socket.io";

// 2. Creating Instances of packages
const app = express(); // creating instance of express
const server = http.createServer(app); // creating server using "http" module
const io = new Server(server); // creating socket.io server

// 3. Serving HTML files
app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(join(__dirname, "public/index.html")));

// 4. Defining a connection event handler
io.on("connection", (socket) => {
  console.log("User Connected Succesfully ✅");
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () =>
    console.log("User disconnected succesfully ❌")
  );
});

// 5. Start the server
const PORT = 3000;
server.listen(PORT, () => console.log(`Server up! running on port ${PORT}`));
