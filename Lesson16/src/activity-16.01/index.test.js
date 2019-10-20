let add = (a, b) => {
  if (typeof a != "number" || typeof b != "number") {
    return NaN;
  }
  return a + b;
};
let subtract = (a, b) => {
  if (typeof a != "number" || typeof b != "number") {
    return NaN;
  }
  return a - b;
};
let multiply = (a, b) => {
  if (typeof a != "number" || typeof b != "number") {
    return NaN;
  }
  return a * b;
};
let divide = (a, b) => {
  if (typeof a != "number" || typeof b != "number") {
    return NaN;
  }
  return a / b;
};

test('add returns number when successful', () => {
  expect(typeof add(1, 2)).toBe("number");
});
test('add returns NaN when unsuccessful', () => {
  expect(add("1", 2)).toBeNaN();
});
test('subtract returns number when successful', () => {
  expect(typeof subtract(1, 2)).toBe("number");
});
test('subtract returns NaN when unsuccessful', () => {
  expect(subtract("1", 2)).toBeNaN();
});
test('multiply returns number when successful', () => {
  expect(typeof multiply(1, 2)).toBe("number");
});
test('multiply returns NaN when unsuccessful', () => {
  expect(multiply("1", 2)).toBeNaN();
});
test('divide returns number when successful', () => {
  expect(typeof divide(1, 2)).toBe("number");
});
test('divide returns NaN when unsuccessful', () => {
  expect(divide("1", 2)).toBeNaN();
});
