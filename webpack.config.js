var path = require('path')
var webpack = require('webpack')
var npm = require("./package.json")
const CompressionPlugin = require("compression-webpack-plugin")
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
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
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
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 5, // Must be greater than or equal to one
      minChunkSize: 1000,
      maxChunkSize: 50000,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    new webpack.BannerPlugin({
      banner: `vue-ionicons v.${npm.version}`
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
		new HtmlWebpackPlugin({
			template: './index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
		}),
    new CompressionPlugin({
      algorithm: 'gzip'
    })
  ]
}
