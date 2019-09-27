// import { Identity, Failure } from "../../../src/functors";
// import validateString from "../../../src/sentence";

test.skip('it should return Failure if it is not passed an Identity instance', () => {
  let id = 'this is a string';
  let res = validateString(id);
  expect(res).toBeInstanceOf(Failure);
});

test.skip('it should return Failure if the passed Identity doesn’t contain a string value', () => {
  let id = Identity.from(1234);
  let res = validateString(id);
  expect(res).toBeInstanceOf(Failure);
});

test.skip('it should return Identity containing passed string if the passed Identity contains a string', () => {
  let id = Identity.from('this is a string');
  let res = validateString(id);
  expect(res).toBeInstanceOf(Identity);
  expect(res.get()).toBe(id.get());
});
