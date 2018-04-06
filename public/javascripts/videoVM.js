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
			numstars: 3,
			review: ''

		},
		methods: {
			addReview: function() {

			}
		}
		
	})
}
myVideoApp.movieReviews(appData.movies);
