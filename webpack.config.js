const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'production',

  entry: {
    button_base: './packages/button_base/index.js',
    button_primary: './packages/button_primary/index.js',
    'calc/calc': './packages/calc/index.js',
    'calc/add': './packages/calc/add/index.js',
    'calc/subtract': './packages/calc/subtract/index.js'
  },

  output: {
    globalObject: 'this', // Ensures packages can run on server and client https://webpack.js.org/configuration/output/#outputglobalobject
    library: {
      name: 'loki-ui',
      type: 'umd'
    },
    path: path.resolve(__dirname, 'packages'),
    filename: '[name]/dist/index.js'
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

  // optimization: {
  //   minimize: false
  // },

  externals: [nodeExternals()]
}
