var http = require('http');
var fs = require('fs');
var express = require('express');

var app = express();
app.use(express.static(__dirname + 'public')); //Serves resources from public folder

http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);

    return res.end();
  });
}).listen(8080);