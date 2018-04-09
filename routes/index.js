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

router.get('/movies/:id/:movie', (req, res) => {
	console.log(req.params.id, req.params.movie);
	connect.query(`SELECT * FROM tbl_comments WHERE comments_movie = "${req.params.id}"`, (err, rows) => {
		if (err) {
			console.log(err);
		}else {
			console.log(rows);
			res.render('moviespage', {
				movie: req.params.id,
				moviesrc: req.params.movie,
				data: JSON.stringify(rows),
				mainpage: false,
				moviespage: true
			});
		}
	});
})

module.exports = router;
