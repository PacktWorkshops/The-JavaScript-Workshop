console.log( "I am a string" );
console.log( 'I am also a string' );
console.log( `I am a special string` );

"Hello, World!"[7];
// =>   "W"

var msg = "Hello, World!";
console.log( msg[7] = "Z" ); // => "Z"

msg; // =>  “Hello, World!”


console.log( "I can contain 'single' quotes" );
console.log( 'I can contain "double" quotes' );

"It’s useful to be able to \"escape\" quotes"

"This \\ will create a single backslash"

"This string " + "and " + "this string " + "are concatenated";
// =>  “This string and this string are concatenated”

var str = `2 + 2 = ${2 + 2}`;
console.log( str ); // =>  "2 + 2 = 4"
var name = "Jonny";
welcomeStr = `Hello, ${name}!`;
console.log( welcomeStr );  // => "Hello, Jonny!"

var str = `This is line one
and this is line two`;
console.log( str );
// => "This is line one
// =>  and this is line two"

