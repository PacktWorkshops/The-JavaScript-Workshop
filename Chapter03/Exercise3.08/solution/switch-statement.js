var keyNames = "WASDwasdIJKMijkmRTXPrtxp";
var keyName = keyNames.charAt(Math.floor(Math.random() * keyNames.length));
console.log("keyName:", keyName);
switch (keyName.toLowerCase()){
	case "a":
	case "j":
		console.log("move left");
		break;
	case "d":
	case "k":
		console.log("move right");
		break;
	case "w":
	case "i":
		console.log("move up");
		break;
	case "s":
	case "m":
		console.log("move down");
		break;
	default:
		console.log("invalid key");
		break;
}