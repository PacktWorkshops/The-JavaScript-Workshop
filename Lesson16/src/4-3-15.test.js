jest.useFakeTimers();

describe('4.3.15 - Mocking Tests', () => {
  test('Timer Function Mocks', () => {
    const callback = jest.fn();
    setTimeout(callback, 1000);

    jest.runAllTimers();

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(callback, 1000);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('Functions Mocks', () => {
    const callbackFn = () => console.log('I am a callback');
    const callbackMock = jest.fn(callbackFn);

    callbackMock.mockReturnValueOnce('a');
    callbackMock.mockReturnValueOnce('b');
    callbackMock.mockReturnValue('c');
    expect(callbackMock()).toBe('a');
    expect(callbackMock()).toBe('b');
    expect(callbackMock()).toBe('c');
    expect(callbackMock()).toBe('c');
  });

  test('Automated Module Mocks', () => {
    jest.mock();
  });
});
