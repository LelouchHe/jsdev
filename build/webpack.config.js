
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'add.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devtool: 'source-map'
};
