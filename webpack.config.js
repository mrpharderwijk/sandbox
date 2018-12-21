const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: ['./src/Application.ts'],
  },
  devtool: false,
  devServer: {
    contentBase: './dist',
    compress: true,
    port: 1234,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: 'test.map',
    }),
  ],
};
