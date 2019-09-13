import chai from 'chai'
import sinon from 'sinon';

const { assert, expect } = chai

describe('2.1.12 - Beyond the Fundamentals - Working with Functions', () => {
  it('Anonymous Functions', () => {
    let spy = sinon.spy(console, 'log');
    var echo = function(subject) { console.log(subject); };
    echo("Hello, World!");
    assert(spy.calledWith("Hello, World!"));
    spy.restore();

    spy = sinon.spy(console, 'log');
    var res = (function(a, b) { console.log(a + b); })(2, 4);
    assert(spy.calledWith(6));
    spy.restore();
  })

  it('Exercise 8', () => {
    function curry(prim, fun) {
      if (typeof fun != "function") return;
        var ret = function() {
        return fun(prim);
      };
      return ret;
    }
    var fun = function(val) { return val + 50 };
    var curry1 = curry(99, fun);
    assert.equal(curry1(), 149);
    assert.equal(curry1(), 149);
    var curry2 = curry("Bob", fun);
    assert.equal(curry2(), "Bob50");
  })

  it('Generator Functions', () => {
    var myFun = function*() {
      for (let i = 0; i < 3; i++) {
        yield i;
      }
    };
    var myGen = myFun();
    var firstValue = myGen.next().value;
    assert.equal(firstValue, 0);
    assert.equal(myGen.next().value, 1);
    assert.equal(myGen.next().value, 2);
    assert.equal(myGen.next().value, undefined);
  })

  it('Function\'s arguments Object', () => {
    function myFun(param1, param2) {
      console.log(param1, param2);
    };
    let spy = sinon.spy(console, 'log');
    myFun(99);
    assert(spy.calledWith(99, undefined));
    spy.restore();
  })

  it('call and apply', () => {
    var fun = function () { return arguments.length; };
    var res = fun.call(this, 1, 2, 3);
    assert.equal(res, 3);
    res = fun.apply(this, [1, 2, 3]);
    assert.equal(res, 3);
  })

  it('Exercise 9', () => {
    var curry = function(fun) {
      if (typeof fun != "function") return;
      var args = Array.prototype.slice.call(arguments);
      args.shift();
      var ret = function() {
        var nested_args = Array.prototype.slice.call(arguments);
        return fun.apply(this, args.concat(nested_args));
      }
      return ret;
    }
    var fun = function() { return arguments.length; };
    var cur1 = curry(fun, 1, 2, 3);
    assert.equal(cur1(4, 5, 6), 6);
    var cur2 = curry(fun, 1, 2, 3, 4, 5, 6);
    assert.equal(cur2(9, 8, 7, 6, 5), 11);
  })
});