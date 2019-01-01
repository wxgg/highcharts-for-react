const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// glob(path.join(__dirname, '../js/bee/*.js*'),function (er, files) {
//   console.log(files)
// });
//entries.vendors = getVendors();

module.exports = {
	mode: 'production',
	entry: {
		index: path.join(__dirname, './js/index.js')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
		publicPath: "/",
		libraryTarget: 'umd',
		library: 'expression'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	externals: ['react', 'react-dom', 'prop-types', "fast-deep-equal", "highcharts"],
	
	module: {
		rules: [
			
			{
				test: /.jsx$/,
				loader: 'babel-loader',
			  },
			  {
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			  },{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				]
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						// options: {
						//   modules: true,
						//   sourceMap: true,
						//   importLoader: 2
						// }
					},
					"sass-loader"
				]
			},
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						// options: {
						//   modules: true,
						//   sourceMap: true,
						//   importLoader: 2
						// }
					},
					"less-loader"
				]
			}
		]
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			}),
			new OptimizeCSSAssetsPlugin({}) // use OptimizeCSSAssetsPlugin
		],
	},
	plugins: [
		// new CleanWebpackPlugin(['lib']),
		new MiniCssExtractPlugin({
			filename: 'index.css',
		})
	],
};
