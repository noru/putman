const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('mini-css-extract-plugin');
const config = require('./webpack.config.base');

const GLOBALS = {
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
};
const extractProjectStyle = new ExtractTextPlugin({
  filename: 'css/[name].css',
  chunkFilename: 'css/[name].[id].css',
});

module.exports = merge(config, {
  mode: 'production',
  entry: {
    'js/app': path.join(__dirname, '../src/js/index'),
    devtools: path.join(__dirname, '../src/devtools'),
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    extractProjectStyle,
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.s?css$/,
        include: [path.resolve(__dirname, '../node_modules')],
        exclude: [path.resolve(__dirname, '../src')],
        use: [
          ExtractTextPlugin.loader,
          'css-loader',
          { loader: 'sass-loader', query: { outputStyle: 'compressed' } },
          'postcss-loader',
        ],
      },
      {
        test: /\.s?css$/,
        include: [path.resolve(__dirname, '../src')],
        exclude: [path.resolve(__dirname, '../node_modules')],
        use: [
          ExtractTextPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              data: '$ENV: ' + process.env.NODE_ENV + ';',
              outputStyle: 'compressed',
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
});
