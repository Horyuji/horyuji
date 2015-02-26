/*jslint node: true */
'use strict';

var gulp = require('gulp');
var gprot = require("gulp-protractor");
var browserSync = require('browser-sync');

var protractor = gprot.protractor;
var webdriverStandalone = gprot.webdriverStandalone;
var webdriverUpdate = gprot.webdriverUpdate;

gulp.task('webdriverUpdate', webdriverUpdate);
gulp.task('webdriverStandalone', webdriverStandalone);

var runProtractor = function(done){

  gulp.src(['./.tmp/e2e/**/*.spec.js'])
    .pipe(protractor({
      configFile: './protractor/protractor.conf.js'
    })).on('error', function(e) {
      process.stdout.write(e + '\n');
      throw e;
    }).on('end', function(){
      browserSync.exit();
      done();
    });
};


gulp.task('protractor', [
    'lint',
    'build-es6:e2e',
    'webdriverUpdate',
    'browser-sync:test',
    'express:dev'
  ],
  runProtractor);
