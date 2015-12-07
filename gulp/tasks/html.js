const gulp = require('gulp');

const config = require('../config');
const plumber = require('gulp-plumber');

const browserSync = require('browser-sync');
const htmlhint = require('gulp-htmlhint');

gulp.task('html', () => {
  gulp.src(config.paths.html.src)
    .pipe(plumber())
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(htmlhint.failReporter())
    .pipe(gulp.dest(`${config.rootDirs.tmp}`))
    .on('end', () => {
      browserSync.reload();
    });
});
