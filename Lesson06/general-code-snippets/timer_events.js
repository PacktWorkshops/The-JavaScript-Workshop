var timerFunction = function() {
  var time = new Date().getTime();
  console.log(time);
}
setInterval(timerFunction, 500);

function main() {
  setInterval(() => console.log("executed"), 500);
  console.log("after execution");
  console.log("another message");
}();
// ==>   after execution
// ==>   another message
// ==>   executed
// ==>   executed

var ref = setInterval(someFunc, 100);
clearInterval(ref);

setTimeout(someFunc, 500);

var ref = setTimeout(() => console.log("fire!"), 200);
setInterval(function() {
  console.log("waiting...");
  clearTimeout(ref);
}, 100);
// ==> waiting...
// ==> waiting...
// ==> waiting...

var ref = setInterval(function() {
  console.log("Boo!");
  clearInterval(ref);
}, 500);
// ==> Boo!

var handler = function(p1, p2) {
  console.log(p1, p2);
};
setTimeout(handler, 100, "Hello,", "World!");
// ==> Hello, World

setTimeout(function() {
  handler("Hello,", "World!");
}, 100);
// ==> Hello, World

