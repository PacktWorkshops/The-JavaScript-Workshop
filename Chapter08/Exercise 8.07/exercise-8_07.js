function complicatedForLoop() {
  let n = 0;
  performance.mark('forLoopStart');
  for (let i = 0; i < 1e9; ) {
    n = n + i++;
  }
  performance.mark('forLoopEnd');
  console.log(n);
  performance.measure('forLoopMeasure', 'forLoopStart', 'forLoopEnd');
  console.log(`for loop: ${performance.getEntriesByName('forLoopMeasure')[0].duration}`);
};

function complicatedWhileLoop() {
  let n = 0;
  let i = 0;
  performance.mark('whileLoopStart');
  while (i < 1e9) {
    n = n + i++;
  }
  performance.mark('whileLoopEnd');
  console.log(n);
  performance.measure('whileLoopMeasure', 'whileLoopStart', 'whileLoopEnd');
  console.log(`while loop: ${performance.getEntriesByName('whileLoopMeasure')[0].duration}`);
}

complicatedForLoop();
complicatedWhileLoop();
