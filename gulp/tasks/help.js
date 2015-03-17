(function(){
  'use strict';
  var gulp = require('gulp');
  var gulpDep = require('gulp-description');
  var taskDiscript = require('../taskDescription.json');

  gulp.task('help', function(){
    gulpDep.help(taskDiscript);
  });

  gulp.task('h:list', function(){
    gulpDep.all(taskDiscript);
  });

  gulp.task('h:dep', function(){
    gulpDep.dependency(taskDiscript);
  });
})();
