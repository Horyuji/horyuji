const config = require('../config');

const gulp = require('gulp');
const runSequence = require('run-sequence');
const filter = require('gulp-filter');
const uglify = require('gulp-uglify');
const useref = require('gulp-useref');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const postcss = require('gulp-postcss');

const debug = require('gulp-debug');

gulp.task('build', cb => {
  runSequence(
    'clean:build',
    'inject:iconfont',
    ['html:build', 'js:build', 'style:build', 'image:build', 'extras:build', 'bower:font_build'],
    'inject',
    'bower',
    'build:client',
    'build:font_copy',
    cb
  );
});

gulp.task('build:font_copy', ()=> {
  return gulp.src(config.paths.font.src)
    .pipe(gulp.dest(config.paths.font.dist));
});

gulp.task('build:client', () => {

  const manifest = gulp.src(`${config.rootDirs.tmp}/rev-manifest.json`);
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
    .pipe(revReplace({ manifest: manifest }))
    .pipe(gulp.dest(config.rootDirs.dist));

});
