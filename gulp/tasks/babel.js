const config = require('../config');

const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const stripDebug = require('gulp-strip-debug');

gulp.task('babel:build', ['jscs', 'eslint'], () => gulp.src(config.paths.script.src)
  .pipe(stripDebug())
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['es2015'],
  }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(config.rootDirs.dist)));
