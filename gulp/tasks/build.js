const config = require('../config');

const gulp = require('gulp');
const runSequence = require('run-sequence');
const filter = require('gulp-filter');
const uglify = require('gulp-uglify');
const useref = require('gulp-useref');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const postcss = require('gulp-postcss');

gulp.task('build', cb => {
  // TODO imageタスク
  runSequence(
    'clean:build', ['html:build', 'js:build', 'style:build', 'extras:build'],
    'inject',
    'bower',
    'build:client',
    cb
  );
});

gulp.task('build:client', () => {

  const jsFilter = filter('**/*.js', {
    restore: true,
  });
  const cssFilter = filter('**/*.css', {
    restore: true,
  });
  const htmlExcludeFilter = filter('**/*.!(html)', {
    restore: true,
  });

  // TODO ライセンスヘッダー付与
  // TODO gzip
  return gulp.src(config.paths.html.src)
    .pipe(useref({
      searchPath: [
        './',
        config.rootDirs.src,
        config.rootDirs.tmp,
      ],
    }))
    .pipe(jsFilter)
    .pipe(uglify())
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    .pipe(postcss([
      require('csswring')(config.csswring.options),
      require('postcss-reporter')(config['postcss-reporter'].options),
    ]))
    .pipe(cssFilter.restore)
    .pipe(htmlExcludeFilter)
    .pipe(rev())
    .pipe(htmlExcludeFilter.restore)
    .pipe(revReplace())
    .pipe(gulp.dest(config.rootDirs.dist));

});
