function firstCall() {
  console.log("I’m logged first!!");
  secondCall();
}

function secondCall() {
  setTimeout(function() {
    console.log("I’m second...");
  }, 0);
  thirdCall();
}

function thirdCall() {
  console.log("I’m last.");
} 

firstCall();
