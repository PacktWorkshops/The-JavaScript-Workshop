import chai from 'chai'
import sinon from 'sinon';

const { assert, expect } = chai

describe('2.1.2 - Beyond the Fundamentals - Creating Variables', () => {
  it('Declaring with var', () => {
    var a = 0;
    for(var a in [0, 1]);
    assert.equal(a, 1);
  })

  it('Declaring with let', () => {
    var a = 0;
    for(let a in [0, 1]);
    assert.equal(a, 0);
  })

  it('Assigned before declaration', () => {
    const t = () => {
      glob = 1;
      {
        glob = 2; let glob = 3;
      }
    }
    expect(t).to.throw(ReferenceError);
  })
});