var path = require('path');

var express = require('express');
var app = express();
var router = express.Router();

var util = require('./util.js');
var greetings = require('./hello/greetings.js');

var hello = require('./hello-router.js');
var account = require('./account.js');



app.use(util.logger);

app.use(express.static('public'));

app.get('/*', util.sendToIndex);

app.use('/hello', hello.router);
app.use('/account', account.router);

app.use(util.end);






var port = 4242;
app.listen(port, function () {
	console.log("Listening on port " + port + "!");
});