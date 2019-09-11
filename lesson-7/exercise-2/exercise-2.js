function countdownByTwo(num) {
  if (typeof num !== 'number' || num < 0) return;
  console.log(num);
  countdownByTwo(num - 2);
}

// function countdownByTwo(num) {
//   if (num < 0 || !isFinite(num)) return;
//   console.log(num);
//   countdownByTwo(num - 2);
// }
