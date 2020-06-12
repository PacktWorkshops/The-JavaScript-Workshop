// tf.js
const videoElem = document.getElementById('video');
const statusElem = document.getElementById('status');

initWebcam();

async function classifyImage() {
  statusElem.innerText = 'Loading MobileNet...'
  let model = await mobilenet.load();
  while (true) {
    const results = await model.classify(videoElem);
    if (results.length) {
      let status = ''
      results.forEach(result => {
        if (result.probability> 0) status += `${result.className} - ${result.probability} \n`
      })
      statusElem.innerText = status;
    }

    await tf.nextFrame();
  }
}

async function initWebcam() {
  if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({video: true});
      console.log(stream);
      videoElem.srcObject = stream;
    } catch (error) {
      console.log(`Error getting video: ${error}`);
    }
  }
}

videoElem.onloadeddata = function() {
  classifyImage();
}