function firstCall() {
  console.log("I’m logged first!!");
  secondCall();
}

function secondCall() {
  console.log("I’m second...");
  thirdCall();
}

function thirdCall() {
  console.log("I’m last.");
}

firstCall();
