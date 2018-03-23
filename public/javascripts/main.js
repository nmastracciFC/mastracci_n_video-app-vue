const myApp = {

	//all non-vue functionality goes here


	 vm: new Vue({
		el: "#app",
		data: {
			message: "Welcome to the Newflix"
		},
		methods: {

		},
		//this changes the syntax for what vue is looking at for it's binding 
		//because if we dont set it then it will compete with handlebars
		delimiters: ['${','}']

	})
}