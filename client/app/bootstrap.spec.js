/* jshint -W097 */
'use strict';

import Bootstrap from './bootstrap';

describe('bootstrap.js test', () => {

  it('test one...', () => {
    expect(1).to.be.ok;
  });

  it('test tow...', () => {
    let bootstrap = new Bootstrap();
    expect(bootstrap).to.be.ok;
  });
});
