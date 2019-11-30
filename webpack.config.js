const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist/'),
		filename: 'js/index_bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
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
	plugins: [
		// new HtmlWebpackPlugin({
		// 	template: './src/index.html',
		// }),
		// new BundleAnalyzerPlugin({
		// 	analyzerMode: 'server',
		// 	generateStatsFile: true,
		// 	statsOptions: { source: false },
		// }),
	],
}
