// Create a div element
let imageWrapper = document.createElement('div');

function loadImages() {
  for (let i = 0; i < 50; ++i) {
    let img = document.createElement('img');
    img.data = new Array(1024).join('b');
    imageWrapper.appendChild(img);
  } // Add 50 child images to the 'imageWrapper'
}

function add() {
  document.body.appendChild(imageWrapper);
} // Add the 'imageWrapper' div to the end of body

function remove() {
  document.body.removeChild(imageWrapper);
} // Remove the 'imageWrapper' div from the body


function resetImageWrapper() {
 imageWrapper = document.createElement('div');
}

function process() {
 for (let i = 0; i< 1000; i++) {
 loadImages();
 add();
 remove();
 resetImageWrapper();
 }
}
