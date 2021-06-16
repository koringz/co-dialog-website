const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const EncodingWebpackPlugin = require('webpack-encoding-plugin')
const webpack = require('webpack');


module.exports = {
  mode: 'development',
  entry: ["@babel/polyfill", './src/main.js'],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: __dirname + "/dist",
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
           'style-loader',
           'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  performance: {
    hints: false
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: __dirname + "/index.html"
    }),
    new EncodingWebpackPlugin({
      encoding: 'utf-8'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};