/*jslint node: true */
'use strict';

var gulp = require('gulp');
var eslint = require('gulp-eslint');
var jshint = require('gulp-jshint');

gulp.task('lint', ['eslint', 'jshint']);


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

gulp.task('jshint', function() {
  return gulp.src([
    'client/app/**/*.js'
    ])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
