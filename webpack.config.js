var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  resolve: {
    root: [
      path.resolve('./src/app')
    ]
  },
  devtool: 'source-map',
  entry: './src',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loaders: [
          'ng-annotate',
          'babel'
        ]
      },
      {
        test: /\.html$/,
        loaders: [
          'html'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css',
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url'
        ]
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)$/,
        loader: 'url'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ]
};
