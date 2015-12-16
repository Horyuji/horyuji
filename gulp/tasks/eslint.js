const config = require('../config');

const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('eslint', () => gulp.src(config.paths.script.src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError()));

gulp.task('eslint:gulp', () => gulp.src(config.paths.gulp.src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError()));
