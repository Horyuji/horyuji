// Karma configuration
// Generated on Wed Dec 02 2015 23:57:07 GMT+0900 (JST)
const config = require('./gulp/config');

module.exports = function(karmaConfig) {

  function normalizationBrowserName(browser) {
    return browser.toLowerCase().split(/[ /-]/)[0];
  }

  karmaConfig.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    // match pattern : http://karma-runner.github.io/0.13/config/files.html
    files: [
      {pattern: './bower_components/jquery/dist/jquery.js', watched: false},
      {pattern: './bower_components/bootstrap/dist/js/bootstrap.js', watched: false},
      {pattern: `${config.rootDirs.src}/**/*.es6`, watched: true},
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      [config.paths.script.src]: ['babel', 'coverage'],
      [config.paths.test.src]: ['babel'],
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],


    babelPreprocessor: {},

    // optionally, configure the reporter
    coverageReporter: {
      instrumenters: {
        isparta: require('isparta')
      },
      instrumenter: {
        '**/*.es6': 'isparta',
      },
      instrumenterOptions: {
        isparta: {},
      },
      reporters: [{
        type: 'text',
        subdir: normalizationBrowserName,
      }
      /* 落ちるので一時的にコメントアウト
      *, {
        type: 'html',
        dir: config.paths.report.coverage,
        subdir: normalizationBrowserName,
      }*/],
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    /* browser prefix : 'Chrome', 'Firefox', 'Safari', 'PhantomJS', 'Firefox'*/
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
