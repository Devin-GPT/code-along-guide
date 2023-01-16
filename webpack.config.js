const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',

  },
  mode: 'development',
  devServer: {
    static: {
        directory: path.resolve(__dirname, './dist'),
        // directory: path.join(__dirname, "./")
      },
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: false,
    port: 8080,
  },
  watch: true,
  watchOptions:{
    ignored: '**/node_modules',
  },
  optimization: {
    runtimeChunk: 'single',
  },
  plugins: [
        // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/template.html'), // template file
      filename: 'index.html', // output file
    }),
  ],
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
