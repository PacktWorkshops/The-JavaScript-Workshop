// canvas.js
let canvas = document.getElementById('canvas');
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;
let context = canvas.getContext('2d');
context.beginPath();
context.moveTo(50, 50);
context.lineTo(width - 50, 50);
context.lineTo(width / 2, height - 50);
context.closePath();
context.stroke();
