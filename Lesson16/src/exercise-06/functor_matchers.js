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

export {toBeIdentity, toBeFailure};