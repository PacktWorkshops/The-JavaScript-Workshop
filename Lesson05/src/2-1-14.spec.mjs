import chai from 'chai'
import sinon from 'sinon';

const { assert, expect } = chai

describe('2.1.14 - Beyond the Fundamentals - Working with Arrays', () => {
  it('Array Iteration', () => {
    var arr = [1, "b", true];
    assert.equal(arr.indexOf("b"), 1);
  })

  it('Declaring with let', () => {
    var searchedValue = "b";
    var arr = [1, "b", true];
    let spy = sinon.spy(console, 'log');
    if (arr.indexOf(searchedValue) > -1) {
      console.log("match found");
    }
    assert(spy.calledWith("match found"));
    spy.restore();

    var obj = {name: "bob"};
    var arr = ["a", 99, obj];
    console.log(arr.indexOf(obj), 2);
    console.log(arr.indexOf({name: "bob"}), -1);
  })
});