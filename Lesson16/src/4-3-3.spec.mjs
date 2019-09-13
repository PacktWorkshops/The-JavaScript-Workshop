import chai from 'chai'
import sinon from 'sinon';

const { assert, expect } = chai

describe('4-3-3 - Testing Your Code - Tests, Declarative Coding and Functional Programming', () => {
  it('Imperative Example', () => {
    function averageWordLengthInSentence(sentence) {
      if (typeof sentence != "string")
        return;
      let words = sentence.split(" "); // match(/\S+/g) || [];
      let count = [];
      let sum = 0;
      for (let i = 0; i < words.length; i++) {
        if (!words[i].length || words[i].length == 0)
          continue;
        count.push(words[i].length);
        sum += words[i].length;
      }
      return Math.round(sum / words.length);
    }
    let res = averageWordLengthInSentence("The big brown fox jumped over the lazy cat");
    assert.equal(res, 4);
  })

  it('Higher-Kinded Types', () => {
    let Identity = function(value) {
      this._val = value
    };
    Identity.from = function(value) {
      return new Identity(value)
    };
    Identity.prototype.get = function() {
      return this._val
    };
    let id = Identity.from("bob");
    assert.equal(id.get(), "bob");
    expect(id instanceof Identity);

    let Failure = function(value) {
      this._val = value
    };
    Failure.from = function(value) {
      return new Identity(value)
    };
    Failure.prototype.get = function() {
      return this._val
    };
    let failed = Failure.from([1, 2, 3]);
    assert.equal(failed.get().toString(), "1,2,3");
    expect(failed instanceof Failure);
    expect(typeof failed != typeof id);
  })
});