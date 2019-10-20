let Identity = function(value) {
  this._val = value
};
Identity.from = function(value) {
  return new Identity(value)
};
Identity.prototype.get = function() {
  return this._val
};
let Failure = function(value) {
  this._val = value
};
Failure.from = function(value) {
  return new Failure(value)
};
Failure.prototype.get = function() {
  return this._val
};
export {Identity, Failure};