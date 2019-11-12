function countdownByTwo(num) {
  if (typeof num !== 'number' || num < 0 || !isFinite(num)) return;
  console.log(num);
  countdownByTwo(num - 2);
}

