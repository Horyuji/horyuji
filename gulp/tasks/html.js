const gulp = require('gulp');

const config = require('../config');
const plumber = require('gulp-plumber');
const htmlhint = require('gulp-htmlhint');

gulp.task('html', () => {
  gulp.src(config.paths.html.src)
    .pipe(plumber())
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(htmlhint.failReporter())
    .pipe(gulp.dest(`${config.rootDirs.tmp}`))
    .on('end', () => require('browser-sync').get(config.namespace.dev).reload);
});
