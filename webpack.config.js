var path = require('path');

module.exports = {
	entry: [
		'./react-src/App.js'
	],
	output: {
		path: path.resolve(__dirname, './public'),
		publicPath: path.resolve(__dirname, './public'),
		filename: 'app.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel'
		}]
	}
}