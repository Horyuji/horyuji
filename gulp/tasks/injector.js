const config = require('../config');

const gulp = require('gulp');
const inject = require('gulp-inject');
const runSequence = require('run-sequence');

gulp.task('inject', cb => {
  runSequence('inject:js', 'inject:css', cb);
});

gulp.task('inject:js', () => gulp.src(config.paths.html.src)
  .pipe(inject(gulp.src([
    `${config.rootDirs.tmp}/**/*.js`,
  ], {
    read: false,
  }), {
    transform: (filepath) => '<script src="' + filepath.replace(`/.tmp/`, '') + '"></script>',
  }))
  .pipe(gulp.dest(config.rootDirs.src)));

gulp.task('inject:css', () => gulp.src(config.paths.html.src)
  .pipe(inject(gulp.src([
    `${config.rootDirs.tmp}/**/*.css`,
  ], {
    read: false,
  }), {
    transform: (filepath) => '<link rel="stylesheet" href="' + filepath.replace('/.tmp/', '') + '">',
  }))
  .pipe(gulp.dest(config.rootDirs.src)));
