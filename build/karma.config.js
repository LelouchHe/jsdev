
var webpackConfig = require('./webpack.config');
delete webpackConfig.entry;
webpackConfig.devtool = 'inline-source-map';

module.exports = function(config) {
  config.set({
    basePath: '',
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
    browsers: ['Chrome'],
    singleRun: true,
  })
}
