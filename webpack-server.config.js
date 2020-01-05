const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
	entry: './src/server/index.js',
	target: 'node',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'server/server.js',
		libraryTarget: 'commonjs2',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: 'file-loader',
				options: {
					outputPath: 'images',
				},
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
}
