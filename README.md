HORYUJI
----



ES Next なフレームワーク非依存のプロジェクトテンプレート

| Project | status |
| ------ | ------ |
|Gitter Channel|[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Horyuji/horyuji?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)|
| Build Status |[![Build Status](https://travis-ci.org/Horyuji/horyuji.svg)](https://travis-ci.org/Horyuji/horyuji)|
| Code Climate |[![Code Climate](https://codeclimate.com/github/Horyuji/horyuji/badges/gpa.svg)](https://codeclimate.com/github/Horyuji/horyuji)|
| Dependency Status |[![Dependency Status](https://gemnasium.com/Horyuji/horyuji.svg)](https://gemnasium.com/MSakamaki/GJBoT)|
| Application Covoiturage |[![Coverage Status](https://coveralls.io/repos/Horyuji/horyuji/badge.svg?branch=master)](https://coveralls.io/r/Horyuji/horyuji?branch=master)|

### Get Started

```sh

# jspmをグローバルインストール
npm install -g jspm

git clone https://github.com/Horyuji/horyuji.git
cd horyuji

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
      + [ ] [nock(評価中)](https://github.com/pgte/nock)
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
    + altJS + jspm
      + [ ] [TypeScript](http://www.typescriptlang.org/)
        + [ ] https://github.com/frankwallis/plugin-typescript  
      + [x] [JSX](http://facebook.github.io/jsx/)
    + [ ] cssプリプロセッサ系(sass/less/styless)
    + minify
      + [ ] [JSPM bundle options](https://github.com/jspm/jspm-cli/wiki/Production-Workflows#creating-a-self-executing-bundle)
    + Bundle
      + [ ] [Bundle for JSPM](https://github.com/jspm/jspm-cli/wiki/Production-Workflows)
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
 + [フロントエンドガイドライン](https://github.com/bendc/frontend-guidelines)
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
   + [ECMA-262 6th Draft](https://people.mozilla.org/~jorendorff/es6-draft.html#)
   + [ES6 features](https://github.com/lukehoban/es6features)
   + [SublimeText ES6 Syntax](https://packagecontrol.io/packages/JavaScriptNext%20-%20ES6%20Syntax)
   + [babeljs--6to5-- Features](https://babeljs.io/docs/learn-es6/)
   + [traceur Features](https://github.com/google/traceur-compiler/wiki/LanguageFeatures)
   + [ES6の判りやすい解説](http://ilikekillnerds.com/2015/02/a-guide-to-es6-classes/)
   + [ECMAScript 6 modules](http://www.2ality.com/2014/09/es6-modules-final.html)
   + [Whatwg Module Loader](http://whatwg.github.io/loader/#reflect-loader-import)
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


### JSPM Thips


#### No main entry point detected

```sh
warn No main entry point detected for [リポジトリ名].
     Try adding an override, or set the package.json "main": false if this is the intention.
```

jspmにて上記のようなエラー(mainエントリポイント)が見つからないようなモジュールをインストールする場合は以下のように設定が必要

```sh

jspm install [モジュール名]=[リポジトリ] -o "{ main: '[対象JSファイルパス]'}"

jspm install angular-ui-router -o "{ main: 'angular-ui-router', "angular-ui-router": {"deps": ["angular"] } }"

```

npm依存性チェック

` npm-check-updates`を使う

```sh
# チェック
ncu 
# npmのアップデート
ncu -u
# グローバルのアップデート
ncu -g | grep -G '^ ' | cut  -d ' ' -f2 | npm -v 'npm' | npm install -g
```

