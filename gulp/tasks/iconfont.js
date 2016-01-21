const gulp = require('gulp');
const iconfont = require('gulp-iconfont');
const svgPath = `${process.cwd()}/iconfont/svg/*.svg`;
const fontName = 'myfont';

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
