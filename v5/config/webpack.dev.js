const paths = require('./paths');

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  target: 'web',

  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    historyApiFallback: true,
    progress: true,
    compress: true,
    hot: true,
    port: 8080,
    watchContentBase: true,
    // contentBase: paths.build,
    // open: true,
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
});
