var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');

config.plugins = config.plugins.concat([

  // Adds webpack HMR support. It act's like livereload,
  // reloading page after webpack rebuilt modules.
  // It also updates stylesheets and inline assets without page reloading.
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template : path.resolve() + '/app/index.html',
    inject   : 'body',
    hash     : false
  })
]);

module.exports = config;
