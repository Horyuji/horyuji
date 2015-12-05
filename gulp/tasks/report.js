const gulp = require('gulp');

const config = require('../config');
const browserSync = require('browser-sync').create();

gulp.task('report:coverage', () => {
  browserSync.init({
    server: {
      baseDir: `${config.paths.report.coverage}`,
      port: 9001,
      directory: true,
    },
  });
});
