import chai from 'chai'
import sinon from 'sinon';

const { assert, expect } = chai

describe('2.1.3 - Beyond the Fundamentals - Idenifying a Variables Type', () => {
  it('Exercise 1', () => {
    const i = 10;
    const f = function() {
      var i = 20;
      return i;
    };
    assert.equal(f(), 20);
    assert.equal(i, 10);
    if (true) {
      let i = 15;
      return i;
    }
    assert.equal(f(), 15);
  })

  it('asserts array is an object', () => {
    let spy = sinon.spy(console, 'log');
    var value = [1, 2, 3];
    if (typeof value === "object" && value != null) {
      console.log("value is an object");
    }
    assert(spy.calledWith("value is an object"));
    spy.restore();
  })

  it('Exercise 2', () => {
    var printType = function(val) {
      if (val === null) {
        console.log("Value is null");
        return;
      }
      console.log("Value is", typeof val);
    };
    let spy = sinon.spy(console, 'log');
    printType(12);
    assert(spy.calledWith("Value is", "number"));
    printType("I am a string");
    assert(spy.calledWith("Value is", "string"));
    printType({});
    assert(spy.calledWith("Value is", "object"));
    printType(null);
    assert(spy.calledWith("Value is null"));
    spy.restore();
  })
});