let context = new AudioContext();
let volume = context.createGain();
volume.connect(context.destination);
let osciA = context.createOscillator();
let osciB = context.createOscillator();
osciA.type = 'sawtooth';
osciB.type = 'square';
osciA.connect(volume);
osciB.connect(volume);
osciA.start();
osciB.start();

document.addEventListener('mousemove', event => {
  osciA.frequency.value = event.clientY;
  osciB.frequency.value = event.clientX;
});
