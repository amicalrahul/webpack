var path = require('path');

module.exports = {
	context: path.resolve('js'),
    entry: ["./app.js","./util.js"],
    output: {
        path: path.resolve('build/js/'),
		publicPath: '/public/assets/js/',
        filename: "bundle.js"
    },

	devServer: {
		contentBase: 'public'
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