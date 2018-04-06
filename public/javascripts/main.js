const myApp = {

	//all non-vue functionality goes here
	movieGenres(data, genres) {
		genres.forEach((genre, index) =>{
			myApp.vm.genres.push({
				name: genre,
				movies: data.filter(movie => movie.genre_name === genre);
			})
		})
	},


	 vm: new Vue({
		el: "#app",
		data: {
			message: "Welcome to the Newflix",
			genres: []//populated from the function at the top
		},
		methods: {

		},
		//this changes the syntax for what vue is looking at for it's binding 
		//because if we dont set it then it will compete with handlebars
		//now backend stuff will be shown with express and front end can go with vue
		delimiters: ['${','}']

	})
}