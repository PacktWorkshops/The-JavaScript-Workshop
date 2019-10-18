class Calculator {
  constructor() {
    this.historyList = [];
  }

  add(a, b) {
    this.historyList.push(['ADD', a, b]);
    return a + b;
  }

  subtract(a, b) {
    this.historyList.push(['SUB', a, b]);
    return a - b;
  }

  multiply(a, b) {
    this.historyList.push(['MUL', a, b]);
    return a * b;
  }

  divide(a, b) {
    this.historyList.push(['DIV', a, b]);
    return a / b;
  }

  pow(a, b) {
    this.historyList.push(['POW', a, b]);
    return Math.pow(a, b);
  }

  history() {
    this.historyList.map((command, index) => {
      console.log(index + 1 + '.', command.join(' '));
    });
  }
}

let calc = new Calculator();
console.log('ADD 2 3 :', calc.add(2, 3));
console.log('SUB 2 3 :', calc.subtract(2, 3));
console.log('MUL 2 3 :', calc.multiply(2, 3));
console.log('DIV 2 3 :', calc.divide(2, 3));
console.log('POW 2 3 :', calc.pow(2, 3));

console.log('----------------HISTORY---------------');
calc.history();
