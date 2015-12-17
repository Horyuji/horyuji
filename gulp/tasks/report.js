const gulp = require('gulp');

const config = require('../config');

const browserSync = require('browser-sync').create(config.browserSync.namespace.report);

gulp.task('report:coverage', () => browserSync.init(config.browserSync.report));
