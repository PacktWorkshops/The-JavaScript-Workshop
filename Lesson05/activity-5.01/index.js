function average_grade() {
  var args = Array.prototype.slice.call(arguments);
  var sum = 0;
  for (let i=0; i<args.length; i++) {
      sum += Number(args[i]);
  }
  var average = sum / args.length;
  if (average < 35) {
    return "F";
  }
  if (average >= 35 && average < 45) {
    return "D";
  }
  if (average >= 45 && average < 60) {
    return "C";
  }
  if (average >= 60 && average < 75) {
    return "B";
  }
  return "A";
}
