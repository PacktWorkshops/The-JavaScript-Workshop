let iterations = 0;
do{
	var die1 = Math.floor(Math.random() * 6) + 1;
	var die2 = Math.floor(Math.random() * 6) + 1;
	console.log("Die 1:", die1, "Die 2:", die2);
}while(die1 != die2);
console.log("The matched value is: ", die1);
console.log("Number of iterations: ", iterations);