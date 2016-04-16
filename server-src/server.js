var path = require('path');

var express = require('express');
var app = express();
var router = express.Router();

var util = require('./util.js');

var account = require('./account.js');


// Logging logger that logs
app.use(util.logger);
// Static files in public directory
app.use(express.static('public'));
// Send index.html file for all get requests
app.get('/*', util.sendToIndex);
// Account router handles everything in /account
app.use('/account', account.router);
// End responses
app.use(util.end);

// Start the server
var port = 4242;
app.listen(port, function () {
	console.log("Listening on port " + port + "!");
});