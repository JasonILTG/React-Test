var path = require('path');

// Logging logger that logs
var logger = function (request, response, next) {
	console.log(Date.now() + ": I am a log and I'm logging a log.");
	next();
};

// Debug for POST requests
var debug = function (request, response, next) {
	console.log('You sent: ');
	console.log(JSON.stringify(request.body, null, 2));
	next();
}

// Ends responses
var end = function (request, response) {
	response.end();
}

// Duummy function that does nothing
var dummy = function (request, response, next) {
	next();
}

// Sends the index.html file
var sendToIndex = function (request, response) {
	response.sendFile(path.resolve(__dirname, '../public/index.html'));
}

exports.logger = logger;
exports.debug = debug;
exports.end = end;
exports.dummy = dummy;
exports.sendToIndex = sendToIndex;