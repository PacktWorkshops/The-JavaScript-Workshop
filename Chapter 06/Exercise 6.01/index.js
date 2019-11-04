var curTime, lastTime,
  interval = 500;
function main() {  // primary function
  let running = true;  // loop running flag
  while (running) {  // enter loop
    curTime = new Date().getTime();
    lastTime = lastTime || curTime;
    if (curTime - lastTime > interval) {
      console.log(curTime);
      lastTime = curTime;
      running = false;
    }
  }
}

main();
