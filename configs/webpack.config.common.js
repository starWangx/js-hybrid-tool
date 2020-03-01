'use strict';

const path = require('path');
const WebpackBar = require('webpackbar');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      },
      
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'assets/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new WebpackBar()
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ]
  }
};