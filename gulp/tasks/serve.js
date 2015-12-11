const config = require('../config');

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const runSequence = require('run-sequence');

// TODO ここにjs、cssなどの事前タスクをセットすること
// gulp.task('serve', ['js', 'style'], () => {
gulp.task('serve', () => {

  browserSync.init({
    notify: false,
    port: config.port.dev,
    server: {
      baseDir: [
        config.rootDirs.src,
        config.rootDirs.tmp,
      ],
      routes: {
        '/bower_components': 'bower_components',
      },
    },
  }, () => {
    runSequence('watch');
  });

});
