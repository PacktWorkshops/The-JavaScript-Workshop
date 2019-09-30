otherFunction( function(a, b) { /* do something */ } );

var echo = function(subject) { console.log(subject); };
echo("Hello, World!");
// =>  "Hello, World!"

var myFunc = function(i) { return i + 1; };
function myFunc(i) { return i + 1; };

( function(a, b) { console.log(a + b); }
)(2, 4);
// =>  6

function doSomethingAsync(data, callback) {
  async_task(data).then(    // do async request
    function(result) {    // then on return
      callback(result);    // execute callback, passing result data!
    }
   );
   //.. continue with other code ..
}

asyncOne(data, function(res1) {
  asyncTwo(res1, function(res2) {
    asyncThree(res2, function(res3) {
      //... ad infinitum ..
    });
  });
});

var myFun = (param) => param + 1;

var myFun = (param) => {
  return param + 1;
};

var myFun = param => param + 1;

var myFun = a, b, c => a + b + c;

var myFun = a, b = undefined, (c) => { return a + b + c };
var myFun = a, (b, c) => { return a + b + c };
var myFun = (a, b, c) => { return a + b + c };

for (let i = 0; i < 3; i++) {
  callback(i);
};

var myFun = function*(params) { /*body*/ };

var myFun = function*() {
  for (let i = 0; i < 3; i++) {
    yield i;
  }
};

var myGen = myFun();

var firstValue = myGen.next().value;
console.log( firstValue );  // firstValue will equal 0;

console.log(myGen.next().value);
// =>   1
console.log(myGen.next().value);
// =>  2
console.log(myGen.next().value);
// =>  undefined

var myFun = function*() {
  var count = 0
  for (let i = 0; i < 3; i++) {
    yield i;
    count += i;
  }
  yield count;
};

function myFun(param1, param2) {
  console.log(param1, param2);
};
myFun(99);
// =>  99, undefined

var someValue = arguments[3];

var numParams = arguments.length;

var fun = function () { return arguments.length; };
fun.call(this, 1, 2, 3);
// =>  3
fun.apply(this, [1, 2, 3]);
// =>  3