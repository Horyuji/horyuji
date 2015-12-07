const gulp = require('gulp');

const config = require('../config');
const Server = require('karma').Server;

gulp.task('test', () => {
  const server = new Server({
    configFile: process.cwd() + '/karma.conf.js',
    singleRun: true,
  });
  server.start();
});
