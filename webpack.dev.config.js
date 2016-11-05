const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('site.min.css');

module.exports = {
  devtool: 'source-map',
  entry: './src/site.js',
  output: {
    path: __dirname + '/build',
    filename: 'site.min.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ['babili']
      }
    }, {
      test: /\.scss$/,
      loader: extractCSS.extract(['css','sass'])
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    }]
  },
  postcss: function() {
    return [autoprefixer];
  },
  plugins: [
    extractCSS
  ]
}
