let Identity = function(value) {
  this._val = value
};
Identity.from = function(value) {
  return new Identity(value)
};
Identity.prototype.get = function() {
  return this._val
};
Identity.prototype.toString = function() {
  return `Identity<${JSON.stringify(this.get())}>`;
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
Failure.prototype.toString = function() {
  return `Failure<${JSON.stringify(this.get())}>`;
};
export {Identity, Failure};