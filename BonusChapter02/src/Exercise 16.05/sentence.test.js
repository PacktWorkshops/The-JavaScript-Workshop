import {Identity, Failure} from './functors';
import {validateString} from './sentence';

test('it should return Failure if it is not passed an Identity instance', () => {
  let id = 'this is a string';
  let res = validateString(id);
  expect(res).toBeInstanceOf(Failure);
});
test('it should return Failure if the passed Identity doesn’t contain a string value', () => {
  let id = Identity.from(1234);
  let res = validateString(id);
  expect(res).toBeInstanceOf(Failure);
});
test('it should return Identity containing passed string if the passed Identity contains a string', () => {
  let id = Identity.from('this is a string');
  let res = validateString(id);
  expect(res).toBeInstanceOf(Identity);
  expect(res.get()).toBe(id.get());
});