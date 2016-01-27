const gulp = require('gulp');
const path = require('path');
const fs = require('fs');
const config = require('../config');
const filter = require('gulp-filter');
const wiredep = require('wiredep').stream;
const bowerJson = require(`${process.cwd()}/bower.json`);

const readRcFile = (file)=>
 new Promise((resolve, reject)=> fs.readFile(file, (e, data)=> e ? reject(e) : resolve(data)))
   .then(JSON.parse)
   .catch(e=> console.error(e));

gulp.task('bower', () => {
  gulp.src(config.paths.html.src)
    .pipe(wiredep({
      exclude: ['bootstrap-sass'],
      ignorePath: /^(\.\.\/)*\.\./,
    }))
    .pipe(gulp.dest(config.rootDirs.src));
});

gulp.task('bower:font_build', () => {
  var fontMatc = /\.(eot|svg|ttf|woff|woff2)$/;

  return readRcFile(path.join(process.cwd(), '.bowerrc'))
    .then(rc=> rc ? rc.directory : 'bower_components')
    .then(bowerDir=> {

      var fontFiles = Object.keys(bowerJson.overrides)
        .map(bowerConf=> bowerJson.overrides[bowerConf].main
          .filter(file=> fontMatc.test(file))
          .map(file=> path.join(process.cwd(), bowerDir, bowerConf, file))
        ).reduce((pre, val)=> pre.concat(val));

      return gulp.src(fontFiles)
        .pipe(gulp.dest(config.paths.font.dist));
    });
});
