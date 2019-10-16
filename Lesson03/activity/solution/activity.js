// Declare and initialize the todo list array
let todoList = [
	"Wash Laundry",
	"Clean Silver",
	"Write Letters",
	"Purchase Groceries",
	"Retrieve Mail",
	"Prepare Dinner"
];
// The todo list element
let todoEle = document.getElementById('todo-list');
// The shuffle button element.
let shuffleButtonEle = document.getElementById('shuffle-button');
// Add event listener function for the shuffle button element.
shuffleButtonEle.addEventListener('click', shuffleButtonClicked);
/**
 * Replace element in an HTML list with an array
 * @param {HTMLUListElement || HTMLOListElement} listEle - HTML list UL or OL element
 * @param {array} listItems - One dimension array of strings
*/
function replaceListElements(listEle, listItems){
	listEle.innerHTML = "";
	for (let i= 0; i<= listItems.length - 1; i++){
		let liEle = document.createElement("li");
		liEle.appendChild(document.createTextNode(listItems[i]));
		listEle.appendChild(liEle);
	}
}
/**
 * Shuffles array elements
 * @param {array} sourceArray - Array to be shuffled.
 * @returns {array} - New array with shuffled items
*/
function getNewShuffledArray(sourceArray){
	// Make a copy of the sourceArray
	var newArray = [].concat(sourceArray);
	// The index for making a swap starting with last
	let swapIndex = newArray.length;
	// The index to make a swap with swapIndex
	let swapWithIndex;
	// Copy of the swapIndex value being swapped
	let swapIndexValue;
	// Loop while swapIndex is not 0
	while (0 !== swapIndex) {
		// Pick an index to swap with current index from 0 to current swapIndex
		swapWithIndex = Math.floor(Math.random() * swapIndex);
		// Reduce swapIndex by 1
		swapIndex -= 1;
		// Make copy of the swapIndex value.
		swapIndexValue = newArray[swapIndex];
		// Replace swapIndex value with swapWithIndex value.
		newArray[swapIndex] = newArray[swapWithIndex];
		// Replace swapWithIndex value with temporaryValue value.
		newArray[swapWithIndex] = swapIndexValue;
	}
	return newArray;
}
/**
 * Handles click events for the shuffleButtonElement
 * @param {MouseEvent} e - MouseEvent object
*/
function shuffleButtonClicked(e){
	replaceListElements(todoEle, getNewShuffledArray(todoList));
}
// Update the todo list view with initial list of items
replaceListElements(todoEle, todoList);
