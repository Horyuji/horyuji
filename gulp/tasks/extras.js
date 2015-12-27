const config = require('../config');

const gulp = require('gulp');

gulp.task('extras:build', () => {
  return gulp.src([
    `${config.rootDirs.src}/*`,
    `!${config.rootDirs.src}/*.html`,
  ], {
    dot: true,
  }).pipe(gulp.dest(config.rootDirs.dist));
});
