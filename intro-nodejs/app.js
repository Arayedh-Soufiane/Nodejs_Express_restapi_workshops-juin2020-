//core module

const http = require("http");

const server = http.createServer(function (req, res) {
  console.log(req.url);
  console.log(res);
  if (req.url === "/hello") {
    res.end("<h1> Hello World</h1>");
  }

  console.log("The client request an information from", req.url);
  res.end();
});

server.listen(5000, (err) => {
  err
    ? console.log(err)
    : console.log("The Serve is Running on port 5000.....");
});

//express
