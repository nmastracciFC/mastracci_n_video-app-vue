var myVideoApp = {

	movieReviews(data) {
		//process the review data and push it into the Vue instance
		data.forEach(review => myVideoApp.vm.reviews.push(review));
		
	},


	vm: new Vue({
		delimiters: ['${','}'],
		el: '#video',
		data: {
			reviews: [],
			numStars: 3,
			review: ''

		},
		methods: {
			addReview() {
				let movieId = document.querySelector('.movId').textContent;
				axios.post('/api', {
					id:movieId,
					stars: this.numStars,
					comment: this.review
				})
				.then( response => {
					console.log(response);
				})
				.catch( error => {
					console.log(error);
				});

				//push into reviews array
				this.reviews.push({
					comments_copy:this.review,
					comments_rating :this.numStars,
					comments_date: `${new Date()}`
				});
				this.review = "";
				this.numStars = 0;
				// fetch('/api', {
				// 	method: 'post',
				// 	headers: {
				// 		'Accept': 'applications/json, text-plain, */*',
				// 		'Content-Type': 'application/json'
				// 	},
				// 	body: JSON.stringify({
				// 		id:movieId,
				// 		stars: this.numStars,
				// 		comment: this.review
				// 	})
				// 	})
				// 	.then((resp) => resp.json())
				// 	.then((data) => {
				// 		console.log(data);
				// 	})
				// 	.catch((error) =>{
				// 		console.log(error);
				// 	});
				}
		}
		
	})
}
myVideoApp.movieReviews(appData.movies);
