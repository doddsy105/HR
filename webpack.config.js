var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new 
HTMLWebpackPlugin ({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: __dirname + '/app/entry.jsx',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	output: {
		filename: 'compiled.js',
		path: __dirname + '/build'
	},
	plugins : [HTMLWebpackPluginConfig]
};