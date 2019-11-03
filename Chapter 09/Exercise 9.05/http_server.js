var http = require('http');
var port = 3000;

// Spin-up a server instance
let server = http.createServer(function (req, res) {
  res.write('Hello World!'); // Response body
  res.end(); // End the response
});

server.listen(port); //the server object listens on port 3000
