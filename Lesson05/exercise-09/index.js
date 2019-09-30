var curry = function(fun) {
  if (typeof fun != "function") return;
  var args = Array.prototype.slice.call(arguments);
  args.shift();
  var ret = function() {
    var nested_args = Array.prototype.slice.call(arguments);
    return fun.apply(this, args.concat(nested_args));
  }
  return ret;
}

var fun = function() { return arguments.length; };
var cur1 = curry(fun, 1, 2, 3);
console.log( cur1(4, 5, 6) );
// =>  6
var cur2 = curry(fun, 1, 2, 3, 4, 5, 6);
console.log( cur2(9, 8, 7, 6, 5) );
// =>  11