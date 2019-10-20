function add(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    return NaN;
  }
  return a + b;
};

function passesWithTwoNumbers() {
  return add(1, 2) != NaN;
}

function failsWithNonNumber() {
 return isNaN(add("1", 2));
}

var allSuccessful = passesWithTwoNumbers() && failsWithNonNumber();
console.log(allSuccessful);