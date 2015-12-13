const config = require('../config');

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync');
const postcss = require('gulp-postcss');

const postCssPlugins = {
  dev: [
    require('doiuse')(config.doiuse.options),
    require('autoprefixer')(config.autoprefixer.options),
    require('cssfmt'),
    require('stylelint')(config.stylelint.options),
    require('postcss-reporter')(config['postcss-reporter'].options),
  ],
  build: [
    require('doiuse')(config.doiuse.options),
    require('autoprefixer')(config.autoprefixer.options),
    require('stylelint')(config.stylelint.options),
    require('csswring')(config.csswring.options),
    require('postcss-reporter')(config['postcss-reporter'].options),
  ],
};

gulp.task('style:dev', () => {
  gulp.src(config.paths.css.src)
    .pipe(plumber())
    .pipe(postcss(postCssPlugins.dev))
    .pipe(gulp.dest(`${config.rootDirs.src}`))
    .pipe(browserSync.stream());
});

gulp.task('style:build', () => {
  gulp.src(config.paths.css.src)
    .pipe(plumber())
    .pipe(postcss(postCssPlugins.build))

    // TODO ここでHeaderを追加
    .pipe(gulp.dest(`${config.rootDirs.dist}`));
});
