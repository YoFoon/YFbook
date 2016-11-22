var _ = require('lodash');
var baseConfig = require('./base.config')
var path = require('path');
var webpack = require('webpack');
var config = _.merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, '../web/build'),
    publicPath: 'build/',
    filename: '[name].js',
    chunkFilename: 'chunk.[id].js',
    pathinfo: true
  },
  devServer: {
    contentBase: './web',
    devtool: 'eval',
    port: 3008,
    hot: true,
    inline: true
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ].concat(baseConfig.plugins)
});
module.exports = config;
