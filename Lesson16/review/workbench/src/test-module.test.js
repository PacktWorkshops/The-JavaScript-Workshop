describe('test wrapper', () => {
  test('this should fail', () => {
    expect(false).toBeTruthy();
  });
  test('this should pass', () => {
    expect(true).toBeTruthy();
  });
});

let started;
beforeAll(() => {
  started = new Date();
  return started;
});
afterAll(() => {
  let finished = new Date();
  console.log(
    'Tests took',
    finished.getTime() - started.getTime(),
    'milliseconds'
  );
});
test('some test', () => {
  expect(true).toBeTruthy();
});
