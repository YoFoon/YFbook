var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');
var baseConfig = require('./base.config')

var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = _.merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../dist/build'),
    publicPath: 'build/',
    filename: '[name].js',
    chunkFilename: 'chunk.[id].js',
    pathinfo: true
  },
  devtool: 'source-map',
  plugins: [
    new Clean('../dist/build'),
    new CopyWebpackPlugin([
      {from: './web/assets', to: '../assets'},
      {from: './web/index.html', to: '../index.html'}
    ]),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      minimize: true,
      sourceMap: true,
      exclude: [
        /node_modules/,
        /bower_components/
      ],
      output: {
        comments: false,
        ascii_only: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ].concat(baseConfig.plugins)
});

module.exports = config;
