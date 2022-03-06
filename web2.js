// Load the http module to create an http server
// var http = require('http');
// const fs = require('fs')

/*
// Configure HTTP server to respond with Hello World to all requests
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  fs.createReadStream('index.html').pipe(response);

  // response.end("Hello World\n");
});

var port = process.env.PORT || 3000

// Listen on assigned port
server.listen(port);

// Put a friendly message on the terminal
console.log("Server listening on port " + port);
*/

/*
var port = process.env.PORT || 3000

fs.readFile('./index.html', function (err, html) {
  if (err) {
    throw err;
  }
  http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
  }).listen(port);

  console.log("Server listening on port " + port);
});
*/

const express = require('express');
// const express = require('/node-v12.22.6-linux-x64/lib/node_modules/npm/node_modules/express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

// app.use(express.static('../dist/angular-directory'))
app.use(express.static('./'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.sendFile('index.html',{root:__dirname})
});

app.listen(port, () => {
  console.log("Server is listening on port "+port);
  console.log("FIRST_TEST environment variable value: " + process.env.FIRST_TEST);
});
