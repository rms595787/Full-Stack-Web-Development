import http from "http";
/*
Important things you should know

/ or /homepage -> locates to homepage
/about -> about page

we will learn these in future
/contact:id
/product?query

in simple words whatever you type after single slash (/) it becomes a web page
/hello
/huxn-webdev
*/
const server = http.createServer((req, res) => {
  console.log(req.url);
  // Server Up!
  // localhost:8000/hello -> /hello
  // localhost:8000/ -> /
  // localhost:8000/about -> /about
  // localhost:8000/contact -> /contact
});
server.listen(8000, () => {
  console.log("Server Up!");
});

const server2 = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "Ok", { "Content-Type": "text/html" });
    // res.end("<h1>Home</h1>");
    res.end(
      '<section><h1>Home</h1><br></br><a href="/about">About Section</a><br></br><a href="/contact">Contact Section</a></section>'
    );
  } else if (req.url === "/about") {
    res.writeHead(200, "Ok", { "Content-Type": "text/html" });
    res.end("<section><h1>About Section</h1></br><a href='/'>Home</section>");
  } else if (req.url === "/contact") {
    res.writeHead(200, "Ok", { "Content-Type": "text/html" });
    res.end("<section><h1>Contact Section</h1></br><a href='/'>Home</section>");
  } else {
    res.writeHead(404, "BAD", { "Content-Type": "text/html" });
    res.end(
      "<section><h1>404 page not found :(</h1></br><a href='/'>Home</section>"
    );
  }
});
server2.listen(9000, () => {
  console.log("Server2 Up!");
});
