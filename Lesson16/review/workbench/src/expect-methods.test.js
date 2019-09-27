test("boolean", () => {
  expect(1 < 2).toBeTruthy();
  expect(2 < 1).toBeFalsy();
  expect("some string").toBeTruthy();
  expect(1).toBeLessThan(4);
  expect(2).toBeLessThanOrEqual(3);
  expect(3).toBeGreaterThan(2);
  expect(4).toBeGreaterThanOrEqual(1);
  expect(null).toBeNull();
  expect(undefined).toBeUndefined();
  expect(NaN).toBeNaN();
  expect(1).not.toBeNull();
  expect(false).not.toBeTruthy();
  expect({}).not.toBeInstanceOf(Array);
});

test("object", () => {
  expect({ key: "value" }).toHaveProperty("key");
  expect({ key: "value" }).toHaveProperty("key", "value");
  expect({ key: "value" }).not.toHaveProperty("prop");
  let obj = {
    first: {
      second: {
        third: 5
      }
    }
  };
  expect(obj).toHaveProperty("first");
  let first = obj.first;
  expect(first).toHaveProperty("second");
  let second = first.second;
  expect(second).toHaveProperty("third", 5);
  expect(obj).toHaveProperty("first.second.third", 5);
  expect(obj).toHaveProperty(["first", "second", "third"], 5);
});

test("array", () => {
  let arr = [1, 2, 3];
  expect(arr.length).toBe(3); // incorrect form
  expect(arr).toHaveLength(3); // accepted form
  expect(arr).toContain(2);

  let obj2 = { one: 1, two: { three: 3 } };
  let arr2 = [obj2];
  expect(arr2).toContainEqual({ one: 1, two: { three: 3 } });

  let obj3 = { one: 1, two: { three: 3 }, fourth: 4 };
  let arr3 = [obj3];
  expect(arr3).not.toContainEqual({ one: 1, two: { three: 3 } }); // fails
});

test("function", () => {
  let func = jest.fn(x => x + x);
  func(2);
  expect(func).toHaveBeenCalled();
  expect(func).toHaveReturnedWith(4);
  expect(func).toHaveBeenCalledWith(2);
});
