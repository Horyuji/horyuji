const config = require('../config');

const path = require('path');
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

/** create icon font css */
gulp.task('inject:iconfont', ['iconfont'], () => gulp.src(config.paths.iconfont.css)
    .pipe(inject(gulp.src(config.paths.iconfont.svg,
      {read: false}), {
      starttag: '/** iconfont:start */',
      endtag: '/** iconfont:end */',
    transform: function (filepath, file, i, length) {
      var filename = path.basename(filepath, '.svg');
      var unicode = filename.split('-')[0].replace(/^u/,'\\');
      var iconName = filename.split('-')[1];
      return `.icon-${iconName}:before { content: "${unicode}" }`;
    }
  })).pipe(gulp.dest(config.paths.iconfont.dist)));
