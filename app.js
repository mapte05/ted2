// server

var http = require('http');
var express = require('express');
var twilio = require('twilio');

var app = express();

app.post('/sms', function(req, res) {
  var twilio = require('twilio');
  var twiml = new twilio.TwimlResponse();
  twiml.message('Hey dude I just got your text!');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});


app.get('/', function(req, res) {
	res.end("did this work?");
});


http.createServer(app).listen(1337, function () {
  console.log("Express server listening on port 1337");
});


// app.all("*", function(request, response, next) {
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   next();
// });

// app.get("/", function(request, response) {
//   response.end("Welcome to the homepage!");
// });

// app.get("/about", function(request, response) {
//   response.end("Welcome to the about page!");
// });

// app.get("*", function(request, response) {
//   response.end("404!");
// });