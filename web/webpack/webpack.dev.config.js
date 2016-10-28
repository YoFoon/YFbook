var _ = require('lodash');
var baseConfig = require('./base.config')
var path = require('path');

var config = _.merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../app/web/build'),
    publicPath: 'build/',
    filename: '[name].js',
    chunkFilename: 'chunk.[id].js',
    pathinfo: true
  },
  devServer: {
    contentBase: './app/web',
    devtool: 'eval',
    port: 8008,
    hot: true,
    inline: true
  },
  devtool: 'source-map'
});

module.exports = config;
