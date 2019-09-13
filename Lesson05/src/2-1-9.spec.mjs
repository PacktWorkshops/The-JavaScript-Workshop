import chai from 'chai'
import sinon from 'sinon';

const { assert, expect } = chai

describe('2.1.9 - Beyond the Fundamentals - The String Object', () => {
  it('The length Property', () => {
    assert.equal("Hello, World!".length, 13);
  })

  it('Exercise 7', () => {
    function reverse(str) {
      str = String(str).trim();
      var result = "", index = str.length - 1, chr, isStart = true;
      while (index >= 0) {
        chr = str[index];
        if (isStart && chr != " ") {
          chr = chr.toUpperCase();
          isStart = false;
        } else {
          chr = chr.toLowerCase();
        }
        if (chr == ".") {
          isStart = true;
          if (index == str.length - 1) {
            index--;
            continue;
          } else {
            result = result.substr(0, result.length-1) + ". ";
            index--;
            continue;
          }
        }
        result = result + chr;
        index--;
      }
      return result + ".";
    }
    var res = reverse("This is the first sentence. This is the second.");
    assert.equal(res, "Dnoces eht si siht. Ecnetnes tsrif eht si siht.");
  })
});