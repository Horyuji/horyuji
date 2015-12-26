const config = require('../config');

const gulp = require('gulp');
const del = require('del');

gulp.task('clean:build', () => del([
  config.rootDirs.tmp,
  config.rootDirs.dist,
], {
  dot: true,
}));
