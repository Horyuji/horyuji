const gulp = require('gulp');

const config = require('../config');

gulp.task('watch', () => {
  gulp.watch(config.paths.html.watch, ['html']);
  gulp.watch(config.paths.bower.watch, ['bower']);
  gulp.watch(config.paths.gulp.watch, ['self']);
  gulp.watch(config.paths.css.watch, ['style:dev']);
});
