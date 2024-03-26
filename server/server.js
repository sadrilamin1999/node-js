const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("This is Home page");
    res.end();
  } else if (req.url === "/about") {
    res.write("This is About Page");
    res.end();
  } else {
    res.write("Not found!");
    res.end();
  }
});
server.listen(3000);
console.log("Listening on port 3000");
