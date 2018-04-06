var myVideoApp = {

	movieReviews(data) {
		//process the review data and push it into the Vue instance
		data.forEach(review => myVideoApp.vm.reviews.push(review));
		
	},


	vm: new Vue({
		delimiters: ['${','}'],
		el: '#video',
		data: {
			reviews: []
		},
		methods: {

		}
		
	})
}
myVideoApp.movieReviews(appData.movies);
