import { Identity, Failure } from './functors';
import { toBeIdentity, toBeFailure } from './functor_matchers';
import { asyncFun } from './async_fun';

jest.mock('./async_fun');
expect.extend({ toBeIdentity, toBeFailure });

test('Automated Module Mocks - Success', () => {
  let failed = Failure.from(0);
  asyncFun.mockResolvedValue(failed);
  return asyncFun().then(result => expect(result).toBeFailure(0));
});

test('Automated Module Mocks - Failure', () => {
  let success = Identity.from(2);
  asyncFun.mockResolvedValue(success);
  return asyncFun().then(result => expect(result).toBeIdentity(2));
});
