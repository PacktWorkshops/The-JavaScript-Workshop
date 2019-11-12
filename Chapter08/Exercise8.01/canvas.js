// canvas.js
let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

// 1. Set the fill style to yellow and draw a 200px x 200px filled rectangle,
// starting at 10px x 10px from the top left of the canvas
context.fillStyle = 'yellow';
context.fillRect(10, 10, 200, 200);
// 2. Draw a 200px x 200px outlined rectangle starting at 230px x 10px
context.strokeRect(230, 10, 200, 200);
// 3. Set the line dash property to 10px (10px solid, 10px gap repeated), and draw an outlined rectangle
// 200px x 200px and starting at 450px x 10px
context.setLineDash([10]);
context.strokeRect(450, 10, 200, 200);
// 4. Set line dash to 0 (not dashed), and stroke to red, and draw a 200px x 200px rectangle starting at 10px x 230px
context.setLineDash([0]);
context.strokeStyle = 'red';
context.strokeRect(10, 230, 200, 200);
// 5. Set the fill style back to back, and draw two rectangles,
// One 200px x 200px starting at 450px x 230px, and a clear, 100px x 100px rectangle, inside the first, starting at 500px x 280px
context.fillStyle = 'black';
context.fillRect(450, 230, 200, 200);
context.clearRect(500, 280, 100, 100);
