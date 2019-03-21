const webpack = require('webpack')
const path = require('path')

const env = process.env.NODE_ENV || 'production'

const config = {
  mode: env,
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '../server/public'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
  },
  devtool: 'cheap-module-source-map',
  plugins: [new webpack.EnvironmentPlugin({ NODE_ENV: env })],
}

module.exports = config
