const path = require('path')
const nodeExternals = require('webpack-node-externals')

const { getEntry } = require('./webpack.helpers.js')

module.exports = {
  mode: 'production',

  entry: {
    ...getEntry('base_styles', 'index'),

    ...getEntry('buttons', 'index'),
    ...getEntry('buttons', 'button_base')
  },

  output: {
    globalObject: 'this',
    library: {
      name: 'loki-ui',
      type: 'umd'
    },
    path: path.resolve(__dirname, 'packages')
  },

  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  externals: [nodeExternals()]
}
