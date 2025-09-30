import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, "Ok", { "content-type": "text/html" });
  res.end("<h1>Hello From Node.js World!</h1>");
});
server.listen(8000, () => {
  console.log("Server Up!");
});
