import chai from 'chai'
import sinon from 'sinon';

const { assert, expect } = chai

describe('2.1.6 - Beyond the Fundamentals - Working with Numbers', () => {
  it('Arithmetic limitations', () => {
    assert.equal(0.1 + 0.2, 0.30000000000000004);
    assert.equal(((0.1 * 10) + (0.2 * 10)) / 10, 0.3);
    assert.equal(0.0032 * 13, 0.041600000000000005);
    assert.equal(0.0032 * 1000 * 13 / 1000, 0.0416);
  })
});