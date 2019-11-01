
// Get objects for the HTML elements used.
let resultsMsgEle = document.getElementById('results-msg');
let matchedMsgEle = document.getElementById('match-msg');
let noMatchMsgEle = document.getElementById('no-match-msg');
let numberToGuessEle = document.getElementById('number-to-guess');
let guessInputEle = document.getElementById('number-guessed');
let testButtonEle = document.getElementById('test-button');
// Add event listener function for the test button element.
testButtonEle.addEventListener('click', testMatch);

/**
 * Handles click events for the testButtonEle
 * @param {MouseEvent} e - MouseEvent object
*/
function testMatch(e){
	// Hide all result message elements
	matchedMsgEle.style.display = 'none';
	noMatchMsgEle.style.display = 'none';
	resultsMsgEle.style.display = 'none';
	// Get the input element value and convert to integer or NaN
	let numberGuessed = parseInt(guessInputEle.value);
	// If the input value is a number 1 to 10 inclusive.
	if(!isNaN(numberGuessed) && numberGuessed > 0 && numberGuessed <= 10){
		// Show the message container element
		resultsMsgEle.style.display = 'block';
		// Generate a number from 1 to 10 inclusive
		let numberToGuess = Math.floor(Math.random() * 10 + 1);
		// The input number and generated numbers match
		if (numberGuessed == numberToGuess){
			// Show the matched results message
			matchedMsgEle.style.display = 'inline';
		// The input number and generated numbers do not match
		}else{
			// Show the not matched results message
			noMatchMsgEle.style.display = 'inline';
		}
		// Put the generated number into the DOM element
		numberToGuessEle.innerText = numberToGuess;
	}
}