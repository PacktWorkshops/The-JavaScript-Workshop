let Failure = function(value) {
  this._val = value;
};
Failure.from = function(value) {
  return new Failure(value);
};
Failure.prototype.get = function() {
  return this._val;
};
let failed = Failure.from([1, 2, 3]);
console.log(failed.get()); //==> [ 1, 2, 3 ]
console.log(failed instanceof Failure); //==> true
console.log(typeof failed == typeof id); //==> false
