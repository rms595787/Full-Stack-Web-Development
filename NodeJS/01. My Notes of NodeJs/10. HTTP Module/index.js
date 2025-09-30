import http from "http";

// Creating a server in nodejs
// Syntax
// const server = http.createServer((res,req)=>{});
// we need to pass request and response in here, which will handle everything in server

// ---------------------****************---------------------
// After doing this your server will work but do nothing, it will try to load but not completely load
const server = http.createServer((req, res) => {});

// here we are sending request to the server, that use port 8000
server.listen(8000, () => {
  console.log("Server Up!, running on port 8000");
});
// ---------------------****************---------------------

// ---------------------****************---------------------
// here we will see what information a server holds
const server2 = http.createServer((req, res) => {
  console.log(req);
});
server2.listen(9000, () => {
  console.log("Server2 Up!, running on port 9000");
});

// Note: It will show you info only if you open localhost:serverPort
// ---------------------****************---------------------

// ---------------------****************---------------------
const server3 = http.createServer((req, res) => {
  res.write("<h1>Hello From Node.js Server</h1>");
  res.end();
});
server3.listen(3000, () => {
  console.log("Server3 Up!, running on post 3000");
});
// Note: Here we do not have access to the content type in inspect -> network section
// ---------------------****************---------------------

// ---------------------****************---------------------
// here we will set content type/ setHeader
const server4 = http.createServer((req, res) => {
  /*
  // setting status code and message
  res.statusCode = 404;
  res.statusMessage = "BAD";

  // setting header or content type
  res.setHeader("Content-Type", "text/html");
*/

  // shorthand to for status ( code, message, header )
  res.writeHead(202, "Good", { "Content-Type": "text/html" });
  res.write("<h1>Hello From Node.js Server</h1>");
});
server4.listen(9001, () => console.log("Server4 Up!, running on port 9001"));
// ---------------------****************---------------------
