const gulp = require('gulp');

const config = require('../config');

const wiredep = require('wiredep');

gulp.task('bower', () => {
  gulp.src(config.paths.html.src)
    .pipe(wiredep({
      exclude: ['bootstrap-sass'],
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest(config.rootDirs.src));
});
