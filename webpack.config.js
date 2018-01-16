var path = require('path')
var webpack = require('webpack')
var npm = require("./package.json")
const CompressionPlugin = require("compression-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV || 'development';

require('es6-promise').polyfill();
const SRC = path.resolve(__dirname, "demo");
const DIST = path.resolve(__dirname, "dist");

module.exports = {
	context: SRC,
  entry: {
    app: './main.js'
  },
  output: {
    path: path.resolve(__dirname, 'demo/dist'),
		publicPath: '/vue-ionicons/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            })
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': SRC,
			dist: DIST
    }
  },
  devServer: {
		port: process.env.PORT || 8089,
		host: 'localhost',
		publicPath: '/vue-ionicons/',
		contentBase: './demo',
		historyApiFallback: true,
		open: true,
		openPage: 'vue-ionicons/',
		proxy: {
			'/vue-ionicons': {
				target: "http://localhost:8089",
				bypass: (req) => {
					let view = req.url.replace('/vue-ionicons', '');
					return view;
				}
			}
		}
  },
  performance: {
    hints: false
  },
	devtool: ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map',
  plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
    new webpack.BannerPlugin({
      banner: `vue-ionicons v.${npm.version}`
    }),
    new ExtractTextPlugin("[name].bundle.css"),
    new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false
			},
			compress: {
				unsafe_comps: true,
				properties: true,
				keep_fargs: false,
				pure_getters: true,
				collapse_vars: true,
				unsafe: true,
				warnings: false,
				screw_ie8: true,
				sequences: true,
				dead_code: true,
				drop_debugger: true,
				comparisons: true,
				conditionals: true,
				evaluate: true,
				booleans: true,
				loops: true,
				unused: true,
				hoist_funs: true,
				if_return: true,
				join_vars: true,
				cascade: true,
				drop_console: true
			}
		}),
		new HtmlWebpackPlugin({
			template: './index.ejs',
			minify: { collapseWhitespace: true }
		}),
    new CompressionPlugin({
      algorithm: 'gzip'
    })
  ]
}
