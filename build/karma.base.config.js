
var webpackConfig = require('./webpack.config');
delete webpackConfig.entry;
webpackConfig.devtool = 'inline-source-map';

module.exports = {
    frameworks: ['jasmine'],
    files: [
      '../test/index.js'
    ],
    preprocessors: {
        '../test/index.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,
    webpackMiddleware: {
        noInfo: true
    },

    singleRun: true,
}
