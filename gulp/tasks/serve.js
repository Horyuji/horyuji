const config = require('../config');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync').create(config.browserSync.namespace.dev);

// TODO ここにjs、cssなどの事前タスクをセットすること
gulp.task('serve', ['bower', 'babel:dev', 'style:dev'], () => {
  browserSync.init(config.browserSync.dev, () => runSequence('watch'));
});