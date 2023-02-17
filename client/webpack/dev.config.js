const { resolve, join } = require('path');
// const { HotModuleReplacementPlugin } = require('webpack');
// const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const APP_INDEX_PAGE = resolve(__dirname, './../src/index.js')
const DIST_DIR_PATH = resolve(__dirname, './../dist');
const APP_HTML_FILE = join('./src', 'index.html');
const JS_RULE = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: ['babel-loader'],
};
module.exports = {
  entry: APP_INDEX_PAGE,
  module: {
    rules: [JS_RULE],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: DIST_DIR_PATH,
    filename: '[name].js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    // hot: true,
    static: {
      publicPath: '/',
    },
  },
  plugins: [
    // new HotModuleReplacementPlugin(),
    // new ESLintPlugin(),
    new HtmlWebpackPlugin({
      template: APP_HTML_FILE,
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};
