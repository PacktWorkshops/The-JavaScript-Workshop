var curTime, lastTime,
  interval = 500;
function main() {  // primary function
  let i = 100;  // decrementing counter
  while (i-- > 0) {  // enter loop
    curTime = new Date().getTime();
    lastTime = lastTime || curTime;
    if (curTime - lastTime > interval) {
      console.log(curTime);
      lastTime = curTime;
    }
  }
}

main();