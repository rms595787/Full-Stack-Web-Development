import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "Ok", { "Content-Type": "text/html" });
    fs.readFile(
      "01. My Notes of NodeJs/12. Serving Pages/public/index.html",
      (error, data) => {
        if (error) throw error;
        res.end(data);
      }
    );
  } else if (req.url === "/about") {
    res.writeHead(200, "Ok", { "Content-Type": "text/html" });
    fs.readFile(
      "01. My Notes of NodeJs/12. Serving Pages/public/about.html",
      (error, data) => {
        if (error) throw error;
        res.end(data);
      }
    );
  } else {
    res.writeHead(404, "BAD", { "Content-Type": "text/html" });
    res.end("<h1>404 page not found</h1><br></br><a href='/'>Home</a>");
  }
});
server.listen(8000, () => console.log("Server Up!"));
