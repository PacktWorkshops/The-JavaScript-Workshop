test("mocks", () => {
  const callbackFn = () => console.log("I am a callback");
  const callbackMock = jest.fn(callbackFn);

  callbackMock.mockReturnValueOnce('a');
  callbackMock.mockReturnValueOnce('b');
  callbackMock.mockReturnValue('c');
  expect(callbackMock()).toBe('a');
  expect(callbackMock()).toBe('b');
  expect(callbackMock()).toBe('c');
  expect(callbackMock()).toBe('c');
});

