import {Identity, Failure} from './functors';

describe('module tests', () => {
  test('Boolean Assertions', () => {
    expect(1 < 2).toBeTruthy();
    expect(2 < 1).toBeFalsy();
    expect("some string").toBeTruthy();

    expect(1).toBeLessThan(4);
    expect(2).toBeLessThanOrEqual(3);
    expect(3).toBeGreaterThan(2);
    expect(4).toBeGreaterThanOrEqual(1);
  })

  test('Falsy Assertions', () => {
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect(NaN).toBeNaN();
  });

  test('Refuting Assertions', () => {
    expect(1).not.toBeNull();
    expect(false).not.toBeTruthy();
    expect({}).not.toBeInstanceOf(Array);
  })

  test('Object Assertions', () => {
    expect({key: "value"}).toHaveProperty("key");
    expect({key: "value"}).toHaveProperty("key", "value");
    
    let obj = {
      first: {
        second: {
          third: 5
        }
      }
    }
    expect(obj).toHaveProperty("first");
    let first = obj.first;
    expect(first).toHaveProperty("second");
    let second = first.second;
    expect(second).toHaveProperty("third", 5);
    expect(obj).toHaveProperty("first.second.third", 5);
    expect(obj).toHaveProperty(["first", "second", "third"], 5);

    let alt = {"first.second": 10};
    expect(alt).toHaveProperty(["first.second"], 10);
  })

  test('Array Assertions', () => {
    let arr = [1, 2, 3];
    expect(arr.length).toBe(3);  // incorrect form
    expect(arr).toHaveLength(3);  // accepted form

    expect(arr).toContain(2);

    let obj2 = {one: 1, two: {three: 3}};
    let arr2 = [obj2];
    expect(arr2).toContainEqual({one: 1, two: {three: 3}});

    let obj3 = {one: 1, two: {three: 3}, fourth: 4};
    let arr3 = [obj3];
    expect(arr3).not.toContainEqual({one: 1, two: {three: 3}});
  })
})

test('Function Assertions', () => {
  
})

describe('test wrapper', () => {
  test.skip('this should fail', () => {
    expect(false).toBeTruthy();
  })
  test('this should pass', () => {
    expect(true).toBeTruthy();
  })
})

describe('Test Setup and Teardown Functions', () => {
  let started;
  beforeAll(() => {
    started = new Date();
    return started;
  })
  afterAll(() => {
    let finished = new Date();
    console.log("Tests took", finished.getTime() - started.getTime(), "milliseconds");
  })
  test('some test', () => {
    expect(true).toBeTruthy();
  })
})

describe('Asynchronous Assertions', () => {
  test('Failing async call', () => {
    expect.assertions(0);
    setTimeout(() => {
      expect(true).toBeTruthy();
    }, 1000);
  })
  test('Passing async call', () => {
    expect.hasAssertions();
    function later(delay) {
      return new Promise(function(resolve) {
        setTimeout(resolve, delay);
      });
    }
    return later(1000).then(() => expect(true).toBeTruthy());;
  })
})