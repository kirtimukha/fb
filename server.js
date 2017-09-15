// var http = require('http');
// http.createServer(function(req, res) {
//   res.write('Hello World!');
//   //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080


var express = require('express');
var app = express(); app.get('/', function (req, res) {  res.send('Hello World!'); }); app.listen(8080, function () {  console.log('Example app listening on port 3000!'); });
