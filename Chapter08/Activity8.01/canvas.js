// canvas.js
let canvas = document.getElementById('canvas');
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;
let context = canvas.getContext('2d');
// Set the starting point to the center of the canvas
let point = [width / 2, height / 2];
context.beginPath();
context.moveTo(point[0], point[1]);
let i = 1;
const OFFSET = 10;
const MARGIN = 5;
while (
  point[0] > MARGIN &&
  point[0] < width - MARGIN &&
  point[1] > MARGIN &&
  point[1] < height - MARGIN
) {
  point[1] = point[1] - OFFSET * i;
  context.lineTo(point[0], point[1]);
  point[0] = point[0] + OFFSET * i;
  i++;
  context.lineTo(point[0], point[1]);
  point[1] = point[1] + OFFSET * i;
  context.lineTo(point[0], point[1]);
  point[0] = point[0] - OFFSET * i;
  i++;
  context.lineTo(point[0], point[1]);
}
context.stroke();
