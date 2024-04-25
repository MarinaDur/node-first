const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("This is the about page");
  } else {
    res.end(`
    <h1>Opps</h1>
    <p> Can't find this page</p>
    <a href="/">Back to home page</a>
    `);
  }
});

server.listen(5000);
