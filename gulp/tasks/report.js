const gulp = require('gulp');

const config = require('../config');

let browserSync = require('browser-sync').create('report');

gulp.task('report:coverage', () => browserSync.init(config.browserSync.report));
