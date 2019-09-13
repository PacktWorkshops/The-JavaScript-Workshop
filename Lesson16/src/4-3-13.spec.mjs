import chai from 'chai'
import sinon from 'sinon';

const { assert, expect } = chai

describe('4-3-13 - Jest Expect Methods', () => {
  it('Boolean Assertions', () => {
    expect(1 < 2).toBeTruthy();
    expect(2 < 1).toBeFalsy();
    expect("some string").toBeTruthy();
    expect(1).toBeLessThan(4);
    expect(2).toBeLessThanOrEqual(3);
    expect(3).toBeGreaterThan(2);
    expect(4).toBeGreaterThanOrEqual(1);
  })

  it('Falsy Assertions', () => {
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect(NaN).toBeNaN();
  })
});