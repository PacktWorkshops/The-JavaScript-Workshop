import {Identity, Failure} from './functors';

let validateString = function(value) {
  if (!(value instanceof Identity))
    return Failure.from("invalid argument");
  if (!(typeof value.get() === "string"))
    return Failure.from("invalid argument");
  return value;
};
export {validateString};