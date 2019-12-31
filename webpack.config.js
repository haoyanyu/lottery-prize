var path = require('path');
var webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: "./src/main.js",
  output: {
    path: __dirname,
    filename: "dist/prize.js",
    library: 'Prize'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   output: {
    //     comments: false,  // remove all comments
    //   },
    //   compress: {
    //     warnings: false
    //   }
    // })
  ]
}
