// The number the player matches exceeds or falls below.
var target = Math.floor(Math.random() * 21) + 1;
// The player number.
var player = Math.floor(Math.random() * 21) + 1;
// Lucky number overrides target number
var lucky = Math.floor(Math.random() * 21) + 1;
// Unluck number overrides target number
var unlucky = Math.floor(Math.random() * 21) + 1;
// Simulated game value
var wallet = player * 20;
console.log("Target score:", target);
console.log("Player score:", player);
console.log("Lucky score:", lucky);
console.log("Unlucky score:", unlucky);
console.log("Player initial wallet:", wallet);
// Lucky and unlucky not equal and player matches luck number
if (lucky != unlucky && player == lucky){
	console.log("Player wins: matches lucky score.");
	wallet += (lucky + player) * 10;
// Lucky and unlucky not equal and player matches unlucky number
}else if (lucky != unlucky && player == unlucky){
	console.log("Player loses: matches unlucky score.");
	wallet = 0;
// Player matches target
}else if (player == target){
	console.log("Player wins: ties target " + target);
	wallet += (21 - target) * 10;
// Player exceeds target
}else if (player > target){
	console.log("Player wins: beats target by " + (player - target));
	wallet += (player - target) * 10;
// All other cases but only case should be target exceeds player
}else{
	console.log("Player loses: misses target by " + (target - player));
	wallet = Math.max(0, wallet - (target - player) * 10);
}
console.log("Player final wallet:", wallet);