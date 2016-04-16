var getGreeting = function (request, response, next) {
	response.write("Hello World!\n");
	next();
}

var postGreeting = function (request, response, next) {
	response.write("Hello POST-apocalyptic world!\n");
	next();
}

var nameGreeting = function (request, response, next) {
	console.log("Say hello to " + request.body.name + "!");
	response.write("Hello " + request.body.name + "!\n");
	next();
}

exports.get = getGreeting;
exports.post = postGreeting;
exports.named = nameGreeting;