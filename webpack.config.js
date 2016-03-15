module.exports = {
  entry: [
    './src/App.js'
  ],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      // test: /\.jsx?$/,
      // exclude: /node_modules/,
      // loader: 'babel'
    }]
  }
};
