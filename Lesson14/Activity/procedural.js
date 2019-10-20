let historyList = [];

function add(a, b) {
  historyList.push(['ADD', a, b]);
  return a + b;
}

function subtract(a, b) {
  historyList.push(['SUB', a, b]);
  return a - b;
}

function multiply(a, b) {
  historyList.push(['MUL', a, b]);
  return a * b;
}

function divide(a, b) {
  historyList.push(['DIV', a, b]);
  return a / b;
}

function pow(a, b) {
  historyList.push(['POW', a, b]);
  return Math.pow(a, b);
}

function history() {
  historyList.map((command, index) => {
    console.log(index + 1 + '.', command.join(' '));
  });
}

console.log('ADD 2 3 :', add(2, 3));
console.log('SUB 2 3 :', subtract(2, 3));
console.log('MUL 2 3 :', multiply(2, 3));
console.log('DIV 2 3 :', divide(2, 3));
console.log('POW 2 3 :', pow(2, 3));

console.log('----------------HISTORY---------------');
history();
