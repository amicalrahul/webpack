module.exports = {
    entry: ["./app.js","./util.js"],
    output: {
        filename: "bundle.js"
    },
    watch: true,
    
	module: {
		loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint-loader',
                //this is similar to defining a preloader
                enforce: 'pre'
            },
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},
	resolve: {
		extensions: ['.js', '.es6']
	}
}