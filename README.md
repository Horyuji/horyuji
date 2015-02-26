jspmプロジェクト雛形
----

ES Next なフレームワーク非依存のプロジェクトテンプレート

| Project | status |
| ------ | ------ |
| Build Status |[![Build Status](https://travis-ci.org/MSakamaki/GJBoT.svg)](https://travis-ci.org/MSakamaki/GJBoT)|
| Code Climate |[![Code Climate](https://codeclimate.com/github/MSakamaki/GJBoT/badges/gpa.svg)](https://codeclimate.com/github/MSakamaki/GJBoT)|
| Dependency Status |[![Dependency Status](https://gemnasium.com/MSakamaki/GJBoT.svg)](https://gemnasium.com/MSakamaki/GJBoT)|
| Application Covoiturage |[![Test Coverage](https://codeclimate.com/github/MSakamaki/GJBoT/badges/coverage.svg)](https://codeclimate.com/github/MSakamaki/GJBoT)|

### Get Started

```sh

# jspmをグローバルインストール
npm install -g jspm

git clone https://github.com/MSakamaki/GJBoT
cd GJBoT

npm install
jspm install

```

### es6 transpiler use switching

```sh
jspm dl-loader --Babel
# or
jspm dl-loader --traceur
```

### using js libs CDN Settings

```sh
# use CDN
jspm setmode remote
# use local javascript file
jspm setmode local
```

### gulp tasks

##### use command

```sh
gulp help
```
 + 説明は`gulp/taskDescription.json`に書く

### Roadmap

 + **Develop**
    + [x] JShint -> ESLint
      + [x] ESLint: gulp, e2e (protractor)
      + [x] JShint: unit test, application
        + [ ] JShintのクラス対応する。
    + [x] ライブリロード開発
    + [ ] XHR Server Mock
      + [x] NodeJS
      + [ ] [Service Worker](https://github.com/slightlyoff/ServiceWorker)
 + **DOCUMENT** [yuidoc](http://yui.github.io/yuidoc/)
    + [x] ドキュメントを作成＆表示(ライブリロード作成)
    + [x] ドキュメントを作成
 + **TEST**
    + [x] karmaの実行
    + [x] End to End Test
    + [ ] apiに対するテスト
 + **REPORT**
    + [x] covorage
      + [ ] [jspm covorage]g(https://github.com/Workiva/karma-jspm/issues/22)
      + [x] [isparta es6(6to5) covorage](https://github.com/douglasduteil/isparta)
      + [ ] [es6-istanbul](https://github.com/peterkc/es6-istanbul)
    + [ ] software metrix(plato)
      + [ ] [plato](https://github.com/es-analysis/plato/issues/127)
      + [ ] [es6-plato](https://github.com/peterkc/es6-plato)
 + **BUILD**
    + [ ] build task
    + [ ] altJS対応
    + [ ] cssプリプロセッサ系(sass/less/styless)
    + [ ] minify
 + **OPTION**
   + [ ] 環境別に振る舞いを切り替える
     + [ ] 単体テスト用の設定
     + [ ] 結合テスト用の設定
     + [ ] リリース用の設定
 + cross platform
   + [ ] Firefox OS アプリ対応
     + [ ] Firefox OSエミュレータ起動
     + [ ] ライブリロード開発
     + [ ] デプロイ
   + [ ] Cordova対応
   + [ ] appnium

## 参考資料

 + [jspm公式ページ](http://jspm.io/)
 + [BrowserSync](http://www.browsersync.io/)
 + [React Webapp Starter kit](https://github.com/kriasoft/react-starter-kit)
 + [react-jspm](https://github.com/tinkertrain/jspm-react)
 + [JSファイル以外のimport](https://github.com/systemjs/systemjs)
 + [coverage](https://github.com/Workiva/karma-jspm/issues/22)
 + [Aurelia Skeleton](https://github.com/aurelia/skeleton-navigation)
 + [フロント開発ツール群(frontend-stuff)](https://github.com/moklick/frontend-stuff)
 + [edit config](http://editorconfig.org/)
 + Dr. Axel Rauschmayer: ECMAScript 6 の使い方
   + [パート１](https://www.youtube.com/watch?v=Fg3bEZIcnUw)
   + [パート２](https://www.youtube.com/watch?v=Vhhq1WpzsnM)
 + eslint
   + [configuring](http://eslint.org/docs/configuring/)
   + [rules](http://eslint.org/docs/rules/)
   + [ES6 features](https://github.com/eslint/espree/issues/10)
 + gulp
   + [Gulp Delete files and folders](https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md)
   + [help](https://www.npmjs.com/package/gulp-help)
 + ES6
   + [ES6 features](https://github.com/lukehoban/es6features)
   + [SublimeText ES6 Syntax](https://packagecontrol.io/packages/JavaScriptNext%20-%20ES6%20Syntax)
   + [babeljs--6to5-- Features](https://babeljs.io/docs/learn-es6/)
   + [traceur Features](https://github.com/google/traceur-compiler/wiki/LanguageFeatures)
 + firefox os
   + [node firefox os](http://nicola.github.io/node-fxos/)
   + [node firefox client](https://github.com/harthur/firefox-client)
 + covorage
   + [isparta(es6 covorage tool)](https://github.com/douglasduteil/isparta)
   + [istanbul](https://github.com/gotwarlost/istanbul)
   + [ismailia(old es6 covorage tool)](https://github.com/Spote/ismailia)
 + Codeing
   + [Effective transpiling of ES6](https://gist.github.com/rauchg/93d8b831e286bcb30d84)
   + AngularJS
     + [example](http://www.devbattles.com/en/sand/post-784-Writing+AngularJS+Apps+Using+ES6)
     + [example](http://cameronjroe.com/code/http-status-codes/?utm_content=buffer98778&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer)

### Use reason

 + gulp
   + 求められるワークフロー、ツールがまだ未定なので、小回りのきくgulpに
 + ESlint
   + 静的解析
   + eslintのパーサー[espree](https://github.com/eslint/espree)のフォークもと[esprima](https://github.com/jquery/esprima)が[ESTree](https://github.com/estree/estree)に参加してる

```sh
# nodeのes6対応調べるコマンド
nodebrew exec v0.11.14 node --v8-options | grep harmony

#ES6ベースのnode v.0.11.*を使う場合(例：nodebrewを使用する場合)
nodebrew exec v0.11.14 node --harmony node_modules/.bin/gulp
```