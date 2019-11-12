var printType = function(val) {
  if (val === null) {
    console.log("Value is null");
    return;
  }
  console.log("Value is", typeof val);
}

printType(12);  // ->  Value is number
printType("I am a string");  // ->  Value is string
printType({});  // ->  Value is object
printType(null);  // ->  Value is null