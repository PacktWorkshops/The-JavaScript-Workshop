import chai from 'chai'
import sinon from 'sinon';

const { assert, expect } = chai

describe('2.1.6 - Beyond the Fundamentals - Working with Numbers', () => {
  it('The Number object', () => {
    assert.equal(5.123.toPrecision(3), "5.12");
  })

  it('Number functions', () => {
    var num1 = 99;
    var num2 = Number(99);
    var num3 = new Number(99);
    assert.equal(num1, num2); // outputs ‘true’
    assert.equal(num1, num3); // outputs ‘true’
    assert.equal(num2, num3); // outputs ‘true’

    assert.equal(num1, 99);
    assert.equal(num2, 99);
    var spy = sinon.spy(console, 'log');
    console.log(num3);
    assert(spy.calledWith(new Number(99)));
    spy.restore();

    assert.equal(false, new Number(0));

    spy = sinon.spy(console, 'log');
    if( new Number(0) ) { // => truthy
      console.log("truthy");
    }
    else {
      console.log("falsy");
    }
    assert(spy.calledWith("truthy"));
    spy.restore();

    assert.equal(Number(true), 1);
    assert.equal(Number(false), 0);
    assert.equal(Number("5"), 5);
    assert.equal(Number([]), 0);
    expect(isNaN(Number([1, 2, 3])));

    assert.equal(Number.parseFloat("1.235e+2"), 123.5);
    assert.equal(parseFloat("1.235e+2"), 123.5);
  })

  it('Number methods', () => {
    assert.equal(123.456.toLocaleString(), "123.456");
    assert.equal(123.456.toFixed(1), "123.5");
    assert.equal(123.456.toExponential(3), "1.235e+2");

    assert.equal(123.0.toString(), "123"); // Append .0. It will still be represented as an integer (as far as it fits in the integer range)
    assert.equal((123).toExponential(2), 123); // Wrap within parentheses (..)
  })

  it('Number properties', () => {
    assert.equal(999 / 0, Infinity);
    expect(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);
  })

  it('Exercise 5', () => {
    function formatPrice(value, currency) {
      value = Number(value);
      currency = currency || "$";
      if (Number.isNaN(value) || typeof currency != "string") {
        return null;
      }
      return currency + value.toFixed(2);
    }
    assert.equal(formatPrice(1.99, 32), null);
    assert.equal(formatPrice(5, "£"), "£5.00");
    assert.equal(formatPrice(9.9), "$9.90");
    assert.equal(formatPrice("Ted"), null);
  })
});