const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client', 'src', 'index.js'),

  module: {
    rules: [
      {
        test: /\.m?jsx|js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
