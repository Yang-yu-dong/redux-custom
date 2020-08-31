const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: 'index.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Redux 源码系列',
      filename: 'index.html',
      template: 'index.html',
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    port: 8888,
    contentBase: path.resolve(__dirname, 'dist'),
  },
}