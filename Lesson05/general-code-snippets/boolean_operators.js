21 == 9+12;
false != true;
6 > 1;
5 >= 5;
"1" == 1;

if (0) console.log("reached");  // doesn’t succeed
console.log( 0 == false ); // prints true
console.log( 0 === false ); // prints false

var falseValue = !true;

if (!!1 === true) {
  console.log("this code will execute");
}

function logAndReturn( value ) {
  console.log( "logAndReturn: " +value );
  return value;
}
if ( logAndReturn (true) || logAndReturn (false)) {
  console.log("|| operator returned truthy.");
}

// Following two variables are set to "anonymous" (simple) objects,
// each with two fields, ‘name’ and ‘happy’, set to initial values (both sad)
var john= {name: "John", happy: false};
var lucy= {name: "Lucy", happy: false};

function make_happy( person ) {
  console.log("Making " +person.name+ " happy.");
  person.happy= true;
  return true;
}

if (make_happy(john) || make_happy(lucy)) {
  console.log("John is happy: " +john.happy+ ", Lucy is happy: " +lucy.happy);
}

ageLimit = ageLimit || 21;

console.log( 1 == true ); // => true, but:
console.log( 2 == true ); // => false, because true first converts to 1
console.log( 2 == false ); // => also false, because false converts to 0

console.log( !!2 == true ); // => true
console.log( !!2 == false ); // => false

console.log( 1 + 2 + 3 ); // => 6
console.log( true && true && false ); // => false

console.log( 1 < 3 < 2 ); // 1<3 => true, but then: true<2 => 1<2 => true!

console.log( 2==2==2 ); // 2==2 => true, but then: true==2 => 1==2 => false!
// Similarly with 0:
console.log( 0==0==0 ); // 0==0 => true, but then: true==0 => 1==0 => false!
// However, not the same with 1:
console.log( 1==1==1 ); // 1==1 => true, then: true==1 => 1==1 => true

let age = 22;

var action = (age < 21) ? "Deny access" : "Grant access";

var action;
if (age < 21) {
  action = "Deny access";
} else {
  action = "Grant access";
}

var status = (age < 18) ? "child" : (age > 65) ? "pensioner" : "adult";

var status;
if (age < 18) {
  status = "child";
} else if (age > 65) {
  status = "pensioner";
} else {
  status = "adult";
}

