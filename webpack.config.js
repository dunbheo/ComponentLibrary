const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/App.js',
    example: './example/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ComponentLibrary',
      chunks: './example/index.js',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve('babel-loader'),
      },
    ],
  },
};