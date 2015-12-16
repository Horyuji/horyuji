const gulp = require('gulp');
const config = require('../config');

let browserSync = require('browser-sync');

gulp.task('watch', () => {
  gulp.watch(config.paths.html.watch, browserSync.get('livereload').reload);
  gulp.watch(config.paths.script.watch, ['babel:dev']);
  gulp.watch(config.paths.css.watch, ['style:dev']);
});
