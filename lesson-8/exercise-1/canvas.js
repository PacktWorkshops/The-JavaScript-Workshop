// canvas.js
let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');
context.fillStyle = 'yellow';
context.fillRect(10,10,200,200);
context.fillStyle = 'black';
context.strokeRect(230, 10, 200, 200);
context.setLineDash([10]);
context.strokeRect(450, 10, 200, 200);
context.setLineDash([0]);
context.strokeStyle = 'red';
context.strokeRect(10, 230, 200, 200);
context.fillRect(450, 230, 200, 200);
context.clearRect(500, 280, 100, 100);
