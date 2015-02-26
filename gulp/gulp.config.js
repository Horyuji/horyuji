/*jslint node: true */
(function(){
  'use strict';
  // jspm config
  //var package_config = require('../package.json');

  //var System = require('systemjs');
  //System.transpiler = 'babel';v
  //require('../' + package_config.jspm.directories.baseURL + '/config.js');

  module.exports = {
    System: {
      transpiler: 'babel'//System.transpiler
    },
    fxos: {
      tmp: './.tmp/fxos',
      zip: './.tmp/fxos/app.zip'
    },
    app: {
      src: 'client/**/*',
      js: './client/app/**/*!(spec).js'
    },
    report: {
      covorage: './report/coverage',
      lcov: './report/lcov',
      covorageView: './report/coverage/firefox',
      lcovReport: './report/lcov/firefox'
    },
    test: {
      e2e: {
        tmp: './.tmp/e2e',
        src: './e2e/**/*.js'
      },
      app: {
        src: './client/app/**/*!(spec).js'
      },
      doc: {
        src: './doc'
      }
    }
  };
})();
