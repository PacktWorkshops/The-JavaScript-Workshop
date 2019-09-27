import chai from 'chai'
import sinon from 'sinon';

const { assert, expect } = chai

describe('2.1.11 - Beyond the Fundamentals - Numbers with Strings', () => {
  it('Numbers with strings', () => {
    assert.equal("I am " + 21 + " years old", "I am 21 years old");
    assert.equal("42.7" * 2, 85.4);
    assert.equal( "10" * "10", 100);
    assert.equal("10" + "10", "1010");

    assert.equal(Number("10") + Number("10"), 20);
  })
});