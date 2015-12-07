const gulp = require('gulp');

const config = require('../config');
const plumber = require('gulp-plumber');

const browserSync = require('browser-sync');
const jscs = require('gulp-jscs');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('script', () => {
  gulp.src(config.paths.script.src)
    .pipe(plumber())
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`${config.rootDirs.tmp}`))
    .on('end', () => {
      browserSync.reload();
    });
});
