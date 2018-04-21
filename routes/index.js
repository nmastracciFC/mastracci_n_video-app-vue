var express = require('express');
var router = express.Router();
var config = require('../config');
var connect = require('../utils/sqlConnect');
var bodyParser = require('body-parser');
var videoController = require('../controllers/videoAppController');
/* GET home page. */
// router.get('/', function(req, res, next) {
	
  
// });
/* GET home page. */
router.get('/', videoController.get_all_movies );

router.get('/movies/:id/:movie', videoController.get_one_movie );

router.post('/api', videoController.post_new_review);

module.exports = router;
