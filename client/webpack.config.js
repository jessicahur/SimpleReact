const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const DefinePlugin = require('webpack').DefinePlugin;
const ProvidePlugin = webpack.ProvidePlugin;

module.exports = {
  entry: [
    './src/App.jsx'
  ],
  output: {
    path: path.resolve(__dirname, '../server/public'),
    filename: 'bundle.js'
  },
  plugins: [
        new HtmlWebpackPlugin({ //DO NOT USE 'PLUGIN'. THE 'S' is important!
            template: './index.html'
        })
  ],
  module: {
    preloaders: [{
        test: /\.js$/, // include .js files
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
        loader: "jshint-loader"
    }],
    loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      // test: /\.jsx?$/,
      // exclude: /node_modules/,
      // loader: 'babel'
      query: {
        presets: ['es2015']
      }
    }]
  }
};
