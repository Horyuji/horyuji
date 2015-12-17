const gulp = require('gulp');
const config = require('../config');

const browserSync = require('browser-sync');

gulp.task('watch', () => {
  gulp.watch(config.paths.html.watch, browserSync.get(config.browserSync.namespace.dev).reload);
  gulp.watch(config.paths.script.watch, ['babel:dev']);
  gulp.watch(config.paths.css.watch, ['style:dev']);
});
