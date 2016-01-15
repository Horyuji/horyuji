const gulp = require('gulp');
const iconfont = require('gulp-iconfont');

//const rename = require("gulp-rename");
//const consolidate = require('gulp-consolidate');

var fontName = 'myfont';

var svgPath = `${process.cwd()}/iconfont/svg/*.svg`;

// var cssPath = `${process.cwd()}/src/assets/template.css`;
// var cssPathTmpDir = `${process.cwd()}/.tmp/assets/css`;
// var fontPathTmpDir = `${process.cwd()}/.tmp/assets/fonts`;

gulp.task('iconfont', ()=> {
  return gulp.src([svgPath])
    .pipe(iconfont({
      fontName: 'myfont',
      appendUnicode: true,
      formats: ['svg', 'ttf', 'eot', 'woff'],
    }))
      .on('glyphs', (glyphs, options)=> {
        console.log(glyphs, options);
      })
    .pipe(gulp.dest(`${process.cwd()}/src/assets/fonts/`));
});
