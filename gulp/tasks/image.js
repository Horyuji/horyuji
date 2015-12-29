const config = require('../config');

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const rev = require('gulp-rev');

gulp.task('image:build', () => gulp.src(config.paths.image.src, {
    base: config.rootDirs.src,
  })
  .pipe(imagemin({
    optimizationLevel: 5,
    progressive: true,
    interlaced: true,
  }))
  .pipe(rev())
  .pipe(gulp.dest(config.rootDirs.dist))
  .pipe(rev.manifest({
    merge: true,
  }))
  .pipe(gulp.dest(config.rootDirs.tmp)));
