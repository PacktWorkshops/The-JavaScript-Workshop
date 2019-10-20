"Hello, World!".length;
// =>  13

var obj = {name: "Bob"};
String(obj);
// =>  "[object Object]"

console.log( String(99) );
// =>   "99"
console.log(  (99).toString() ); // See above about invoking methods on integer literals
// =>  "99"
console.log( [1, 2, 3].toString() );
// =>  "[1, 2, 3]"

var obj = {ted: "bob", toString: function() { return "I am Bob!" }};
obj.toString();
// =>  "I am Bob!"
String(obj);
// =>  "I am Bob!"

