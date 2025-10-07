// importing packages
import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from "cors"; // this helps establish connection between client/frontend and server/backend

// creating instances
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

// middleware
app.use(cors());

// connecting even handler
io.on("connection", (socket) => {
  console.log("New Client Connected ✅");

  socket.on("message", (message) => {
    console.log("Message received:", message);
    io.emit("message", message);
  });
  socket.on("disconnect", () => {
    console.log("Client Disconnected ❌");
  });
});
// 5. run the server
const PORT = 3000;
server.listen(PORT, () => console.log(`Server up! running on port: ${PORT}`));
