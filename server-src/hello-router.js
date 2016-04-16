var express = require('express');
var router = express.Router();

var parser = require('./parser.js');
var greetings = require('./hello/greetings.js');

router.use(parser.router);
router.use('/name', greetings.named);

exports.router = router;