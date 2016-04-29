
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './test/unit/specs/index.js',
    output: {
        path: path.resolve(__dirname, '../test/unit'),
        filename: 'specs.js'
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, '../src')
        }
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
    devServer: {
        contentBase: './test/unit',
        noInfo: true
    },
    devtool: 'source-map'
};
