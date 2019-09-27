let Identity = function(value) {
  this._val = value;
};
Identity.from = function(value) {
  return new Identity(value);
};
Identity.prototype.get = function() {
  return this._val;
};
let id = Identity.from('bob');
console.log(id.get()); //==> "bob"
console.log(id instanceof Identity); //==> true
