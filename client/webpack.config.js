module.exports = {
  entry: [
    './src/App.jsx'
  ],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      // test: /\.jsx?$/,
      // exclude: /node_modules/,
      // loader: 'babel'
    }]
  }
};
