//handle routing requests => the request gets passed via a route

exports.get_all_movies = (req, res) => {
	console.log('hit get all movies');
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