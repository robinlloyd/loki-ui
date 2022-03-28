const path = require('path')

function getEntry (packageName, moduleName) {
  let moduleImport = `${moduleName}/index.js`
  if (moduleName === 'index') moduleImport = 'index.js'

  return {
    [`${packageName}/${moduleName}`]: {
      import: path.resolve(__dirname, `./packages/${packageName}/${moduleImport}`),
      filename: `./${packageName}/dist/${moduleName}.js`
    }
  }
}

module.exports = { getEntry }
