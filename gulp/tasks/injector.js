const config = require('../config');

const path = require('path');
const gulp = require('gulp');
const inject = require('gulp-inject');
const runSequence = require('run-sequence');

const replaceDir = {
  src: (dir)=> dir.replace(/\/src\//, ''),
  tmp: (dir)=> dir.replace(/^\/\.tmp\//, ''),
  all: (dir)=> replaceDir.tmp(replaceDir.src(dir)),
};

gulp.task('inject', cb => {
  runSequence('inject:js', 'inject:css', cb);
});

gulp.task('inject:js', () => gulp.src(config.paths.html.src)
  .pipe(inject(gulp.src([
    `${config.rootDirs.tmp}/**/*.js`,
  ], {
    read: false,
  }), {
    transform: (filepath) => `<script src="${replaceDir.all(filepath)}"></script>`,
  }))
  .pipe(gulp.dest(config.rootDirs.src)));

gulp.task('inject:css', () => gulp.src(config.paths.html.src)
  .pipe(inject(gulp.src([
    `${config.rootDirs.tmp}/**/*.css`,
  ], {
    read: false,
  }), {
    transform: (filepath) =>
      `<link rel="stylesheet" href="${replaceDir.all(filepath)}">`,
  }))
  .pipe(gulp.dest(config.rootDirs.src)));

/** create icon font css */
/** 翻訳する：https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range */
gulp.task('inject:iconfont', ['iconfont'], () => gulp.src(config.paths.iconfont.css)
    .pipe(inject(gulp.src(config.paths.iconfont.svg,
      { read: false }), {
        starttag: '/** iconfont:start */',
        endtag: '/** iconfont:end */',
        transform: (filepath, file, i, length) => {
          var filename = path.basename(filepath, '.svg');
          var unicode = filename.split('-')[0].replace(/^u/, '\\');
          var iconName = filename.split('-')[1];
          return `.icon-${iconName}::before { content: "${unicode}"; }`;
        }, }))
    .pipe(inject(gulp.src(config.paths.iconfont.svg,
      { read: false }), {
        starttag: '/** iconrange:start */',
        endtag: '/** iconrange:end */',
        transform: (filepath, file, i, length) => {
          var filename = path.basename(filepath, '.svg');
          return `${filename.split('-')[0].replace(/^u/, 'U+')},`;
        }, }))
    .pipe(gulp.dest(config.paths.iconfont.dist)));
