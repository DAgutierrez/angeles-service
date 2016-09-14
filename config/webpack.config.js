/**
 * Created by diego on 12-09-16.
 */
var path    = require('path');
var webpack = require('webpack');
var libPath = path.join(__dirname, 'lib');
var BowerWebpackPlugin = require("bower-webpack-plugin");

var dirname = __dirname;
var pathname = dirname.substring(0,dirname.lastIndexOf("/"));

module.exports = {
  devtool: 'sourcemap',
  entry: {},
  output: {
    filename: 'bundle.js',
    path       : path.resolve(pathname, 'www')
  },
  module : {
    loaders : [ {
      test: /\.js$/,
      exclude: [/lib\/index.js/, /node_modules/, /bower_components/ ],
      loader: 'ng-annotate?add=true!babel'
    },  {
      test   : /\.s?css$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.json$/,
      loader: "json"
    }, {
        test: /\.html$/,
        loader: 'html'
    }, {
      test: [/ionicons\.svg/, /ionicons\.eot/, /ionicons\.ttf/, /ionicons\.woff/],
      loader: 'file?name=fonts/[name].[ext]'
    },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
      ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.html'],
    root: [
      libPath,
      path.join(__dirname, 'node_modules' )
    ],
    moduleDirectories: [
      'node_modules',
      'bower_components'
    ],
  },
  plugins: [

    // new BowerWebpackPlugin({
    //   excludes: /.*\.less/
    // }),
    // new webpack.ProvidePlugin({
    // })
  ]
};
