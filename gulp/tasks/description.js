const gulp = require('gulp');
const gulpDep = require('gulp-description');

let description = {
  "main":[
    "help",
    "watch",
    "test",
  ],
  "description":{
    "default" : "ヘルプを表示します",
    "help" : "ヘルプを表示します",
    "help:all" : "内部コマンドを含むすべてのコマンドを表示します",
    "help:dep" : "コマンド毎の依存性を表示します",
    "html" : "htmlファイルのビルド処理を行います",
    "report:coverage" : "単体テスト結果よりカバレッジを出力します",
    "test" : "karmaによる単体テストを実行します",
    "watch": "ライブリロード開発を開始します",
  }
};

gulp.task('help',()=> gulpDep.help(description));
gulp.task('help:all',()=> gulpDep.all(description));
gulp.task('help:dep',()=> gulpDep.dependency(description));
