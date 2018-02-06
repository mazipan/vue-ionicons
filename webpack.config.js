var path = require('path')
var webpack = require('webpack')
var npm = require("./package.json")
const CompressionPlugin = require("compression-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const workboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ENV = process.env.NODE_ENV || 'development';

require('es6-promise').polyfill();
const SRC = path.resolve(__dirname, "demo");
const DIST = path.resolve(__dirname, "dist");
const DEMO_DIST = path.resolve(__dirname, 'demo/dist');

module.exports = {
	context: SRC,
  entry: {
    vendor: ["vue"],
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
            scss: ExtractTextPlugin.extract({
              use: 'css-loader!sass-loader',
              fallback: 'vue-style-loader'
            }),
            sass: ExtractTextPlugin.extract({
              use: 'css-loader!sass-loader?indentedSyntax',
              fallback: 'vue-style-loader'
            })
            // scss: 'vue-style-loader!css-loader!sass-loader',
            // sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
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
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css'
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 5, // Must be greater than or equal to one
      minChunkSize: 1000,
      maxChunkSize: 50000,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['common', 'vendor'],
      async: true,
      minChunks: 2,
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
		new CopyWebpackPlugin([
			{ from: SRC + '/manifest.json', to: DEMO_DIST }
		]),
		new HtmlWebpackPlugin({
			template: './index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunks: [ 'vendor', 'app' ],
      chunksSortMode: function(chunk1,chunk2){
          var orders = [ 'vendor' , 'app' ];
          var order1 = orders.indexOf(chunk1.names[0]);
          var order2 = orders.indexOf(chunk2.names[0]);
          return order1 - order2;
      },
      // chunksSortMode: 'dependency'
    }),
    new workboxPlugin({
      globDirectory: DEMO_DIST,
      globPatterns: ['**/*.{html,js,css,json,gif,png,jpg,jpeg}'],
      swDest: path.join(DEMO_DIST, 'sw.js'),
      clientsClaim: true,
      skipWaiting: true,
    }),
    new CompressionPlugin({
      algorithm: 'gzip'
    })
  ]
}
