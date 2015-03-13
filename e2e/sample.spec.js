describe('protractor sample', ()=> {
  'use strict';

  it('reading.fxos homepage', ()=> {
    browser.get('http://reading.fxos.org');
    var fxos = element(by.id('fxos-'));
    expect(fxos.getText()).toEqual('FxOS コードリーディングとは？');
  });

  it('button check', ()=> {
    browser.get('http://localhost:9000/');
    var addBtnEl = element(by.id('addbtn'));
    browser.wait(()=>{
      return addBtnEl.isPresent();
    }, 10000, 'about add cart').then(()=>{
      expect(addBtnEl.getText()).toEqual('Push!!');
    });
  });

  it('button click', ()=> {
    browser.get('http://localhost:9000/');
    var addBtnEl = element(by.id('addbtn'));
    var serverMsg = element(by.css('.js-message'));
    browser.wait(()=>{
      return addBtnEl.isPresent();
    }, 10000, 'about ').then(()=>{
      return addBtnEl.click();
    }).then(()=>{
      return browser.wait(()=>{
        return serverMsg.isPresent();
      }, 10000, 'no search message');
    }).then(()=>{
      expect(serverMsg.getText()).toEqual('Get To : foo');
    });
  });
});
