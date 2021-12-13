import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'

const config = {
  input: './src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      exports: 'named'
    }
  ],
  plugins: [
    peerDepsExternal(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    }),
    nodeResolve(), // Resolves third party modules
    terser() // Minifies build - comment this out to see the size without minification
  ]
}

export default config
