const i = 10;
console.log(i);  // ->    10

const f = function() {
  var i = 20;
  console.log(i);
};

f();  // ->    20
console.log(i);  // ->    10

if (true) {
    let i = 15;
    console.log(i);
}  // ->   15
console.log(i);  // ->   10

i = 10;
if (true) {
    var i = 15;
    console.log(i); // ->   15
}
console.log(i); // ->   15