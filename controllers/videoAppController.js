//handle routing requests => the request gets passed via a route
var config = require('../config');
const connect = require('../utils/sqlConnect');
var bodyParser = require('body-parser');

exports.get_all_movies = (req, res) => {
	console.log('hit get all movies');

	connect.getConnection((err, connection) => {
		if (err) {
			return console.log(err.message);
		}
		let query = `SELECT * FROM tbl_movies m, tbl_genre g, tbl_mov_genre mg WHERE m.movies_id = mg.movies_id AND g.genre_id = mg.genre_id`;
		connect.query(query, (err, rows) => {
			connection.release();//terminate connection and let someone else use it
			if (err) {
				return console.log(err.message);
			}
			console.log(rows);

			res.render('home', { 
				message: 'Express',
				defaultMovie : rows[Math.floor(Math.random() * rows.length)], 
				//take the length of the movies array and choose a random number in there
				//display the movie
				data: JSON.stringify(rows),
				mainpage: true,
				moviespage: false
			});
		})
	})


};

// console.log('get all the movies');
// 	connect.query(`SELECT * FROM tbl_movies m, tbl_genre g, tbl_mov_genre mg WHERE m.movies_id = mg.movies_id AND g.genre_id = mg.genre_id`, (error, rows) => {
// 		if(error) {
// 			console.log(error)
// 		} else {
// 			res.render('home', { 
// 				message: 'Express',
// 				defaultMovie : rows[Math.floor(Math.random() * rows.length)], 
// 				//take the length of the movies array and choose a random number in there
// 				//display the movie
// 				data: JSON.stringify(rows),
// 				mainpage: true,
// 				moviespage: false
// 			});

// 		}//else end bracket
// 	});//query end bracket



exports.get_one_movie = ((req,res) =>{
	console.log('hit get one movies');

	connect.getConnection((err, connection) => {
		if (err) {
			return console.log(err.message);
		}
		let query = `SELECT * FROM tbl_comments WHERE comments_movie = "${req.params.id}"`;
		connect.query(query, (err, rows) => {
			connection.release();//terminate connection and let someone else use it
			if (err) {
				return console.log(err.message);
			}
			console.log(rows);

			res.render('moviespage', {
				movie: req.params.id,
				moviesrc: req.params.movie,
				data: JSON.stringify(rows),
				mainpage: false,
				moviespage: true
			});
		})
	})
})




// console.log(req.params.id, req.params.movie);
// 	connect.query(`SELECT * FROM tbl_comments WHERE comments_movie = "${req.params.id}"`, (err, rows) => {
// 		if (err) {
// 			console.log(err);
// 		}else {
// 			console.log(rows);
// 			res.render('moviespage', {
// 				movie: req.params.id,
// 				moviesrc: req.params.movie,
// 				data: JSON.stringify(rows),
// 				mainpage: false,
// 				moviespage: true
// 			});
// 		}
// 	});


exports.post_new_review = (req,res) => {
	console.log('post a review');

	connect.getConnection((err, connection) => {
		if (err) {
			return console.log(err.message);
		}
		let query = `INSERT INTO tbl_comments (comments_id, comments_auth, comments_copy, comments_date, comments_movie, comments_rating) VALUES (NULL, NULL, "${req.body.comment}",  CURRENT_TIMESTAMP(),"${req.body.id}", "${req.body.stars}");`;
		connect.query(query, (err, rows) => {
			connection.release();//terminate connection and let someone else use it
			if (err) {
				return console.log(err.message);
			}
			// console.log(rows);

			res.json(data);
		})
	})

}

// console.log('post a review');
// 	connect.query(`INSERT INTO tbl_comments (comments_id, comments_auth, comments_copy, comments_date, comments_movie, comments_rating) VALUES (NULL, NULL, "${req.body.comment}",  CURRENT_TIMESTAMP(),"${req.body.id}", "${req.body.stars}");`, (error, data) => {
// 		if(error) {
// 			console.log(error)
// 		} else {
// 			res.json(data);

// 		}//else end bracket
// 	});//query end bracket