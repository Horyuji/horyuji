const gulp = require('gulp');

const config = require('../config');

gulp.task('watch', () => {
  gulp.watch(config.paths.html.watch, ['html']);
  gulp.watch(config.paths.javascript.watch, ['script']);
  gulp.watch('bower.json', ['bower']);
});
