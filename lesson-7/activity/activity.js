var frameCount = 0;
function stackOverflow() {
  frameCount++; 
  stackOverflow();
}
setTimeout(() => console.log(frameCount), 500)
stackOverflow()
