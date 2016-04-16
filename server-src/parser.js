var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var util = require('./util.js');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
// router.use(util.debug);

exports.router = router;