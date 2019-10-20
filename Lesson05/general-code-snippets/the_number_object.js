5.123.toPrecision(3);  // returns “5.12”

var num1 = 99;
var num2 = Number(99);
var num3 = new Number(99);
console.log(num1 == num2); // outputs ‘true’
console.log(num1 == num3); // outputs ‘true’
console.log(num2 == num3); // outputs ‘true’

console.log(num1, num2, num3); // outputs ‘99 99 Number {99}’

console.log( false==new Number(0) ); // => true, meaning that Number(0) equals to false, but:

if( new Number(0) ) { // => truthy
  console.log("truthy");
}
else {
  console.log("falsy");
}

console.log( Number(true) ); // 1
console.log( Number(false) ); // 0
console.log( Number("5") ); // 5
console.log( Number([]) ); // 0
console.log( Number([1, 2, 3]) ); // NaN

console.log( Number.parseFloat("1.235e+2") ); // outputs 123.5
console.log( parseFloat("1.235e+2") ); // outputs 123.5 again

console.log( 123.456.toLocaleString() ); // outputs "123.456"
console.log( 123.456.toFixed(1) ); // outputs "123.5"
console.log( 123.456.toExponential(3) ); // outputs "1.235e+2"

// However, calling those functions on integer literals (rather than floats) fails:
console.log( 123.toString() ); // => Uncaught SyntaxError: Invalid or unexpected token
// When Javascript sees the first dot right after a one or more digits, it assumes you want to write a float literal. There are some workarounds:
console.log( 123.0.toString() ); // Append .0. It will still be represented as an integer (as far as it fits in the integer range)
console.log( (123).toExponential(2) ); // Wrap within parentheses (..)

var num = 999 / 0;

Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2;

