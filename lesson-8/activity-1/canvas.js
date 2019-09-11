// canvas.js
let canvas = document.getElementById('canvas');
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;
let context = canvas.getContext('2d');
let point = [width / 2, height / 2];
context.beginPath();
context.moveTo(point[0], point[1]);
let i = 1;
while (point[0] > 5 && point[0] < width - 5 && point[1] > 5 && point[1] < height - 5) {
  point[1] = point[1] - 10 * i;
  context.lineTo(point[0], point[1]);
  point[0] = point[0] + 10 * i;
  i++;
  context.lineTo(point[0], point[1]);
  point[1] = point[1] + 10 * i;
  context.lineTo(point[0], point[1]);
  point[0] = point[0] - 10 * i;
  i++;
  context.lineTo(point[0], point[1]);
}
context.stroke();
