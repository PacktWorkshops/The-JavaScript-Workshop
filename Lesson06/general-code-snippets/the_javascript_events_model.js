document.body.addEventListener("click", () => alert("I was clicked"));

document.body.addEventListener("click", function(evt) { console.log(evt); });
// ==> MouseEvent {isTrusted: true, screenX: 230, screenY: 499, clientX: 163, clientY: 400, …}

var display = () => console.log("Clicked");
document.body.addEventHandler("click", () => console.log("I was clicked");
document.body.addEventHandler("click", () => console.log("I was clicked");
document.body.addEventHandler("click", display);
document.body.addEventHandler("click", display);  // this one will not be output
// ==> I was clicked
// ==> I was clicked
// ==> Clicked

document.body.removeEventListener("click", display);

var clickHandler = () => console.log("clicked");
document.body.addEventListener("click", clickHandler);
// ==> clicked

var clickHandler = () => console.log("clicked");
document.body.addEventListener("click", clickHandler);
document.body.addEventListener("click", clickHandler, true);
// ==> clicked
// ==> clicked

