// tf.js
const webcam = document.getElementById('video');
let canvas = document.getElementById('canvas');

async function objectDetection() {
  console.log(webcam);
  canvas.width = webcam.width;
  canvas.height = webcam.height;
  let model = await cocoSsd.load();
  let context = canvas.getContext('2d');
  context.strokeStyle = 'red';
  context.fillStyle = 'red';
  context.font = "25px Arial";
  await initWebcam();

  while (true) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    const results = await model.detect(webcam);
    if (results.length) {
      results.forEach((result, index) => {
        if (result.score > 0.3) {
          context.fillText(`${result.class} - ${(result.score * 100).toFixed(2)}%`, result.bbox[0], result.bbox[1])
          context.strokeRect(... result.bbox);
        }
      })
    }
    context.stroke();
    await tf.nextFrame();
  }
}

async function initWebcam() {
  return new Promise((resolve, reject) => {
    const navigatorAny = navigator;
    navigator.getUserMedia = navigator.getUserMedia ||
        navigatorAny.webkitGetUserMedia || navigatorAny.mozGetUserMedia ||
        navigatorAny.msGetUserMedia;
    if (navigator.getUserMedia) {
      navigator.getUserMedia({video: true},
        stream => {
          webcam.srcObject = stream;
          webcam.addEventListener('loadeddata',  () => resolve(), false);
        },
        error => reject());
    } else {
      reject();
    }
  });
}

objectDetection();