var express = require('express');
var router = express.Router();
var config = require('../config');
var connect = require('../utils/sqlConnect');
var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { message: 'Express' });
});

module.exports = router;
