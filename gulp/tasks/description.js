const gulp = require('gulp');
const gulpDep = require('gulp-description');

const description = {
  main: [
    'help',
    'help:all',
    'watch',
    'test',
    'build',
    'self',
  ],
  description: {
    default: 'ヘルプを表示します',
    help: 'ヘルプを表示します',
    'help:all': '内部コマンドを含むすべてのコマンドを表示します',
    'help:dep': 'コマンド毎の依存性を表示します',
    html: 'htmlファイルのビルド処理を行います',
    'report:coverage': '単体テスト結果よりカバレッジを出力します',
    test: 'karmaによる単体テストを実行します',
    watch: 'ライブリロード開発を開始します',
    build: 'リリース用のビルドを行い、./distフォルダに配備します',
    'js:build': 'javascriptのビルドタスクです、jscs/eslint後babelによるビルドを行います。',
    'babel:build': 'コードチェック後にbabelコンパイルを行い./distフォルダに配備します',
    jscs: 'jscsによるコードチェックを実行します、fixは行いません',
    'jscs:gulp': 'gulpタスクのjscsコードチェックを実行します',
    eslint: 'eslintによるコードチェックを実行します',
    'eslint:gulp': 'gulpタスクのeslintによるコードチェックを実行します',
    self: 'gulpタスクの自己チェックを行います',
  },
};

gulp.task('help', ()=> gulpDep.help(description));
gulp.task('help:all', ()=> gulpDep.all(description));
gulp.task('help:dep', ()=> gulpDep.dependency(description));
