import {Identity, Failure} from './functors';

let toBeIdentity = function(received, expected) {
  const maybe_expected = (expected == null || Object.is(received.get(), expected));
  const pass = (received instanceof Identity) && maybe_expected;
  const message = () => pass
    ? "Matched Identity with value"
    : (received instanceof Identity)
      ? `Expected Identity with ${expected}, but received Identity with ${received.get()}`
      : `Expected Identity but received ${typeof received}`;
  return {actual: received, message, pass};
}

let toBeFailure = function(received, expected) {
  const maybe_expected = (expected == null || Object.is(received.get(), expected));
  const pass = (received instanceof Failure) && maybe_expected;
  const message = () => pass
    ? "Matched Failure with value"
    : (received instanceof Failure)
      ? `Expected Failure with ${expected}, but received Failure with ${received.get()}`
      : `Expected Failure but received ${typeof received}`;
  return {actual: received, message, pass};
}

let toBeValidFunctorFunction = function(received, arg, errMsg) {
  let pass = true;
  let successId = Identity.from(arg);
  let failId = Identity.from({});
  let failure = Failure.from(Math.random());
  let result = received(successId);
  let message = () => "";
  pass = pass && (result instanceof Identity);
  if (!pass) {
    message = () => `Fails with expected success value ${arg} with result ${result}`;
    return {actual: received, message, pass};
  }
  result = received(failure);
  pass = pass
    && (result instanceof Failure)
    && result.get() == failure.get();
  if (!pass) {
    message = () => `Fails with Failure. Did not pass through. Received ${typeof result}`;
    return {actual: received, message, pass};
  }
  result = received(failId);
  pass = pass
    && (result instanceof Failure)
    && ((errMsg != null)
      ? result.get() == errMsg
      : true);
  if (!pass) {
    message = () => `Fails with failing Identity. Should response with Failure(${JSON.stringify(errMsg)}). Received ${result}`;
    return {actual: received, message, pass};
  }
  return {actual: received, message, pass};
}

export {toBeIdentity, toBeFailure, toBeValidFunctorFunction};