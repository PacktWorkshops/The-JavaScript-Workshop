// tf.js
const image = document.getElementById('image');
const statusElem = document.getElementById('status');
async function classifyImage() {
  statusElem.innerText = 'Loading MobileNet...'
  let model = await mobilenet.load();
  const results = await model.classify(image);
  if (results[0]) statusElem.innerText = `${results[0].className} - ${results[0].probability}`;
}
classifyImage();
