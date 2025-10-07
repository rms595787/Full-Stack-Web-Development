// 1. packages
import express from "express";
import http from "http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { Server } from "socket.io";

// 2. Instances

const app = express(); // creating instance of express.js
const server = http.createServer(app); // creating server using "http" module and passing express "app" instance to it
const io = new Server(server); // this is our socket.io server and here we are passing our server which we create using http module

// 3. Serving HTML file

const __dirname = dirname(fileURLToPath(import.meta.url)); // this takes path of current directory this project is
console.log(__dirname);
// /Users/rahulsh9956/Documents/Coding/Full-Stack-Web-Development/Socket.io/02. Socket io

// to connect/add our static file in this path

app.get("/", (req, res) => res.sendFile(join(__dirname, "/static/index.html")));

// 4. Define a connection event handler

// ✅ What it does:
// Waits for a client to connect (for example, from your browser)
// As soon as the connection is established, the callback runs
// Prints "User Connected To (server) ✅" in your server terminal
io.on("connection", (socket) => {
  // 1. connecting
  console.log("User Connected To (server) ✅");

  //   // 2. Getting properties from connected server
  //   console.log(socket); // this gives all properties and info

  //   // Who connected
  //   // Their network info
  //   // Internal connection details
  //   // Functions to communicate (emit, on, disconnect)

  // 3. Disconnecting any client from server

  // we are not disconnecting "whole socket.io server" instead we are disconneting the "client of this socket.io server"
  socket.on(
    "disconnect",
    () => console.log("User Disconnected From (server) ❌") // when you close the page you can see that client is been disconnected while our server is still running
  );

  // 4. sending and receiving data

  // Sending data from server side to client side
  // socket.emit("name of message","The message to deliever");
  // name of message -> could be anything, but should be same while sending and receiving
  socket.emit("message","Welcome to the server!");

  // Receiving data from client side
  socket.on("new message",(m)=> console.log(m));

});
// 5. Start the server

const PORT = 3000;

server.listen(3000, () => console.log(`Server up! running on port ${PORT}`));
