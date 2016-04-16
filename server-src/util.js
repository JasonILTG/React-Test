var path = require('path');

var logger = function (request, response, next) {
	console.log(Date.now() + ": I am a log and I'm logging a log.");
	next();
};

var debug = function (request, response, next) {
	response.setHeader('Content-Type', 'text/plain');
	response.write('You sent: \n');
	response.write(JSON.stringify(request.body, null, 2) + '\n');
	next();
}

var end = function (request, response) {
	response.end();
}

var dummy = function (request, response, next) {
	next();
}

var sendToIndex = function (request, response, next) {
	console.log("Sending to Index");
	response.sendFile(path.join(__dirname, 'index.html'));
	next();
}

exports.logger = logger;
exports.debug = debug;
exports.end = end;
exports.dummy = dummy;
exports.sendToIndex = sendToIndex;