'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const common_config = require('./webpack.config.common.js');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  title: 'hupu-tool-new',
  path: path.resolve(__dirname, '../demo'),
  template: path.join(__dirname, '../demo/index.html'),
  filename: 'index.html'
});

module.exports = merge(common_config, {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    path.join(__dirname, '../demo/index.tsx')
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../demo')
  },
  plugins: [
    htmlWebpackPlugin,
    new webpack.HotModuleReplacementPlugin()
  ]
});