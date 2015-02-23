/* jshint esnext: true, -W100 */

import './bootstrap.css!';

import $          from 'jquery';
import imgEs6     from '../images/es6.png!image';
import imgFavicon from '../favicon.ico!image';

/**
* This is a JavaScript Framework Non-dependent project template for jspm and gulp base.
*
* これはGulpとjspmをベースとしたフレームワーク非依存のプロジェクトテンプレートです。(予定)
*
* プロジェクトテンプレート確認用のスクリプトです。
*
* + [6to5 features](https://6to5.org/docs/learn-es6/#enhanced-object-literals)
* + [traceur Features](https://github.com/google/traceur-compiler/wiki/LanguageFeatures)
*
* @class Bootstrap
* @module jquery
* @constructor
*/
export default class Bootstrap {

  /**
  * Constractor metohd
  *
  * 処理無し
  *
  * @method constructor
  */
  constructor(){}

  /**
  * My method description.  Like other pieces of your comment blocks, 
  * this can span multiple lines.
  *
  * @method start
  * @param {String} buttonName サーバー通信を行うボタンの表示名を設定する
  * @param {String} messageAnotate サーバーから返却されたメッセージの接頭句
  * @param {String} defaultMessage 最初に表示されるメッセージ
  * @return {void 0} 戻り値なし
  */
  start(buttonName, messageAnotate, defaultMessage){
    // bootstrap code here
    $('#app').append(`<button id="addbtn">${buttonName}</button>`);
    $('#app').append(`<ul id="lists"><li>${defaultMessage}</li></ul>`);
    $('#addbtn').click(()=>{
      $.ajax({
          url : "http://localhost:8000/api/test",
          dataType : 'json',
          success : (data) => {
            $('#lists').append($('<li>')
              .addClass('messagelist')
              .addClass('js-message')
              .append($(imgFavicon).clone())
              .append(`${messageAnotate} : ${data.message}`));
          }, error :(err) => {
            console.log("Data err: ", err);
          }
      });
    });

    $('#app').append(imgEs6);
  }

/**
  * アロー演算子
  * の検証メソッド
  *
  * @method useArrows
  * @param {Attay} array 配列
  * @param {String} array.data 内容を`console.log`に出力する
  * @return {void 0} 戻り値なし
  */
  useArrows(array){
    array.forEach(v => {
      console.log(v);
    });
  }
}