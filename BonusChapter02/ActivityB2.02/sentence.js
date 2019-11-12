import {Identity, Failure} from './functors';

let process = (value, typeCheck, transform) => {
  if (value instanceof Failure)
    return value;
  if (!(value instanceof Identity))
    return Failure.from("invalid argument");
  if (!typeCheck(value.get()))
    return Failure.from("invalid argument");
  return Identity.from(transform(value.get()));
};

let validateString = function(value) {
  return process(value, (v) => typeof v == "string", (v) => v);
};
let splitStringIntoList = function(value) {
  return process(
    value,
    (v) => typeof v == "string",
    (v) => v.split(" ")
  );
};
let rejectEmptyStrings = function(value) {
  return process(
    value,
    (v) => Array.isArray(v),
    (v) => v.filter((str) => str.length > 0)
  );
};
let mapStringLength = function(value) {
  return process(
    value,
    (v) => Array.isArray(v),
    (v) => v.map((str) => str.length)
  );
};
let averageStringLength = function(value) {
  return process(
    value,
    (v) => Array.isArray(v),
    (v) => v.reduce((acc, len) => acc + len)
  );
}
export {validateString, splitStringIntoList, rejectEmptyStrings, mapStringLength, averageStringLength};