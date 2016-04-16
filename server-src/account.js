var express = require('express');
var router = express.Router();

var util = require('./util.js');

var parser = require('./parser.js');

var createAccount = function(request, response, next) {
	console.log('Account created with username ' + request.body.user +
		' and password ' + request.body.password + '.');

	next();
}

var verifyAccount = function(request, response, next) {
	console.log('Verifying ' + request.body.user +
		' with password ' + request.body.password + '...');
	if (request.body.user === request.body.password) {
		response.json({
			valid: true
		});
	} else if (request.body.password === '42') {
		response.json({
			valid: true
		});
	} else {
		response.json({
			valid: false
		});
	}

	console.log("Done verifying.");
	next();
}

router.use('/', parser.router);
router.use('/create', createAccount);
router.post('/verify', verifyAccount);

exports.router = router;