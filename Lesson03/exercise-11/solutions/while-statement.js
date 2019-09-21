let iterations = 0;
let die;
while (iterations < 10){
	//console.log("iterations:", iterations);
	die = Math.floor(Math.random() * 6) + 1;
	//console.log("die:", die);
	if (die % 2 == 0){
		break;
	}
	iterations ++;
}
console.log("Number of iterations: ", iterations + 1);
console.log("Die value: ", die);