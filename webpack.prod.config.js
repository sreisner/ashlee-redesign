const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('./public/styles/site.min.css');

module.exports = {
  entry: './src/site.js',
  output: {
    path: '.',
    filename: './public/js/site.min.js'
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
    }]
  },
  postcss: function() {
    return [autoprefixer];
  },
  plugins: [
    extractCSS
  ]
}
