/**
 * Return the value of die roll
 * @param {number} rolls - number of rolls default = 1.
*/
function getDiceRoll(rolls){
	rolls = (isNaN(parseInt(rolls)) || rolls < 1) ? 1 : rolls;
	var rollValue = 0;
	for (let i = 1; i <= rolls; i++){
		rollValue += Math.floor(Math.random() * 6) + 1;
	}
	return rollValue;
}