// tf.js
const videoElem = document.getElementById('video');
const statusElem = document.getElementById('status');
const classifier = knnClassifier.create();
let trainModel;

initWebcam();

async function classifyImage() {
  statusElem.innerText = 'Loading MobileNet...';
  const model = await mobilenet.load();

  trainModel = classId => {
    const activation = model.infer(videoElem, 'conv_preds');
    classifier.addExample(activation, classId);
  }

  while (true) {
    if (classifier.getNumClasses() > 0) {
      const activation = model.infer(videoElem, 'conv_preds');
      const result = await classifier.predictClass(activation);
      statusElem.innerText = `${result.label} - ${result.confidences[result.label]}`
    }
    await tf.nextFrame();
  }
}

async function initWebcam() {
  if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({video: true});
      videoElem.srcObject = stream;
    } catch (error) {
      console.log(`Error getting video: ${error}`);
    }
  }
}

videoElem.onloadeddata = function() {
  classifyImage();
}
