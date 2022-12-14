const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile-v2',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addWebpackAlias({
        ['@']: path.resolve(__dirname, 'src'),
    })
)
