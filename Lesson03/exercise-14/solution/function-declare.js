var test123 = getDigitsOfNumber(123);
console.log("test123:", test123);
function getDigitsOfNumber(num){
	var digits = [];
	console.log("num:", num);
	num = Math.floor(Math.abs(num));
	if(!isNaN(num)){
		while(num != 0) {
			digits.push(num % 10);
			num = Math.floor(num / 10);
		}
	}
	return digits;
}
console.log("getDigitsOfNumber:", getDigitsOfNumber);
var test456 = getDigitsOfNumber(456);
console.log("test456:", test456);
console.log('5:', getDigitsOfNumber(5));
console.log('4563:', getDigitsOfNumber(4563));
console.log('123.654:', getDigitsOfNumber(123.654));
console.log('-123.654:', getDigitsOfNumber(-123.654));
console.log('"1000"', getDigitsOfNumber("1000"));
console.log('"1,000"', getDigitsOfNumber("1,000"));
console.log('"B37"', getDigitsOfNumber("B37"));
console.log('"37B"', getDigitsOfNumber("37B"));