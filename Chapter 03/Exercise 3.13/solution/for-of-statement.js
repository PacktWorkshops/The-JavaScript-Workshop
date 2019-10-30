/* Uncaught TypeError: stopWatch is not iterable example
var stopWatch = {
	elapsedTime: 0,
	resultsHistory: [],
	isTiming: true,
	isPaused: true,
	start: function(){console.log("start");},
	pause: function(){console.log("pause");},
	resume: function(){console.log("resume");},
	stop: function(){console.log("stop");}
};
for (let name of stopWatch) {
	console.log(name, ":", stopWatch[name]);
};
*/

//------------------------------------------------------------

/* Using for of loop with iterable string object
	let anyString = 'abcxyz123';
for (const value of anyString) {
	console.log(value);
}
*/

//------------------------------------------------------------

/* Using for loop with iterable string object
	let anyString = 'abcxyz123';
for (var i = 0; i < anyString.length; i++) {
	console.log(anyString.charAt(i));
}
*/

//------------------------------------------------------------

/* Using for of loop with iterable array object
let bowlingScores = [150, 160, 144, 190, 210, 185];
for (const value of bowlingScores) {
	console.log(value);
}
*/

//------------------------------------------------------------

/* Using for loop with iterable array object
let bowlingScores = [150, 160, 144, 190, 210, 185];
for (var i = 0; i < bowlingScores.length; i++) {
	console.log(bowlingScores[i]);
}
*/