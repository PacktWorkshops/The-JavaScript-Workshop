var getRandomStringCharacter = (source) => {
	var returnCharacter = '';
	//console.log("source:", source);
	if (source !=undefined && source.length > 0){
		returnCharacter = source.charAt(Math.floor(Math.random() * source.length));
	}
	return returnCharacter;
}
console.log('():', getRandomStringCharacter());
console.log('("AEIOU"):', getRandomStringCharacter('AEIOU'));
console.log('("Javascript"):', getRandomStringCharacter('Javascript'));
console.log('("124678"):', getRandomStringCharacter('124678'));
console.log('(124678):', getRandomStringCharacter(124678));
console.log('(true):', getRandomStringCharacter(true));