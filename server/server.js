const http = require("http");
const fs = require("fs");

//server create
const server = http.createServer((req, res) => {
  //set header
  res.setHeader("Content-Type", "text/html");

  //routes
  let path = "./html/";
  switch (req.url) {
    case "/":
      path += "/index.html";
      res.statusCode = 200;
      break;

    case "/about":
      path += "/about.html";
      res.statusCode = 200;
      break;

    default:
      path += "/not-found.html";
      res.statusCode = 404;
      break;
  }
  //send response to html client
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});
server.listen(8000, "localhost", () => {
  console.log("Server running on port 8000");
});
