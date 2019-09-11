let context = new AudioContext(); // create the audio context
let gain = context.createGain(); // create a gain node
gain.connect(context.destination); // connect the gain node to the context destination
let osci = context.createOscillator(); // create an oscillator node
osci.type = 'sawtooth'; // set the oscillation type
osci.frequency.value = 100; // set the oscillation frequency
osci.connect(gain); // connect the oscillator node to the gain node
osci.start(); // start the oscillation node playing
