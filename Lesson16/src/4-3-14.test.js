import {Identity, Failure} from './functors';
import {toBeIdentity, toBeFailure} from './functor_matchers';

const pipe = (...fns) => input => fns.reduce((prev, fn) => fn(prev), input);

const plusOne = (val) => val + 1;

describe('4.3.14 - Custom Matchers', () => {
  test('Pipelining', () => {
    let validateString = (v) => v;
    let splitStringIntoList = (v) => v;
    let rejectEmptyStrings = (v) => v;
    let mapStringLength = (v) => v;
    let averageStringLength = (v) => v;
    let pipeline = pipe(
      validateString,
      splitStringIntoList,
      rejectEmptyStrings,
      mapStringLength,
      averageStringLength
    );
    let sentence = Identity.from("The quick brown fox jumped over the lazy dog");
    let result = pipeline(sentence);
    expect(result).toBe(sentence);
  })

  test('it should return original Failure instance passed in as an argument', () => {
    let validateString = function(value) {
      if (value instanceof Failure)
        return value;
      if (!(value instanceof Identity))
        return Failure.from("invalid argument");
      if (!(typeof value.get() === "string"))
        return Failure.from("invalid argument");
      return value;
    };
    let msg = "this is a string";
    let failure = Failure.from(msg);
    let res = validateString(failure);
    expect(res).toBe(failure);
    expect(res.get()).toBe(msg);
  })

  test('Exercise 5', () => {
    expect.extend({toBeIdentity, toBeFailure});
    let id = Identity.from("some string");
    let fail = Failure.from("some failure");

    expect(id).toBeIdentity();
    expect(id).toBeIdentity("some string");
    expect(id).not.toBeIdentity("other string");
    expect(id).not.toBeFailure();
    expect(fail).toBeFailure();
    expect(fail).toBeFailure("some failure");
    expect(fail).not.toBeFailure("other failure");
    expect(fail).not.toBeIdentity();
  })
});