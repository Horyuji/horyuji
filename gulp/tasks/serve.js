const config = require('../config');
const gulp = require('gulp');
const runSequence = require('run-sequence');

let browserSync = require('browser-sync').create('livereload');

// TODO ここにjs、cssなどの事前タスクをセットすること
gulp.task('serve', ['bower', 'babel:dev', 'style:dev'], () => {
  browserSync.init(config.browserSync.dev, () => runSequence('watch'));
});
