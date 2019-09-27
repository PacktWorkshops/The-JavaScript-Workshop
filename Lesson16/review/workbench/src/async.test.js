test('Failing async call', () => {
  expect.hasAssertions();
  setTimeout(() => {
    expect(true).toBeTruthy();
  }, 1000);
});

test('Passing async call', () => {
  expect.hasAssertions();
  function later(delay) {
    return new Promise(function(resolve) {
      setTimeout(resolve, delay);
    });
  }
  return later(1000).then(() => expect(true).toBeTruthy());
});
