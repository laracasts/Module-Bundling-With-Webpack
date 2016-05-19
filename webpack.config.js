var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    devtool: 'source-map',
    output: {
        filename: './dist/main.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'buble' }
        ]
    }
};
