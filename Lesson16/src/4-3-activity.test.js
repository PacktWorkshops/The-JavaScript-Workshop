import {Identity, Failure} from './functors';
import {toBeIdentity, toBeFailure, toBeValidFunctorFunction} from './functor_matchers';
import {validateString, splitStringIntoList, rejectEmptyStrings, mapStringLength, averageStringLength} from './sentence';

expect.extend({toBeIdentity, toBeFailure, toBeValidFunctorFunction});

describe('Combined Matcher', () => {
  test('Functor Function Matcher', () => {
    const arg = "The quick brown fox jumped over the lazy dog";
    expect(validateString).toBeValidFunctorFunction(arg, "invalid argument");
  })
})

describe('Sentence Functions', () => {
  test('validateString is valid', () => {
    const arg = "The quick brown fox";
    expect(validateString).toBeValidFunctorFunction(arg, "invalid argument");
    expect(validateString(arg)),toBeIdentity(arg);
  })
  test('splitStringIntoList is valid', () => {
    const arg = "The quick brown fox";
    const resp = ["The", "quick", "brown", "fox"];
    expect(splitStringIntoList).toBeValidFunctorFunction(arg, "invalid argument");
    expect(splitStringIntoList(arg)),toBeIdentity(resp);
  })
  test('rejectEmptyStrings is valid', () => {
    const arg = ["The", "", "quick", "", "brown", "", "fox"];
    const resp = ["The", "quick", "brown", "fox"];
    expect(rejectEmptyStrings).toBeValidFunctorFunction(arg, "invalid argument");
    expect(rejectEmptyStrings(arg)),toBeIdentity(resp);
  })
  test('mapStringLength is valid', () => {
    const arg = ["The", "quick", "brown", "fox"];
    const resp = [3, 5, 5, 3];
    expect(mapStringLength).toBeValidFunctorFunction(arg, "invalid argument");
    expect(mapStringLength(arg)),toBeIdentity(resp);
  })
  test('averageStringLength is valid', () => {
    const arg = [3, 5, 5, 3];
    const resp = 4;
    expect(averageStringLength).toBeValidFunctorFunction(arg, "invalid argument");
    expect(averageStringLength(arg)),toBeIdentity(resp);
  })
})