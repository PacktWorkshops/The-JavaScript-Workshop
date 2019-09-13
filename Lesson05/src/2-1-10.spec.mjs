import chai from 'chai'
import sinon from 'sinon';

const { assert, expect } = chai

describe('2.1.10 - Beyond the Fundamentals - The toString Method', () => {
  it('The toString Method', () => {
    var obj = {name: "Bob"};
    expect(typeof String(obj) == "object");

    assert.equal(String(99), "99");
    assert.equal((99).toString(), "99");
    assert.equal([1, 2, 3].toString(), "1,2,3");
  })
});