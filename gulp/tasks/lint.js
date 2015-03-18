/*jslint node: true */
'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', ['eslint']);

gulp.task('eslint', function() {
  return gulp.src([
    'gulp/**/*.js',
    'client/app/**/*.js',
    'e2e/**/*.js'
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});
