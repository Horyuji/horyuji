jspmプロジェクト雛形
----

JSフレームワーク非依存のプロジェクトテンプレート

| Project | status |
| ------ | ------ |
| Build Status ||
| Code Climate ||
| Dependency Status ||
| Application Covoiturage ||

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
    + [ ] ライブリロード開発
 + **DOCUMENT** [yuidoc](http://yui.github.io/yuidoc/)
    + [ ] ドキュメントを作成＆表示(ライブリロード作成)
    + [ ] ドキュメントを作成
 + **TEST**
    + [ ] karmaの実行
    + [ ] End to End Test
    + [ ] apiに対するテスト
 + **REPORT**
    + [ ] covorage
      + [ ] [jspm covorage][covorage report optimization](https://github.com/Workiva/karma-jspm/issues/22)
      + [ ] [isparta es6(6to5) covorage](https://github.com/douglasduteil/isparta)
    + [ ] software metrix(plato)
      + [ ] [plato](https://github.com/es-analysis/plato/issues/127)
 + **BUILD**
    + [ ] build task
    + [ ] altJS対応
    + [ ] cssプリプロセッサ系(sass/less)
    + [ ] minify
 + **OPTION**
   + [ ] 環境別動作
     + [ ] `--env=unit` 単体テスト用の設定ファイルを使う
     + [ ] `--env=it` 結合テスト用の設定ファイルを使う
     + [ ] `--env=releace` リリース用の設定ファイルを使う
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

```sh
# nodeのes6対応調べるコマンド
nodebrew exec v0.11.14 node --v8-options | grep harmony

#ES6ベースのnode v.0.11.*を使う場合(例：nodebrewを使用する場合)
nodebrew exec v0.11.14 node --harmony node_modules/.bin/gulp
```