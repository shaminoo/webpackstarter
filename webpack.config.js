var path = require('path');
module.exports = {
    entry: './entry.js',
    output: {
        path: path.join(__dirname),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    watch: true
}