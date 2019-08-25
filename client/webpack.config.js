const path = require('path')

const env = process.env.NODE_ENV || 'production'

module.exports = {
  mode: env === 'production' ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '../server/public'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
}

if (env !== 'production') {
  module.exports.devtool = 'inline-source-map'
}
