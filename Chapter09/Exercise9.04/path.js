const path = require("path");

let dir = "/Users/gauravmehla/Documents/node/modules/";
let otherDir = "/assets/images/";
let file = "myFile.js";

console.log(path.dirname(dir + file));
console.log(path.extname(file));
console.log(path.join(dir, otherDir + file));