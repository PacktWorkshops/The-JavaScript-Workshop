// scripts.js

document.addEventListener('click', () => {
  // initialise canvas and related variables
  let canvas = document.getElementById('canvas');
  let canvasContext = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  let centerX = width / 2;
  let centerY = height / 2;
  let mouseY; // this will be set in the 'mousemove' event handler

  // initialise Audio contect, nodes and related variables
  let audioContect = new AudioContext();
  let volume = audioContect.createGain();
  let osciA = audioContect.createOscillator();
  let analyser = audioContect.createAnalyser();
  let waveform = new Float32Array(analyser.frequencyBinCount);
  osciA.type = 'sine';
  osciA.connect(volume);
  osciA.connect(analyser);
  volume.connect(audioContect.destination);
  volume.gain.value = 1;
  osciA.start();

  // set oscillator freuquency from mounse's x-position
  document.addEventListener('mousemove', event => {
    osciA.frequency.value = event.clientX;
    mouseY = event.clientY;
  });

  // start drawing
  draw();

  // the draw function
  function draw() {
    let drawing = window.requestAnimationFrame(draw); // Repeat the drawing function on every animation frame
    analyser.getFloatTimeDomainData(waveform);
    canvasContext.clearRect(0, 0, canvas.width, canvas.height); // empty the canvas, so we don't get arcs drawn on top of each other
    canvasContext.beginPath();

    // plot a section of the circle for each part of the waveform
    for (let i = 0; i < waveform.length; i++) {
      let radius = Math.abs(width / 2 - mouseY + waveform[i] * 15);
      let startAngle = (2 / waveform.length) * i * Math.PI;
      let endAngle = (2 / waveform.length) * i * Math.PI;
      canvasContext.arc(centerX, centerY, radius, startAngle, endAngle);
    }
    canvasContext.stroke();
  };
});
