// event-loop.js
document.addEventListener('DOMContentLoaded', () => {
  let statusSpan = document.getElementById('status');
  let resultSpan = document.getElementById('result');

  let showStatus = (statusText) => {
    statusSpan.innerText = statusText;
  };

  let doCalculation = () => {
    let result = 0;
    for(var i = 0; i< 10000000000; i++) {
      result = result + i;
    };
    resultSpan.innerText = `The result is ${result}`;
  };

  showStatus('Calculation running, please wait... Maybe for quite a while...');
  doCalculation();
  showStatus('Calculation finished, here is the result:');

});

// Solution:

// showStatus('Calculation running, please wait... May be for quite a while...');
//   setTimeout(() => {
//     doCalculation();
//     showStatus('Calculation finished, here is the result:');
// },0)
