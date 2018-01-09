const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const config = {
	//input
	context: __dirname + '/src',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin(),
		new Dotenv({
			path: '.env',
		})
	],

	//transformations
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader', 'eslint-loader'],
				exclude: /node_modules/,
			},
			{ 
				test: /\.css$/, 
				use: 'css-loader' 
			},
		]
	},

	//sourcemaps
	devtool: 'source-map',

	//server
	devServer: {
		contentBase: path.resolve(__dirname, '/src'),
		compress: true,
		port: 9000
	}
};

module.exports = config;