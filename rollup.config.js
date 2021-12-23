// For getting packages
import { getPackages } from '@lerna/project'
import { filterPackages } from '@lerna/filter-packages'
import batchPackages from '@lerna/batch-packages'
import minimist from 'minimist'
import path from 'path'

// For rollup
import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'

async function main () {
  const config = []

  // Supports --scope and --ignore if passed in via commandline
  const { scope, ignore } = minimist(process.argv.slice(2))

  const packages = await getSortedPackages(scope, ignore)

  packages.forEach((pkg) => {
    const basePath = path.relative(__dirname, pkg.location) // Absolute path to package directory
    const input = path.join(basePath, 'index.js') // Absolute path to the input file

    config.push(
      {
      input,
      output: [
        {
          file: path.join(basePath, 'dist/index.js'),
          format: 'cjs',
          exports: 'auto',
          sourcemap: true
        },
        {
          file: path.join(basePath, 'dist/index.es.js'),
          format: 'es',
          exports: 'named',
          sourcemap: true
        }
      ],
      plugins: [
        // peerDepsExternal(),
        babel({
          babelHelpers: 'bundled',
          exclude: 'node_modules/**',
          presets: ['@babel/preset-react']
        })
        // nodeResolve(), // Resolves third party modules
        // terser() // Minifies build - comment this out to see the size without minification
      ]
    })
  })

  return config
}

async function getSortedPackages (scope, ignore) {
  const packages = await getPackages(__dirname)
  const filtered = filterPackages(packages, scope, ignore, false)

  return batchPackages(filtered).reduce((arr, batch) => arr.concat(batch), [])
}

export default main()
