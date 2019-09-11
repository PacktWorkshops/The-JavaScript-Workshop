function countdownByTwo(num) {
    if (num === 0) return console.log(num);
    console.log(num);
    countdownByTwo(num - 2);
}

countdownByTwo(10);
