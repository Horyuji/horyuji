/* jshint -W097 */

import Bootstrap from './bootstrap';

describe('bootstrap.js test', () => {
  'use strict';
  var bootstrap = new Bootstrap();

  it('test one...', () => {
    expect(1).to.equal(1);
  });

  it('test tow...', () => {
    expect(bootstrap).to.not.equal({});
  });

  it('test useArrow', () => {
    expect(bootstrap.useArrows([1, 2, 3])).to.equal(6);
  });
});
