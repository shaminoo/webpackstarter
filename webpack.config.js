var path = require('path');
module.exports = {
    context: path.resolve('includefiles'),
    entry: './entry.js',
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    watch: true
}